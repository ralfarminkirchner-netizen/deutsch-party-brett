/**
 * Render Mini-Game - Wrapper for mini-game display and result handling
 * No emojis - all illustrated SVG icons
 */

import { getMinigame } from '../minigames/minigame-registry.js';
import { generateTask } from '../learning/task-generator.js';
import { enrichTask, getLearningFeedback } from '../minigames/ai-generator.js';
import { TTS } from '../ui/tts.js';
import { iconTask, iconChallenge, iconTeam, iconCoin, iconCheck, iconTimer, iconParty } from '../ui/icons.js';
import { SoundFX } from '../ui/sounds.js';

export class MinigameRenderer {
  constructor(containerEl, settings, gameController = null) {
    this.container = containerEl;
    this.settings = settings;
    this.game = gameController;
    this.onComplete = null;
    this.timerInterval = null;
  }

  launch(mode, explicitTopic = null, onComplete, context = {}) {
    this.onComplete = onComplete;

    if (mode === 'challenge' && this.game?.getPlayers) {
      this._launchPartyChallenge(explicitTopic, onComplete);
      return;
    }

    if (mode === 'team' && this.game?.getPlayers) {
      this._launchTeamRelay(explicitTopic, onComplete, context);
      return;
    }
    
    const task = enrichTask(generateTask(
      this.settings.activeTopics,
      this.settings.difficulty,
      mode,
      explicitTopic,
      { classLevel: this.settings.classLevel }
    ));
    
    let minigame = getMinigame(task.miniGameId);
    if (!minigame) {
      console.warn('Mini-game not found:', task.miniGameId, '— fallback');
      task.miniGameId = 'klebensfrei-blitzreise';
      minigame = getMinigame('klebensfrei-blitzreise');
    }
    if (!minigame) {
      onComplete({ correct: false, score: 0, mode });
      return;
    }

    const modeIcon = mode === 'challenge' ? iconChallenge(22) 
                   : mode === 'team' ? iconTeam(22) 
                   : iconTask(22);
    const modeLabel = mode === 'challenge' ? 'Alle spielen'
                    : mode === 'team' ? 'Team-Runde'
                    : 'Blitzaufgabe';

    this.container.innerHTML = `
      <div class="minigame-overlay" id="minigame-overlay">
        <div class="minigame-container">
          <div class="minigame-header">
            <div class="microgame-mode-chip">${modeLabel}</div>
            <div class="minigame-title">
              <span>${modeIcon}</span>
              <span>${minigame.name_de}</span>
            </div>
            ${task.timerSeconds > 0 ? `
              <div class="minigame-timer-area">
                <div class="timer" id="minigame-timer">
                  ${iconTimer(16)} <span id="timer-value">${task.timerSeconds}</span>s
                </div>
              </div>
            ` : ''}
          </div>
          <div class="topic-intro-card" aria-live="polite">
            <span class="topic-intro-label">Heute üben wir</span>
            <strong>${task.learningRule ? task.topic : 'Deutsch'}</strong>
            <button type="button" class="tts-btn" id="tts-read-intro" title="Vorlesen">🔊</button>
          </div>
          <div class="minigame-instructions" aria-live="polite">
            ${task.instructions}
          </div>
          <div id="minigame-game-area"></div>
        </div>
      </div>
    `;

    document.getElementById('tts-read-intro')?.addEventListener('click', () => {
      TTS.speakTopicIntro(task.topic);
      SoundFX.click();
      TTS.speakSlow(task.instructions);
    });

    if (task.timerSeconds > 0) {
      this._startTimer(task.timerSeconds, () => {
        this._showResult({
          correct: false,
          partial: false,
          score: 0,
          timeout: true,
          mode
        });
      });
    }

    const gameArea = document.getElementById('minigame-game-area');
    this._lastTask = task;
    minigame.setup(gameArea, task, (result) => {
      this._clearTimer();
      result.mode = mode;
      result.miniGameId = task.miniGameId;
      result.topic = task.topic;
      this._showResult(result, task);
    });
  }

  _launchSequentialMinigames(mode, explicitTopic, onComplete, context = {}) {
    const players = mode === 'team'
      ? (context.players?.length ? context.players : [this.game.getCurrentPlayer()])
      : this.game.getPlayers().filter(p => !p.finished);

    if (players.length === 0) {
      onComplete({ mode, rankings: [], players: [] });
      return;
    }

    const baseTask = generateTask(
      this.settings.activeTopics,
      this.settings.difficulty,
      mode,
      explicitTopic,
      { classLevel: this.settings.classLevel }
    );
    const minigame = getMinigame(baseTask.miniGameId);
    if (!minigame) {
      onComplete({ mode, correct: false, score: 0 });
      return;
    }

    let playerIndex = 0;
    const rankings = [];

    const playNext = () => {
      if (playerIndex >= players.length) {
        this._finishSequential(mode, baseTask, rankings, players, onComplete);
        return;
      }

      const player = players[playerIndex];
      const task = createQuickTask(enrichTask(baseTask), { rounds: 1, timerSeconds: 14 });
      const modeLabel = mode === 'challenge' ? 'Alle spielen' : 'Team-Runde';
      const modeIcon = mode === 'challenge' ? iconChallenge(22) : iconTeam(22);

      this.container.innerHTML = `
        <div class="minigame-overlay" id="minigame-overlay">
          <div class="minigame-container party-challenge-shell">
            <div class="minigame-header">
              <div class="microgame-mode-chip">${modeLabel}</div>
              <div class="minigame-title">
                <span>${modeIcon}</span>
                <span>${minigame.name_de}</span>
              </div>
              <div class="minigame-timer-area">
                <div class="timer" id="minigame-timer">${iconTimer(16)} <span id="timer-value">${task.timerSeconds}</span>s</div>
              </div>
            </div>
            <div class="pc-player-card" style="margin:0 auto 12px;max-width:420px;">
              ${player.getAvatarHTML(72)}
              <div><span>Jetzt dran</span><strong>${escapeHtml(player.name)}</strong><small>${playerIndex + 1}/${players.length}</small></div>
            </div>
            <div class="minigame-instructions">${task.instructions}</div>
            <div id="minigame-game-area"></div>
          </div>
        </div>
      `;

      TTS.speak(`${player.name} ist dran!`);
      this._startTimer(task.timerSeconds, () => {
        rankings.push({ player, score: 0, timeMs: task.timerSeconds * 1000, correct: false });
        playerIndex++;
        playNext();
      });

      const gameArea = document.getElementById('minigame-game-area');
      const startedAt = performance.now();
      minigame.setup(gameArea, task, (result) => {
        this._clearTimer();
        const timeMs = Math.round(performance.now() - startedAt);
        const speedBonus = Math.max(0, 100 - Math.floor(timeMs / 90));
        const score = result.correct ? Math.max(40, speedBonus) : result.partial ? 20 : 0;
        rankings.push({ player, score, timeMs, correct: result.correct || result.partial, result });
        playerIndex++;
        setTimeout(playNext, result.correct ? 600 : 900);
      });
    };

    playNext();
  }

  _finishSequential(mode, task, rankings, players, onComplete) {
    if (mode === 'challenge') {
      const sorted = [...rankings].sort((a, b) => b.score - a.score || a.timeMs - b.timeMs);
      const winner = sorted[0];
      this.container.innerHTML = `
        <div class="minigame-overlay"><div class="minigame-container party-challenge-shell">
          <div id="minigame-game-area"><div class="pc-results">
            <div class="pc-results-hero">${winner ? winner.player.getAvatarHTML(116) : ''}
              <span>Blitzduell beendet</span>
              <h3>${winner?.player?.name ? `${escapeHtml(winner.player.name)} gewinnt!` : 'Alle haben mitgespielt!'}</h3>
            </div>
            <div class="pc-rank-list">${sorted.map((e, i) => `
              <div class="pc-rank-row ${i === 0 ? 'winner' : ''}">
                <strong>${i + 1}</strong>${e.player.getTokenHTML(36)}
                <span>${escapeHtml(e.player.name)}</span>
                <small>${e.correct ? `${e.score} Punkte` : 'daneben'}</small>
              </div>`).join('')}
            <button class="btn btn-primary btn-lg" id="seq-continue">Weiter</button>
          </div></div>
        </div></div>`;
      document.getElementById('seq-continue')?.addEventListener('click', () => {
        SoundFX.click();
        this.container.innerHTML = '';
        onComplete({ mode: 'challenge', correct: Boolean(winner?.correct), partial: sorted.some(e => e.correct), score: winner?.score || 0, rankings: sorted, topic: task.topic, miniGameId: task.miniGameId });
      });
      return;
    }

    const correctCount = rankings.filter(r => r.correct).length;
    const success = correctCount === players.length;
    const partial = correctCount > 0;
    this.container.innerHTML = `
      <div class="minigame-overlay"><div class="minigame-container">
        <div id="minigame-game-area"><div class="pc-results">
          <h3>${success ? 'Team perfekt!' : partial ? 'Team fast am Ziel!' : 'Weiter üben!'}</h3>
          <button class="btn btn-primary btn-lg" id="seq-continue">Weiter</button>
        </div></div>
      </div></div>`;
    document.getElementById('seq-continue')?.addEventListener('click', () => {
      SoundFX.click();
      this.container.innerHTML = '';
      onComplete({ mode: 'team', correct: success, partial, score: Math.round((correctCount / players.length) * 100), players, topic: task.topic, miniGameId: task.miniGameId });
    });
  }

  _launchPartyChallenge(explicitTopic, onComplete) {
    injectPartyChallengeStyles();

    const players = this.game.getPlayers().filter(player => !player.finished);
    if (players.length === 0) {
      onComplete({ mode: 'challenge', rankings: [] });
      return;
    }

    const task = generateTask(
      this.settings.activeTopics,
      this.settings.difficulty,
      'challenge',
      explicitTopic
    );
    const questions = players.map((_, index) => createChallengeQuestion(task, index));
    let playerIndex = 0;
    const rankings = [];

    const renderTurn = () => {
      const player = players[playerIndex];
      const question = questions[playerIndex];
      const startedAt = performance.now();

      this.container.innerHTML = `
        <div class="minigame-overlay" id="minigame-overlay">
          <div class="minigame-container party-challenge-shell">
            <div class="minigame-header">
              <div class="microgame-mode-chip">Alle spielen</div>
              <div class="minigame-title">
                <span>${iconChallenge(22)}</span>
                <span>Party-Blitzduell</span>
              </div>
            </div>
            <div class="minigame-instructions" aria-live="polite">
              Jeder ist kurz dran. Schnell richtig antworten bringt mehr Punkte!
            </div>
            <div id="minigame-game-area">
              <div class="pc-stage">
                <div class="pc-player-card">
                  ${player.getAvatarHTML(118)}
                  <div>
                    <span>Jetzt dran</span>
                    <strong>${escapeHtml(player.name)}</strong>
                    <small>${playerIndex + 1}/${players.length}</small>
                  </div>
                </div>
                <div class="pc-question-card">
                  <div class="pc-meter"><i style="width:${Math.round((playerIndex / players.length) * 100)}%"></i></div>
                  <span>${escapeHtml(question.badge)}</span>
                  <h3>${escapeHtml(question.prompt)}</h3>
                  <div class="pc-options">
                    ${question.options.map((option, optionIndex) => `
                      <button class="pc-option" type="button" data-index="${optionIndex}" data-correct="${option.correct ? 'true' : 'false'}">
                        ${escapeHtml(option.label)}
                      </button>
                    `).join('')}
                  </div>
                </div>
                <div class="pc-score-lane">
                  ${rankings.map((entry, index) => `
                    <div class="pc-score-chip">
                      <strong>${index + 1}</strong>
                      ${entry.player.getTokenHTML(28)}
                      <span>${escapeHtml(entry.player.name)}</span>
                      <small>${entry.score}</small>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      this.container.querySelectorAll('.pc-option').forEach(button => {
        button.addEventListener('click', () => {
          SoundFX.click();
          const isCorrect = button.dataset.correct === 'true';
          const timeMs = Math.round(performance.now() - startedAt);
          const speedBonus = Math.max(0, 100 - Math.floor(timeMs / 90));
          const score = isCorrect ? Math.max(30, speedBonus) : 0;

          this.container.querySelectorAll('.pc-option').forEach(option => {
            option.disabled = true;
            if (option.dataset.correct === 'true') option.classList.add('is-answer');
          });
          button.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
          if (isCorrect) SoundFX.correct();
          else SoundFX.wrong();

          rankings.push({
            player,
            score,
            timeMs,
            correct: isCorrect,
            prompt: question.prompt,
            answer: question.options[Number(button.dataset.index)]?.label || ''
          });

          setTimeout(() => {
            playerIndex++;
            if (playerIndex >= players.length) {
              renderRankings();
            } else {
              renderTurn();
            }
          }, isCorrect ? 720 : 980);
        });
      });
    };

    const renderRankings = () => {
      const sorted = [...rankings].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.timeMs - b.timeMs;
      });
      const winner = sorted[0];
      this.container.innerHTML = `
        <div class="minigame-overlay" id="minigame-overlay">
          <div class="minigame-container party-challenge-shell">
            <div id="minigame-game-area">
              <div class="pc-results">
                <div class="pc-results-hero">
                  ${winner ? winner.player.getAvatarHTML(116) : ''}
                  <span>Blitzduell beendet</span>
                  <h3>${winner ? `${escapeHtml(winner.player.name)} gewinnt!` : 'Alle haben mitgespielt!'}</h3>
                </div>
                <div class="pc-rank-list">
                  ${sorted.map((entry, index) => `
                    <div class="pc-rank-row ${index === 0 ? 'winner' : ''}">
                      <strong>${index + 1}</strong>
                      ${entry.player.getTokenHTML(36)}
                      <span>${escapeHtml(entry.player.name)}</span>
                      <small>${entry.correct ? `${entry.score} Punkte` : 'daneben'}</small>
                    </div>
                  `).join('')}
                </div>
                <button class="btn btn-primary btn-lg" id="challenge-continue">Weiter</button>
              </div>
            </div>
          </div>
        </div>
      `;

      document.getElementById('challenge-continue')?.addEventListener('click', () => {
        SoundFX.click();
        this.container.innerHTML = '';
        onComplete({
          mode: 'challenge',
          correct: Boolean(winner?.correct),
          partial: sorted.some(entry => entry.correct),
          score: winner?.score || 0,
          rankings: sorted,
          topic: task.topic,
          miniGameId: 'party-blitzduell'
        });
      });
    };

    renderTurn();
  }

  _launchTeamRelay(explicitTopic, onComplete, context = {}) {
    injectPartyChallengeStyles();
    injectTeamRelayStyles();

    const currentPlayer = this.game.getCurrentPlayer();
    const fallbackPartner = this.game.getPlayers().find(player => !player.finished && player.id !== currentPlayer.id);
    const players = (context.players?.length ? context.players : [currentPlayer, fallbackPartner].filter(Boolean))
      .filter((player, index, arr) => player && arr.findIndex(item => item.id === player.id) === index);

    if (players.length === 0) {
      onComplete({ mode: 'team', correct: false, partial: false, score: 0, players: [] });
      return;
    }

    const task = generateTask(
      this.settings.activeTopics,
      this.settings.difficulty,
      'team',
      explicitTopic
    );
    const questions = players.map((_, index) => createChallengeQuestion(task, index));
    let playerIndex = 0;
    const answers = [];

    const renderTurn = () => {
      const player = players[playerIndex];
      const question = questions[playerIndex];

      this.container.innerHTML = `
        <div class="minigame-overlay" id="minigame-overlay">
          <div class="minigame-container party-challenge-shell team-relay-shell">
            <div class="minigame-header">
              <div class="microgame-mode-chip">Team-Runde</div>
              <div class="minigame-title">
                <span>${iconTeam(22)}</span>
                <span>Klebensfrei-Teamstaffel</span>
              </div>
            </div>
            <div class="minigame-instructions" aria-live="polite">
              Arbeitet zusammen: Jeder im Team löst eine Station.
            </div>
            <div id="minigame-game-area">
              <div class="pc-stage tr-stage">
                <div class="tr-team-card">
                  <div class="tr-team-avatars">
                    ${players.map(member => member.getAvatarHTML(82)).join('')}
                  </div>
                  <div>
                    <span>Teamstaffel</span>
                    <strong>${players.map(member => escapeHtml(member.name)).join(' + ')}</strong>
                    <small>Station ${playerIndex + 1}/${players.length}</small>
                  </div>
                </div>
                <div class="pc-question-card tr-question-card">
                  <div class="pc-meter"><i style="width:${Math.round((playerIndex / players.length) * 100)}%"></i></div>
                  <span>${escapeHtml(question.badge)}</span>
                  <h3>${escapeHtml(player.name)}: ${escapeHtml(question.prompt)}</h3>
                  <div class="pc-options">
                    ${question.options.map((option, optionIndex) => `
                      <button class="pc-option" type="button" data-index="${optionIndex}" data-correct="${option.correct ? 'true' : 'false'}">
                        ${escapeHtml(option.label)}
                      </button>
                    `).join('')}
                  </div>
                </div>
                <div class="pc-score-lane tr-lane">
                  ${players.map((member, index) => {
                    const answer = answers.find(item => item.player.id === member.id);
                    return `
                      <div class="pc-score-chip ${answer ? (answer.correct ? 'is-correct' : 'is-wrong') : ''}">
                        ${member.getTokenHTML(28)}
                        <span>${escapeHtml(member.name)}</span>
                        <small>${answer ? (answer.correct ? 'gelöst' : 'offen') : index === playerIndex ? 'dran' : 'wartet'}</small>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      this.container.querySelectorAll('.pc-option').forEach(button => {
        button.addEventListener('click', () => {
          SoundFX.click();
          const isCorrect = button.dataset.correct === 'true';

          this.container.querySelectorAll('.pc-option').forEach(option => {
            option.disabled = true;
            if (option.dataset.correct === 'true') option.classList.add('is-answer');
          });
          button.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
          if (isCorrect) SoundFX.correct();
          else SoundFX.wrong();

          answers.push({
            player,
            correct: isCorrect,
            score: isCorrect ? 100 : 0,
            answer: question.options[Number(button.dataset.index)]?.label || ''
          });

          setTimeout(() => {
            playerIndex++;
            if (playerIndex >= players.length) renderTeamResult();
            else renderTurn();
          }, isCorrect ? 720 : 980);
        });
      });
    };

    const renderTeamResult = () => {
      const correctCount = answers.filter(answer => answer.correct).length;
      const score = Math.round((correctCount / players.length) * 100);
      const success = correctCount === players.length;
      const partial = correctCount > 0;

      this.container.innerHTML = `
        <div class="minigame-overlay" id="minigame-overlay">
          <div class="minigame-container party-challenge-shell team-relay-shell">
            <div id="minigame-game-area">
              <div class="pc-results tr-results">
                <div class="pc-results-hero">
                  <div class="tr-team-avatars result">
                    ${players.map(member => member.getAvatarHTML(76)).join('')}
                  </div>
                  <span>Teamstaffel beendet</span>
                  <h3>${success ? 'Team perfekt!' : partial ? 'Team fast am Ziel!' : 'Weiter üben!'}</h3>
                </div>
                <div class="pc-rank-list">
                  ${answers.map(answer => `
                    <div class="pc-rank-row ${answer.correct ? 'winner' : ''}">
                      ${answer.player.getTokenHTML(36)}
                      <span>${escapeHtml(answer.player.name)}</span>
                      <small>${answer.correct ? 'Station gelöst' : 'daneben'}</small>
                    </div>
                  `).join('')}
                </div>
                <button class="btn btn-primary btn-lg" id="team-continue">Weiter</button>
              </div>
            </div>
          </div>
        </div>
      `;

      document.getElementById('team-continue')?.addEventListener('click', () => {
        SoundFX.click();
        this.container.innerHTML = '';
        onComplete({
          mode: 'team',
          correct: success,
          partial,
          score,
          players,
          answers,
          topic: task.topic,
          miniGameId: 'klebensfrei-teamstaffel'
        });
      });
    };

    renderTurn();
  }

  _showResult(result, task = this._lastTask) {
    const gameArea = document.getElementById('minigame-game-area');
    if (!gameArea) return;

    const feedback = getLearningFeedback(task, result);

    let icon, title, titleClass;
    if (result.timeout) {
      SoundFX.wrong();
      icon = iconTimer(48);
      title = 'Zeit abgelaufen!';
      titleClass = 'fail';
    } else if (result.correct) {
      SoundFX.correct();
      icon = iconParty(48);
      title = 'Super gemacht!';
      titleClass = 'success';
    } else if (result.partial) {
      SoundFX.correct();
      icon = iconCheck(48);
      title = 'Gut gemacht!';
      titleClass = 'partial';
    } else {
      SoundFX.wrong();
      icon = `<svg viewBox="0 0 48 48" width="48" height="48"><path d="M24 8 Q18 18 12 28 Q24 24 36 28 Q30 18 24 8Z" fill="#FFD54F" stroke="#F9A825" stroke-width="2"/><circle cx="24" cy="36" r="6" fill="#FFD54F" stroke="#F9A825" stroke-width="2"/></svg>`;
      title = 'Weiter üben!';
      titleClass = 'fail';
    }

    let coinsEarned = 0;
    if (result.correct) coinsEarned = 3;
    else if (result.partial) coinsEarned = 1;

    gameArea.innerHTML = `
      <div class="minigame-result">
        <div class="cardboard-result-card animate-bounce-in">
          <div class="result-icon">${icon}</div>
          <div class="result-title ${titleClass}" style="margin-top: 15px;">${title}</div>
          ${result.score !== undefined ? `
            <div style="font-size: var(--font-size-lg); font-family: var(--font-handwritten); color: var(--text-secondary); margin-top: 10px;">
              Ergebnis: ${result.score}%
            </div>
          ` : ''}
          ${coinsEarned > 0 ? `
            <div class="result-rewards" style="justify-content: center; margin-top: 20px;">
              <span class="coin animate-pop" style="background: rgba(255,215,0,0.2); padding: 5px 15px; border-radius: 20px; display: flex; align-items:center; gap: 10px;">
                ${iconCoin(24)} +${coinsEarned}
              </span>
            </div>
          ` : ''}
          ${!result.correct && !result.timeout ? `
            <div class="learning-feedback-card">
              <strong>${feedback.title}</strong>
              <p>${feedback.message}</p>
              ${result.correctAnswer ? `<p class="correct-answer">Richtige Antwort: <em>${escapeHtml(String(result.correctAnswer))}</em></p>` : ''}
            </div>
          ` : ''}
          <div style="margin-top: 30px;">
            <button class="btn btn-primary btn-lg" id="minigame-continue">Weiter</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('minigame-continue')?.addEventListener('click', () => {
      SoundFX.click();
      this.container.innerHTML = '';
      if (this.onComplete) {
        this.onComplete(result);
      }
    });
  }

  _startTimer(seconds, onTimeout) {
    let remaining = seconds;
    const timerEl = document.getElementById('timer-value');
    const timerContainer = document.getElementById('minigame-timer');
    
    this.timerInterval = setInterval(() => {
      remaining--;
      if (timerEl) timerEl.textContent = remaining;
      
      if (remaining <= 5 && timerContainer) {
        timerContainer.classList.add('warning');
      }
      if (remaining <= 3 && timerContainer) {
        timerContainer.classList.remove('warning');
        timerContainer.classList.add('danger');
      }
      
      if (remaining <= 0) {
        this._clearTimer();
        onTimeout();
      }
    }, 1000);
  }

  _clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  close() {
    this._clearTimer();
    this.container.innerHTML = '';
  }
}

function createChallengeQuestion(task, index = 0) {
  if (task.content?.type === 'silben') return createSyllableQuestion(task, index);
  if (task.content?.type === 'artikel') return createArticleQuestion(task, index);
  if (task.content?.type === 'satzbau') return createSentenceQuestion(task, index);
  return createWordTypeQuestion(task, index) || createArticleQuestion(task, index);
}

function createSyllableQuestion(task, index) {
  const words = task.content?.words || [];
  const item = words[index % Math.max(1, words.length)] || { word: 'Katze', syllables: ['Kat', 'ze'] };
  const answer = item.syllables.length;
  const values = uniqueNumbers([answer, answer - 1, answer + 1, answer + 2], 1, 5).slice(0, 3);
  return {
    badge: 'Nuba-Sprint',
    prompt: `Wie viele Silben hat "${item.word}"?`,
    options: shuffle(values).map(value => ({
      label: `${value} ${value === 1 ? 'Silbe' : 'Silben'}`,
      correct: value === answer
    }))
  };
}

function createArticleQuestion(task, index) {
  const items = task.content?.quizSets || [];
  const item = items[index % Math.max(1, items.length)] || { word: 'Baum', correct: 'der' };
  return {
    badge: 'Mira-Turbo',
    prompt: `Welcher Artikel gehört zu "${item.word}"?`,
    options: shuffle(['der', 'die', 'das']).map(article => ({
      label: article,
      correct: article === item.correct
    }))
  };
}

function createWordTypeQuestion(task, index) {
  const sets = task.content?.mixedSets || [];
  const set = sets[0];
  if (!set?.words?.length) return null;

  const word = set.words[index % set.words.length];
  const typeLabel = set.nomen?.includes(word) ? 'Nomen'
    : set.verben?.includes(word) ? 'Verb'
      : 'Adjektiv';

  return {
    badge: 'Zora-Blitz',
    prompt: `Welche Wortart ist "${word}"?`,
    options: shuffle(['Nomen', 'Verb', 'Adjektiv']).map(label => ({
      label,
      correct: label === typeLabel
    }))
  };
}

function createSentenceQuestion(task, index) {
  const items = task.content?.sentenceOrder || [];
  const item = items[index % Math.max(1, items.length)];
  const words = item?.words || ['Der', 'Hund', 'rennt'];
  const answer = words[0];
  return {
    badge: 'Leo-Start',
    prompt: `Welches Wort beginnt den Satz "${words.join(' ')}"?`,
    options: shuffle(words.slice(0, 4)).map(word => ({
      label: word,
      correct: word === answer
    }))
  };
}

function uniqueNumbers(values, min, max) {
  const result = [];
  values.forEach(value => {
    const bounded = Math.max(min, Math.min(max, value));
    if (!result.includes(bounded)) result.push(bounded);
  });
  let fill = min;
  while (result.length < 3 && fill <= max) {
    if (!result.includes(fill)) result.push(fill);
    fill++;
  }
  return result;
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

function injectPartyChallengeStyles() {
  if (document.getElementById('party-challenge-css')) return;

  const style = document.createElement('style');
  style.id = 'party-challenge-css';
  style.textContent = `
    .party-challenge-shell {
      background:
        radial-gradient(circle at 18% 18%, rgba(255,255,255,0.7), transparent 30%),
        linear-gradient(135deg, #fff8df, #e0f7ff 58%, #f5e7ff);
    }

    .pc-stage {
      width: min(100%, 920px);
      min-height: 420px;
      display: grid;
      grid-template-columns: minmax(170px, 0.38fr) minmax(330px, 1fr);
      grid-template-rows: 1fr auto;
      gap: 16px;
      color: #3b2b1a;
    }

    .pc-player-card,
    .pc-question-card,
    .pc-score-lane,
    .pc-results {
      border: 3px solid rgba(93,64,55,0.14);
      border-radius: 28px;
      background: rgba(255,255,255,0.76);
      box-shadow: 0 16px 30px rgba(61,43,30,0.14);
    }

    .pc-player-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 14px;
      min-height: 322px;
      padding: 18px;
      text-align: center;
    }

    .pc-player-card span,
    .pc-player-card small {
      display: block;
      font-weight: 1000;
      color: #6d4c41;
    }

    .pc-player-card strong {
      display: block;
      margin: 4px 0;
      font-family: var(--font-family-display);
      font-size: clamp(34px, 4vw, 52px);
      color: #3b2b1a;
      line-height: 0.95;
    }

    .pc-question-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 18px;
      min-height: 322px;
      padding: clamp(18px, 3vw, 34px);
    }

    .pc-meter {
      height: 12px;
      border-radius: 999px;
      background: rgba(93,64,55,0.11);
      overflow: hidden;
      box-shadow: inset 0 2px 4px rgba(61,43,30,0.12);
    }

    .pc-meter i {
      display: block;
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, #ff3366, #ffd93d, #38bdf8);
      transition: width 220ms ease;
    }

    .pc-question-card > span {
      align-self: flex-start;
      padding: 7px 12px;
      border-radius: 999px;
      background: rgba(255,255,255,0.82);
      color: #0284c7;
      font-weight: 1000;
      box-shadow: 0 5px 12px rgba(61,43,30,0.08);
    }

    .pc-question-card h3 {
      margin: 0;
      font-family: var(--font-family-display);
      font-size: clamp(30px, 5vw, 54px);
      line-height: 1;
      color: #3b2b1a;
    }

    .pc-options {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .pc-option {
      min-height: 82px;
      border: 0;
      border-radius: 22px;
      background:
        radial-gradient(circle at 35% 22%, rgba(255,255,255,0.86), rgba(255,255,255,0) 42%),
        linear-gradient(135deg, #ffffff, #ffe8f3);
      color: #3b2b1a;
      cursor: pointer;
      font-family: var(--font-family-display);
      font-size: clamp(22px, 3vw, 34px);
      box-shadow: 0 10px 0 #eac1cf, 0 17px 26px rgba(61,43,30,0.16);
      transition: transform 160ms var(--ease-bounce), box-shadow 160ms ease;
    }

    .pc-option:hover:not(:disabled) {
      transform: translateY(-4px) rotate(-1deg);
    }

    .pc-option.is-correct,
    .pc-option.is-answer {
      background: linear-gradient(135deg, #ffffff, #cff7d3);
      box-shadow: 0 10px 0 #8bd39b, 0 17px 26px rgba(61,43,30,0.16);
    }

    .pc-option.is-wrong {
      background: linear-gradient(135deg, #ffffff, #ffd6cc);
      box-shadow: 0 10px 0 #f2998a, 0 17px 26px rgba(61,43,30,0.16);
      animation: pc-shake 260ms ease both;
    }

    .pc-score-lane {
      grid-column: 1 / -1;
      display: flex;
      gap: 8px;
      min-height: 70px;
      padding: 9px;
      overflow-x: auto;
    }

    .pc-score-chip,
    .pc-rank-row {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border-radius: 999px;
      background: rgba(255,255,255,0.78);
      color: #4e342e;
      font-weight: 1000;
      box-shadow: 0 6px 14px rgba(61,43,30,0.1);
    }

    .pc-score-chip {
      flex: 0 0 auto;
      min-height: 46px;
      padding: 5px 12px 5px 6px;
    }

    .pc-results {
      width: min(100%, 760px);
      margin: 0 auto;
      padding: clamp(20px, 4vw, 38px);
      text-align: center;
      color: #3b2b1a;
    }

    .pc-results-hero {
      display: grid;
      place-items: center;
      gap: 8px;
      margin-bottom: 20px;
    }

    .pc-results-hero span {
      font-weight: 1000;
      color: #0284c7;
      text-transform: uppercase;
      font-size: 12px;
    }

    .pc-results-hero h3 {
      margin: 0;
      font-family: var(--font-family-display);
      font-size: clamp(38px, 6vw, 64px);
      line-height: 0.95;
      color: #2e7d32;
    }

    .pc-rank-list {
      display: grid;
      gap: 8px;
      margin: 18px auto 24px;
      max-width: 520px;
    }

    .pc-rank-row {
      min-height: 54px;
      padding: 7px 14px 7px 8px;
    }

    .pc-rank-row strong {
      width: 28px;
      color: #0284c7;
    }

    .pc-rank-row span {
      flex: 1;
      text-align: left;
    }

    .pc-rank-row small {
      color: #2e7d32;
      font-weight: 1000;
    }

    .pc-rank-row.winner {
      background: linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,239,160,0.82));
      box-shadow: 0 0 0 4px rgba(255,217,61,0.18), 0 8px 18px rgba(61,43,30,0.14);
    }

    @keyframes pc-shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-7px); }
      75% { transform: translateX(7px); }
    }

    @media (max-width: 720px) {
      .pc-stage {
        grid-template-columns: 1fr;
      }

      .pc-player-card {
        min-height: 150px;
        flex-direction: row;
      }

      .pc-question-card {
        min-height: 0;
      }

      .pc-options {
        grid-template-columns: 1fr;
      }
    }
  `;
  document.head.appendChild(style);
}

function injectTeamRelayStyles() {
  if (document.getElementById('team-relay-css')) return;

  const style = document.createElement('style');
  style.id = 'team-relay-css';
  style.textContent = `
    .team-relay-shell {
      background:
        radial-gradient(circle at 18% 18%, rgba(255,255,255,0.72), transparent 30%),
        linear-gradient(135deg, #e7fff5, #fff8df 54%, #e0f7ff);
    }

    .tr-stage {
      grid-template-columns: minmax(210px, 0.44fr) minmax(330px, 1fr);
    }

    .tr-team-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 18px;
      min-height: 322px;
      padding: 18px;
      text-align: center;
      border: 3px solid rgba(93,64,55,0.14);
      border-radius: 28px;
      background:
        radial-gradient(circle at 50% 24%, rgba(255,255,255,0.82), rgba(255,255,255,0) 42%),
        rgba(255,255,255,0.76);
      box-shadow: 0 16px 30px rgba(61,43,30,0.14);
    }

    .tr-team-avatars {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 102px;
      isolation: isolate;
    }

    .tr-team-avatars .character-avatar {
      margin-left: -18px;
      border: 5px solid rgba(255,255,255,0.86);
      border-radius: 50%;
      background: #fffdf7;
      box-shadow: 0 10px 22px rgba(61,43,30,0.16);
    }

    .tr-team-avatars .character-avatar:first-child {
      margin-left: 0;
    }

    .tr-team-avatars.result {
      min-height: 88px;
    }

    .tr-team-card span,
    .tr-team-card small {
      display: block;
      font-weight: 1000;
      color: #6d4c41;
    }

    .tr-team-card strong {
      display: block;
      margin: 4px 0;
      font-family: var(--font-family-display);
      font-size: clamp(26px, 3.6vw, 42px);
      color: #3b2b1a;
      line-height: 1;
    }

    .tr-question-card h3 {
      font-size: clamp(26px, 4.4vw, 48px);
    }

    .tr-lane .pc-score-chip.is-correct {
      background: linear-gradient(135deg, rgba(255,255,255,0.92), rgba(207,247,211,0.82));
    }

    .tr-lane .pc-score-chip.is-wrong {
      background: linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,214,204,0.82));
    }

    .tr-results .pc-rank-row {
      grid-template-columns: auto minmax(0, 1fr) auto;
    }

    @media (max-width: 720px) {
      .tr-stage {
        grid-template-columns: 1fr;
      }

      .tr-team-card {
        min-height: 160px;
      }
    }
  `;
  document.head.appendChild(style);
}
