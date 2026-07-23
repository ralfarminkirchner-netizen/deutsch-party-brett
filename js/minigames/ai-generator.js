/**
 * AI Generator - Smart local task variation (no API key required)
 * Creates fresh question variants from static content pools.
 */

import { shuffleArray, pickRandom } from '../learning/task-generator.js';

const RULE_HINTS = {
  nomen: 'Nomen sind Namenwörter. Sie können „der", „die" oder „das" davor stehen.',
  verben: 'Verben sind Tuwörter. Sie beschreiben, was jemand tut.',
  adjektive: 'Adjektive beschreiben, wie etwas ist — zum Beispiel groß, schnell, bunt.',
  adjektiv: 'Adjektive beschreiben, wie etwas ist — zum Beispiel groß, schnell, bunt.',
  artikel: 'Artikel sind Begleiter: der (maskulin), die (feminin), das (neutral).',
  satzbau: 'Im Deutschen kommt oft zuerst das Subjekt, dann das Verb.',
  silben: 'Klatsche jede Silbe: Ka-tze hat zwei Silben.',
  lesen: 'Lies langsam von links nach rechts — jedes Wort zählt!',
  wortarten: 'Wortarten sind Nomen, Verben, Adjektive und mehr.',
  wortschatz: 'Neue Wörter merkt man sich am besten mit einem Bild im Kopf.',
  _default: 'Lies die Aufgabe genau und such die beste Antwort.'
};

const ENCOURAGEMENT = [
  'Super, weiter so!',
  'Du schaffst das!',
  'Noch einmal — du bist nah dran!',
  'Tolle Übung für dein Deutsch!'
];

export function enrichTask(task) {
  if (!task?.content) return task;

  const enriched = { ...task, aiEnriched: true };
  enriched.learningRule = RULE_HINTS[task.topic] || RULE_HINTS._default;
  enriched.encouragement = pickRandom(ENCOURAGEMENT);

  if (task.content.words?.length > 1) {
    enriched.content = {
      ...task.content,
      words: shuffleArray([...task.content.words])
    };
  }

  enriched.instructions = buildSmartInstructions(task);
  return enriched;
}

function buildSmartInstructions(task) {
  const topicLabel = {
    nomen: 'Nomen-Jäger',
    verben: 'Verb-Sprint',
    adjektive: 'Adjektiv-Zauber',
    adjektiv: 'Adjektiv-Zauber',
    artikel: 'Artikel-Detektiv',
    satzbau: 'Satz-Baukasten',
    silben: 'Silben-Flug',
    lesen: 'Lese-Spur',
    wortarten: 'Wortarten-Sortierer'
  }[task.topic] || 'Blitzaufgabe';

  const base = task.instructions || 'Löse die Aufgabe!';
  return `${topicLabel}: ${base}`;
}

export function getLearningFeedback(task, result) {
  if (result?.correct) {
    return {
      title: 'Richtig!',
      message: result.explanation || RULE_HINTS[task?.topic] || 'Super gemacht!',
      showAnswer: false
    };
  }

  return {
    title: 'So geht es richtig:',
    message: result?.explanation || RULE_HINTS[task?.topic] || pickRandom(ENCOURAGEMENT),
    showAnswer: true,
    correctAnswer: result?.correctAnswer || result?.answer || null
  };
}

export function createQuickTask(baseTask, { rounds = 1, timerSeconds = 12 } = {}) {
  const quick = enrichTask(baseTask);
  quick.timerSeconds = timerSeconds;
  quick.quickMode = true;
  quick.maxRounds = rounds;

  if (quick.content?.words) {
    quick.content.words = quick.content.words.slice(0, Math.max(rounds, 2));
  }
  return quick;
}