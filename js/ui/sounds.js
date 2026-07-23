/**
 * Sound FX — Web Audio synth (stabil) + optionale Howler-Samples
 */

const SAMPLE_PATHS = {
  roll: '/assets/audio/roll.mp3',
  move: '/assets/audio/move.mp3',
  rise: '/assets/audio/rise.mp3',
  fall: '/assets/audio/fall.mp3',
  bonus: '/assets/audio/bonus.mp3',
};

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.masterGain = null;
    this._howls = {};
    this._howlerReady = false;
    this._initHowler();
  }

  _initHowler() {
    import('howler').then(({ Howl }) => {
      for (const [key, src] of Object.entries(SAMPLE_PATHS)) {
        try {
          this._howls[key] = new Howl({ src: [src], volume: 0.4, preload: true });
        } catch { /* synth fallback */ }
      }
      this._howlerReady = true;
    }).catch(() => {});
  }

  _play(key) {
    if (!this.enabled) return false;
    if (this._howls[key]) {
      try { this._howls[key].play(); return true; } catch { /* fall through */ }
    }
    return false;
  }

  _ctx() {
    if (!this.enabled) return null;
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return null;
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.22;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
    return this.ctx;
  }

  _tone({ frequency = 440, duration = 0.12, type = 'sine', volume = 0.5, start = 0, slideTo = null }) {
    const ctx = this._ctx();
    if (!ctx || !this.masterGain) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime + start;
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, now);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), now + duration);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  _noise({ duration = 0.12, volume = 0.35, start = 0, filter = 900 }) {
    const ctx = this._ctx();
    if (!ctx || !this.masterGain) return;
    const n = Math.max(1, Math.floor(ctx.sampleRate * duration));
    const buffer = ctx.createBuffer(1, n, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < n; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const source = ctx.createBufferSource();
    const gain = ctx.createGain();
    const biquad = ctx.createBiquadFilter();
    const now = ctx.currentTime + start;
    biquad.type = 'bandpass';
    biquad.frequency.value = filter;
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    source.buffer = buffer;
    source.connect(biquad);
    biquad.connect(gain);
    gain.connect(this.masterGain);
    source.start(now);
    source.stop(now + duration + 0.02);
  }

  click() { this._tone({ frequency: 520, duration: 0.045, type: 'triangle', volume: 0.24 }); }

  diceRoll() {
    if (!this._play('roll')) {
      for (let i = 0; i < 7; i++) {
        this._noise({ duration: 0.055, volume: 0.22, start: i * 0.065, filter: 450 + i * 90 });
      }
    }
  }

  tokenMove() {
    if (!this._play('move')) {
      this._tone({ frequency: 260, duration: 0.07, type: 'triangle', volume: 0.16, slideTo: 380 });
    }
  }

  minigameStart() {
    [392, 523, 659].forEach((f, i) => this._tone({ frequency: f, duration: 0.09, type: 'triangle', volume: 0.22, start: i * 0.08 }));
  }

  correct() {
    if (!this._play('bonus')) {
      [523, 659, 784, 1046].forEach((f, i) => this._tone({ frequency: f, duration: 0.14, type: 'triangle', volume: 0.24, start: i * 0.06 }));
    }
  }

  wrong() {
    if (!this._play('fall')) {
      this._tone({ frequency: 260, duration: 0.14, type: 'sawtooth', volume: 0.16, slideTo: 170 });
    }
  }

  coinCollect() { [988, 1318].forEach((f, i) => this._tone({ frequency: f, duration: 0.1, type: 'sine', volume: 0.22, start: i * 0.055 })); }
  starCollect() { this._play('rise') || this._tone({ frequency: 1174, duration: 0.15, type: 'sine', volume: 0.18 }); }
  stickerUnlock() { this._play('bonus'); }
  cloudPop() { this._tone({ frequency: 740, duration: 0.08, type: 'sine', volume: 0.1, slideTo: 1180 }); }
  challenge() { this._tone({ frequency: 220, duration: 0.12, type: 'sawtooth', volume: 0.2, slideTo: 440 }); }
  portal() { this._play('rise') || this._tone({ frequency: 240, duration: 0.5, type: 'sine', volume: 0.14, slideTo: 1200 }); }
  trap() { this._play('fall') || this._tone({ frequency: 150, duration: 0.18, type: 'square', volume: 0.16, slideTo: 85 }); }
  reward() { this.coinCollect(); this._play('bonus'); }

  gameEnd() {
    this._play('bonus');
    [392, 523, 659, 784, 1046, 1318].forEach((f, i) => this._tone({ frequency: f, duration: 0.2, type: 'triangle', volume: 0.22, start: i * 0.075 }));
  }
}

export const SoundFX = new SoundEngine();