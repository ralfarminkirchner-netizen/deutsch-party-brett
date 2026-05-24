/**
 * Render Board - Board game screen with illustrated character tokens
 */

import { getFieldMeta, getFieldIconSVG } from '../engine/field-types.js';
import { Dice } from '../engine/dice.js';
import { renderCharacterToken, renderCharacterAvatar } from '../ui/characters.js';
import { iconCoin, iconStar } from '../ui/icons.js';

export class BoardRenderer {
  constructor(containerEl, gameController) {
    this.container = containerEl;
    this.game = gameController;
    this.onMinigameNeeded = null;
  }

  render() {
    const players = this.game.getPlayers();
    const board = this.game.board;
    const currentPlayer = this.game.getCurrentPlayer();

    // Use the real illustration as background — served from the assets folder
    const boardBgImage = 'url("assets/img/backgrounds/craft_board.png")';

    this.container.innerHTML = `
      <div class="board-area" style="
        flex:1;
        position:relative;
        height:100%;
        min-height:100vh;
        overflow:hidden;
        background-image: ${boardBgImage};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      ">
        ${this._renderConnections()}

        <div class="turn-bar" id="turn-bar" style="
          position:absolute; top:20px; left:20px; z-index:200;
          display:flex; align-items:center; gap:14px;
          background:rgba(255,255,255,0.88);
          border-radius:100px; padding:12px 28px;
          box-shadow:0 4px 16px rgba(0,0,0,0.15);
        ">
          <div class="turn-player-info" style="display:flex; align-items:center; gap:10px;">
            ${renderCharacterToken(players.indexOf(currentPlayer), 52)}
            <span style="
              font-family:'Fredoka One',cursive;
              font-size:clamp(22px,3.5vw,44px);
              color:#1b5e20;
              text-shadow:0 0 8px white,0 0 16px white,2px 2px 4px rgba(0,0,0,0.2);
              white-space:nowrap;
            ">${currentPlayer.name} ist dran!</span>
          </div>
          <span style="font-size:20px;font-weight:800;color:#388e3c;">Runde ${this.game.turnManager.getRound()}</span>
        </div>

        <div id="game-board" style="
          position:absolute;
          top:0; left:0; right:0; bottom:0;
          width:100%; height:100%;
          z-index:10;
        ">
          ${board.getAllFields().map(field => this._renderField(field)).join('')}
          ${players.map(p => this._renderToken(p)).join('')}
        </div>

        <div id="dice-area" style="
          position:absolute; bottom:30px; left:50%; transform:translateX(-50%);
          z-index:200; display:flex; flex-direction:column; align-items:center; gap:10px;
        ">
          <div id="dice-prompt" style="
            font-family:'Fredoka One',cursive; font-size:26px; color:#1b5e20;
            text-shadow:0 0 8px white,0 0 20px white;
          ">Wurf!</div>
          <div id="dice-container">
            <div id="dice" style="
              width:80px; height:80px;
              background:white;
              border-radius:16px;
              box-shadow:0 6px 20px rgba(0,0,0,0.25);
              cursor:pointer;
              display:grid; grid-template-columns:1fr 1fr 1fr;
              padding:10px; gap:5px;
              transition:transform 0.15s;
            " onmouseenter="this.style.transform='scale(1.12) rotate(-5deg)'"
               onmouseleave="this.style.transform='scale(1)'">
              ${this._renderDiceDots(1)}
            </div>
          </div>
        </div>
      </div>

      <div style="
        width:300px; min-width:260px;
        background:#f1f8e9;
        border-left:3px solid #a5d6a7;
        display:flex; flex-direction:column;
        padding:20px; gap:20px;
        overflow-y:auto;
        box-shadow:-4px 0 16px rgba(0,0,0,0.1);
        height:100%;
        box-sizing:border-box;
      ">
        <!-- Punktestand -->
        <div style="background:white; border-radius:16px; padding:16px;">
          <div style="
            font-family:'Fredoka One',cursive; font-size:26px;
            color:#ff6f00; margin-bottom:12px;
            text-shadow:1px 1px 0 rgba(0,0,0,0.1);
          ">Punktestand</div>
          <div id="scoreboard" style="display:flex;flex-direction:column;gap:8px;">
            ${players.map(p => this._renderScoreEntry(p, currentPlayer)).join('')}
          </div>
        </div>

        <!-- Legende -->
        <div style="background:white; border-radius:16px; padding:16px; flex:1;">
          <div style="
            font-family:'Fredoka One',cursive; font-size:26px;
            color:#ff6f00; margin-bottom:12px;
            text-shadow:1px 1px 0 rgba(0,0,0,0.1);
          ">Legende</div>
          <div style="display:flex;flex-direction:column;gap:8px;">
            ${this._renderLegend()}
          </div>
        </div>
      </div>
    `;

    this._setupDiceHandler();
    this._setupEditMode();
  }

  _setupEditMode() {
    // Add hotkey (Shift + E) to toggle Map Editor
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
        <path d="${d}" style="fill:none; stroke:rgba(0,0,0,0.6); stroke-width:0.8; filter: url(#charcoal-path); stroke-linecap: round;" />
        <path d="${d}" style="fill:none; stroke:rgba(255,255,255,0.5); stroke-width:0.5; stroke-dasharray: 1 3; filter: url(#charcoal-path);" />
        <path d="${d}" style="fill:none; stroke:var(--color-primary); stroke-width:0.4; stroke-dasharray: 0.5 2; opacity: 0.8;" />
      </svg>
    `;
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
             width: 72px; height: 72px;
             transform: translate(-50%, -50%) rotate(${rotation}deg);
             background-image: linear-gradient(${color.bg}, ${color.bg});
             border-radius: ${blobRadius};
             box-shadow: 1px 1px 0 rgba(0,0,0,0.1), inset 1px 1px 3px rgba(255,255,255,0.8);
             display: flex; align-items: center; justify-content: center;
             flex-direction: column;
             z-index: 10;
             border: 2px solid rgba(255,255,255,0.8);
             cursor: default;
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
    
    // Balanced offset for 2.5x scale (60px staggering)
    const offset = (playerIndex - (players.length - 1) / 2) * 60;
    
    const isActive = this.game.getCurrentPlayer().id === player.id;
    const zIndex = isActive ? 1000 : 100 + playerIndex;
    
    return `
      <div class="player-standee-container ${isActive ? 'active' : ''}" 
           id="token-${player.id}"
           style="left:${field.x}%; top:${field.y}%; transform: translate(calc(-50% + ${offset}px), -90%); z-index: ${zIndex};">
        <div class="standee-card">
           ${renderCharacterAvatar(playerIndex, 240)}
        </div>
        <div class="standee-base"></div>
        <div class="standee-shadow"></div>
      </div>
    `;
  }

  _renderScoreEntry(player, currentPlayer) {
    const colors = ['cardboard-pink', 'cardboard-yellow', 'cardboard-blue', 'cardboard-green', 'cardboard-orange', 'cardboard-purple'];
    const randomColor = colors[player.id % colors.length];
    
    return `
      <div class="scoreboard-entry cardboard-chip ${randomColor} ${player.id === currentPlayer.id ? 'active-player' : ''}" style="margin-bottom: 8px;">
        ${player.getTokenHTML(32)}
        <span class="scoreboard-name" style="font-weight: bold;">${player.name}</span>
        <div class="scoreboard-stats">
          <span class="stat-icon">${iconCoin(16)} ${player.coins}</span>
          <span class="stat-icon">${iconStar(16)} ${player.stars}</span>
        </div>
      </div>
    `;
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

    diceContainer.addEventListener('click', async () => {
      if (this.game.state !== 'playing') return;
      if (diceEl.classList.contains('rolling')) return;

      diceEl.classList.add('rolling');
      document.getElementById('dice-prompt').textContent = 'Würfelt...';

      const rollingHandler = (e) => {
        diceEl.innerHTML = this._renderDiceDots(e.detail.value);
      };
      window.addEventListener('dice:rolling', rollingHandler);

      const value = await this.game.rollDice();
      
      window.removeEventListener('dice:rolling', rollingHandler);
      diceEl.classList.remove('rolling');
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
        const offset = (playerIndexLocal - (players.length - 1) / 2) * 15;
        token.style.transition = 'left 0.3s var(--ease-bounce), top 0.3s var(--ease-bounce)';
        token.style.left = `${field.x}%`;
        token.style.top = `${field.y}%`;
        token.style.transform = `translate(calc(-50% + ${offset}px), -85%)`;
        token.style.animation = 'token-hop 0.3s var(--ease-bounce)';
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

    if (result.action === 'minigame') {
      if (this.onMinigameNeeded) this.onMinigameNeeded(result);
    } else {
      await new Promise(r => setTimeout(r, 1000));
      this.render();
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
