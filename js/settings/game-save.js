/**
 * Game Save - Mid-game persistence via localStorage
 */

const STORAGE_KEY = 'dpb_active_game';

export class GameSaveManager {
  static hasSavedGame() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);
      return data?.state === 'playing' && Array.isArray(data.players) && data.players.length > 0;
    } catch {
      return false;
    }
  }

  static save(gameController, settingsSnapshot) {
    if (!gameController || gameController.state !== 'playing') return false;
    try {
      const snapshot = gameController.exportState(settingsSnapshot);
      snapshot.savedAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
      return true;
    } catch (err) {
      console.warn('GameSave: could not persist', err);
      return false;
    }
  }

  static load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  static clear() {
    localStorage.removeItem(STORAGE_KEY);
  }

  static getSummary() {
    const data = GameSaveManager.load();
    if (!data) return null;
    const current = data.players?.[data.turn?.currentPlayerIndex ?? 0];
    return {
      savedAt: data.savedAt,
      round: data.turn?.round ?? 1,
      playerCount: data.players?.length ?? 0,
      currentPlayer: current?.name ?? 'Spieler',
      classLevel: data.settings?.classLevel
    };
  }
}