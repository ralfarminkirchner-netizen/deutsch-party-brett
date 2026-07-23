/**
 * Mini-Game: Satz-Baumeister
 *
 * Touch-first sentence ordering. Tap word cards in the right order and watch
 * the sentence assemble on the workshop rail.
 */

import { EXTRACTED_CHARS } from '../asset-manifest.js';
import { SoundFX } from '../ui/sounds.js';

const LEO = EXTRACTED_CHARS.find(char => char.id === 'klebensfrei_leo') || EXTRACTED_CHARS[0];

export const SentenceStacker = {
  id: 'sentence-stacker',
  name_de: 'Satz-Baumeister',
  topics: ['satzbau'],

  setup(container, task, onComplete) {
    injectSentenceStyles();

    const sentencePool = task.content?.sentenceOrder || [];
    const picked = sentencePool.length
      ? sentencePool[Math.floor(Math.random() * sentencePool.length)]
      : null;

    const targetWords = picked?.words || task.content?.words || task.content?.correct || [];
    if (!targetWords.length) {
      onComplete({ correct: false, score: 0 });
      return;
    }

    const shuffledWords = shuffle(targetWords.map((word, index) => ({ word, index })));
    const chosen = [];
    let mistakes = 0;

    const render = () => {
      const nextIndex = chosen.length;

      container.innerHTML = `
        <div class="ss-stage">
          <div class="ss-side">
            <div class="ss-glow"></div>
            <img src="${LEO?.spriteImg || ''}" alt="" aria-hidden="true">
            <div class="ss-bubble">
              <strong>Leos Satzspur</strong>
              <span>Tippe die Wörter der Reihe nach.</span>
            </div>
          </div>

          <div class="ss-play">
            <div class="ss-progress">
              <span>${Math.min(nextIndex + 1, targetWords.length)}/${targetWords.length}</span>
              <div><i style="width:${Math.round((nextIndex / targetWords.length) * 100)}%"></i></div>
            </div>

            <div class="ss-rail" aria-label="Gebauter Satz">
              ${targetWords.map((_, index) => {
                const word = chosen[index]?.word;
                return `<div class="ss-slot ${word ? 'is-filled' : ''}">${word ? escapeHtml(word) : index + 1}</div>`;
              }).join('')}
            </div>

            <div class="ss-word-pool">
              ${shuffledWords.map(item => {
                const used = chosen.some(chosenItem => chosenItem.index === item.index);
                return `
                  <button
                    class="ss-word ${used ? 'is-used' : ''}"
                    type="button"
                    data-index="${item.index}"
                    ${used ? 'disabled' : ''}
                  >
                    ${escapeHtml(item.word)}
                  </button>
                `;
              }).join('')}
            </div>

            <div class="ss-hint">
              <span>${mistakes}/3 Stolperer</span>
              <strong>${escapeHtml(buildPreview(chosen, targetWords))}</strong>
            </div>
          </div>
        </div>
      `;

      container.querySelectorAll('.ss-word:not(.is-used)').forEach(button => {
        button.addEventListener('click', () => {
          SoundFX.click();
          const wordIndex = Number(button.dataset.index);
          if (wordIndex === chosen.length) {
            SoundFX.correct();
            chosen.push({ word: targetWords[wordIndex], index: wordIndex });
            button.classList.add('is-correct');
            if (chosen.length === targetWords.length) {
              setTimeout(() => {
                onComplete({ correct: true, partial: false, score: Math.max(80, 100 - mistakes * 15) });
              }, 550);
              return;
            }
            setTimeout(render, 260);
          } else {
            mistakes++;
            SoundFX.wrong();
            button.classList.add('is-wrong');
            if (mistakes >= 3) {
              setTimeout(() => {
                onComplete({
                  correct: false,
                  partial: chosen.length >= Math.ceil(targetWords.length / 2),
                  score: Math.round((chosen.length / targetWords.length) * 100)
                });
              }, 550);
            }
          }
        });
      });
    };

    render();
  }
};

function buildPreview(chosen, targetWords) {
  const words = chosen.map(item => item.word);
  if (words.length === targetWords.length) return `${words.join(' ')}.`;
  if (words.length === 0) return 'Starte mit dem ersten Wort.';
  return `${words.join(' ')} ...`;
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function injectSentenceStyles() {
  if (document.getElementById('sentence-stacker-css')) return;

  const style = document.createElement('style');
  style.id = 'sentence-stacker-css';
  style.textContent = `
    .ss-stage {
      width: min(100%, 930px);
      min-height: 410px;
      display: grid;
      grid-template-columns: minmax(170px, 0.42fr) minmax(340px, 1fr);
      gap: 18px;
      color: #3b2b1a;
    }

    .ss-side,
    .ss-play {
      position: relative;
      overflow: hidden;
      border: 3px solid rgba(93,64,55,0.15);
      border-radius: 24px;
      background:
        radial-gradient(circle at 20% 15%, rgba(255,255,255,0.82), transparent 30%),
        linear-gradient(150deg, #e5fff4, #fff9e9);
      box-shadow: 0 16px 30px rgba(61,43,30,0.14);
    }

    .ss-side {
      min-height: 390px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 18px;
    }

    .ss-glow {
      position: absolute;
      width: 210px;
      height: 210px;
      border-radius: 50%;
      background: rgba(16,185,129,0.18);
      filter: blur(8px);
    }

    .ss-side img {
      position: relative;
      z-index: 2;
      width: min(82%, 210px);
      max-height: 285px;
      object-fit: contain;
      filter: drop-shadow(0 16px 16px rgba(0,0,0,0.2));
      animation: ss-float 2.8s ease-in-out infinite;
    }

    .ss-bubble {
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

    .ss-bubble strong,
    .ss-bubble span {
      display: block;
      line-height: 1.15;
    }

    .ss-bubble strong {
      font-family: var(--font-family-display);
      color: #10b981;
      font-size: 18px;
    }

    .ss-bubble span {
      margin-top: 4px;
      font-weight: 900;
      color: #6d4c41;
      font-size: 13px;
    }

    .ss-play {
      padding: clamp(18px, 3vw, 32px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 18px;
      background:
        linear-gradient(rgba(255,255,255,0.24) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.24) 1px, transparent 1px),
        radial-gradient(circle at 78% 20%, rgba(255,217,61,0.18), transparent 32%),
        linear-gradient(160deg, #fffaf0, #e5fff4);
      background-size: 34px 34px, 34px 34px, auto, auto;
    }

    .ss-progress {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 900;
      color: #6d4c41;
    }

    .ss-progress span {
      min-width: 52px;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(255,255,255,0.88);
      text-align: center;
      box-shadow: 0 5px 12px rgba(61,43,30,0.1);
    }

    .ss-progress div {
      flex: 1;
      height: 12px;
      border-radius: 999px;
      background: rgba(93,64,55,0.12);
      overflow: hidden;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.12);
    }

    .ss-progress i {
      display: block;
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, #10b981, #ffd93d);
      transition: width 220ms ease;
    }

    .ss-rail {
      min-height: 130px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 18px;
      border-radius: 26px;
      background: rgba(255,255,255,0.86);
      border: 3px solid rgba(93,64,55,0.13);
      box-shadow: 0 13px 24px rgba(61,43,30,0.12);
    }

    .ss-slot {
      min-width: 58px;
      min-height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 9px 13px;
      border-radius: 16px;
      background: rgba(215,204,200,0.34);
      border: 2px dashed rgba(93,64,55,0.2);
      color: #8d6e63;
      font-weight: 900;
    }

    .ss-slot.is-filled {
      background: #fffdf7;
      border-style: solid;
      color: #34495e;
      box-shadow: 0 6px 12px rgba(61,43,30,0.1);
      font-family: var(--font-family-display);
      animation: ss-pop 220ms var(--ease-bounce);
    }

    .ss-word-pool {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .ss-word {
      min-height: 56px;
      border: 0;
      border-radius: 18px;
      padding: 10px 17px;
      background: #38bdf8;
      color: white;
      cursor: pointer;
      font-family: var(--font-family-display);
      font-size: clamp(18px, 2.3vw, 26px);
      box-shadow: 0 7px 0 #1d8fc2, 0 12px 18px rgba(61,43,30,0.14);
      transition: transform 130ms var(--ease-bounce), filter 130ms ease;
    }

    .ss-word:hover {
      transform: translateY(-2px);
      filter: brightness(1.06);
    }

    .ss-word.is-used {
      opacity: 0.32;
      filter: grayscale(0.3);
    }

    .ss-word.is-correct {
      background: #43a047;
      box-shadow: 0 7px 0 #1b5e20;
      animation: ss-pop 220ms var(--ease-bounce);
    }

    .ss-word.is-wrong {
      background: #ef5350;
      box-shadow: 0 7px 0 #b71c1c;
      animation: ss-wiggle 260ms ease;
    }

    .ss-hint {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      gap: 12px;
      align-items: center;
      color: #6d4c41;
      font-weight: 900;
    }

    .ss-hint span,
    .ss-hint strong {
      min-height: 38px;
      display: flex;
      align-items: center;
      padding: 7px 11px;
      border-radius: 999px;
      background: rgba(255,255,255,0.76);
      box-shadow: 0 5px 12px rgba(61,43,30,0.08);
    }

    .ss-hint strong {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #34495e;
    }

    @keyframes ss-float {
      0%, 100% { transform: translateY(0) rotate(-1deg); }
      50% { transform: translateY(-9px) rotate(2deg); }
    }

    @keyframes ss-pop {
      0% { transform: scale(0.94); }
      70% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }

    @keyframes ss-wiggle {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-6px); }
      75% { transform: translateX(6px); }
    }

    @media (max-width: 760px) {
      .ss-stage {
        grid-template-columns: 1fr;
        gap: 10px;
        min-height: 0;
      }

      .ss-side {
        min-height: 126px;
        justify-content: flex-start;
      }

      .ss-side img {
        width: 112px;
        max-height: 112px;
      }

      .ss-bubble {
        left: 126px;
        right: 10px;
        bottom: 50%;
        transform: translateY(50%);
      }

      .ss-play {
        gap: 12px;
        padding: 16px;
      }

      .ss-rail {
        min-height: 96px;
        padding: 12px;
      }

      .ss-word {
        min-height: 48px;
        padding: 8px 13px;
      }

      .ss-hint {
        grid-template-columns: 1fr;
        gap: 8px;
      }
    }
  `;
  document.head.appendChild(style);
}
