/**
 * Render Setup - Multi-step setup screen with illustrated characters
 */

import { TOPICS, getTopicsForLevel, getTopicsByCategory } from '../learning/topic-registry.js';
import { AXIS_META, getDefaultDifficulty } from '../learning/difficulty.js';
import { PRESETS } from '../settings/presets.js';
import { ProfileManager } from '../settings/profiles.js';
import { CHARACTERS, getCharacter, renderCharacterAvatar } from '../ui/characters.js';
import { 
  iconSeedling, iconStar2, iconBooks, iconRocket, iconTrophy, iconMask,
  iconBack, iconNext, iconDice, iconSave, iconCheck
} from '../ui/icons.js';
import { BACKGROUNDS } from '../asset-manifest.js';

const CLASS_LEVELS = [
  { id: 'vorschule', label: 'Vorschule', iconFn: iconSeedling, desc: 'Erste Schritte' },
  { id: 'klasse1', label: 'Klasse 1', iconFn: iconStar2, desc: 'Grundlagen' },
  { id: 'klasse2', label: 'Klasse 2', iconFn: iconBooks, desc: 'Aufbau' },
  { id: 'klasse3', label: 'Klasse 3', iconFn: iconRocket, desc: 'Vertiefung' },
  { id: 'klasse4', label: 'Klasse 4', iconFn: iconTrophy, desc: 'Fortgeschritten' },
  { id: 'frei', label: 'Freier Modus', iconFn: iconMask, desc: 'Alles ist möglich!' },
];

export class SetupRenderer {
  constructor(containerEl, settings, onComplete) {
    this.container = containerEl;
    this.settings = settings;
    this.onComplete = onComplete;
    this.currentStep = 0;
    this.totalSteps = 5;
    this.players = [
      { name: getCharacter(0).name_de, colorIndex: 0 },
      { name: getCharacter(1).name_de, colorIndex: 1 }
    ];

    // Default initialization based on ID
    if (!this.settings.selectedBoardId && BACKGROUNDS.length > 0) {
      this.settings.selectedBoardId = BACKGROUNDS[0].id;
      this.settings.selectedBoardUrl = BACKGROUNDS[0].url;
    }
  }

  render() {
    this.container.innerHTML = '';
    
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
      width: 100%; height: 100%;
      display: flex; flex-direction: column;
      background: linear-gradient(160deg, #e8f5e9 0%, #f3e5f5 100%);
      font-family: 'Nunito', sans-serif;
      overflow: hidden;
    `;

    wrapper.innerHTML = `
      <!-- Progress dots -->
      <div style="display:flex; justify-content:center; gap:12px; padding:24px 0 12px;">
        ${Array.from({ length: this.totalSteps }, (_, i) => `
          <div style="
            width: ${i === this.currentStep ? '36px' : '14px'};
            height: 14px;
            border-radius: 100px;
            background: ${i === this.currentStep ? '#E91E63' : i < this.currentStep ? '#66BB6A' : 'rgba(0,0,0,0.15)'};
            transition: all 0.3s;
          "></div>
        `).join('')}
      </div>

      <!-- Content area -->
      <div id="setup-step-content" style="flex:1; overflow-y:auto; padding:0 30px 20px;"></div>

      <!-- Navigation -->
      <div style="
        display:flex; justify-content:space-between; align-items:center;
        padding:20px 30px; background:rgba(255,255,255,0.7);
        border-top: 2px solid rgba(0,0,0,0.06);
        gap:20px;
      ">
        <button id="setup-back" type="button" style="
          font-family:'Fredoka One',cursive; font-size:28px;
          background: rgba(0,0,0,0.08); color:#555;
          border:none; border-radius:100px; padding:14px 36px;
          cursor:pointer;
          ${this.currentStep === 0 ? 'visibility:hidden;' : ''}
        ">‹ Zurück</button>
        <button id="setup-next" type="button" style="
          font-family:'Fredoka One',cursive; font-size:32px;
          background: linear-gradient(135deg, #E91E63, #FF5722);
          color: white; border:none; border-radius:100px;
          padding:18px 50px; cursor:pointer;
          box-shadow: 0 6px 0 #880E4F;
        ">${this.currentStep === this.totalSteps - 1 ? '🎲 Spiel starten!' : 'Weiter ›'}</button>
      </div>
    `;
    
    this.container.appendChild(wrapper);
    
    const contentEl = document.getElementById('setup-step-content');
    this._renderStep(contentEl);
    
    document.getElementById('setup-back')?.addEventListener('click', () => {
      if (this.currentStep > 0) { this.currentStep--; this.render(); }
    });
    
    document.getElementById('setup-next')?.addEventListener('click', () => {
      this._saveStepData();
      if (this.currentStep < this.totalSteps - 1) { this.currentStep++; this.render(); }
      else { this.onComplete(this.players, this.settings); }
    });
  }

  _renderStep(el) {
    switch (this.currentStep) {
      case 0: this._renderPlayers(el); break;
      case 1: this._renderLevelSelect(el); break;
      case 2: this._renderTopics(el); break;
      case 3: this._renderDifficulty(el); break;
      case 4: this._renderSummary(el); break;
    }
  }

  _renderPlayers(el) {
    const tapeColors = ['pink', 'yellow', 'blue', 'green'];
    const organicBlobs = [
      '30% 70% 70% 30% / 30% 30% 70% 70%',
      '60% 40% 30% 70% / 60% 30% 70% 40%',
      '40% 60% 70% 30% / 40% 50% 60% 50%',
      '50% 50% 40% 60% / 50% 60% 40% 50%',
      '70% 30% 50% 50% / 40% 70% 30% 60%'
    ];
    
    // Default selectedBgIndex to 0 if not set
    if (this.selectedBgIndex === undefined) this.selectedBgIndex = 0;

    el.innerHTML = `
      <div class="setup-step-content active">
        <div class="setup-header">
          <h2>Wer spielt mit?</h2>
          <p>Tippe einfach auf die Tiere, die mitspielen sollen!</p>
        </div>
        
        <div class="char-picker-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 20px; margin-bottom: 30px;">
          ${CHARACTERS.map((c, i) => {
            const isSelected = this.players.some(p => p.colorIndex === i);
            const blobRadius = organicBlobs[i % organicBlobs.length];
            const rotation = (i % 2 === 0 ? 3 : -2) + Math.sin(i) * 3;
            const tapeColor = tapeColors[i % tapeColors.length];
            return `
              <div class="char-pick-option cardboard-chip ${isSelected ? 'selected cardboard-pink' : ''}" data-char-idx="${i}" 
                   style="cursor: pointer; position: relative; border-radius: ${blobRadius}; padding: 10px; transform: rotate(${rotation}deg); transition: transform 0.2s var(--ease-bounce);">
                ${isSelected ? `<div class="washi-tape ${tapeColor} rotated-left" style="top: -10px; left: 10px; width: 40px; height: 14px; z-index: 5;"></div>` : ''}
                ${renderCharacterAvatar(i, 110)}
                <span class="char-pick-name" style="font-size: 14px; font-family: var(--font-family-display); font-weight: bold; display: block; text-align: center;">${c.name_de}</span>
                ${isSelected ? '<div style="position:absolute; top:-5px; right:-5px; background:var(--color-accent); color:#000; border:2px solid #000; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-weight:bold; z-index:10; font-family: var(--font-handwritten);">✓</div>' : ''}
              </div>
            `;
          }).join('')}
        </div>
        
        <div class="setup-header" style="margin-top: 40px; margin-bottom: 15px;">
          <h2>Hintergrund-Landschaft</h2>
          <div class="washi-tape yellow rotated-right" style="margin: -25px auto 10px; width: 120px;"></div>
        </div>
        <div class="bg-picker-grid" id="bg-picker" style="display:flex; gap:15px; overflow-x: auto; padding-bottom: 20px; padding-top: 10px;">
          ${BACKGROUNDS.map((bg, idx) => {
            const blobRadius = organicBlobs[(idx + 2) % organicBlobs.length];
            const isSelected = this.settings.selectedBoardId === bg.id;
            return `
            <div class="bg-pick-option cardboard-chip ${isSelected ? 'selected cardboard-blue' : ''}" 
                 data-bg-id="${bg.id}" data-bg-url="${bg.url}"
                 style="cursor:pointer; border-radius: ${blobRadius}; padding: 8px; text-align:center; min-width: 150px; flex-shrink: 0; position: relative; transition: all 0.2s ease;">
              ${isSelected ? `<div class="pin" style="top: 5px; left: 50%; transform: translateX(-50%);"></div>` : ''}
              <div class="bg-preview" style="background-image: url('${bg.url}'); background-size: cover; background-position: center; width: 100%; height: 90px; border-radius: ${organicBlobs[(idx + 1) % organicBlobs.length]}; margin-bottom: 8px; border: 2px solid rgba(0,0,0,0.1); pointer-events: none;"></div>
              <span style="font-size: 14px; font-family: var(--font-family-display); font-weight: bold; pointer-events: none;">${bg.name}</span>
            </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Direct Character Selection Logic
    el.querySelectorAll('.char-pick-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const charIdx = parseInt(opt.dataset.charIdx);
        const existingPlayerIdx = this.players.findIndex(p => p.colorIndex === charIdx);
        
        if (existingPlayerIdx >= 0) {
          // Deselect
          this.players.splice(existingPlayerIdx, 1);
        } else {
          // Select (limit to 6)
          if (this.players.length < 6) {
            this.players.push({ name: CHARACTERS[charIdx].name_de, colorIndex: charIdx });
          }
        }
        this.render();
      });
    });

    // Background Picker Click Handler
    el.querySelectorAll('.bg-pick-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const bgId = opt.dataset.bgId;
        const bgUrl = opt.dataset.bgUrl;
        
        console.log('Setup: Background selected:', bgId);
        
        this.settings.selectedBoardId = bgId;
        this.settings.selectedBoardUrl = bgUrl;
        
        document.documentElement.style.setProperty('--game-background-img', `url('../../${bgUrl}')`);
        
        // Use a slight delay before re-render to let the user see the click state
        setTimeout(() => this.render(), 50);
      });
    });
  }

  _renderLevelSelect(el) {
    const chipColors = ['cardboard-pink', 'cardboard-yellow', 'cardboard-blue', 'cardboard-green', 'cardboard-orange', 'cardboard-purple'];
    
    el.innerHTML = `
      <div class="setup-step-content active">
        <div class="setup-header">
          <h2>Klassenstufe</h2>
          <p>Für welche Stufe sollen die Aufgaben sein?</p>
        </div>
        <div class="level-grid">
          ${CLASS_LEVELS.map((level, idx) => `
            <div class="card card-interactive level-card cardboard-chip ${chipColors[idx % chipColors.length]} ${this.settings.classLevel === level.id ? 'selected' : ''}" 
                 data-level="${level.id}">
              <div style="margin-bottom: var(--space-xs);">${level.iconFn(36)}</div>
              <div class="level-name">${level.label}</div>
              <div style="font-size: var(--font-size-xs); color: var(--text-light);">${level.desc}</div>
              ${this.settings.classLevel === level.id ? '<div style="position:absolute; top:5px; right:5px; font-weight:bold; color:#000;">✓</div>' : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;

    el.querySelectorAll('.level-card').forEach(card => {
      card.addEventListener('click', () => {
        el.querySelectorAll('.level-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.settings.setClassLevel(card.dataset.level);
      });
    });
  }

  _renderTopics(el) {
    const categories = getTopicsByCategory();
    const availableTopics = getTopicsForLevel(this.settings.classLevel);
    const availableIds = availableTopics.map(t => t.id);

    const chipColors = ['cardboard-pink', 'cardboard-yellow', 'cardboard-blue', 'cardboard-green', 'cardboard-orange', 'cardboard-purple', 'cardboard-cyan', 'cardboard-lime'];
    
    el.innerHTML = `
      <div class="setup-step-content active">
        <div class="setup-header">
          <h2>Themen auswählen</h2>
          <p>Welche Themen sollen geübt werden?</p>
        </div>
        <div style="display:flex; gap: var(--space-sm); justify-content:center; margin-bottom: var(--space-lg);">
          <button class="btn btn-sm btn-secondary" id="topics-all">Alle an</button>
          <button class="btn btn-sm btn-secondary" id="topics-none">Alle aus</button>
        </div>
        ${Object.entries(categories).map(([cat, topics], catIdx) => `
          <div style="margin-bottom: var(--space-md);">
            <h4 style="font-size: var(--font-size-sm); color: var(--text-light); margin-bottom: var(--space-xs);">${cat}</h4>
            <div class="topic-grid">
              ${topics.map((topic, topicIdx) => {
                const available = availableIds.includes(topic.id);
                const active = this.settings.isTopicActive(topic.id) && available;
                const randomColor = chipColors[(catIdx + topicIdx) % chipColors.length];
                return `
                  <div class="topic-chip cardboard-chip ${randomColor} ${active ? 'active selected' : ''} ${!available ? 'disabled' : ''}" 
                       data-topic="${topic.id}" 
                       style="${!available ? 'opacity:0.4; pointer-events:none;' : 'padding: 8px 12px;'}">
                    <span>${topic.label_de}</span>
                    ${active ? '<span style="margin-left:5px; font-weight:bold;">✓</span>' : ''}
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    el.querySelectorAll('.topic-chip:not(.disabled)').forEach(chip => {
      chip.addEventListener('click', () => {
        chip.classList.toggle('active');
        this.settings.toggleTopic(chip.dataset.topic);
      });
    });

    document.getElementById('topics-all')?.addEventListener('click', () => {
      this.settings.activeTopics = availableIds;
      this.render();
    });
    document.getElementById('topics-none')?.addEventListener('click', () => {
      this.settings.disableAllTopics();
      this.render();
    });
  }

  _renderDifficulty(el) {
    const axes = Object.entries(AXIS_META);
    const chipColors = ['cardboard-yellow', 'cardboard-green', 'cardboard-orange', 'cardboard-pink', 'cardboard-blue', 'cardboard-purple'];
    
    el.innerHTML = `
      <div class="setup-step-content active">
        <div class="setup-header">
          <h2>Schwierigkeit</h2>
          <p>Passe die Schwierigkeit genau an!</p>
        </div>
        <div class="difficulty-grid" style="display: grid; gap: 15px;">
          ${axes.map(([key, meta], idx) => {
            const value = this.settings.difficulty[key] ?? meta.default;
            const labelIdx = value - meta.min;
            const label = meta.labels_de[labelIdx] || value;
            const randomColor = chipColors[idx % chipColors.length];
            return `
              <div class="slider-group cardboard-chip ${randomColor}" style="padding: 15px;">
                <div class="slider-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <span class="slider-label" style="font-weight: bold; font-family: var(--font-family-display);">${meta.label_de}</span>
                  <span class="slider-value" id="val-${key}" style="background: rgba(255,255,255,0.4); padding: 2px 8px; border-radius: 4px; font-weight: bold;">${label}</span>
                </div>
                <input type="range" min="${meta.min}" max="${meta.max}" value="${value}" 
                       data-axis="${key}" class="difficulty-slider" style="width: 100%;">
                <div style="font-size: 0.8rem; color: #4b3621; margin-top: 5px; font-style: italic;">${meta.description_de}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    el.querySelectorAll('.difficulty-slider').forEach(slider => {
      slider.addEventListener('input', () => {
        const axis = slider.dataset.axis;
        const value = parseInt(slider.value);
        this.settings.setDifficultyAxis(axis, value);
        const meta = AXIS_META[axis];
        const labelIdx = value - meta.min;
        document.getElementById(`val-${axis}`).textContent = meta.labels_de[labelIdx] || value;
      });
    });
  }

  _renderSummary(el) {
    const levelLabel = CLASS_LEVELS.find(l => l.id === this.settings.classLevel)?.label || '?';
    const activeTopicCount = this.settings.activeTopics.length;

    el.innerHTML = `
      <div class="setup-step-content active">
        <div class="setup-header">
          <h2>${iconCheck(24)} Zusammenfassung</h2>
          <p>Bereit? Dann kann es losgehen!</p>
        </div>
        <div class="summary-grid" style="display: grid; gap: 15px;">
          <div class="summary-item cardboard-chip cardboard-blue" style="padding: 20px; border-radius: 60% 40% 30% 70% / 70% 30% 40% 60% !important;">
            <div class="summary-label" style="font-size: 0.8rem; opacity: 0.8;">Spieler</div>
            <div class="summary-value" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; font-size: 1.2rem; font-weight: bold;">
              ${this.players.map(p => renderCharacterAvatar(p.colorIndex, 48)).join('')}
              <span>${this.players.length} Spieler</span>
            </div>
          </div>
          <div class="summary-item cardboard-chip cardboard-green" style="padding: 20px; border-radius: 30% 70% 40% 60% / 60% 30% 70% 40% !important;">
            <div class="summary-label" style="font-size: 0.8rem; opacity: 0.8;">Klassenstufe</div>
            <div class="summary-value" style="font-size: 1.2rem; font-weight: bold;">${levelLabel}</div>
          </div>
          <div class="summary-item cardboard-chip cardboard-orange" style="padding: 20px; border-radius: 40% 60% 70% 30% / 30% 70% 30% 70% !important;">
            <div class="summary-label" style="font-size: 0.8rem; opacity: 0.8;">Themen</div>
            <div class="summary-value" style="font-size: 1.2rem; font-weight: bold;">${activeTopicCount} aktiv</div>
          </div>
          <div class="summary-item cardboard-chip cardboard-purple" style="padding: 20px; border-radius: 70% 30% 40% 60% / 40% 60% 30% 70% !important;">
            <div class="summary-label" style="font-size: 0.8rem; opacity: 0.8;">Sprache</div>
            <div class="summary-value" style="font-size: 1.2rem; font-weight: bold;">Deutsch</div>
          </div>
        </div>
        <div class="profile-section">
          <input type="text" id="profile-name" placeholder="Profil speichern als..." maxlength="20">
          <button class="btn btn-sm btn-secondary" id="save-profile">${iconSave(16)} Speichern</button>
        </div>
      </div>
    `;

    document.getElementById('save-profile')?.addEventListener('click', () => {
      const name = document.getElementById('profile-name')?.value?.trim();
      if (name) {
        this.settings.profileName = name;
        ProfileManager.save(name, this.settings.getSnapshot());
        const btn = document.getElementById('save-profile');
        btn.innerHTML = `${iconCheck(16)} Gespeichert!`;
        btn.style.background = 'var(--color-success)';
        btn.style.color = 'white';
      }
    });
  }

  _saveStepData() {
    if (this.currentStep === 0) {
      this.container.querySelectorAll('.player-name-input').forEach(input => {
        const idx = parseInt(input.dataset.index);
        if (this.players[idx]) {
          this.players[idx].name = input.value.trim() || getCharacter(this.players[idx].colorIndex).name_de;
        }
      });
      if (this.players.length === 1) this.settings.setGameMode('single');
      for (const player of this.players) {
        player.name = player.name || getCharacter(player.colorIndex).name_de;
      }
    }
  }
}
