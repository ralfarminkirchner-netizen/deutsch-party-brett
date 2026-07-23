/**
 * Render Board - Board game screen with illustrated character tokens
 */

import { getFieldMeta, getFieldIconSVG } from '../engine/field-types.js';
import { Dice } from '../engine/dice.js';
import { renderCharacterToken, renderCharacterAvatar } from '../ui/characters.js';
import { iconCoin, iconStar } from '../ui/icons.js';
import { STORY_PROPS, KLEBENSFREI_COLLECTIBLES } from '../asset-manifest.js';
import { SoundFX } from '../ui/sounds.js';

export class BoardRenderer {
  constructor(containerEl, gameController) {
    this.container = containerEl;
    this.game = gameController;
    this.onMinigameNeeded = null;
    this.onExitToStart = null;
    this.onRestartRequested = null;
    this.focusAlbumPlayerId = null;
  }

  _renderTurnBar() {
    const players = this.game.getPlayers();
    const currentPlayer = this.game.getCurrentPlayer();
    const avatarIndex = currentPlayer.colorIndex !== undefined ? currentPlayer.colorIndex : players.indexOf(currentPlayer);
    
    return `
      <div class="turn-bar" style="position:absolute; top:20px; left:20px; z-index:200; display:flex; align-items:center; gap:14px; background:rgba(255,255,255,0.95); border: 3px solid #d7ccc8; border-radius:100px; padding:8px 24px 8px 8px; box-shadow:0 6px 20px rgba(0,0,0,0.25);">
        <div style="background:#efebe9; border-radius:50%; padding:4px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
          ${renderCharacterToken(avatarIndex, 44)}
        </div>
        <div style="display:flex; flex-direction:column;">
          <span style="font-family:'Fredoka One',cursive; font-size:20px; color:#5d4037; line-height:1;">${currentPlayer.name}</span>
          <span style="font-size:14px; color:#8d6e63; font-weight:bold;">Runde ${this.game.turnManager.getRound()}</span>
        </div>
      </div>`;
  }

  _renderBoardHud(players, currentPlayer) {
    return `
      <div class="party-board-hud">
        <div class="party-turn-chip">
          ${renderCharacterToken(currentPlayer.colorIndex ?? 0, 44)}
          <div>
            <strong>${currentPlayer.name}</strong>
            <span>Runde ${this.game.turnManager.getRound()} · noch ${Math.max(0, this.game.board.totalFields - 1 - currentPlayer.position)} Felder</span>
          </div>
          <button class="party-menu-trigger" id="open-game-menu" type="button" aria-label="Spiel pausieren" title="Spiel pausieren">•••</button>
        </div>
        <div class="party-score-strip">
          ${players.map(p => this._renderScoreEntry(p, currentPlayer)).join('')}
        </div>
      </div>
      ${this._renderAlbumButton(currentPlayer)}
      <div class="party-field-key">
        ${this._renderLegend()}
      </div>
    `;
  }

  render() {
    const players = this.game.getPlayers();
    const board = this.game.board;
    const currentPlayer = this.game.getCurrentPlayer();

    const boardUrl = this.game.settings?.selectedBoardUrl;
    const boardBgStyle = boardUrl ? `
      background-color: #beddba;
      background-image: url('${boardUrl}');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    ` : `
      background-color: #d8c3a5;
      background-image:
        repeating-linear-gradient(35deg, rgba(255,255,255,0.08) 0 2px, rgba(93,64,55,0.035) 2px 4px),
        radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22), transparent 24%),
        radial-gradient(circle at 82% 42%, rgba(255,255,255,0.18), transparent 26%),
        linear-gradient(145deg, #d8c3a5, #beddba);
      background-size: 160px 160px, cover, cover, cover;
      background-repeat: repeat, no-repeat, no-repeat, no-repeat;
      background-position: center, center, center, center;
    `;

    this.container.innerHTML = `
      <div class="board-area party-board-stage" style="
        flex: 1;
        position: relative !important;
        height: 100% !important;
        width: 100% !important;
        min-height: 100vh;
        overflow: hidden;
        ${boardBgStyle}
        box-shadow: inset 0 0 80px rgba(0,0,0,0.2);
      ">
        ${this._renderBoardHud(players, currentPlayer)}
        ${this._renderConnections()}
        ${this._renderStoryProps()}

        <div id="game-board" style="
          position:absolute;
          top:0; left:0; right:0; bottom:0;
          width:100%; height:100%;
          z-index:10;
        ">
          ${board.getAllFields().map(field => this._renderField(field)).join('')}
          ${players.map(p => this._renderToken(p)).join('')}
        </div>

        <div id="dice-area" class="dice-area party-dice-dock">
          <div id="dice-prompt" class="party-dice-prompt" aria-live="polite">Wurf!</div>
          <div id="dice-container">
            <button id="dice" class="party-dice" type="button" aria-label="Würfeln"
              onmouseenter="this.style.transform='translateY(-3px) rotate(-5deg)'"
              onmouseleave="this.style.transform='translateY(0)'">
              ${this._renderDiceDots(1)}
            </button>
          </div>
          ${this._renderJokerBar(currentPlayer)}
        </div>
      </div>
    `;

    this._setupDiceHandler();
    this._setupEditMode();
    this._setupAlbumHandler();
    this._setupGameMenuHandler();
  }

  _renderJokerBar(player) {
    const j = player.jokers || {};
    if (!j.hint && !j.protection && !j.extraRoll) return '';
    return `
      <div class="party-joker-bar" aria-label="Joker">
        ${j.hint ? `<span class="joker-chip" title="Tipp-Joker">💡 ${j.hint}</span>` : ''}
        ${j.protection ? `<span class="joker-chip" title="Schutz-Joker">🛡️ ${j.protection}</span>` : ''}
        ${j.extraRoll ? `<span class="joker-chip" title="Extra-Wurf">🎲 ${j.extraRoll}</span>` : ''}
      </div>`;
  }

  _setupEditMode() {
    if (!import.meta.env?.DEV) return;
    if (!window.__boardEditModeInit) {
      window.__boardEditModeInit = true;
      window.addEventListener('keydown', (e) => {
        if (e.shiftKey && e.key.toLowerCase() === 'e') {
          const boardArea = document.querySelector('.board-area');
          if (boardArea) {
            boardArea.classList.toggle('edit-mode');
            this.showToast(boardArea.classList.contains('edit-mode') ? 'Map Editor EIN (Klicke zum Pfad setzen)' : 'Map Editor AUS', 'warning');
          }
        }
      });
      
      // Capture clicks on the board explicitly when in edit mode
      window.addEventListener('click', (e) => {
        const boardArea = document.querySelector('.board-area.edit-mode');
        if (!boardArea) return;
        
        // Ignore clicks on UI elements like dice or sidebar
        if (e.target.closest('.turn-bar') || e.target.closest('.dice-area') || e.target.closest('.board-sidebar') || e.target.closest('.field-tile')) {
           return;
        }

        const rect = boardArea.getBoundingClientRect();
        const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
        const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
        
        console.log(`{ id: NEXT_ID, type: FieldType.NORMAL, x: ${x.toFixed(2)}, y: ${y.toFixed(2)} },`);
        
        // Visual feedback marker
        const marker = document.createElement('div');
        marker.style.cssText = `position: absolute; left: ${x}%; top: ${y}%; width: 20px; height: 20px; background: red; border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; z-index: 100; border: 2px solid white;`;
        boardArea.appendChild(marker);
        
        this.showToast(`Koordinate ${Math.round(x)}%, ${Math.round(y)}% geloggt in Console.`, 'info');
      });
    }
  }

  _renderConnections() {
    const fields = this.game.board.getAllFields();
    if (!fields || fields.length < 2) return '';
    
    let d = `M ${fields[0].x} ${fields[0].y}`;
    for (let i = 0; i < fields.length - 1; i++) {
      const p1 = fields[i];
      const p2 = fields[i+1];
      const cpX = (i % 2 === 0) ? p2.x : p1.x;
      const cpY = (i % 2 === 0) ? p1.y : p2.y;
      d += ` Q ${cpX} ${cpY} ${p2.x} ${p2.y}`;
    }

    return `
      <svg class="board-connections" viewBox="0 0 100 100" preserveAspectRatio="none" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 5;">
        <defs>
          <filter id="charcoal-path" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <!-- Layered paths for a hand-drawn look -->
        <path d="${d}" style="fill:none; stroke:rgba(0,0,0,0.6); stroke-width:6; vector-effect:non-scaling-stroke; filter: url(#charcoal-path); stroke-linecap: round;" />
        <path d="${d}" style="fill:none; stroke:rgba(255,255,255,0.7); stroke-width:3; vector-effect:non-scaling-stroke; stroke-dasharray: 6 12; filter: url(#charcoal-path);" />
        <path d="${d}" style="fill:none; stroke:var(--color-primary); stroke-width:3; vector-effect:non-scaling-stroke; stroke-dasharray: 4 8; opacity: 0.9;" />
      </svg>
    `;
  }

  _renderStoryProps() {
    if (!STORY_PROPS?.length) return '';
    return STORY_PROPS.map((prop, i) => `
      <img
        src="${prop.spriteImg}"
        alt=""
        aria-hidden="true"
        style="
          position:absolute;
          right:${i * 4 + 2}%;
          bottom:${i * 4 + 4}%;
          width:min(11vw, 96px);
          max-height:22vh;
          object-fit:contain;
          opacity:0.16;
          mix-blend-mode:multiply;
          filter: drop-shadow(0 12px 18px rgba(0,0,0,0.18));
          transform:rotate(${i % 2 === 0 ? 5 : -4}deg);
          pointer-events:none;
          z-index:4;
        "
      >
    `).join('');
  }

  _renderLegend() {
    const types = ['normal', 'challenge', 'team', 'reward', 'surprise', 'helper', 'movement', 'treasure', 'trap', 'portal'];
    const labels = ['Aufgabe', 'Alle spielen', 'Teamarbeit', 'Belohnung', 'Überraschung', 'Hilfe', 'Bewegung', 'Schatz', 'Falle', 'Portal'];
    return types.map((type, i) => `
      <div class="legend-item">${getFieldIconSVG(type, 18)}<span>${labels[i]}</span></div>
    `).join('');
  }

  _renderField(field) {
    const meta = getFieldMeta(field.type);
    const rotation = (field.id % 2 === 0 ? 3 : -3) + (Math.sin(field.id) * 8);
    
    // Organic "Hand-Cut" Paper Shapes (Border-Radius Blobs)
    const organicBlobs = [
      '30% 70% 70% 30% / 30% 30% 70% 70%',
      '60% 40% 30% 70% / 60% 30% 70% 40%',
      '40% 60% 70% 30% / 40% 50% 60% 50%',
      '50% 50% 40% 60% / 50% 60% 40% 50%',
      '70% 30% 50% 50% / 40% 70% 30% 60%'
    ];
    
    const blobRadius = organicBlobs[field.id % organicBlobs.length];
    
    // HARDCODED BRIGHT COLORS — immune to dark mode and CSS variable overrides
    const typeColors = {
      normal:    { bg: '#5C6BC0', icon: 'white', label: 'A' },
      challenge: { bg: '#EF5350', icon: 'white', label: 'C' },
      team:      { bg: '#26A69A', icon: 'white', label: 'T' },
      reward:    { bg: '#FFA726', icon: 'white', label: 'B' },
      surprise:  { bg: '#AB47BC', icon: 'white', label: '?' },
      helper:    { bg: '#29B6F6', icon: 'white', label: 'H' },
      movement:  { bg: '#FF7043', icon: 'white', label: 'M' },
      treasure:  { bg: '#FFCA28', icon: '#333',  label: '★' },
      trap:      { bg: '#EF5350', icon: 'white', label: '⚠' },
      portal:    { bg: '#42A5F5', icon: 'white', label: '◎' },
    };
    const color = typeColors[field.type] || typeColors.normal;

    return `
      <div data-field-id="${field.id}"
           style="
             position: absolute;
             left: ${field.x}%; top: ${field.y}%;
             width: clamp(48px, 4.8vw, 68px); height: clamp(48px, 4.8vw, 68px);
             transform: translate(-50%, -50%) rotate(${rotation}deg);
             background-image: linear-gradient(${color.bg}, ${color.bg});
             border-radius: ${blobRadius};
             box-shadow: 0 10px 20px rgba(49,37,24,0.23), inset 1px 1px 3px rgba(255,255,255,0.8);
             display: flex; align-items: center; justify-content: center;
             flex-direction: column;
             z-index: 10;
             border: 2px solid rgba(255,255,255,0.8);
             cursor: default;
             opacity: 0.92;
           ">
        <span style="display:flex; align-items:center; justify-content:center;">${getFieldIconSVG(field.type, 34)}</span>
        <span style="font-size:13px; font-weight:900; font-family:'Fredoka One',cursive; color:rgba(255,255,255,0.95); text-shadow:1px 1px 2px rgba(0,0,0,0.5);">${field.id}</span>
      </div>
    `;
  }

  _renderToken(player) {
    const field = this.game.board.getField(player.position);
    const players = this.game.getPlayers();
    const playerIndex = players.findIndex(p => p.id === player.id);
    const compact = window.innerWidth <= 760;
    const tokenSize = compact ? 42 : 54;
    
    const offset = this._getPlayerOffset(playerIndex, players.length);
    
    const isActive = this.game.getCurrentPlayer().id === player.id;
    const zIndex = isActive ? 1000 : 100 + playerIndex;
    
    return `
      <div class="player-standee-container ${isActive ? 'active' : ''}" 
           id="token-${player.id}"
           style="left:${field.x}%; top:${field.y}%; transform: translate(calc(-50% + ${offset}px), -68%); z-index: ${zIndex};">
        <div class="standee-card" style="--player-ring:${player.avatarColor || '#ff3366'};">
           ${renderCharacterAvatar(player.colorIndex ?? playerIndex, tokenSize)}
        </div>
        <div class="standee-shadow"></div>
      </div>
    `;
  }

  _renderScoreEntry(player, currentPlayer) {
    const colors = ['cardboard-pink', 'cardboard-yellow', 'cardboard-blue', 'cardboard-green', 'cardboard-orange', 'cardboard-purple'];
    const randomColor = colors[player.id % colors.length];
    
    return `
      <div class="scoreboard-entry ${randomColor} ${player.id === currentPlayer.id ? 'active-player' : ''}">
        ${player.getTokenHTML(32)}
        <span class="scoreboard-name" style="font-weight: bold;">${player.name}</span>
        <div class="scoreboard-stats">
          <span class="stat-icon">${iconCoin(16)} ${player.coins}</span>
          <span class="stat-icon">${iconStar(16)} ${player.stars}</span>
        </div>
      </div>
    `;
  }

  _renderAlbumButton() {
    const partyFinds = new Set(
      this.game.getPlayers().flatMap(player => player.collectibles || [])
    );
    const found = partyFinds.size;
    const total = KLEBENSFREI_COLLECTIBLES.length;

    return `
      <button class="party-album-button" type="button" id="open-album" aria-label="Entdeckerbuch öffnen">
        <span class="album-stack-preview">
          ${KLEBENSFREI_COLLECTIBLES.slice(0, 3).map((item, index) => `
            <img src="${item.spriteImg}" alt="" style="--album-rot:${index === 0 ? -8 : index === 1 ? 5 : 12}deg; --album-x:${index * 8}px;">
          `).join('')}
        </span>
        <span>
          <strong>Entdeckerbuch</strong>
          <small>${found}/${total} Teamfunde</small>
        </span>
      </button>
    `;
  }

  _setupAlbumHandler() {
    this.container.querySelector('#open-album')?.addEventListener('click', () => {
      SoundFX.click();
      const players = this.game.getPlayers();
      const focused = players.find(player => player.id === this.focusAlbumPlayerId);
      this.showCollectionAlbum(focused || this.game.getCurrentPlayer());
    });
  }

  _setupGameMenuHandler() {
    this.container.querySelector('#open-game-menu')?.addEventListener('click', () => {
      SoundFX.click();
      this.showGameMenu();
    });
  }

  _getPlayerOffset(playerIndex, playerCount) {
    const compact = window.innerWidth <= 760;
    const spacing = compact ? 14 : 18;
    return (playerIndex - (playerCount - 1) / 2) * spacing;
  }

  _renderDiceDots(value) {
    const pattern = Dice.getDotPattern(value);
    return pattern.map(visible => 
      `<div class="dice-dot ${visible ? 'visible' : ''}"></div>`
    ).join('');
  }

  _setupDiceHandler() {
    const diceContainer = document.getElementById('dice-container');
    const diceEl = document.getElementById('dice');
    if (!diceContainer || !diceEl) return;

    diceEl.addEventListener('click', async () => {
      if (this.game.state !== 'playing') return;
      if (diceEl.classList.contains('rolling')) return;

      SoundFX.diceRoll();
      diceEl.classList.add('rolling');
      diceEl.disabled = true;
      diceEl.setAttribute('aria-label', 'Würfel rollt');
      document.getElementById('dice-prompt').textContent = 'Würfelt...';

      const rollingHandler = (e) => {
        diceEl.innerHTML = this._renderDiceDots(e.detail.value);
      };
      window.addEventListener('dice:rolling', rollingHandler);

      const value = await this.game.rollDice();
      
      window.removeEventListener('dice:rolling', rollingHandler);
      diceEl.classList.remove('rolling');
      diceEl.disabled = false;
      diceEl.setAttribute('aria-label', `${value} gewürfelt. Noch einmal würfeln`);
      diceEl.innerHTML = this._renderDiceDots(value);
      document.getElementById('dice-prompt').textContent = `${value} gewürfelt!`;

      await this._animateMove(value);
    });
  }

  async _animateMove(diceValue) {
    const player = this.game.getCurrentPlayer();
    const oldPos = player.position;
    const newPos = this.game.movePlayer(diceValue);
    
    const token = document.getElementById(`token-${player.id}`);
    if (token) {
      for (let pos = oldPos + 1; pos <= newPos; pos++) {
        const field = this.game.board.getField(pos);
        const players = this.game.getPlayers();
        const playerIndexLocal = players.findIndex(p => p.id === player.id);
        const offset = this._getPlayerOffset(playerIndexLocal, players.length);
        token.style.transition = 'left 0.3s var(--ease-bounce), top 0.3s var(--ease-bounce)';
        token.style.left = `${field.x}%`;
        token.style.top = `${field.y}%`;
        token.style.transform = `translate(calc(-50% + ${offset}px), -68%)`;
        token.style.animation = 'token-hop 0.3s var(--ease-bounce)';
        SoundFX.tokenMove();
        await new Promise(r => setTimeout(r, 350));
        token.style.animation = '';
      }
    }

    const landedField = this.game.board.getField(newPos);
    const fieldEl = this.container.querySelector(`[data-field-id="${landedField.id}"]`);
    if (fieldEl) fieldEl.classList.add('current-field');

    await new Promise(r => setTimeout(r, 500));
    
    // Resolve field effects
    const result = this.game.resolveField(landedField);
    
    // Handle special visual triggers
    if (result.action === 'portal') {
      SoundFX.portal();
      const boardContainer = document.getElementById('game-board');
      boardContainer.classList.add('teleport-flash');
      token.style.opacity = '0';
      await new Promise(r => setTimeout(r, 300));
      
      const targetField = this.game.board.getField(result.targetId);
      token.style.left = `${targetField.x}%`;
      token.style.top = `${targetField.y}%`;
      await new Promise(r => setTimeout(r, 300));
      token.style.opacity = '1';
      boardContainer.classList.remove('teleport-flash');
      
      this.showToast(`Teleportation!`, 'info');
    } else if (result.action === 'trap') {
      SoundFX.trap();
      const boardContainer = document.getElementById('game-board');
      boardContainer.classList.add('trap-shake');
      this.showToast(`AUA! Falle!`, 'warning');
      await new Promise(r => setTimeout(r, 500));
      boardContainer.classList.remove('trap-shake');
      
      // Animate move back if penalty move exists
      if (result.move) {
        await this._animateMoveDirectly(player, landedField.id, player.position);
      }
    }

    if (result.action === 'portal' && result.needsResolve) {
      const destField = this.game.board.getField(result.targetId);
      await new Promise(r => setTimeout(r, 400));
      const portalResult = this.game.resolveField(destField);
      if (portalResult.action === 'minigame') {
        if (portalResult.mode === 'challenge') SoundFX.challenge();
        if (this.onMinigameNeeded) this.onMinigameNeeded(portalResult);
        return;
      }
      await new Promise(r => setTimeout(r, 600));
      this.render();
      window.dispatchEvent(new CustomEvent('game:autosave'));
      return;
    }

    if (result.action === 'portal') {
      await new Promise(r => setTimeout(r, 600));
      this.render();
      window.dispatchEvent(new CustomEvent('game:autosave'));
      return;
    }

    if (result.action === 'minigame') {
      if (result.mode === 'challenge') SoundFX.challenge();
      if (this.onMinigameNeeded) this.onMinigameNeeded(result);
    } else {
      await new Promise(r => setTimeout(r, 1000));
      this.render();
      window.dispatchEvent(new CustomEvent('game:autosave'));
    }
  }

  async _animateMoveDirectly(player, fromIdx, toIdx) {
    const token = document.getElementById(`token-${player.id}`);
    if (!token) return;
    
    const startField = this.game.board.getField(fromIdx);
    const endField = this.game.board.getField(toIdx);
    
    token.style.transition = 'left 0.8s ease-in-out, top 0.8s ease-in-out';
    token.style.left = `${endField.x}%`;
    token.style.top = `${endField.y}%`;
    await new Promise(r => setTimeout(r, 850));
  }

  update() { this.render(); }

  showRoundResult(summary) {
    if (!summary?.player || !summary.result) return;

    const existing = document.querySelector('.round-result-pop');
    if (existing) existing.remove();

    if (summary.result.mode === 'challenge') {
      this._showChallengeResult(summary);
      return;
    }

    if (summary.result.mode === 'team') {
      this._showTeamResult(summary);
      return;
    }

    const { player, result, nextPlayer, coinDelta = 0, starDelta = 0, newCollectibles = [] } = summary;
    this.focusAlbumPlayerId = player.id;
    const title = result.correct ? 'Volltreffer!' : result.partial ? 'Guter Fang!' : 'Weiter gehts!';
    const tone = result.correct ? 'success' : result.partial ? 'partial' : 'try';
    const scoreText = Number.isFinite(result.score) ? `${result.score}%` : 'Runde geschafft';
    const rewardItems = [
      coinDelta > 0 ? `<span>${iconCoin(20)} +${coinDelta}</span>` : '',
      starDelta > 0 ? `<span>${iconStar(20)} +${starDelta}</span>` : '',
      ...newCollectibles.map(item => `<span class="round-sticker-chip"><img src="${item.spriteImg}" alt=""> ${item.name_de}</span>`)
    ].filter(Boolean).join('');

    const pop = document.createElement('div');
    pop.className = `round-result-pop ${tone}`;
    pop.innerHTML = `
      <div class="round-result-card">
        <div class="round-result-player">
          ${renderCharacterToken(player.colorIndex ?? 0, 54)}
          <div>
            <span>${player.name}</span>
            <strong>${title}</strong>
          </div>
        </div>
        <div class="round-result-score">${scoreText}</div>
        <div class="round-result-rewards">
          ${rewardItems || '<span>Mut gesammelt</span>'}
        </div>
        ${nextPlayer ? `
          <div class="round-result-next">
            ${renderCharacterToken(nextPlayer.colorIndex ?? 0, 30)}
            <span>${nextPlayer.name} ist dran</span>
          </div>
        ` : ''}
      </div>
    `;

    const boardArea = this.container.querySelector('.board-area') || this.container;
    boardArea.appendChild(pop);

    setTimeout(() => pop.classList.add('is-leaving'), 2600);
    setTimeout(() => pop.remove(), 3200);
  }

  _showChallengeResult(summary) {
    const { challengeRankings = [], nextPlayer } = summary;
    const winner = challengeRankings[0];
    const pop = document.createElement('div');
    pop.className = 'round-result-pop challenge';
    pop.innerHTML = `
      <div class="round-result-card challenge-card">
        <div class="challenge-result-title">
          ${winner ? winner.player.getTokenHTML(54) : ''}
          <div>
            <span>Alle spielen</span>
            <strong>${winner ? `${escapeHtml(winner.player.name)} gewinnt!` : 'Blitzduell beendet!'}</strong>
          </div>
        </div>
        <div class="challenge-result-list">
          ${challengeRankings.map(entry => `
            <div class="challenge-result-row ${entry.rank === 1 ? 'winner' : ''}">
              <strong>${entry.rank}</strong>
              ${entry.player.getTokenHTML(30)}
              <span>${escapeHtml(entry.player.name)}</span>
              <small>${entry.score} Pkt.</small>
              ${entry.coinDelta > 0 ? `<em>${iconCoin(16)} +${entry.coinDelta}</em>` : ''}
            </div>
          `).join('')}
        </div>
        ${nextPlayer ? `
          <div class="round-result-next challenge-next">
            ${renderCharacterToken(nextPlayer.colorIndex ?? 0, 30)}
            <span>${nextPlayer.name} ist dran</span>
          </div>
        ` : ''}
      </div>
    `;

    const boardArea = this.container.querySelector('.board-area') || this.container;
    boardArea.appendChild(pop);

    setTimeout(() => pop.classList.add('is-leaving'), 3600);
    setTimeout(() => pop.remove(), 4200);
  }

  _showTeamResult(summary) {
    const { result, teamResults = [], nextPlayer } = summary;
    const title = result.correct ? 'Team perfekt!' : result.partial ? 'Team fast geschafft!' : 'Weiter gemeinsam üben!';
    const pop = document.createElement('div');
    pop.className = `round-result-pop team ${result.correct ? 'success' : result.partial ? 'partial' : 'try'}`;
    pop.innerHTML = `
      <div class="round-result-card team-card">
        <div class="team-result-title">
          <div class="team-result-avatars">
            ${teamResults.map(entry => entry.player.getTokenHTML(44)).join('')}
          </div>
          <div>
            <span>Team-Runde</span>
            <strong>${title}</strong>
          </div>
          <div class="round-result-score">${Number.isFinite(result.score) ? `${result.score}%` : ''}</div>
        </div>
        <div class="team-result-list">
          ${teamResults.map(entry => `
            <div class="team-result-row">
              ${entry.player.getTokenHTML(30)}
              <span>${escapeHtml(entry.player.name)}</span>
              ${entry.coinDelta > 0 ? `<em>${iconCoin(16)} +${entry.coinDelta}</em>` : ''}
              ${entry.starDelta > 0 ? `<em>${iconStar(16)} +${entry.starDelta}</em>` : ''}
            </div>
          `).join('')}
        </div>
        ${nextPlayer ? `
          <div class="round-result-next team-next">
            ${renderCharacterToken(nextPlayer.colorIndex ?? 0, 30)}
            <span>${nextPlayer.name} ist dran</span>
          </div>
        ` : ''}
      </div>
    `;

    const boardArea = this.container.querySelector('.board-area') || this.container;
    boardArea.appendChild(pop);

    setTimeout(() => pop.classList.add('is-leaving'), 3200);
    setTimeout(() => pop.remove(), 3800);
  }

  showCollectionAlbum(player) {
    if (!player) return;

    document.querySelectorAll('.toast').forEach(toast => toast.remove());

    const existing = this.container.querySelector('.collection-album-overlay');
    if (existing) existing.remove();

    const owned = new Set(player.collectibles || []);
    const itemsHTML = KLEBENSFREI_COLLECTIBLES.map((item, index) => {
      const isOwned = owned.has(item.id);
      return `
        <div class="album-item ${isOwned ? 'is-owned' : 'is-locked'}" style="--album-delay:${index * 55}ms;">
          <div class="album-item-art">
            <img src="${item.spriteImg}" alt="${isOwned ? item.name_de : ''}">
          </div>
          <div class="album-item-copy">
            <strong>${isOwned ? item.name_de : 'Noch verborgen'}</strong>
            <span>${isOwned ? item.rarity : 'Löse Aufgaben, um diesen Fund freizuschalten.'}</span>
            ${isOwned ? `<small>${item.hint}</small>` : ''}
          </div>
        </div>
      `;
    }).join('');

    const playersHTML = this.game.getPlayers().map(p => `
      <button class="album-player-chip ${p.id === player.id ? 'active' : ''}" type="button" data-player-id="${p.id}">
        ${renderCharacterToken(p.colorIndex ?? 0, 26)}
        <span>${p.name}</span>
        <small>${p.collectibles?.length || 0}/${KLEBENSFREI_COLLECTIBLES.length}</small>
      </button>
    `).join('');

    const overlay = document.createElement('div');
    overlay.className = 'collection-album-overlay';
    overlay.innerHTML = `
      <div class="collection-album-card" role="dialog" aria-modal="true" aria-label="Entdeckerbuch">
        <button class="album-close" type="button" aria-label="Entdeckerbuch schließen">×</button>
        <div class="album-header">
          ${renderCharacterAvatar(player.colorIndex ?? 0, 62)}
          <div>
            <span>Klebensfrei Entdeckerbuch</span>
            <h2>${player.name}s Funde</h2>
            <p>${owned.size} von ${KLEBENSFREI_COLLECTIBLES.length} Fundstücken entdeckt</p>
          </div>
        </div>
        <div class="album-player-row">${playersHTML}</div>
        <div class="album-grid">${itemsHTML}</div>
      </div>
    `;

    const boardArea = this.container.querySelector('.board-area') || this.container;
    boardArea.appendChild(overlay);

    overlay.querySelector('.album-close')?.addEventListener('click', () => {
      SoundFX.click();
      overlay.remove();
    });
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) overlay.remove();
    });
    overlay.querySelectorAll('.album-player-chip').forEach(button => {
      button.addEventListener('click', () => {
        const nextPlayer = this.game.getPlayers().find(p => String(p.id) === button.dataset.playerId);
        SoundFX.click();
        overlay.remove();
        this.showCollectionAlbum(nextPlayer);
      });
    });
  }

  showGameMenu() {
    this.container.querySelector('.game-pause-overlay')?.remove();

    const currentPlayer = this.game.getCurrentPlayer();
    const overlay = document.createElement('div');
    overlay.className = 'game-pause-overlay';
    overlay.innerHTML = `
      <div class="game-pause-card" role="dialog" aria-modal="true" aria-labelledby="pause-title">
        <button class="game-pause-close" type="button" aria-label="Weiterspielen">×</button>
        <span class="game-pause-kicker">Spiel gespeichert</span>
        <h2 id="pause-title">Kurze Pause?</h2>
        <div class="game-pause-status">
          ${renderCharacterToken(currentPlayer.colorIndex ?? 0, 56)}
          <div>
            <strong>${escapeHtml(currentPlayer.name)} ist dran</strong>
            <span>Runde ${this.game.turnManager.getRound()} · Feld ${currentPlayer.position} von ${this.game.board.totalFields - 1}</span>
          </div>
        </div>
        <div class="game-pause-actions">
          <button class="pause-action primary" type="button" data-action="continue">Weiterspielen</button>
          <button class="pause-action" type="button" data-action="home">Speichern &amp; Startseite</button>
          <button class="pause-action quiet" type="button" data-action="restart">Neues Spiel einrichten</button>
        </div>
      </div>
    `;

    const boardArea = this.container.querySelector('.board-area') || this.container;
    boardArea.appendChild(overlay);
    window.dispatchEvent(new CustomEvent('game:autosave'));

    const close = () => {
      overlay.remove();
      window.removeEventListener('keydown', onKeyDown);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    overlay.querySelector('.game-pause-close')?.addEventListener('click', close);
    overlay.querySelector('[data-action="continue"]')?.addEventListener('click', close);
    overlay.querySelector('[data-action="home"]')?.addEventListener('click', () => {
      close();
      this.onExitToStart?.();
    });
    overlay.querySelector('[data-action="restart"]')?.addEventListener('click', () => {
      if (!window.confirm('Aktuelles Spiel beenden und ein neues einrichten?')) return;
      close();
      this.onRestartRequested?.();
    });
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) close();
    });

    overlay.querySelector('[data-action="continue"]')?.focus();
  }

  showToast(message, type = 'info') {
    const colors = ['cardboard-pink', 'cardboard-yellow', 'cardboard-blue', 'cardboard-green', 'cardboard-orange', 'cardboard-purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const toast = document.createElement('div');
    toast.className = `toast cardboard-chip ${randomColor} visible`;
    toast.style.position = 'fixed';
    toast.style.top = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.zIndex = '1000';
    toast.style.padding = '15px 30px';
    toast.style.fontSize = '1.2rem';
    toast.style.fontWeight = 'bold';
    toast.style.boxShadow = 'var(--shadow-xl)';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(-20px)';
      toast.style.transition = 'all 0.5s ease-in';
      setTimeout(() => toast.remove(), 500);
    }, 2500);
  }
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
