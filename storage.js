/* StudyCore 12 — LocalStorage Manager */
const Storage = {
  PREFIX: 'studycore12_',

  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(this.PREFIX + key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
    } catch (e) {
      console.warn('Storage write failed:', e);
    }
  },

  remove(key) {
    localStorage.removeItem(this.PREFIX + key);
  },

  // Bookmarks
  getBookmarks() {
    return this.get('bookmarks', []);
  },

  addBookmark(item) {
    const bm = this.getBookmarks();
    const exists = bm.find(b => b.type === item.type && b.id === item.id);
    if (!exists) {
      bm.push({ ...item, timestamp: Date.now() });
      this.set('bookmarks', bm);
    }
  },

  removeBookmark(type, id) {
    const bm = this.getBookmarks().filter(b => !(b.type === type && b.id === id));
    this.set('bookmarks', bm);
  },

  isBookmarked(type, id) {
    return this.getBookmarks().some(b => b.type === type && b.id === id);
  },

  // Progress
  getProgress() {
    return this.get('progress', { physics: {}, chemistry: {} });
  },

  toggleProgress(subject, chapterId, itemId) {
    const progress = this.getProgress();
    if (!progress[subject]) progress[subject] = {};
    if (!progress[subject][chapterId]) progress[subject][chapterId] = [];
    const idx = progress[subject][chapterId].indexOf(itemId);
    if (idx > -1) {
      progress[subject][chapterId].splice(idx, 1);
    } else {
      progress[subject][chapterId].push(itemId);
    }
    this.set('progress', progress);
    return progress;
  },

  isCompleted(subject, chapterId, itemId) {
    const progress = this.getProgress();
    return progress[subject] && progress[subject][chapterId] && progress[subject][chapterId].includes(itemId);
  },

  resetProgress() {
    this.set('progress', { physics: {}, chemistry: {} });
  },

  // Recently Viewed
  getRecentlyViewed() {
    return this.get('recentlyViewed', []);
  },

  addRecentlyViewed(item) {
    let recent = this.getRecentlyViewed();
    recent = recent.filter(r => !(r.type === item.type && r.id === item.id));
    recent.unshift({ ...item, timestamp: Date.now() });
    if (recent.length > 30) recent = recent.slice(0, 30);
    this.set('recentlyViewed', recent);
  },

  clearRecentlyViewed() {
    this.set('recentlyViewed', []);
  },

  // Search History
  getSearchHistory() {
    return this.get('searchHistory', []);
  },

  addSearchHistory(query) {
    let history = this.getSearchHistory();
    history = history.filter(h => h !== query);
    history.unshift(query);
    if (history.length > 15) history = history.slice(0, 15);
    this.set('searchHistory', history);
  },

  clearSearchHistory() {
    this.set('searchHistory', []);
  },

  // Text size
  getTextSize() {
    return this.get('textSize', 100);
  },

  setTextSize(size) {
    this.set('textSize', size);
    document.documentElement.style.setProperty('--font-size-base', size + '%');
  },

  // Clear all
  clearAll() {
    const keys = Object.keys(localStorage).filter(k => k.startsWith(this.PREFIX));
    keys.forEach(k => localStorage.removeItem(k));
  }
};
