/**
 * SettingsManager - Handles game settings, persistence, and difficulty configuration.
 */
export class SettingsManager {
  constructor() {
    this.reset();
  }

  /**
   * Reset settings to default values
   */
  reset() {
    this.language = 'de';
    this.classLevel = 'klasse2';
    this.activeTopics = ['nomen', 'verben', 'adjektive', 'satzbau'];
    this.difficulty = {
      languageComplexity: 2,
      sentenceLength: 2,
      timePressure: 1,
      hintAmount: 3,
      answerOptions: 3,
      errorDensity: 2,
      inputMode: 0
    };
    this.gameMode = 'local';
    this.presetId = null;
    this.profileName = null;
    this.selectedBoardId = null; 
    this.selectedBoardUrl = null;
    this.version = "3.0.1-PRO";
  }

  setGameMode(mode) {
    this.gameMode = mode;
  }

  /**
   * Set class level and filter topics accordingly
   */
  setClassLevel(level) {
    this.classLevel = level;
    const gradeComplexity = {
      vorschule: 1,
      klasse1: 1,
      klasse2: 2,
      klasse3: 3,
      klasse4: 4,
      frei: 3
    };
    this.difficulty.languageComplexity = gradeComplexity[level] || 2;
  }

  /**
   * Toggle topic active state
   */
  toggleTopic(topicId) {
    const idx = this.activeTopics.indexOf(topicId);
    if (idx === -1) {
      this.activeTopics.push(topicId);
    } else if (this.activeTopics.length > 1) { // Keep at least one
      this.activeTopics.splice(idx, 1);
    }
  }

  /**
   * Check if topic is active
   */
  isTopicActive(topicId) {
    return this.activeTopics.includes(topicId);
  }

  /**
   * Get filtered word list based on active topics and level
   */
  getWordList(words) {
    return words.filter(word => 
      this.isTopicActive(word.topic) && 
      (!word.level || word.level <= this.classLevel)
    );
  }

  /**
   * Get snapshot for persistence or passing to other components
   */
  getSnapshot() {
    return {
      language: this.language,
      classLevel: this.classLevel,
      activeTopics: [...this.activeTopics],
      difficulty: { ...this.difficulty },
      gameMode: this.gameMode,
      presetId: this.presetId,
      profileName: this.profileName,
      selectedBoardId: this.selectedBoardId,
      selectedBoardUrl: this.selectedBoardUrl,
      version: this.version
    };
  }

  /**
   * Load from snapshot
   */
  loadSnapshot(snapshot) {
    if (!snapshot) return;
    this.language = snapshot.language || 'de';
    this.classLevel = snapshot.classLevel || 'klasse2';
    this.activeTopics = snapshot.activeTopics || [];
    this.difficulty = snapshot.difficulty || this.difficulty;
    this.gameMode = snapshot.gameMode || 'local';
    this.presetId = snapshot.presetId || null;
    this.profileName = snapshot.profileName || null;
    this.selectedBoardId = snapshot.selectedBoardId || null;
    this.selectedBoardUrl = snapshot.selectedBoardUrl || null;
  }
}

// Global instance
export const settings = new SettingsManager();
