/**
 * Mini-Game: Klebensfrei Blitzreise
 *
 * A fast companion-led microgame wrapper that turns existing learning content
 * into short WarioWare-style rounds with Klebensfrei characters.
 */

import { EXTRACTED_CHARS, STORY_PROPS } from '../asset-manifest.js';

const CHARACTER_BY_ID = Object.fromEntries(EXTRACTED_CHARS.map(char => [char.id, char]));
const MAP_PROP = STORY_PROPS.find(prop => prop.id === 'klebensfrei_suedamerika');

const COMPANIONS = {
  zora: {
    id: 'klebensfrei_zora',
    name: 'Zora',
    color: '#57534e',
    light: '#f5f1ea',
    mission: 'Muster sortieren'
  },
  nuba: {
    id: 'klebensfrei_nuba',
    name: 'Nuba',
    color: '#38bdf8',
    light: '#e0f7ff',
    mission: 'Silben schweben'
  },
  mira: {
    id: 'klebensfrei_mira',
    name: 'Mira',
    color: '#ec4899',
    light: '#ffe8f3',
    mission: 'ABC-Zauber'
  },
  leo: {
    id: 'klebensfrei_leo',
    name: 'Leo',
    color: '#10b981',
    light: '#e5fff4',
    mission: 'Spur lesen'
  }
};

const TYPE_LABELS = {
  nomen: 'Nomen',
  verben: 'Verben',
  adjektive: 'Adjektive'
};

const TYPE_SINGULARS = {
  nomen: 'Nomen',
  verben: 'Verb',
  adjektive: 'Adjektiv'
};

export const KlebensfreiBlitzreise = {
  id: 'klebensfrei-blitzreise',
  name_de: 'Klebensfrei-Blitzreise',
  topics: ['nomen', 'verben', 'adjektive', 'artikel', 'silben', 'lesen', 'wortarten'],

  setup(container, task, onComplete) {
    injectStyles();

    const mission = createMission(task);
    if (!mission) {
      onComplete({ correct: false, score: 0 });
      return;
    }

    let index = 0;
    let correct = 0;
    let misses = 0;
    const answeredIds = new Set();

    const finish = () => {
      const total = mission.rounds.length;
      const score = Math.round((correct / total) * 100);
      container.querySelector('.kf-stage')?.classList.add(score >= 75 ? 'is-win' : 'is-try');
      setTimeout(() => {
        onComplete({
          correct: score >= 75,
          partial: score >= 45,
          score,
          details: {
            companion: mission.companion.name,
            variant: mission.variant,
            correct,
            misses
          }
        });
      }, 650);
    };

    const render = () => {
      const round = mission.rounds[index];
      const progress = `${index + 1}/${mission.rounds.length}`;

      container.innerHTML = `
        <div class="kf-stage" style="--kf-main:${mission.companion.color}; --kf-light:${mission.companion.light};">
          <div class="kf-companion-panel">
            <div class="kf-companion-glow"></div>
            <img class="kf-companion" src="${mission.companion.image}" alt="${escapeHtml(mission.companion.name)}">
            ${MAP_PROP ? `<img class="kf-map" src="${MAP_PROP.spriteImg}" alt="">` : ''}
            <div class="kf-companion-card">
              <strong>${escapeHtml(mission.companion.name)}</strong>
              <span>${escapeHtml(mission.companion.mission)}</span>
            </div>
          </div>

          <div class="kf-play-panel">
            <div class="kf-topline">
              <span class="kf-badge">${escapeHtml(mission.badge)}</span>
              <span class="kf-progress">${progress}</span>
            </div>
            <h3>${escapeHtml(round.title)}</h3>
            <p class="kf-prompt">${escapeHtml(round.prompt)}</p>
            ${round.text ? `<div class="kf-reading">${escapeHtml(round.text)}</div>` : ''}
            <div class="kf-options">
              ${round.options.map((option, optionIndex) => `
                <button class="kf-option" type="button" data-id="${optionIndex}" data-correct="${option.correct ? 'true' : 'false'}">
                  ${escapeHtml(option.label)}
                </button>
              `).join('')}
            </div>
            <div class="kf-status">
              <span>${correct} richtig</span>
              <span>${misses} Fehlversuche</span>
            </div>
          </div>
        </div>
      `;

      container.querySelectorAll('.kf-option').forEach(button => {
        button.addEventListener('click', () => {
          const id = `${index}-${button.dataset.id}`;
          if (answeredIds.has(id)) return;
          answeredIds.add(id);

          const isCorrect = button.dataset.correct === 'true';
          button.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
          if (isCorrect) correct++;
          else misses++;

          container.querySelectorAll('.kf-option').forEach(option => {
            option.disabled = true;
            if (option.dataset.correct === 'true') option.classList.add('is-answer');
          });

          setTimeout(() => {
            index++;
            if (index >= mission.rounds.length) finish();
            else render();
          }, isCorrect ? 560 : 820);
        });
      });
    };

    render();
  }
};

function createMission(task) {
  if (task.topic === 'silben') return createSyllableMission(task);
  if (task.topic === 'artikel') return createArticleMission(task);
  if (task.topic === 'lesen') return createReadingMission(task);
  return createWordTypeMission(task);
}

function createWordTypeMission(task) {
  const sets = task.content?.mixedSets || [];
  const set = pick(sets);
  if (!set?.words?.length) return createArticleMission(task);

  const targetKey = TYPE_LABELS[task.topic] ? task.topic : pick(['nomen', 'verben', 'adjektive']);
  const correctWords = new Set(set[targetKey] || []);
  const rounds = shuffle(set.words).slice(0, 6).map(word => ({
    title: `${TYPE_LABELS[targetKey]} finden`,
    prompt: `Ist "${word}" ein ${TYPE_SINGULARS[targetKey]}?`,
    options: [
      { label: 'Ja, einsammeln', correct: correctWords.has(word) },
      { label: 'Nein, weiterziehen', correct: !correctWords.has(word) }
    ]
  }));

  return {
    variant: 'word-type',
    badge: 'Zora-Muster',
    companion: getCompanion('zora'),
    rounds
  };
}

function createArticleMission(task) {
  const quizSets = task.content?.quizSets || [];
  const rounds = shuffle(quizSets).slice(0, 4).map(item => ({
    title: 'Miras Artikel-Zauber',
    prompt: `Welcher Artikel gehört zu "${item.word}"?`,
    options: shuffle(['der', 'die', 'das']).map(article => ({
      label: article,
      correct: article === item.correct
    }))
  }));

  if (rounds.length === 0) return null;
  return {
    variant: 'article',
    badge: 'Mira-ABC',
    companion: getCompanion('mira'),
    rounds
  };
}

function createSyllableMission(task) {
  const words = task.content?.words || [];
  const rounds = shuffle(words).slice(0, 4).map(item => {
    const correctCount = item.syllables.length;
    const options = uniqueNumbers([correctCount, correctCount - 1, correctCount + 1, correctCount + 2], 1, 5);
    return {
      title: 'Nubas Wolkensilben',
      prompt: `Wie viele Silben hörst du in "${item.word}"?`,
      options: shuffle(options).map(value => ({
        label: `${value} ${value === 1 ? 'Silbe' : 'Silben'}`,
        correct: value === correctCount
      }))
    };
  });

  if (rounds.length === 0) return createWordTypeMission(task);
  return {
    variant: 'syllables',
    badge: 'Nuba-Wolken',
    companion: getCompanion('nuba'),
    rounds
  };
}

function createReadingMission(task) {
  const textItem = pick(task.content?.texts || []);
  if (!textItem?.questions?.length) return createWordTypeMission(task);

  const rounds = shuffle(textItem.questions).slice(0, 3).map(question => ({
    title: `Leos Spur: ${textItem.title}`,
    prompt: question.question,
    text: textItem.text,
    options: shuffle(question.options).map(option => ({
      label: option,
      correct: option === question.correct
    }))
  }));

  return {
    variant: 'reading',
    badge: 'Leo-Spur',
    companion: getCompanion('leo'),
    rounds
  };
}

function getCompanion(key) {
  const base = COMPANIONS[key];
  const asset = CHARACTER_BY_ID[base.id];
  return {
    ...base,
    image: asset?.spriteImg || ''
  };
}

function uniqueNumbers(values, min, max) {
  return [...new Set(values.map(value => Math.max(min, Math.min(max, value))))].slice(0, 4);
}

function pick(items) {
  if (!items?.length) return null;
  return items[Math.floor(Math.random() * items.length)];
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
  if (document.getElementById('klebensfrei-blitzreise-css')) return;

  const style = document.createElement('style');
  style.id = 'klebensfrei-blitzreise-css';
  style.textContent = `
    .kf-stage {
      width: min(100%, 820px);
      min-height: 390px;
      display: grid;
      grid-template-columns: minmax(180px, 0.8fr) minmax(280px, 1.2fr);
      gap: 18px;
      align-items: stretch;
      color: #3b2b1a;
    }

    .kf-companion-panel,
    .kf-play-panel {
      position: relative;
      overflow: hidden;
      border: 3px solid rgba(93, 64, 55, 0.25);
      border-radius: 8px;
      background:
        radial-gradient(circle at 20% 18%, rgba(255,255,255,0.65), transparent 25%),
        linear-gradient(145deg, var(--kf-light), #fffaf1);
      box-shadow: 0 12px 28px rgba(93, 64, 55, 0.18);
    }

    .kf-companion-panel {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 360px;
    }

    .kf-companion-glow {
      position: absolute;
      width: 210px;
      height: 210px;
      border-radius: 50%;
      background: color-mix(in srgb, var(--kf-main) 28%, transparent);
      filter: blur(8px);
      animation: kf-pulse 1.6s ease-in-out infinite alternate;
    }

    .kf-companion {
      position: relative;
      z-index: 2;
      width: min(74%, 210px);
      max-height: 285px;
      object-fit: contain;
      filter: drop-shadow(0 18px 18px rgba(0,0,0,0.22));
      animation: kf-float 2.8s ease-in-out infinite;
    }

    .kf-map {
      position: absolute;
      right: 10px;
      bottom: 8px;
      width: 58px;
      opacity: 0.42;
      transform: rotate(8deg);
    }

    .kf-companion-card {
      position: absolute;
      left: 12px;
      right: 12px;
      bottom: 12px;
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 9px 11px;
      border-radius: 999px;
      background: rgba(255,255,255,0.9);
      box-shadow: 0 6px 14px rgba(93,64,55,0.12);
      font-size: 13px;
    }

    .kf-companion-card strong {
      font-family: var(--font-family-display);
      font-size: 18px;
      color: var(--kf-main);
    }

    .kf-play-panel {
      padding: 22px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .kf-topline,
    .kf-status {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      font-weight: 900;
    }

    .kf-badge,
    .kf-progress {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      padding: 7px 12px;
      background: var(--kf-main);
      color: white;
      box-shadow: 0 5px 0 rgba(0,0,0,0.16);
      font-family: var(--font-family-display);
      font-size: 13px;
    }

    .kf-progress {
      background: white;
      color: var(--kf-main);
      border: 2px solid color-mix(in srgb, var(--kf-main) 35%, white);
      box-shadow: none;
    }

    .kf-play-panel h3 {
      margin: 18px 0 8px;
      font-family: var(--font-family-display);
      font-size: clamp(28px, 4vw, 42px);
      line-height: 1.05;
    }

    .kf-prompt {
      margin: 0 0 14px;
      font-size: 18px;
      font-weight: 900;
      color: #5d4037;
    }

    .kf-reading {
      max-height: 105px;
      overflow-y: auto;
      margin: 0 0 14px;
      padding: 12px;
      border-radius: 8px;
      background: rgba(255,255,255,0.72);
      border: 2px dashed rgba(93,64,55,0.18);
      font-size: 14px;
      line-height: 1.45;
    }

    .kf-options {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin-top: 4px;
    }

    .kf-option {
      min-height: 58px;
      border: none;
      border-radius: 8px;
      padding: 12px;
      background: #34495e;
      color: white;
      box-shadow: 0 6px 0 #223244;
      cursor: pointer;
      font-family: var(--font-family-display);
      font-size: 18px;
      line-height: 1.12;
      transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease;
    }

    .kf-option:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 0 #223244;
    }

    .kf-option:disabled {
      cursor: default;
      opacity: 0.72;
    }

    .kf-option.is-answer {
      opacity: 1;
      outline: 3px solid rgba(67,160,71,0.35);
    }

    .kf-option.is-correct {
      background: #43a047;
      box-shadow: 0 6px 0 #1b5e20;
      animation: kf-pop 220ms var(--ease-bounce);
    }

    .kf-option.is-wrong {
      background: #ef5350;
      box-shadow: 0 6px 0 #b71c1c;
      animation: kf-wiggle 260ms ease;
    }

    .kf-status {
      margin-top: 14px;
      color: #6d5846;
      font-size: 13px;
    }

    .kf-stage.is-win .kf-play-panel,
    .kf-stage.is-try .kf-play-panel {
      animation: kf-pop 360ms var(--ease-bounce);
    }

    @keyframes kf-float {
      0%, 100% { transform: translateY(0) rotate(-1deg); }
      50% { transform: translateY(-10px) rotate(2deg); }
    }

    @keyframes kf-pulse {
      from { transform: scale(0.92); opacity: 0.68; }
      to { transform: scale(1.08); opacity: 1; }
    }

    @keyframes kf-pop {
      0% { transform: scale(0.95); }
      70% { transform: scale(1.04); }
      100% { transform: scale(1); }
    }

    @keyframes kf-wiggle {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }

    @media (max-width: 760px) {
      .kf-stage {
        grid-template-columns: 1fr;
        gap: 10px;
        min-height: 0;
      }

      .kf-companion-panel {
        min-height: 150px;
      }

      .kf-companion {
        width: min(42%, 135px);
        max-height: 140px;
      }

      .kf-companion-card {
        left: 8px;
        right: 8px;
        bottom: 8px;
      }

      .kf-play-panel {
        padding: 16px;
      }

      .kf-play-panel h3 {
        margin-top: 12px;
      }

      .kf-options {
        grid-template-columns: 1fr;
      }

      .kf-option {
        min-height: 52px;
        font-size: 16px;
      }
    }
  `;
  document.head.appendChild(style);
}
