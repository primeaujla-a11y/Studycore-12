/* StudyCore 12 — Client-side Router */
const Router = {
  routes: {},
  currentRoute: null,

  register(path, handler) {
    this.routes[path] = handler;
  },

  navigate(path) {
    window.location.hash = path;
  },

  init() {
    window.addEventListener('hashchange', () => this.resolve());
    this.resolve();
  },

  resolve() {
    let hash = window.location.hash.slice(1) || '/';
    if (!hash.startsWith('/')) hash = '/' + hash;

    // Strip query params for route matching
    const routePath = hash.split('?')[0];

    // Parse route and params
    let handler = null;
    let params = {};

    // Try exact match first
    if (this.routes[routePath]) {
      handler = this.routes[routePath];
    } else {
      // Try pattern matching (e.g., /physics/:id)
      for (const pattern of Object.keys(this.routes)) {
        const regex = this.patternToRegex(pattern);
        const match = routePath.match(regex);
        if (match) {
          handler = this.routes[pattern];
          params = this.extractParams(pattern, match);
          break;
        }
      }
    }

    if (!handler) {
      handler = this.routes['/'] || (() => '<div class="empty-state"><h3>Page not found</h3></div>');
    }

    this.currentRoute = hash;
    this.updateActiveNav(routePath);
    this.renderPage(handler, params);
  },

  patternToRegex(pattern) {
    const escaped = pattern.replace(/([.+?^${}()|[\]\\])/g, '\\$1');
    const withParams = escaped.replace(/:([^/]+)/g, '([^/]+)');
    return new RegExp('^' + withParams + '$');
  },

  extractParams(pattern, match) {
    const params = {};
    const paramNames = (pattern.match(/:([^/]+)/g) || []).map(p => p.slice(1));
    paramNames.forEach((name, i) => {
      params[name] = match[i + 1];
    });
    return params;
  },

  renderPage(handler, params) {
    const content = document.getElementById('page-content');
    if (!content) return;

    content.style.animation = 'none';
    content.offsetHeight; // Force reflow
    content.style.animation = 'fadeIn 0.25s ease';

    try {
      content.innerHTML = handler(params);
      this.bindPageEvents();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      console.error('Route error:', e);
      content.innerHTML = `<div class="empty-state"><div class="empty-state-icon">!</div><h3 class="empty-state-title">Something went wrong</h3><p class="empty-state-text">${e.message}</p></div>`;
    }
  },

  bindPageEvents() {
    document.querySelectorAll('[data-navigate]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.navigate(el.dataset.navigate);
      });
    });
  },

  updateActiveNav(hash) {
    // Desktop sidebar
    document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
      const href = link.getAttribute('href')?.slice(1) || '';
      link.classList.toggle('active', hash === href || hash.startsWith(href + '/'));
    });

    // Mobile bottom nav
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      const href = link.getAttribute('href')?.slice(1) || '';
      link.classList.toggle('active', hash === href || (href !== '/' && hash.startsWith(href)));
    });
  }
};
