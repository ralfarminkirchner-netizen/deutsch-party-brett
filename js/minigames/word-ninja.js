/**
 * Mini-Game: Word Ninja (Wort-Ninja)
 *
 * A bright microgame: tap the noun cards, avoid verb cards.
 */

import { EXTRACTED_CHARS } from '../asset-manifest.js';
import { SoundFX } from '../ui/sounds.js';

const ZORA = EXTRACTED_CHARS.find(char => char.id === 'klebensfrei_zora') || EXTRACTED_CHARS[0];

export const WordNinja = {
  id: 'word-ninja',
  name_de: 'Wort-Ninja',
  topics: ['wortarten', 'wortschatz', 'nomen'],

  setup(container, task, onComplete) {
    injectWordNinjaStyles();

    const content = task.content;
    const mixedSet = content?.mixedSets?.length
      ? content.mixedSets[Math.floor(Math.random() * content.mixedSets.length)]
      : null;

    if (!mixedSet?.nomen?.length || !mixedSet?.verben?.length) {
      onComplete({ correct: false, score: 0 });
      return;
    }

    const targetScore = Math.min(mixedSet.nomen.length, 5);
    let score = 0;
    let mistakes = 0;
    let spawnedNouns = 0;
    let isPlaying = false;
    let spawnTimer = null;
    let safetyTimer = null;

    container.innerHTML = `
      <div class="wn-stage">
        <div class="wn-sidekick">
          <div class="wn-sidekick-glow"></div>
          <img src="${ZORA?.spriteImg || ''}" alt="" aria-hidden="true">
          <div class="wn-speech">
            <strong>Nomen sammeln</strong>
            <span>Verben bleiben liegen.</span>
          </div>
        </div>

        <div class="wn-arena">
          <div class="wn-hud">
            <div>
              <strong id="ninja-score">0</strong><span>/${targetScore}</span>
              <small>Nomen</small>
            </div>
            <div class="wn-mistakes" id="ninja-mistakes">
              <span></span><span></span><span></span>
            </div>
          </div>

          <div id="ninja-game-area" class="wn-game-area"></div>

          <div id="ninja-overlay" class="wn-overlay">
            <div class="wn-start-card">
              <span class="wn-kicker">Blitzrunde</span>
              <h3>Fang die Nomen!</h3>
              <p>Tippe nur auf Namenwörter. Verben kosten einen Versuch.</p>
              <button id="ninja-start-btn" type="button">Start</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const gameArea = container.querySelector('#ninja-game-area');
    const scoreEl = container.querySelector('#ninja-score');
    const mistakesEl = container.querySelector('#ninja-mistakes');
    const overlay = container.querySelector('#ninja-overlay');

    const updateMistakes = () => {
      mistakesEl.querySelectorAll('span').forEach((dot, index) => {
        dot.classList.toggle('is-used', index < mistakes);
      });
    };

    const endGame = (won) => {
      if (!isPlaying) return;
      isPlaying = false;
      clearInterval(spawnTimer);
      clearTimeout(safetyTimer);
      gameArea.querySelectorAll('.wn-card').forEach(card => card.remove());

      overlay.style.display = 'flex';
      overlay.innerHTML = `
        <div class="wn-start-card ${won ? 'is-win' : 'is-try'}">
          <span class="wn-kicker">${won ? 'Geschafft' : 'Nochmal kurz üben'}</span>
          <h3>${score}/${targetScore} Nomen</h3>
          <p>${won ? 'Die Wortarten sitzen.' : 'Achte auf Wörter, die man tun kann.'}</p>
        </div>
      `;

      setTimeout(() => {
        onComplete({
          correct: won,
          partial: !won && score >= Math.ceil(targetScore / 2),
          score: Math.round((score / targetScore) * 100),
          details: { mistakes, score }
        });
      }, 900);
    };

    const spawnWord = () => {
      if (!isPlaying) return;

      const shouldSpawnNoun = spawnedNouns < targetScore && Math.random() > 0.34;
      const isNoun = shouldSpawnNoun || spawnedNouns < Math.min(2, targetScore);
      const wordText = isNoun
        ? mixedSet.nomen[spawnedNouns++ % mixedSet.nomen.length]
        : mixedSet.verben[Math.floor(Math.random() * mixedSet.verben.length)];

      const card = document.createElement('button');
      card.type = 'button';
      card.className = `wn-card ${isNoun ? 'is-noun' : 'is-verb'}`;
      card.textContent = wordText;
      card.dataset.kind = isNoun ? 'noun' : 'verb';
      card.style.left = `${8 + Math.random() * 68}%`;
      card.style.setProperty('--wn-arc', `${Math.random() * 18 - 9}deg`);
      gameArea.appendChild(card);

      const travelMs = 2600 + Math.random() * 900;
      card.style.animationDuration = `${travelMs}ms`;

      const cleanupTimer = setTimeout(() => {
        if (!card.isConnected) return;
        if (isNoun) spawnedNouns = Math.max(0, spawnedNouns - 1);
        card.remove();
      }, travelMs + 120);

      card.addEventListener('pointerdown', (event) => {
        event.preventDefault();
        clearTimeout(cleanupTimer);
        if (!isPlaying || card.classList.contains('is-hit')) return;

        card.classList.add('is-hit');
        if (card.dataset.kind === 'noun') {
          score++;
          SoundFX.correct();
          scoreEl.textContent = score;
          card.classList.add('is-correct');
          if (score >= targetScore) setTimeout(() => endGame(true), 240);
        } else {
          mistakes++;
          SoundFX.wrong();
          updateMistakes();
          card.classList.add('is-wrong');
          if (mistakes >= 3) setTimeout(() => endGame(false), 240);
        }

        setTimeout(() => card.remove(), 260);
      });
    };

    container.querySelector('#ninja-start-btn').addEventListener('click', () => {
      SoundFX.minigameStart();
      overlay.style.display = 'none';
      isPlaying = true;
      updateMistakes();
      spawnWord();
      spawnTimer = setInterval(spawnWord, 640);
      safetyTimer = setTimeout(() => endGame(score >= targetScore), 18000);
    });
  }
};

function injectWordNinjaStyles() {
  if (document.getElementById('word-ninja-css')) return;

  const style = document.createElement('style');
  style.id = 'word-ninja-css';
  style.textContent = `
    .wn-stage {
      width: min(100%, 880px);
      min-height: 390px;
      display: grid;
      grid-template-columns: minmax(160px, 0.42fr) minmax(320px, 1fr);
      gap: 16px;
      color: #3b2b1a;
    }

    .wn-sidekick,
    .wn-arena {
      position: relative;
      overflow: hidden;
      border: 3px solid rgba(93,64,55,0.16);
      border-radius: 22px;
      background:
        radial-gradient(circle at 22% 16%, rgba(255,255,255,0.76), transparent 30%),
        linear-gradient(150deg, #fff9e9, #eaf7de);
      box-shadow: 0 16px 30px rgba(61,43,30,0.14);
    }

    .wn-sidekick {
      min-height: 360px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 18px;
    }

    .wn-sidekick-glow {
      position: absolute;
      width: 190px;
      height: 190px;
      border-radius: 50%;
      background: rgba(236, 72, 153, 0.18);
      filter: blur(8px);
    }

    .wn-sidekick img {
      position: relative;
      z-index: 2;
      width: min(82%, 190px);
      max-height: 255px;
      object-fit: contain;
      filter: drop-shadow(0 16px 16px rgba(0,0,0,0.2));
      animation: wn-float 2.7s ease-in-out infinite;
    }

    .wn-speech {
      position: absolute;
      left: 12px;
      right: 12px;
      bottom: 12px;
      z-index: 3;
      padding: 10px 12px;
      border-radius: 18px;
      background: rgba(255,255,255,0.9);
      box-shadow: 0 8px 18px rgba(61,43,30,0.12);
    }

    .wn-speech strong,
    .wn-speech span {
      display: block;
      line-height: 1.15;
    }

    .wn-speech strong {
      font-family: var(--font-family-display);
      color: #ec4899;
      font-size: 18px;
    }

    .wn-speech span {
      margin-top: 4px;
      font-weight: 900;
      color: #6d4c41;
      font-size: 13px;
    }

    .wn-arena {
      min-height: 360px;
      background:
        linear-gradient(rgba(255,255,255,0.24) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.24) 1px, transparent 1px),
        radial-gradient(circle at 72% 20%, rgba(56,189,248,0.2), transparent 30%),
        linear-gradient(160deg, #fffaf0, #dff2cf);
      background-size: 34px 34px, 34px 34px, auto, auto;
    }

    .wn-hud {
      position: absolute;
      top: 12px;
      left: 12px;
      right: 12px;
      z-index: 6;
      display: flex;
      align-items: center;
      justify-content: space-between;
      pointer-events: none;
    }

    .wn-hud > div {
      min-height: 44px;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 7px 12px;
      border-radius: 999px;
      background: rgba(255,255,255,0.88);
      border: 2px solid rgba(93,64,55,0.1);
      box-shadow: 0 8px 18px rgba(61,43,30,0.1);
      font-family: var(--font-family-display);
      color: #4e342e;
    }

    .wn-hud strong {
      color: #2e7d32;
      font-size: 26px;
      line-height: 1;
    }

    .wn-hud small {
      margin-left: 6px;
      font-family: var(--font-body);
      font-weight: 900;
      color: #6d4c41;
    }

    .wn-mistakes span {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #d7ccc8;
      box-shadow: inset 0 2px 3px rgba(0,0,0,0.12);
    }

    .wn-mistakes span.is-used {
      background: #ef5350;
    }

    .wn-game-area {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    .wn-card {
      position: absolute;
      bottom: -76px;
      min-width: 120px;
      min-height: 58px;
      padding: 10px 18px;
      border: 0;
      border-radius: 18px;
      cursor: pointer;
      font-family: var(--font-family-display);
      font-size: clamp(18px, 2.4vw, 28px);
      color: #4e342e;
      background: #fffef8;
      box-shadow: 0 8px 0 #d9c7a8, 0 15px 22px rgba(61,43,30,0.18);
      animation-name: wn-rise;
      animation-timing-function: cubic-bezier(0.18, 0.86, 0.28, 1);
      animation-fill-mode: forwards;
      transform: rotate(var(--wn-arc));
      touch-action: none;
    }

    .wn-card.is-noun {
      border: 4px solid #38bdf8;
    }

    .wn-card.is-verb {
      border: 4px solid #ff8a65;
      opacity: 0.92;
    }

    .wn-card.is-hit {
      animation: none;
      pointer-events: none;
    }

    .wn-card.is-correct {
      background: #c8f7c5;
      border-color: #43a047;
      transform: scale(1.12) rotate(4deg);
      opacity: 0;
      transition: transform 180ms var(--ease-bounce), opacity 180ms ease;
    }

    .wn-card.is-wrong {
      background: #ffd0c7;
      border-color: #ef5350;
      animation: wn-wiggle 220ms ease;
    }

    .wn-overlay {
      position: absolute;
      inset: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: rgba(255, 250, 240, 0.68);
      backdrop-filter: blur(3px);
    }

    .wn-start-card {
      width: min(92%, 420px);
      padding: 26px;
      text-align: center;
      border-radius: 26px;
      background: #fffef8;
      border: 3px solid rgba(93,64,55,0.16);
      box-shadow: 0 18px 36px rgba(61,43,30,0.18);
    }

    .wn-kicker {
      display: inline-flex;
      margin-bottom: 10px;
      padding: 7px 13px;
      border-radius: 999px;
      background: #ff3366;
      color: white;
      font-family: var(--font-family-display);
      font-size: 13px;
      text-transform: uppercase;
      box-shadow: 0 5px 0 #ad1457;
    }

    .wn-start-card h3 {
      margin: 0;
      font-family: var(--font-family-display);
      font-size: clamp(34px, 5vw, 56px);
      color: #3b2b1a;
      line-height: 1;
    }

    .wn-start-card p {
      margin: 12px 0 20px;
      color: #6d4c41;
      font-weight: 900;
      font-size: 17px;
    }

    .wn-start-card button {
      border: 0;
      min-width: 180px;
      border-radius: 999px;
      padding: 14px 24px;
      background: #ff3366;
      color: white;
      cursor: pointer;
      font-family: var(--font-family-display);
      font-size: 26px;
      box-shadow: 0 7px 0 #ad1457, 0 13px 22px rgba(173,20,87,0.2);
    }

    .wn-start-card.is-win {
      border-color: rgba(67,160,71,0.4);
    }

    .wn-start-card.is-try {
      border-color: rgba(239,83,80,0.38);
    }

    @keyframes wn-rise {
      0% { transform: translateY(0) rotate(var(--wn-arc)); }
      52% { transform: translateY(-270px) rotate(calc(var(--wn-arc) * -1)); }
      100% { transform: translateY(-520px) rotate(var(--wn-arc)); }
    }

    @keyframes wn-float {
      0%, 100% { transform: translateY(0) rotate(-1deg); }
      50% { transform: translateY(-9px) rotate(2deg); }
    }

    @keyframes wn-wiggle {
      0%, 100% { transform: translateX(0) rotate(var(--wn-arc)); }
      25% { transform: translateX(-6px) rotate(-5deg); }
      75% { transform: translateX(6px) rotate(5deg); }
    }

    @media (max-width: 760px) {
      .wn-stage {
        grid-template-columns: 1fr;
        gap: 10px;
        min-height: 0;
      }

      .wn-sidekick {
        min-height: 126px;
        justify-content: flex-start;
      }

      .wn-sidekick img {
        width: 112px;
        max-height: 112px;
      }

      .wn-speech {
        left: 126px;
        right: 10px;
        bottom: 50%;
        transform: translateY(50%);
      }

      .wn-arena {
        min-height: 320px;
      }

      .wn-card {
        min-width: 106px;
        min-height: 52px;
      }
    }
  `;
  document.head.appendChild(style);
}
