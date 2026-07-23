/**
 * TTS - German text-to-speech for young readers (Web Speech API)
 * Inspired by edukiz's offline speech approach.
 */

const TOPIC_INTROS = {
  nomen: 'Heute geht es um Nomen. Welches Wort ist ein Nomen?',
  verben: 'Heute üben wir Verben. Finde das richtige Verb!',
  adjektive: 'Heute spielen wir mit Adjektiven.',
  adjektiv: 'Heute spielen wir mit Adjektiven.',
  artikel: 'Heute üben wir Artikel. Welcher Begleiter passt?',
  satzbau: 'Heute bauen wir Sätze.',
  silben: 'Heute zählen wir Silben.',
  lesen: 'Heute lesen wir Wörter.',
  wortarten: 'Heute sortieren wir Wortarten.',
  wortschatz: 'Heute erweitern wir unseren Wortschatz.',
  _default: 'Auf geht die Deutsch-Party!'
};

class TTSEngine {
  constructor() {
    this.enabled = true;
    this.rate = 0.88;
    this.pitch = 1.05;
    this._voice = null;
    this._queue = Promise.resolve();
    if (typeof window !== 'undefined') {
      window.speechSynthesis?.addEventListener?.('voiceschanged', () => this._pickVoice());
      this._pickVoice();
    }
  }

  _pickVoice() {
    const voices = window.speechSynthesis?.getVoices?.() || [];
    this._voice = voices.find(v => v.lang?.startsWith('de') && /anna|petra|hedda|google deutsch/i.test(v.name))
      || voices.find(v => v.lang?.startsWith('de'))
      || voices[0]
      || null;
  }

  setEnabled(on) {
    this.enabled = on;
    if (!on) window.speechSynthesis?.cancel?.();
  }

  stop() {
    window.speechSynthesis?.cancel?.();
  }

  speak(text, { rate, pitch, interrupt = true } = {}) {
    if (!this.enabled || !text || !window.speechSynthesis) return Promise.resolve();
    if (interrupt) this.stop();

    this._queue = this._queue.then(() => new Promise(resolve => {
      const utterance = new SpeechSynthesisUtterance(String(text));
      utterance.lang = 'de-DE';
      utterance.rate = rate ?? this.rate;
      utterance.pitch = pitch ?? this.pitch;
      if (this._voice) utterance.voice = this._voice;
      utterance.onend = resolve;
      utterance.onerror = resolve;
      window.speechSynthesis.speak(utterance);
      setTimeout(resolve, Math.max(1200, text.length * 55));
    }));

    return this._queue;
  }

  speakTopicIntro(topic) {
    const intro = TOPIC_INTROS[topic] || TOPIC_INTROS._default;
    return this.speak(intro);
  }

  speakWord(word) {
    if (!word) return Promise.resolve();
    return this.speak(word, { rate: 0.78 });
  }

  speakSlow(text) {
    return this.speak(text, { rate: 0.62, pitch: 1 });
  }
}

export const TTS = new TTSEngine();