/**
 * Mini-Game: Article Choice (Artikel-Wahl)
 *
 * Fast article workshop: choose der/die/das for each word.
 */

import { EXTRACTED_CHARS } from '../asset-manifest.js';
import { SoundFX } from '../ui/sounds.js';

const MIRA = EXTRACTED_CHARS.find(char => char.id === 'klebensfrei_mira') || EXTRACTED_CHARS[0];

export const ArticleChoice = {
  id: 'article-choice',
  name_de: 'Genus-Sortierer',
  topics: ['artikel'],

  setup(container, task, onComplete) {
    injectArticleStyles();

    const { content } = task;
    let quizItems = [];

    if (content?.questions) {
      quizItems = content.questions;
    } else if (content?.quizSets) {
      quizItems = [...content.quizSets].sort(() => Math.random() - 0.5).slice(0, 5);
    } else if (content?.type === 'satzarten' && content.sentences) {
      quizItems = [...content.sentences].sort(() => Math.random() - 0.5).slice(0, 5).map(s => ({
        word: s.sentence,
        correct: s.type,
        options: ['Aussagesatz', 'Fragesatz', 'Ausrufesatz']
      }));
    }

    if (!quizItems.length) {
      onComplete({ correct: false, score: 0 });
      return;
    }

    let currentIndex = 0;
    let correctCount = 0;
    const defaultArticles = ['der', 'die', 'das'];
    const articleMeta = {
      der: { label: 'der', color: '#38bdf8', hint: 'männlich' },
      die: { label: 'die', color: '#ff5b67', hint: 'weiblich' },
      das: { label: 'das', color: '#35c976', hint: 'sächlich' }
    };

    const renderQuestion = () => {
      const item = quizItems[currentIndex];
      const options = item.options || defaultArticles;
      const correctAns = item.article || item.correct;
      const progress = Math.round((currentIndex / quizItems.length) * 100);

      container.innerHTML = `
        <div class="ac-stage">
          <div class="ac-side">
            <div class="ac-glow"></div>
            <img src="${MIRA?.spriteImg || ''}" alt="" aria-hidden="true">
            <div class="ac-bubble">
              <strong>Miras Artikel-Zauber</strong>
              <span>Welcher Begleiter passt?</span>
            </div>
          </div>

          <div class="ac-play">
            <div class="ac-progress">
              <span>${currentIndex + 1}/${quizItems.length}</span>
              <div><i style="width:${progress}%"></i></div>
            </div>

            <div class="ac-word-card">
              <span>${item.options ? 'Satzkarte' : 'Wortkarte'}</span>
              <strong>${escapeHtml(item.word)}</strong>
            </div>

            <div class="ac-doors">
              ${options.map(opt => {
                const meta = articleMeta[opt] || { label: opt, color: '#8b5cf6', hint: 'wählen' };
                return `
                  <button class="ac-door" type="button" data-answer="${escapeHtml(opt)}" style="--door:${meta.color};">
                    <strong>${escapeHtml(meta.label)}</strong>
                    <span>${escapeHtml(meta.hint)}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;

      container.querySelectorAll('.ac-door').forEach(btn => {
        btn.addEventListener('click', () => {
          SoundFX.click();
          const selected = btn.dataset.answer;
          const isCorrect = selected === correctAns;

          if (isCorrect) {
            correctCount++;
            SoundFX.correct();
          } else {
            SoundFX.wrong();
          }

          container.querySelectorAll('.ac-door').forEach(button => {
            button.disabled = true;
            if (button.dataset.answer === correctAns) button.classList.add('is-correct');
          });

          if (!isCorrect) btn.classList.add('is-wrong');

          setTimeout(() => {
            currentIndex++;
            if (currentIndex < quizItems.length) {
              renderQuestion();
            } else {
              const score = Math.round((correctCount / quizItems.length) * 100);
              onComplete({ correct: score >= 80, partial: score >= 50, score });
            }
          }, isCorrect ? 650 : 950);
        });
      });
    };

    renderQuestion();
  }
};

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function injectArticleStyles() {
  if (document.getElementById('article-choice-css')) return;

  const style = document.createElement('style');
  style.id = 'article-choice-css';
  style.textContent = `
    .ac-stage {
      width: min(100%, 900px);
      min-height: 400px;
      display: grid;
      grid-template-columns: minmax(170px, 0.45fr) minmax(330px, 1fr);
      gap: 18px;
      color: #3b2b1a;
    }

    .ac-side,
    .ac-play {
      position: relative;
      overflow: hidden;
      border: 3px solid rgba(93,64,55,0.15);
      border-radius: 24px;
      background:
        radial-gradient(circle at 20% 15%, rgba(255,255,255,0.82), transparent 30%),
        linear-gradient(150deg, #ffe8f3, #fff9e9);
      box-shadow: 0 16px 30px rgba(61,43,30,0.14);
    }

    .ac-side {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 380px;
      padding: 18px;
    }

    .ac-glow {
      position: absolute;
      width: 210px;
      height: 210px;
      border-radius: 50%;
      background: rgba(236,72,153,0.18);
      filter: blur(8px);
    }

    .ac-side img {
      position: relative;
      z-index: 2;
      width: min(82%, 210px);
      max-height: 285px;
      object-fit: contain;
      filter: drop-shadow(0 16px 16px rgba(0,0,0,0.2));
      animation: ac-float 2.8s ease-in-out infinite;
    }

    .ac-bubble {
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

    .ac-bubble strong,
    .ac-bubble span {
      display: block;
      line-height: 1.15;
    }

    .ac-bubble strong {
      font-family: var(--font-family-display);
      color: #ec4899;
      font-size: 18px;
    }

    .ac-bubble span {
      margin-top: 4px;
      font-weight: 900;
      color: #6d4c41;
      font-size: 13px;
    }

    .ac-play {
      padding: clamp(18px, 3vw, 34px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      background:
        linear-gradient(rgba(255,255,255,0.24) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.24) 1px, transparent 1px),
        radial-gradient(circle at 78% 20%, rgba(56,189,248,0.18), transparent 32%),
        linear-gradient(160deg, #fffaf0, #e6f4d8);
      background-size: 34px 34px, 34px 34px, auto, auto;
    }

    .ac-progress {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 900;
      color: #6d4c41;
    }

    .ac-progress span {
      min-width: 52px;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(255,255,255,0.85);
      text-align: center;
      box-shadow: 0 5px 12px rgba(61,43,30,0.1);
    }

    .ac-progress div {
      flex: 1;
      height: 12px;
      border-radius: 999px;
      background: rgba(93,64,55,0.12);
      overflow: hidden;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.12);
    }

    .ac-progress i {
      display: block;
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, #ff3366, #ffd93d);
      transition: width 220ms ease;
    }

    .ac-word-card {
      min-height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 24px;
      border-radius: 28px;
      background: rgba(255,255,255,0.88);
      border: 3px solid rgba(93,64,55,0.13);
      box-shadow: 0 13px 24px rgba(61,43,30,0.12);
      text-align: center;
    }

    .ac-word-card span {
      font-weight: 900;
      color: #2e7d32;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 0;
    }

    .ac-word-card strong {
      font-family: var(--font-family-display);
      font-size: clamp(46px, 7vw, 78px);
      color: #34495e;
      line-height: 1;
      overflow-wrap: anywhere;
    }

    .ac-doors {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px;
    }

    .ac-door {
      min-height: 104px;
      border: 0;
      border-radius: 22px;
      background: var(--door);
      color: white;
      cursor: pointer;
      box-shadow: 0 9px 0 color-mix(in srgb, var(--door) 68%, #5d4037), 0 16px 22px rgba(61,43,30,0.14);
      transition: transform 140ms var(--ease-bounce), filter 140ms ease;
    }

    .ac-door:hover {
      transform: translateY(-3px);
      filter: brightness(1.05);
    }

    .ac-door:disabled {
      cursor: default;
      filter: saturate(0.75);
    }

    .ac-door strong,
    .ac-door span {
      display: block;
      line-height: 1.08;
    }

    .ac-door strong {
      font-family: var(--font-family-display);
      font-size: clamp(30px, 4vw, 46px);
    }

    .ac-door span {
      margin-top: 6px;
      font-weight: 900;
      opacity: 0.88;
    }

    .ac-door.is-correct {
      outline: 5px solid rgba(67,160,71,0.25);
      animation: ac-pop 240ms var(--ease-bounce);
      filter: brightness(1.08);
    }

    .ac-door.is-wrong {
      background: #ef5350 !important;
      animation: ac-wiggle 260ms ease;
    }

    @keyframes ac-float {
      0%, 100% { transform: translateY(0) rotate(-1deg); }
      50% { transform: translateY(-9px) rotate(2deg); }
    }

    @keyframes ac-pop {
      0% { transform: scale(0.94); }
      70% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }

    @keyframes ac-wiggle {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-6px); }
      75% { transform: translateX(6px); }
    }

    @media (max-width: 760px) {
      .ac-stage {
        grid-template-columns: 1fr;
        gap: 10px;
        min-height: 0;
      }

      .ac-side {
        min-height: 126px;
        justify-content: flex-start;
      }

      .ac-side img {
        width: 112px;
        max-height: 112px;
      }

      .ac-bubble {
        left: 126px;
        right: 10px;
        bottom: 50%;
        transform: translateY(50%);
      }

      .ac-play {
        gap: 14px;
        padding: 16px;
      }

      .ac-word-card {
        min-height: 112px;
      }

      .ac-doors {
        gap: 10px;
      }

      .ac-door {
        min-height: 82px;
      }
    }
  `;
  document.head.appendChild(style);
}
