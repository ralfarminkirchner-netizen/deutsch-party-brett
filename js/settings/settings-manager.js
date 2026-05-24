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
    this.classLevel = 2; // Default to 2nd grade
    this.activeTopics = ['nomen', 'verben', 'adjektive', 'satzbau'];
    this.difficulty = {
      complexity: 0.5,
      timerSpeed: 1,
      rewardScale: 1
    };
    this.gameMode = 'local';
    this.presetId = null;
    this.profileName = null;
    this.selectedBoardId = null; 
    this.selectedBoardUrl = null;
    this.version = "3.0.1-PRO";
  }

  /**
   * Set class level and filter topics accordingly
   */
  setClassLevel(level) {
    this.classLevel = parseInt(level);
    // Simple logic to adjust complexity based on grade
    this.difficulty.complexity = this.classLevel / 10;
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
    this.classLevel = snapshot.classLevel || 2;
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
