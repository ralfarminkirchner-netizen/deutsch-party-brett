/**
 * Firebase Mock - Local multiplayer sync via localStorage + BroadcastChannel
 * Drop-in replacement for Firebase Realtime DB for local party play.
 */

const LOBBY_PREFIX = 'dpb_lobby_';
const CHANNEL_NAME = 'deutsch-party-brett-sync';

export class FirebaseMock {
  constructor() {
    this.lobbyCode = null;
    this.isHost = false;
    this.playerId = this._uid();
    this.listeners = new Map();
    this._channel = typeof BroadcastChannel !== 'undefined'
      ? new BroadcastChannel(CHANNEL_NAME)
      : null;

    this._channel?.addEventListener('message', (event) => {
      const { lobbyCode, path, data } = event.data || {};
      if (lobbyCode !== this.lobbyCode) return;
      this._emit(path, data);
    });

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (event) => {
        if (!this.lobbyCode || !event.key?.startsWith(LOBBY_PREFIX)) return;
        const path = event.key.replace(LOBBY_PREFIX + this.lobbyCode + '_', '');
        try {
          this._emit(path, JSON.parse(event.newValue));
        } catch { /* ignore */ }
      });
    }
  }

  _uid() {
    return 'p_' + Math.random().toString(36).slice(2, 9);
  }

  _emit(path, data) {
    const handlers = this.listeners.get(path) || [];
    handlers.forEach(fn => fn(data));
  }

  _write(path, data) {
    if (!this.lobbyCode) return;
    const key = `${LOBBY_PREFIX}${this.lobbyCode}_${path}`;
    localStorage.setItem(key, JSON.stringify(data));
    this._channel?.postMessage({ lobbyCode: this.lobbyCode, path, data });
    this._emit(path, data);
  }

  static generateLobbyCode() {
    const words = ['ZORA', 'NUBA', 'MIRA', 'LEO', 'BAUM', 'WOLKE', 'STERN', 'REISE'];
    const w = words[Math.floor(Math.random() * words.length)];
    const n = Math.floor(10 + Math.random() * 89);
    return `${w}${n}`;
  }

  createLobby(hostName, hostColorIndex = 0) {
    this.lobbyCode = FirebaseMock.generateLobbyCode();
    this.isHost = true;
    const lobby = {
      code: this.lobbyCode,
      hostId: this.playerId,
      createdAt: Date.now(),
      state: 'waiting',
      players: [{
        id: this.playerId,
        name: hostName,
        colorIndex: hostColorIndex,
        ready: true,
        isHost: true
      }],
      game: null
    };
    this._write('lobby', lobby);
    return lobby;
  }

  joinLobby(code, playerName, colorIndex = 0) {
    const key = `${LOBBY_PREFIX}${code.toUpperCase()}_lobby`;
    const raw = localStorage.getItem(key);
    if (!raw) return null;

    const lobby = JSON.parse(raw);
    this.lobbyCode = lobby.code;
    this.isHost = false;

    if (!lobby.players.find(p => p.id === this.playerId)) {
      lobby.players.push({
        id: this.playerId,
        name: playerName,
        colorIndex,
        ready: false,
        isHost: false
      });
      this._write('lobby', lobby);
    }
    return lobby;
  }

  on(path, callback) {
    if (!this.listeners.has(path)) this.listeners.set(path, []);
    this.listeners.get(path).push(callback);

    if (this.lobbyCode) {
      const key = `${LOBBY_PREFIX}${this.lobbyCode}_${path}`;
      const raw = localStorage.getItem(key);
      if (raw) callback(JSON.parse(raw));
    }
    return () => {
      const list = this.listeners.get(path) || [];
      this.listeners.set(path, list.filter(fn => fn !== callback));
    };
  }

  updateLobby(patch) {
    const key = `${LOBBY_PREFIX}${this.lobbyCode}_lobby`;
    const lobby = JSON.parse(localStorage.getItem(key) || '{}');
    Object.assign(lobby, patch);
    this._write('lobby', lobby);
    return lobby;
  }

  syncGameState(gameSnapshot) {
    if (!this.isHost) return;
    this._write('game', { ...gameSnapshot, syncedAt: Date.now() });
  }

  leaveLobby() {
    if (!this.lobbyCode) return;
    const key = `${LOBBY_PREFIX}${this.lobbyCode}_lobby`;
    try {
      const lobby = JSON.parse(localStorage.getItem(key) || '{}');
      lobby.players = (lobby.players || []).filter(p => p.id !== this.playerId);
      if (lobby.players.length === 0) {
        Object.keys(localStorage).filter(k => k.startsWith(LOBBY_PREFIX + this.lobbyCode))
          .forEach(k => localStorage.removeItem(k));
      } else {
        this._write('lobby', lobby);
      }
    } catch { /* ignore */ }
    this.lobbyCode = null;
    this.isHost = false;
  }
}

export const firebase = new FirebaseMock();