/* StudyCore 12 — UI Utilities */
const UI = {
  toast(message) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = message;
    el.classList.remove('hidden');
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = 'toastIn 0.3s ease, toastOut 0.3s ease 2.5s forwards';
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => el.classList.add('hidden'), 3000);
  },

  formatDate(ts) {
    const d = new Date(ts);
    const now = new Date();
    const diff = now - d;
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
    if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
    if (diff < 604800000) return Math.floor(diff / 86400000) + 'd ago';
    return d.toLocaleDateString();
  },

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  },

  highlightText(text, query) {
    if (!query) return this.escapeHtml(text);
    const escaped = this.escapeHtml(text);
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return escaped.replace(regex, '<mark>$1</mark>');
  },

  debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  },

  getSubjectIcon(subject) {
    if (subject === 'physics') return '&#9883;';
    if (subject === 'chemistry') return '&#9878;';
    return '&#9733;';
  },

  getSubjectColor(subject) {
    if (subject === 'physics') return '#1a1a2e';
    if (subject === 'chemistry') return '#2d3436';
    return '#333';
  },

  renderProgressBar(percent) {
    return `<div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div>`;
  },

  renderProgressRing(percent, size = 120) {
    const r = (size - 12) / 2;
    const c = 2 * Math.PI * r;
    const offset = c - (percent / 100) * c;
    return `
      <div class="progress-ring-container" style="width:${size}px;height:${size}px">
        <svg class="progress-ring" width="${size}" height="${size}">
          <circle class="progress-ring-bg" cx="${size/2}" cy="${size/2}" r="${r}" />
          <circle class="progress-ring-fill" cx="${size/2}" cy="${size/2}" r="${r}"
            stroke-dasharray="${c}" stroke-dashoffset="${offset}" />
        </svg>
        <div class="progress-ring-text">${percent}%</div>
      </div>`;
  },

  renderEmptyState(icon, title, text) {
    return `<div class="empty-state">
      <div class="empty-state-icon">${icon}</div>
      <h3 class="empty-state-title">${title}</h3>
      <p class="empty-state-text">${text}</p>
    </div>`;
  },

  renderBackButton(href, label) {
    return `<a class="back-btn" data-navigate="${href}">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      ${label || 'Back'}
    </a>`;
  }
};
