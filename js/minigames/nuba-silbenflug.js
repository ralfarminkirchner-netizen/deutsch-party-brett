/**
 * Mini-Game: Nuba Silbenflug
 *
 * A polished Klebensfrei microgame for counting syllables.
 */

import { EXTRACTED_CHARS } from '../asset-manifest.js';
import { SoundFX } from '../ui/sounds.js';

const NUBA = EXTRACTED_CHARS.find(char => char.id === 'klebensfrei_nuba') || EXTRACTED_CHARS[0];

export const NubaSilbenflug = {
  id: 'nuba-silbenflug',
  name_de: 'Nubas Silbenflug',
  topics: ['silben'],

  setup(container, task, onComplete) {
    injectStyles();

    const words = task.content?.words || [];
    const rounds = shuffle(words)
      .filter(item => item?.word && Array.isArray(item.syllables) && item.syllables.length > 0)
      .slice(0, 5);

    if (!rounds.length) {
      onComplete({ correct: false, score: 0 });
      return;
    }

    let index = 0;
    let correct = 0;
    let misses = 0;
    const answers = [];

    const finish = () => {
      const score = Math.round((correct / rounds.length) * 100);
      container.querySelector('.nsf-stage')?.classList.add(score >= 80 ? 'is-win' : 'is-try');
      setTimeout(() => {
        onComplete({
          correct: score >= 80,
          partial: score >= 50,
          score,
          details: {
            variant: 'nuba-silbenflug',
            correct,
            misses,
            answers
          }
        });
      }, 620);
    };

    const renderRound = () => {
      const item = rounds[index];
      const answer = item.syllables.length;
      const options = makeCountOptions(answer);
      const progress = Math.round((index / rounds.length) * 100);

      container.innerHTML = `
        <div class="nsf-stage">
          <div class="nsf-sky">
            <span class="nsf-cloud c1"></span>
            <span class="nsf-cloud c2"></span>
            <span class="nsf-cloud c3"></span>
          </div>

          <aside class="nsf-guide">
            <div class="nsf-guide-glow"></div>
            <img src="${NUBA?.spriteImg || ''}" alt="" aria-hidden="true">
            <div class="nsf-guide-card">
              <strong>Nuba lauscht</strong>
              <span>Klatsche das Wort im Kopf mit.</span>
            </div>
          </aside>

          <section class="nsf-play">
            <div class="nsf-progress">
              <strong>${index + 1}/${rounds.length}</strong>
              <span><i style="width:${progress}%"></i></span>
            </div>

            <div class="nsf-word-card">
              <span>Wortwolke</span>
              <strong>${escapeHtml(item.word)}</strong>
            </div>

            <div class="nsf-clap-row" aria-hidden="true">
              ${Array.from({ length: Math.min(answer, 5) }, (_, i) => `<span style="--i:${i};"></span>`).join('')}
            </div>

            <div class="nsf-options" aria-label="Silbenzahl wählen">
              ${options.map(value => `
                <button class="nsf-option" type="button" data-value="${value}" aria-label="${value} ${value === 1 ? 'Silbe' : 'Silben'}">
                  <span>${value}</span>
                  <small>${value === 1 ? 'Silbe' : 'Silben'}</small>
                </button>
              `).join('')}
            </div>

            <div class="nsf-feedback" aria-live="polite">
              <span>${correct} Treffer</span>
              <span>${misses} Fehlversuche</span>
            </div>
          </section>
        </div>
      `;

      container.querySelectorAll('.nsf-option').forEach(button => {
        button.addEventListener('click', () => {
          SoundFX.click();

          const value = Number(button.dataset.value);
          const isCorrect = value === answer;
          answers.push({ word: item.word, selected: value, answer });

          container.querySelectorAll('.nsf-option').forEach(option => {
            option.disabled = true;
            if (Number(option.dataset.value) === answer) option.classList.add('is-answer');
          });

          button.classList.add(isCorrect ? 'is-correct' : 'is-wrong');

          if (isCorrect) {
            correct++;
            SoundFX.cloudPop?.();
            SoundFX.correct();
          } else {
            misses++;
            SoundFX.wrong();
          }

          revealSyllables(container, item.syllables);

          setTimeout(() => {
            index++;
            if (index >= rounds.length) finish();
            else renderRound();
          }, isCorrect ? 920 : 1250);
        });
      });
    };

    renderRound();
  }
};

function revealSyllables(container, syllables) {
  const row = container.querySelector('.nsf-clap-row');
  if (!row) return;

  row.innerHTML = syllables.map((syllable, index) => `
    <span class="is-revealed" style="--i:${index};">${escapeHtml(syllable)}</span>
  `).join('');
}

function makeCountOptions(answer) {
  const values = new Set([answer]);
  let step = 1;
  while (values.size < 3) {
    const lower = Math.max(1, answer - step);
    const upper = Math.min(5, answer + step);
    values.add(lower);
    values.add(upper);
    step++;
  }
  return shuffle([...values]).slice(0, 3);
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

function injectStyles() {
  if (document.getElementById('nuba-silbenflug-css')) return;

  const style = document.createElement('style');
  style.id = 'nuba-silbenflug-css';
  style.textContent = `
    .nsf-stage {
      position: relative;
      width: min(100%, 940px);
      min-height: 430px;
      display: grid;
      grid-template-columns: minmax(170px, 0.42fr) minmax(330px, 1fr);
      gap: 18px;
      color: #3b2b1a;
      overflow: hidden;
    }

    .nsf-sky {
      position: absolute;
      inset: 0;
      border-radius: 28px;
      overflow: hidden;
      pointer-events: none;
      background:
        radial-gradient(circle at 22% 18%, rgba(255,255,255,0.72), transparent 26%),
        linear-gradient(150deg, #e8fbff 0%, #fff8db 48%, #dff8e3 100%);
    }

    .nsf-cloud {
      position: absolute;
      width: 170px;
      height: 68px;
      border-radius: 999px;
      background: rgba(255,255,255,0.62);
      filter: blur(0.2px);
      animation: nsf-cloud-drift 9s ease-in-out infinite;
    }

    .nsf-cloud::before,
    .nsf-cloud::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      background: inherit;
    }

    .nsf-cloud::before {
      width: 78px;
      height: 78px;
      left: 28px;
      top: -34px;
    }

    .nsf-cloud::after {
      width: 58px;
      height: 58px;
      right: 24px;
      top: -20px;
    }

    .nsf-cloud.c1 { left: 18%; top: 18%; opacity: 0.42; }
    .nsf-cloud.c2 { right: 7%; top: 12%; opacity: 0.36; animation-delay: -2s; }
    .nsf-cloud.c3 { left: 48%; bottom: 12%; opacity: 0.28; animation-delay: -4s; }

    .nsf-guide,
    .nsf-play {
      position: relative;
      z-index: 1;
      border: 3px solid rgba(93,64,55,0.13);
      border-radius: 26px;
      background: rgba(255,255,255,0.72);
      box-shadow: 0 16px 30px rgba(61,43,30,0.14);
      overflow: hidden;
    }

    .nsf-guide {
      min-height: 410px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 18px;
    }

    .nsf-guide-glow {
      position: absolute;
      width: 220px;
      height: 220px;
      border-radius: 50%;
      background: rgba(56,189,248,0.2);
      filter: blur(10px);
    }

    .nsf-guide img {
      position: relative;
      z-index: 1;
      width: min(82%, 210px);
      max-height: 290px;
      object-fit: contain;
      filter: drop-shadow(0 16px 18px rgba(61,43,30,0.2));
      animation: nsf-nuba-float 2.6s ease-in-out infinite;
    }

    .nsf-guide-card {
      position: absolute;
      left: 12px;
      right: 12px;
      bottom: 12px;
      z-index: 2;
      padding: 10px 12px;
      border-radius: 18px;
      background: rgba(255,255,255,0.9);
      box-shadow: 0 8px 18px rgba(61,43,30,0.12);
    }

    .nsf-guide-card strong,
    .nsf-guide-card span {
      display: block;
      line-height: 1.14;
    }

    .nsf-guide-card strong {
      font-family: var(--font-family-display);
      color: #0284c7;
      font-size: 20px;
    }

    .nsf-guide-card span {
      margin-top: 4px;
      font-weight: 900;
      color: #6d4c41;
      font-size: 13px;
    }

    .nsf-play {
      min-height: 410px;
      padding: clamp(18px, 3vw, 34px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 18px;
    }

    .nsf-progress {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #6d4c41;
      font-weight: 1000;
    }

    .nsf-progress strong {
      min-width: 56px;
      padding: 7px 10px;
      border-radius: 999px;
      background: rgba(255,255,255,0.82);
      text-align: center;
      box-shadow: 0 5px 12px rgba(61,43,30,0.09);
    }

    .nsf-progress span {
      flex: 1;
      height: 12px;
      border-radius: 999px;
      background: rgba(93,64,55,0.11);
      overflow: hidden;
      box-shadow: inset 0 2px 4px rgba(61,43,30,0.12);
    }

    .nsf-progress i {
      display: block;
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, #38bdf8, #10b981);
      transition: width 240ms ease;
    }

    .nsf-word-card {
      min-height: 126px;
      display: grid;
      place-items: center;
      padding: 18px;
      border-radius: 28px;
      background:
        radial-gradient(circle at 50% 48%, rgba(255,255,255,0.92), rgba(255,255,255,0.45) 62%),
        linear-gradient(135deg, rgba(56,189,248,0.22), rgba(255,217,61,0.22));
      box-shadow: inset 0 0 0 3px rgba(255,255,255,0.56), 0 12px 24px rgba(61,43,30,0.1);
    }

    .nsf-word-card span,
    .nsf-word-card strong {
      display: block;
      line-height: 1;
      text-align: center;
    }

    .nsf-word-card span {
      font-weight: 1000;
      color: #0284c7;
      text-transform: uppercase;
      font-size: 12px;
    }

    .nsf-word-card strong {
      margin-top: 8px;
      font-family: var(--font-family-display);
      font-size: clamp(42px, 8vw, 70px);
      color: #3b2b1a;
      text-shadow: 0 4px 0 rgba(255,255,255,0.9);
    }

    .nsf-clap-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 42px;
    }

    .nsf-clap-row span {
      display: inline-grid;
      place-items: center;
      min-width: 34px;
      min-height: 28px;
      padding: 5px 10px;
      border-radius: 999px;
      background: rgba(255,255,255,0.7);
      color: transparent;
      box-shadow: 0 5px 12px rgba(61,43,30,0.08);
      animation: nsf-clap-pulse 1s ease-in-out infinite;
      animation-delay: calc(var(--i, 0) * 130ms);
    }

    .nsf-clap-row span.is-revealed {
      color: #0284c7;
      font-weight: 1000;
      animation: nsf-reveal 360ms var(--ease-bounce) both;
      animation-delay: calc(var(--i, 0) * 80ms);
    }

    .nsf-options {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .nsf-option {
      min-height: 98px;
      border: 0;
      border-radius: 30px 42px 34px 40px / 34px 28px 42px 30px;
      background:
        radial-gradient(circle at 36% 22%, rgba(255,255,255,0.9), rgba(255,255,255,0) 42%),
        linear-gradient(135deg, #ffffff, #dff7ff);
      color: #3b2b1a;
      cursor: pointer;
      box-shadow: 0 11px 0 #b8dbe5, 0 18px 28px rgba(61,43,30,0.16);
      transition: transform 160ms var(--ease-bounce), box-shadow 160ms ease, filter 160ms ease;
    }

    .nsf-option:hover:not(:disabled) {
      transform: translateY(-4px) rotate(-1deg);
      filter: brightness(1.03);
    }

    .nsf-option:active:not(:disabled) {
      transform: translateY(4px);
      box-shadow: 0 5px 0 #b8dbe5, 0 10px 18px rgba(61,43,30,0.14);
    }

    .nsf-option span,
    .nsf-option small {
      display: block;
      line-height: 1;
    }

    .nsf-option span {
      font-family: var(--font-family-display);
      font-size: 44px;
      color: #0284c7;
    }

    .nsf-option small {
      margin-top: 6px;
      color: #5d4037;
      font-weight: 1000;
      font-size: 15px;
    }

    .nsf-option.is-correct,
    .nsf-option.is-answer {
      background: linear-gradient(135deg, #ffffff, #c9f7d2);
      box-shadow: 0 10px 0 #8bd39b, 0 18px 28px rgba(61,43,30,0.16);
    }

    .nsf-option.is-wrong {
      background: linear-gradient(135deg, #ffffff, #ffd6cc);
      box-shadow: 0 10px 0 #f2998a, 0 18px 28px rgba(61,43,30,0.16);
      animation: nsf-shake 260ms ease both;
    }

    .nsf-feedback {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      flex-wrap: wrap;
      color: #6d4c41;
      font-weight: 1000;
      font-size: 13px;
    }

    .nsf-feedback span {
      padding: 7px 11px;
      border-radius: 999px;
      background: rgba(255,255,255,0.72);
      box-shadow: 0 5px 12px rgba(61,43,30,0.08);
    }

    .nsf-stage.is-win .nsf-play {
      animation: nsf-win-pop 520ms var(--ease-bounce) both;
    }

    @keyframes nsf-cloud-drift {
      0%, 100% { transform: translateX(-10px); }
      50% { transform: translateX(18px); }
    }

    @keyframes nsf-nuba-float {
      0%, 100% { transform: translateY(0) rotate(-1deg); }
      50% { transform: translateY(-10px) rotate(2deg); }
    }

    @keyframes nsf-clap-pulse {
      0%, 100% { transform: scale(1); opacity: 0.72; }
      50% { transform: scale(1.12); opacity: 1; }
    }

    @keyframes nsf-reveal {
      0% { opacity: 0; transform: translateY(10px) scale(0.86); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes nsf-shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-7px) rotate(-1deg); }
      75% { transform: translateX(7px) rotate(1deg); }
    }

    @keyframes nsf-win-pop {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.015); }
    }

    @media (max-width: 720px) {
      .nsf-stage {
        grid-template-columns: 1fr;
        min-height: 0;
      }

      .nsf-guide {
        min-height: 126px;
        justify-content: flex-start;
      }

      .nsf-guide img {
        width: 92px;
        max-height: 112px;
      }

      .nsf-guide-card {
        left: 116px;
        right: 12px;
        bottom: 18px;
      }

      .nsf-play {
        min-height: 0;
      }

      .nsf-options {
        grid-template-columns: 1fr;
      }

      .nsf-option {
        min-height: 76px;
      }
    }
  `;
  document.head.appendChild(style);
}
