/**
 * App.js - Main application entry point
 * Uses hand-drawn illustrated animal characters
 */

import confetti from 'canvas-confetti';
import { ScreenManager } from './ui/screen-manager.js';
import { GameController } from './engine/game-controller.js';
import { SettingsManager } from './settings/settings-manager.js';
import { ProfileManager } from './settings/profiles.js';
import { GameSaveManager } from './settings/game-save.js';
import { SetupRenderer } from './ui/render-setup.js';
import { BoardRenderer } from './ui/render-board.js';
import { MinigameRenderer } from './ui/render-minigame.js';
import { SoundFX } from './ui/sounds.js';
import { TTS } from './ui/tts.js';
import { firebase } from './network/firebase.js';
import { 
  iconDice, iconHome, iconCoin, iconStar
} from './ui/icons.js';
import { KLEBENSFREI_COLLECTIBLES, STORY_PROPS } from './asset-manifest.js';
import { TOPICS } from './learning/topic-registry.js';

class App {
  constructor() {
    this.screenManager = new ScreenManager();
    this.gameController = new GameController();
    this.settings = new SettingsManager();
    this.setupRenderer = null;
    this.boardRenderer = null;
    this.minigameRenderer = null;
  }

  init() {
    this.screenManager.register('start', document.getElementById('screen-start'));
    this.screenManager.register('setup', document.getElementById('screen-setup'));
    this.screenManager.register('board', document.getElementById('screen-board'));
    this.screenManager.register('minigame', document.getElementById('screen-minigame'));
    this.screenManager.register('results', document.getElementById('screen-results'));

    this.screenManager.show('start');
    this._setupStartScreen();
    this._setupGameEvents();
    
    // Expose for debugging and manual minigame triggers
    window.app = this;
    
    console.log('Deutsch Party Brett - initialized!');
  }

  _setupStartScreen() {
    this._updateContinueButton();

    document.getElementById('btn-new-game')?.addEventListener('click', () => {
      SoundFX.click();
      GameSaveManager.clear();
      this.settings.reset();
      this._showSetup();
    });

    document.getElementById('btn-continue')?.addEventListener('click', () => {
      SoundFX.click();
      const saved = GameSaveManager.load();
      if (saved) {
        this._resumeGame(saved);
      } else {
        this._showSetup();
      }
    });

    document.getElementById('btn-profiles')?.addEventListener('click', () => {
      SoundFX.click();
      this._showProfilePicker();
    });

    document.getElementById('btn-lobby')?.addEventListener('click', () => {
      SoundFX.click();
      this._showLobbyDialog();
    });
  }

  _updateContinueButton() {
    const btn = document.getElementById('btn-continue');
    const summary = GameSaveManager.getSummary();
    if (!btn) return;
    if (summary) {
      btn.disabled = false;
      btn.style.opacity = '1';
      btn.textContent = `Fortsetzen — Runde ${summary.round} (${summary.currentPlayer})`;
    } else {
      btn.disabled = true;
      btn.style.opacity = '0.45';
      btn.textContent = 'Fortsetzen';
    }
  }

  _resumeGame(saved) {
    if (!saved?.players?.length || !saved?.fields?.length) {
      GameSaveManager.clear();
      this._updateContinueButton();
      alert('Gespeicherter Spielstand war beschädigt und wurde gelöscht.');
      this._showSetup();
      return;
    }
    this.settings.loadSnapshot(saved.settings);
    this.gameController.importState(saved);
    this.screenManager.show('board');

    const boardContainer = document.getElementById('board-content');
    this.boardRenderer = new BoardRenderer(boardContainer, this.gameController);

    const minigameContainer = document.getElementById('minigame-content');
    this.minigameRenderer = new MinigameRenderer(minigameContainer, this.settings, this.gameController);

    this.boardRenderer.onMinigameNeeded = (result) => this._launchMinigame(result.mode, result.topic, result);
    this._connectBoardNavigation();
    this.boardRenderer.render();
    this.boardRenderer.showToast(`Willkommen zurück! Runde ${saved.turn?.round ?? 1}`, 'success');
  }

  _showLobbyDialog() {
    const code = prompt('Lobby-Code eingeben (leer = neue Lobby erstellen):');
    if (code === null) return;

    if (!code.trim()) {
      const name = prompt('Dein Name:', 'Spieler 1') || 'Spieler 1';
      const lobby = firebase.createLobby(name, 0);
      alert(`Lobby erstellt!\nCode: ${lobby.code}\n\nTeile den Code — andere Spieler können auf demselben Gerät/Browser beitreten.`);
      this.settings.gameMode = 'party';
      this._showSetup();
      return;
    }

    const name = prompt('Dein Name:', 'Spieler 2') || 'Spieler 2';
    const lobby = firebase.joinLobby(code.trim().toUpperCase(), name, 1);
    if (!lobby) {
      alert('Lobby nicht gefunden. Prüfe den Code!');
      return;
    }
    alert(`Beigetreten: ${lobby.code} (${lobby.players.length} Spieler)`);
    this.settings.gameMode = 'party';
    this._showSetup();
  }

  _showSetup() {
    this.screenManager.show('setup');
    const setupContainer = document.getElementById('setup-content');
    this.setupRenderer = new SetupRenderer(setupContainer, this.settings, (players, settings) => {
      this._startGame(players, settings);
    });
    this.setupRenderer.render();
  }

  _startGame(players, settings) {
    this.gameController.initGame(players, settings.getSnapshot());
    GameSaveManager.save(this.gameController, settings.getSnapshot());
    if (firebase.lobbyCode && firebase.isHost) {
      firebase.syncGameState(this.gameController.exportState(settings.getSnapshot()));
    }
    this.screenManager.show('board');
    
    const boardContainer = document.getElementById('board-content');
    this.boardRenderer = new BoardRenderer(boardContainer, this.gameController);
    
    const minigameContainer = document.getElementById('minigame-content');
    this.minigameRenderer = new MinigameRenderer(minigameContainer, settings, this.gameController);
    
    this.boardRenderer.onMinigameNeeded = (result) => this._launchMinigame(result.mode, result.topic, result);
    this._connectBoardNavigation();
    this.boardRenderer.render();
  }

  _connectBoardNavigation() {
    if (!this.boardRenderer) return;
    this.boardRenderer.onExitToStart = () => {
      GameSaveManager.save(this.gameController, this.settings.getSnapshot());
      this.screenManager.show('start');
      this._updateContinueButton();
    };
    this.boardRenderer.onRestartRequested = () => {
      GameSaveManager.clear();
      this.settings.reset();
      this._updateContinueButton();
      this._showSetup();
    };
  }

  _launchMinigame(mode, topic, context = {}) {
    this.screenManager.show('minigame');
    SoundFX.minigameStart();
    const actingPlayer = this.gameController.getCurrentPlayer();
    const beforeStats = actingPlayer ? {
      coins: actingPlayer.coins,
      stars: actingPlayer.stars,
      collectibles: [...(actingPlayer.collectibles || [])],
      tasksAttempted: actingPlayer.stats.tasksAttempted,
      tasksCorrect: actingPlayer.stats.tasksCorrect,
      players: this.gameController.getPlayers().map(player => ({
        id: player.id,
        coins: player.coins,
        stars: player.stars,
        collectibles: [...(player.collectibles || [])],
        tasksAttempted: player.stats.tasksAttempted,
        tasksCorrect: player.stats.tasksCorrect,
        challengeWins: player.stats.challengeWins
      }))
    } : null;

    this.minigameRenderer.launch(mode, topic, (result) => {
      this.gameController.onMinigameComplete(result);
      GameSaveManager.save(this.gameController, this.settings.getSnapshot());
      if (firebase.lobbyCode && firebase.isHost) {
        firebase.syncGameState(this.gameController.exportState(this.settings.getSnapshot()));
      }
      if (this.gameController.state === 'finished') {
        GameSaveManager.clear();
        this._showResults();
      } else {
        this.screenManager.show('board');
        this.boardRenderer.update();
        this.boardRenderer.showRoundResult(this._buildRoundSummary(actingPlayer, beforeStats, result));
        if (result.correct || result.partial) {
          this._spawnRewardConfetti(result.correct);
        }
      }
    }, context);
  }

  _buildRoundSummary(player, beforeStats, result) {
    const nextPlayer = this.gameController.getCurrentPlayer();
    if (!player || !beforeStats) return { result, nextPlayer };

    if (result.mode === 'challenge') {
      const beforeById = new Map((beforeStats.players || []).map(entry => [entry.id, entry]));
      const challengeRankings = (result.rankings || []).map((entry, index) => {
        const before = beforeById.get(entry.player.id) || {};
        const beforeCollectibles = new Set(before.collectibles || []);
        const newCollectibles = (entry.player.collectibles || [])
          .filter(id => !beforeCollectibles.has(id))
          .map(id => KLEBENSFREI_COLLECTIBLES.find(item => item.id === id))
          .filter(Boolean);

        return {
          ...entry,
          rank: index + 1,
          coinDelta: entry.player.coins - (before.coins || 0),
          starDelta: entry.player.stars - (before.stars || 0),
          newCollectibles
        };
      });

      return {
        player,
        result,
        nextPlayer,
        challengeRankings
      };
    }

    if (result.mode === 'team') {
      const beforeById = new Map((beforeStats.players || []).map(entry => [entry.id, entry]));
      const teamPlayers = result.players || [player];
      const teamResults = teamPlayers.map(teamPlayer => {
        const before = beforeById.get(teamPlayer.id) || {};
        const beforeCollectibles = new Set(before.collectibles || []);
        const newCollectibles = (teamPlayer.collectibles || [])
          .filter(id => !beforeCollectibles.has(id))
          .map(id => KLEBENSFREI_COLLECTIBLES.find(item => item.id === id))
          .filter(Boolean);

        return {
          player: teamPlayer,
          coinDelta: teamPlayer.coins - (before.coins || 0),
          starDelta: teamPlayer.stars - (before.stars || 0),
          newCollectibles
        };
      });

      return {
        player,
        result,
        nextPlayer,
        teamResults
      };
    }

    const beforeCollectibles = new Set(beforeStats.collectibles || []);
    const newCollectibles = (player.collectibles || [])
      .filter(id => !beforeCollectibles.has(id))
      .map(id => KLEBENSFREI_COLLECTIBLES.find(item => item.id === id))
      .filter(Boolean);

    return {
      player,
      result,
      nextPlayer,
      coinDelta: player.coins - beforeStats.coins,
      starDelta: player.stars - beforeStats.stars,
      newCollectibles,
      tasksAttemptedDelta: player.stats.tasksAttempted - beforeStats.tasksAttempted,
      tasksCorrectDelta: player.stats.tasksCorrect - beforeStats.tasksCorrect
    };
  }

  _showResults() {
    this.screenManager.show('results');
    const resultsContainer = document.getElementById('results-content');
    
    const players = this.gameController.getPlayers();
    const rankings = [...players].sort((a, b) => b.getTotalPoints() - a.getTotalPoints());
    const winner = rankings[0];
    const partyFinds = new Set(players.flatMap(player => player.collectibles || []));
    const totalTasks = players.reduce((sum, player) => sum + player.stats.tasksAttempted, 0);
    const totalCorrect = players.reduce((sum, player) => sum + player.stats.tasksCorrect, 0);
    const totalTeamTasks = players.reduce((sum, player) => sum + player.stats.teamTasks, 0);
    const totalChallengeWins = players.reduce((sum, player) => sum + player.stats.challengeWins, 0);
    const partyAccuracy = totalTasks > 0 ? Math.round((totalCorrect / totalTasks) * 100) : 0;

    const podiumHTML = rankings.slice(0, 3).map((player, i) => {
      const medal = ['1', '2', '3'][i];
      return `
        <div class="final-podium-place rank-${i + 1}">
          <div class="final-medal">${medal}</div>
          <div class="final-podium-avatar">${player.getAvatarHTML(i === 0 ? 118 : 92)}</div>
          <strong>${player.name}</strong>
          <span>${player.getTotalPoints()} Punkte</span>
          <small>${iconCoin(15)} ${player.coins} ${iconStar(15)} ${player.stars}</small>
        </div>
      `;
    }).join('');

    const collectionHTML = KLEBENSFREI_COLLECTIBLES.map(item => {
      const found = partyFinds.has(item.id);
      return `
        <div class="final-find ${found ? 'found' : 'locked'}">
          <img src="${item.spriteImg}" alt="">
          <span>${found ? item.name_de : 'Verborgen'}</span>
        </div>
      `;
    }).join('');

    const statsHTML = rankings.map(player => `
      <div class="final-score-row">
        ${player.getTokenHTML(28)}
        <strong>${player.name}</strong>
        <span>${iconCoin(14)} ${player.coins}</span>
        <span>${iconStar(14)} ${player.stars}</span>
        <span>${player.stats.tasksAttempted} Aufgaben</span>
        <span>${player.getAccuracy()}%</span>
      </div>
    `).join('');

    const topicStats = this._buildTopicReport(rankings);
    const learnReportHTML = topicStats.length ? `
      <div class="final-panel final-learn-panel">
        <div class="final-panel-title">
          <span>Lernbericht</span>
          <strong>${partyAccuracy}% Trefferquote</strong>
        </div>
        <div class="final-learn-list">
          ${topicStats.map(t => `
            <div class="final-learn-row ${t.weak ? 'weak' : ''}">
              <strong>${t.label}</strong>
              <span>${t.correct}/${t.attempted}</span>
              <small>${t.weak ? 'Nochmal üben!' : 'Gut!'}</small>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    resultsContainer.innerHTML = `
      <div class="results-container final-ceremony">
        ${STORY_PROPS?.[0] ? `<img class="final-map-mark" src="${STORY_PROPS[0].spriteImg}" alt="" aria-hidden="true">` : ''}
        <section class="final-hero animate-bounce-in">
          <div class="final-winner-card">
            <span class="final-ribbon">Abschlussfeier</span>
            <div class="final-winner-avatar">${winner ? winner.getAvatarHTML(132) : ''}</div>
            <div>
              <p>Gewonnen hat</p>
              <h2>${winner ? winner.name : 'das Team'}</h2>
              <strong>${winner ? winner.getTotalPoints() : 0} Punkte</strong>
            </div>
          </div>
          <div class="final-party-stats">
            <div><strong>${partyAccuracy}%</strong><span>Trefferquote</span></div>
            <div><strong>${partyFinds.size}/${KLEBENSFREI_COLLECTIBLES.length}</strong><span>Klebensfrei-Funde</span></div>
            <div><strong>${totalTeamTasks}</strong><span>Teamstationen</span></div>
            <div><strong>${totalChallengeWins}</strong><span>Duellsiege</span></div>
          </div>
        </section>

        <section class="final-podium">${podiumHTML}</section>

        <section class="final-lower">
          ${learnReportHTML}
          <div class="final-panel final-collection-panel">
            <div class="final-panel-title">
              <span>Entdeckerbuch</span>
              <strong>${partyFinds.size} von ${KLEBENSFREI_COLLECTIBLES.length}</strong>
            </div>
            <div class="final-find-grid">${collectionHTML}</div>
          </div>

          <div class="final-panel final-score-panel">
            <div class="final-panel-title">
              <span>Lernrunde</span>
              <strong>${totalCorrect}/${totalTasks || 0} gelöst</strong>
            </div>
            <div class="final-score-list">${statsHTML}</div>
          </div>
        </section>

        <div class="results-actions">
          <button class="btn btn-primary btn-lg" id="btn-play-again">${iconDice(20)} Nochmal spielen</button>
          <button class="btn btn-secondary" id="btn-to-start">${iconHome(18)} Zum Start</button>
        </div>
      </div>
    `;

    this._spawnFinalConfetti();
    document.getElementById('btn-play-again')?.addEventListener('click', () => this._showSetup());
    document.getElementById('btn-to-start')?.addEventListener('click', () => this.screenManager.show('start'));
  }

  _buildTopicReport(rankings) {
    const topicMap = {};
    for (const player of rankings) {
      const accuracy = player.getAccuracy();
      for (const topicId of this.settings.activeTopics || []) {
        if (!topicMap[topicId]) {
          topicMap[topicId] = { attempted: 0, correct: 0 };
        }
        const share = Math.max(1, Math.round(player.stats.tasksAttempted / (this.settings.activeTopics.length || 1)));
        topicMap[topicId].attempted += share;
        topicMap[topicId].correct += Math.round(share * accuracy / 100);
      }
    }
    return Object.entries(topicMap).map(([id, stats]) => {
      const meta = TOPICS.find(t => t.id === id);
      const pct = stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0;
      return {
        id,
        label: meta?.label_de || id,
        ...stats,
        weak: pct < 60
      };
    }).sort((a, b) => (a.correct / Math.max(1, a.attempted)) - (b.correct / Math.max(1, b.attempted)));
  }

  _showProfilePicker() {
    const profiles = ProfileManager.getAll();
    if (profiles.length === 0) {
      alert('Noch keine Profile gespeichert!');
      return;
    }
    const choice = profiles.map(p => p.name).join('\n');
    const selected = prompt(`Profil wählen:\n${choice}`);
    if (selected) {
      const profile = ProfileManager.load(selected);
      if (profile) { this.settings.loadSnapshot(profile.settings); this._showSetup(); }
    }
  }

  _setupGameEvents() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.gameController?.state === 'playing') {
        GameSaveManager.save(this.gameController, this.settings.getSnapshot());
      }
    });
    window.addEventListener('game:autosave', () => {
      if (this.gameController?.state === 'playing') {
        GameSaveManager.save(this.gameController, this.settings.getSnapshot());
      }
    });
    window.addEventListener('game:reward', (e) => {
      const { reward } = e.detail;
      if (reward?.items?.some(item => item.type === 'collectible')) SoundFX.stickerUnlock();
      else if (reward?.items?.some(item => item.type === 'stars')) SoundFX.starCollect();
      else if (reward?.items?.some(item => item.type === 'coins' && item.amount > 0)) SoundFX.coinCollect();
      else SoundFX.reward();
      if (reward?.description) this.boardRenderer?.showToast(reward.description, 'success');
    });
    window.addEventListener('game:gameEnd', () => {
      SoundFX.gameEnd();
      setTimeout(() => this._showResults(), 1000);
    });
  }

  _spawnConfetti() {
    confetti({
      particleCount: 110,
      spread: 85,
      origin: { y: 0.6 },
      colors: ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6C5CE7', '#FF8A5C', '#A3DE83']
    });
    setTimeout(() => {
      confetti({
        particleCount: 70,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        colors: ['#ec4899', '#38bdf8', '#10b981', '#f59e0b']
      });
      confetti({
        particleCount: 70,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
        colors: ['#ec4899', '#38bdf8', '#10b981', '#f59e0b']
      });
    }, 220);

    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    const colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6C5CE7', '#FF8A5C', '#A3DE83', '#FF69B4', '#00CED1'];
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
      piece.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(piece);
    }
    setTimeout(() => container.remove(), 5000);
  }

  _spawnRewardConfetti(isBigWin = false) {
    confetti({
      particleCount: isBigWin ? 46 : 24,
      spread: isBigWin ? 62 : 42,
      startVelocity: isBigWin ? 36 : 24,
      origin: { x: 0.5, y: 0.74 },
      colors: ['#FF3366', '#FFD93D', '#38BDF8', '#10B981', '#EC4899']
    });
  }

  _spawnFinalConfetti() {
    const colors = ['#FF3366', '#FFD93D', '#38BDF8', '#10B981', '#EC4899', '#FF8A5C'];
    confetti({
      particleCount: 46,
      angle: 58,
      spread: 58,
      startVelocity: 34,
      origin: { x: 0.02, y: 0.78 },
      colors
    });
    confetti({
      particleCount: 46,
      angle: 122,
      spread: 58,
      startVelocity: 34,
      origin: { x: 0.98, y: 0.78 },
      colors
    });
  }
}

const initApp = () => {
  const app = new App();
  app.init();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
