/* StudyCore 12 — Main Application */
const App = {
  AUTH_PASSWORD: 'SC12@2026',
  AUTH_DURATION: 24 * 60 * 60 * 1000, // 24 hours in ms
  authTimer: null,

  init() {
    this.checkAuth();
  },

  // ===== AUTH SYSTEM =====
  checkAuth() {
    const authData = Storage.get('auth');
    const now = Date.now();

    if (authData && authData.expiresAt && now < authData.expiresAt) {
      // Still authenticated
      this.showApp();
      this.startTimer(authData.expiresAt);
    } else {
      // Not authenticated or expired
      this.showAuthScreen();
    }
  },

  showAuthScreen() {
    const authScreen = document.getElementById('auth-screen');
    const appEl = document.getElementById('app');
    if (authScreen) authScreen.classList.remove('hidden');
    if (appEl) appEl.classList.add('app-hidden');

    // Focus input
    setTimeout(() => {
      const input = document.getElementById('auth-password');
      if (input) input.focus();
    }, 300);

    // Bind events
    this.bindAuthEvents();
  },

  showApp() {
    const authScreen = document.getElementById('auth-screen');
    const appEl = document.getElementById('app');
    if (authScreen) authScreen.classList.add('hidden');
    if (appEl) appEl.classList.remove('app-hidden');

    // Init main app
    this.applyTextSize();
    this.setupMobileNav();
    this.setupSearch();
    this.registerRoutes();
    Router.init();
    this.setupServiceWorker();

    // Start dashboard timer after page renders
    const authData = Storage.get('auth');
    if (authData && authData.expiresAt) {
      setTimeout(() => this.startTimer(authData.expiresAt), 100);
    }
  },

  bindAuthEvents() {
    const input = document.getElementById('auth-password');
    const usernameInput = document.getElementById('auth-username');
    const submitBtn = document.getElementById('auth-submit');
    const logoutBtn = document.getElementById('auth-logout');
    const timerSection = document.getElementById('auth-timer-section');
    const eyeBtn = document.getElementById('auth-toggle-pw');
    const eyeOpen = document.getElementById('auth-eye-open');
    const eyeClosed = document.getElementById('auth-eye-closed');
    const greetingEl = document.getElementById('auth-greeting');

    // Pre-fill username if saved
    const savedUser = Storage.get('username');
    if (savedUser && usernameInput) {
      usernameInput.value = savedUser;
      if (greetingEl) greetingEl.textContent = 'Welcome back, ' + savedUser + '!';
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', () => this.attemptAuth());
    }

    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.attemptAuth();
      });
    }

    if (usernameInput) {
      usernameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') input.focus();
      });
      usernameInput.addEventListener('input', () => {
        const name = usernameInput.value.trim();
        if (greetingEl) {
          greetingEl.textContent = name ? 'Hello, ' + name + '!' : 'Class 12 PSEB Physics & Chemistry';
        }
      });
    }

    if (eyeBtn && input && eyeOpen && eyeClosed) {
      eyeBtn.addEventListener('click', () => {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        eyeOpen.classList.toggle('hidden', isPassword);
        eyeClosed.classList.toggle('hidden', !isPassword);
        input.focus();
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => this.lockApp());
    }

    // Show timer if already authenticated
    const authData = Storage.get('auth');
    if (authData && authData.expiresAt && Date.now() < authData.expiresAt) {
      if (timerSection) timerSection.classList.remove('hidden');
    }
  },

  attemptAuth() {
    const input = document.getElementById('auth-password');
    const usernameInput = document.getElementById('auth-username');
    const error = document.getElementById('auth-error');
    const timerSection = document.getElementById('auth-timer-section');
    const value = input ? input.value.trim() : '';
    const username = usernameInput ? usernameInput.value.trim() : '';

    if (!username) {
      if (usernameInput) {
        usernameInput.classList.add('shake');
        setTimeout(() => usernameInput.classList.remove('shake'), 400);
        usernameInput.focus();
      }
      return;
    }

    if (value === this.AUTH_PASSWORD) {
      // Success
      if (input) {
        input.classList.add('success');
        input.disabled = true;
      }
      if (usernameInput) usernameInput.disabled = true;
      if (error) error.classList.add('hidden');

      Storage.set('username', username);
      const expiresAt = Date.now() + this.AUTH_DURATION;
      Storage.set('auth', { expiresAt });

      setTimeout(() => {
        this.showApp();
        this.startTimer(expiresAt);
      }, 400);
    } else {
      // Wrong password
      if (input) {
        input.value = '';
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 400);
      }
      if (error) {
        error.classList.remove('hidden');
        error.style.animation = 'none';
        error.offsetHeight;
        error.style.animation = 'authErrorShake 0.4s ease';
      }
    }
  },

  startTimer(expiresAt) {
    const authTimerEl = document.getElementById('auth-timer');
    const dashTimerEl = document.getElementById('dashboard-timer');

    const update = () => {
      const remaining = expiresAt - Date.now();
      if (remaining <= 0) {
        this.lockApp();
        return;
      }

      const hours = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
      const timeStr = String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');

      if (authTimerEl) authTimerEl.textContent = timeStr;
      if (dashTimerEl) {
        dashTimerEl.textContent = timeStr;
        dashTimerEl.classList.toggle('urgent', remaining < 3600000); // Red when < 1 hour
      }
    };

    update();
    if (this.authTimer) clearInterval(this.authTimer);
    this.authTimer = setInterval(update, 1000);
  },

  lockApp() {
    Storage.remove('auth');
    if (this.authTimer) clearInterval(this.authTimer);

    // Reset auth screen
    const input = document.getElementById('auth-password');
    const error = document.getElementById('auth-error');
    const timerSection = document.getElementById('auth-timer-section');
    const submitBtn = document.getElementById('auth-submit');

    if (input) {
      input.value = '';
      input.disabled = false;
      input.classList.remove('success', 'shake');
    }
    if (error) error.classList.add('hidden');
    if (timerSection) timerSection.classList.add('hidden');
    if (submitBtn) {
      submitBtn.classList.remove('success');
      submitBtn.textContent = 'Unlock';
    }

    // Reload to clear app state
    window.location.reload();
  },

  // ===== MAIN APP (moved after auth) =====
  applyTextSize() {
    const size = Storage.getTextSize();
    document.documentElement.style.setProperty('--font-size-base', size + '%');
  },

  setupMobileNav() {
    const moreToggle = document.getElementById('mobile-more-toggle');
    const moreMenu = document.getElementById('mobile-more-menu');
    const moreClose = document.getElementById('mobile-more-close');
    const moreOverlay = moreMenu?.querySelector('.mobile-more-overlay');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (moreToggle && moreMenu) {
      moreToggle.addEventListener('click', () => moreMenu.classList.remove('hidden'));
      moreClose?.addEventListener('click', () => moreMenu.classList.add('hidden'));
      moreOverlay?.addEventListener('click', () => moreMenu.classList.add('hidden'));

      moreMenu.querySelectorAll('.mobile-more-links a').forEach(link => {
        link.addEventListener('click', () => moreMenu.classList.add('hidden'));
      });
    }

    if (menuToggle && sidebar) {
      menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });

      document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== menuToggle) {
          sidebar.classList.remove('open');
        }
      });
    }
  },

  setupSearch() {
    const input = document.getElementById('global-search');
    const clearBtn = document.getElementById('search-clear');
    const results = document.getElementById('search-results');
    const resultsInner = results?.querySelector('.search-results-inner');

    if (!input || !results || !resultsInner) return;

    const doSearch = UI.debounce((query) => {
      if (!query || query.length < 2) {
        this.showSearchDefault(resultsInner);
        return;
      }

      const searchResults = SearchEngine.search(query);
      if (searchResults.length === 0) {
        resultsInner.innerHTML = `
          <div class="search-no-results">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <p>No results for "${UI.escapeHtml(query)}"</p>
          </div>`;
        return;
      }

      resultsInner.innerHTML = searchResults.map(r => `
        <a class="search-result-item" href="${r.route}" onclick="SearchEngine.addSearchHistory && null">
          <div class="search-result-meta">
            <span class="search-result-badge ${r.subject}">${r.subject}</span>
            <span class="search-result-badge">${r.type}</span>
          </div>
          <div class="search-result-title">${UI.highlightText(r.title, query)}</div>
          <div class="search-result-preview">${UI.highlightText(r.description || '', query)}</div>
          ${r.chapterTitle ? `<div class="search-result-chapter">${r.chapterTitle}</div>` : ''}
        </a>
      `).join('');

      // Add click handlers to save search history
      resultsInner.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          Storage.addSearchHistory(query);
          results.classList.add('hidden');
          input.value = '';
        });
      });
    }, 150);

    input.addEventListener('input', () => {
      const query = input.value.trim();
      clearBtn?.classList.toggle('hidden', !query);
      results.classList.remove('hidden');
      doSearch(query);
    });

    input.addEventListener('focus', () => {
      results.classList.remove('hidden');
      if (!input.value) this.showSearchDefault(resultsInner);
    });

    clearBtn?.addEventListener('click', () => {
      input.value = '';
      clearBtn.classList.add('hidden');
      this.showSearchDefault(resultsInner);
      input.focus();
    });

    document.addEventListener('click', (e) => {
      if (!results.contains(e.target) && e.target !== input) {
        results.classList.add('hidden');
      }
    });

    results.addEventListener('click', (e) => {
      if (e.target === results) {
        results.classList.add('hidden');
      }
    });
  },

  showSearchDefault(container) {
    const history = Storage.getSearchHistory();
    const suggestions = SearchEngine.getSuggestions();

    let html = '';

    if (history.length > 0) {
      html += `
        <div class="search-history">
          <span class="search-history-label">Recent Searches</span>
          <button class="search-history-clear" onclick="Storage.clearSearchHistory(); App.refreshSearch();">Clear</button>
        </div>
        ${history.slice(0, 5).map(h => `
          <div class="search-result-item" onclick="document.getElementById('global-search').value='${UI.escapeHtml(h)}'; document.getElementById('global-search').dispatchEvent(new Event('input')); ">
            <div class="search-result-title" style="font-weight:400;color:var(--text-secondary)">&#128337; ${UI.escapeHtml(h)}</div>
          </div>
        `).join('')}`;
    }

    html += `
      <div class="search-suggestions">
        <div class="search-suggestions-title">Try searching for</div>
        <div class="search-suggestion-tags">
          ${suggestions.map(s => `<button class="search-suggestion-tag" onclick="document.getElementById('global-search').value='${s}'; document.getElementById('global-search').dispatchEvent(new Event('input')); ">${s}</button>`).join('')}
        </div>
      </div>`;

    container.innerHTML = html;
  },

  refreshSearch() {
    const resultsInner = document.querySelector('.search-results-inner');
    if (resultsInner) this.showSearchDefault(resultsInner);
  },

  registerRoutes() {
    // Dashboard
    Router.register('/', () => this.renderDashboard());

    // Subjects
    Router.register('/subjects', () => this.renderSubjects());

    // Physics
    Router.register('/physics', () => this.renderSubjectPage('physics'));
    Router.register('/physics/:id', (p) => this.renderChapterDetail('physics', p.id));

    // Chemistry
    Router.register('/chemistry', () => this.renderSubjectPage('chemistry'));
    Router.register('/chemistry/:id', (p) => this.renderChapterDetail('chemistry', p.id));

    // Formula Vault
    Router.register('/formulas', () => {
      setTimeout(() => FormulaVault.bindEvents(), 50);
      return FormulaVault.render();
    });

    // Numerical Generator
    Router.register('/numericals', () => {
      setTimeout(() => NumericalGenerator.init(), 50);
      return NumericalGenerator.render();
    });

    // Periodic Table
    Router.register('/periodic-table', () => {
      setTimeout(() => PeriodicTable.init(), 50);
      return PeriodicTable.render();
    });

    // Examples
    Router.register('/examples', () => this.renderExamples());

    // Important Questions
    Router.register('/important-questions', () => this.renderImportantQuestions());

    // Bookmarks
    Router.register('/bookmarks', () => this.renderBookmarks());

    // Progress
    Router.register('/progress', () => ProgressManager.renderProgressPage());

    // Settings
    Router.register('/settings', () => this.renderSettings());

    // Search page (mobile)
    Router.register('/search-page', () => this.renderSearchPage());

    // Quick Revision
    Router.register('/revision', () => this.renderQuickRevision());
    Router.register('/revision/:id', (p) => this.renderChapterRevision(p.id));
  },

  renderDashboard() {
    const stats = ProgressManager.getStats();
    const recent = Storage.getRecentlyViewed().slice(0, 6);
    const authData = Storage.get('auth');
    const hasTimer = authData && authData.expiresAt && Date.now() < authData.expiresAt;
    const username = Storage.get('username') || 'Student';

    return `
      <div class="dashboard-header">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="dashboard-title">Hello, ${username}!</h1>
            <p class="dashboard-subtitle">Class 12 PSEB Physics & Chemistry Study Hub</p>
          </div>
          ${hasTimer ? `
          <div class="session-timer-wrap">
            <div class="session-timer-label">Session expires in</div>
            <div id="dashboard-timer" class="session-timer" data-expires="${authData.expiresAt}">--:--:--</div>
          </div>` : ''}
        </div>
      </div>

      <!-- Subject Cards -->
      <div class="dashboard-section">
        <div class="cards-grid">
          <div class="card card-dark" onclick="Router.navigate('/physics')">
            <div class="card-icon">&#9883;</div>
            <div class="card-title">Physics</div>
            <div class="card-desc">${(window.PhysicsChapters || []).length} chapters covering Mechanics, Optics, Electromagnetism, and Modern Physics</div>
            <div class="card-tag">${stats.physicsProgress}% complete</div>
          </div>
          <div class="card card-dark" onclick="Router.navigate('/chemistry')">
            <div class="card-icon">&#9878;</div>
            <div class="card-title">Chemistry</div>
            <div class="card-desc">${(window.ChemistryChapters || []).length} chapters covering Physical, Organic, and Inorganic Chemistry</div>
            <div class="card-tag">${stats.chemistryProgress}% complete</div>
          </div>
        </div>
      </div>

      <!-- Quick Access -->
      <div class="dashboard-section">
        <h2 class="dashboard-section-title">Quick Access</h2>
        <div class="cards-grid">
          <div class="card" onclick="Router.navigate('/formulas')">
            <div class="card-icon">&#128209;</div>
            <div class="card-title">Formula Vault</div>
            <div class="card-desc">${(window.FormulasDB || []).length} formulas with explanations and examples</div>
          </div>
          <div class="card" onclick="Router.navigate('/numericals')">
            <div class="card-icon">&#128290;</div>
            <div class="card-title">Numerical Generator</div>
            <div class="card-desc">Generate unlimited practice numericals with step-by-step solutions</div>
          </div>
          <div class="card" onclick="Router.navigate('/periodic-table')">
            <div class="card-icon">&#9883;</div>
            <div class="card-title">Periodic Table</div>
            <div class="card-desc">Interactive periodic table with ${(window.ElementsDB || []).length} elements</div>
          </div>
          <div class="card" onclick="Router.navigate('/examples')">
            <div class="card-icon">&#128214;</div>
            <div class="card-title">Examples</div>
            <div class="card-desc">Worked examples with step-by-step solutions</div>
          </div>
          <div class="card" onclick="Router.navigate('/important-questions')">
            <div class="card-icon">&#10067;</div>
            <div class="card-title">Important Questions</div>
            <div class="card-desc">Practice questions categorized by type and difficulty</div>
          </div>
          <div class="card" onclick="Router.navigate('/revision')">
            <div class="card-icon">&#9889;</div>
            <div class="card-title">Quick Revision</div>
            <div class="card-desc">Rapid revision cards for last-minute preparation</div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="dashboard-section">
        <h2 class="dashboard-section-title">Your Progress</h2>
        <div class="grid-4">
          <div class="stat-card">
            <div class="stat-value">${stats.overallProgress}%</div>
            <div class="stat-label">Overall</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.totalChapters}</div>
            <div class="stat-label">Chapters</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${(window.FormulasDB || []).length}</div>
            <div class="stat-label">Formulas</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.bookmarks}</div>
            <div class="stat-label">Bookmarks</div>
          </div>
        </div>
      </div>

      <!-- Recently Viewed -->
      ${recent.length > 0 ? `
      <div class="dashboard-section">
        <h2 class="dashboard-section-title">Recently Viewed</h2>
        <div class="recent-list">
          ${recent.map(r => `
            <a class="recent-item" href="${r.route || '#/'}">
              <div class="recent-item-icon">${r.type === 'element' ? '&#9883;' : r.type === 'formula' ? '&#128209;' : r.type === 'chapter' ? '&#128214;' : '&#128196;'}</div>
              <div class="recent-item-info">
                <div class="recent-item-title">${r.name || r.title || 'Untitled'}</div>
                <div class="recent-item-type">${r.subject || r.type || ''} ${r.type ? '· ' + r.type : ''}</div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>` : ''}
    `;
  },

  renderSubjects() {
    return `
      <div class="dashboard-header">
        <h1 class="dashboard-title">Subjects</h1>
        <p class="dashboard-subtitle">Choose a subject to start studying</p>
      </div>
      <div class="subject-cards-grid">
        <div class="subject-card" onclick="Router.navigate('/physics')">
          <div class="subject-card-icon">&#9883;</div>
          <div class="subject-card-title">Physics</div>
          <div class="subject-card-desc">Mechanics, Thermodynamics, Waves, Optics, Electromagnetism, Modern Physics, and more.</div>
          <div class="subject-card-stats">
            <span>${(window.PhysicsChapters || []).length} Chapters</span>
            <span>${(window.FormulasDB || []).filter(f => f.subject === 'physics').length} Formulas</span>
          </div>
        </div>
        <div class="subject-card" onclick="Router.navigate('/chemistry')">
          <div class="subject-card-icon">&#9878;</div>
          <div class="subject-card-title">Chemistry</div>
          <div class="subject-card-desc">Solutions, Electrochemistry, Kinetics, p-Block, d-Block, Coordination, Organic Chemistry, and more.</div>
          <div class="subject-card-stats">
            <span>${(window.ChemistryChapters || []).length} Chapters</span>
            <span>${(window.FormulasDB || []).filter(f => f.subject === 'chemistry').length} Formulas</span>
          </div>
        </div>
      </div>
    `;
  },

  renderSubjectPage(subject) {
    const chapters = subject === 'physics' ? window.PhysicsChapters : window.ChemistryChapters;
    const title = subject === 'physics' ? 'Physics' : 'Chemistry';
    const icon = subject === 'physics' ? '&#9883;' : '&#9878;';
    const desc = subject === 'physics'
      ? 'Study classical mechanics, electromagnetism, optics, waves, and modern physics with complete concepts, formulas, and numericals.'
      : 'Explore physical chemistry, organic reactions, inorganic compounds, and more with complete concepts, reactions, and formulae.';

    return `
      <div class="subject-header">
        <h1 class="subject-title">${icon} ${title}</h1>
        <p class="subject-desc">${desc}</p>
      </div>
      <div class="chapter-list">
        ${(chapters || []).map((ch, i) => {
          const total = (ch.concepts || []).length + (ch.formulas || []).length + (ch.definitions || []).length + (ch.reactions || []).length;
          const progress = ProgressManager.getChapterProgress(subject, ch.id, total);
          return `<a class="chapter-item" data-navigate="#/${subject}/${ch.id}">
            <div class="chapter-num">${i + 1}</div>
            <div class="chapter-info">
              <div class="chapter-name">${ch.title}</div>
              <div class="chapter-meta">${ch.description ? ch.description.substring(0, 100) + '...' : total + ' items'}</div>
            </div>
            <div class="chapter-progress-bar">
              <div class="chapter-progress-fill" style="width:${progress}%"></div>
            </div>
          </a>`;
        }).join('')}
      </div>
    `;
  },

  renderChapterDetail(subject, chapterId) {
    const chapters = subject === 'physics' ? window.PhysicsChapters : window.ChemistryChapters;
    const chapter = chapters?.find(ch => ch.id === chapterId);
    if (!chapter) return UI.renderEmptyState('&#128196;', 'Chapter not found', 'The chapter you are looking for does not exist.');

    // Track recently viewed
    Storage.addRecentlyViewed({
      type: 'chapter',
      id: chapter.id,
      name: chapter.title,
      subject: subject,
      route: `#${Router.currentRoute}`
    });

    const sections = this.getChapterSections(chapter);
    const navButtons = sections.map(s => `<button class="chapter-nav-btn" onclick="document.getElementById('section-${s.id}')?.scrollIntoView({behavior:'smooth',block:'start'})">${s.label}</button>`).join('');

    return `
      <div class="chapter-detail">
        ${UI.renderBackButton('#/' + subject, subject === 'physics' ? 'Physics' : 'Chemistry')}

        <div class="chapter-detail-header">
          <h1 class="chapter-detail-title">${chapter.title}</h1>
          <div class="chapter-detail-subject">${subject === 'physics' ? '&#9883; Physics' : '&#9878; Chemistry'}</div>
          ${chapter.description ? `<p style="margin-top:10px;color:var(--text-secondary);line-height:1.6">${chapter.description}</p>` : ''}
        </div>

        <div class="chapter-nav-sticky">${navButtons}</div>

        ${sections.map(s => `<div id="section-${s.id}" class="chapter-section">${s.html}</div>`).join('')}
      </div>
    `;
  },

  getChapterSections(chapter) {
    const sections = [];

    // Overview
    if (chapter.description) {
      sections.push({
        id: 'overview',
        label: 'Overview',
        html: `<h2 class="chapter-section-title">Overview</h2><div class="concept-card"><p>${chapter.description}</p></div>`
      });
    }

    // Concepts
    if (chapter.concepts && chapter.concepts.length > 0) {
      sections.push({
        id: 'concepts',
        label: 'Concepts',
        html: `<h2 class="chapter-section-title">Core Concepts</h2>${chapter.concepts.map(c => `
          <div class="concept-card">
            <h4>${c.title}</h4>
            <p>${c.content || c.text || ''}</p>
            ${c.points ? `<ul>${c.points.map(p => `<li>${p}</li>`).join('')}</ul>` : ''}
          </div>
        `).join('')}`
      });
    }

    // Definitions
    if (chapter.definitions && chapter.definitions.length > 0) {
      sections.push({
        id: 'definitions',
        label: 'Definitions',
        html: `<h2 class="chapter-section-title">Definitions</h2>${chapter.definitions.map(d => `
          <div class="definition-card">
            <div class="definition-term">${d.term}</div>
            <div class="definition-text">${d.definition}</div>
          </div>
        `).join('')}`
      });
    }

    // Formulas
    if (chapter.formulas && chapter.formulas.length > 0) {
      sections.push({
        id: 'formulas',
        label: 'Formulas',
        html: `<h2 class="chapter-section-title">Formulas</h2>${chapter.formulas.map(f => `
          <div class="formula-card">
            <div class="formula-name">${f.name}</div>
            <div class="formula-expression">${f.formula}</div>
            ${f.variables ? `<div class="formula-variables"><dl>${Object.entries(f.variables).map(([k, v]) => `<dt>${k}</dt> <dd>= ${typeof v === 'string' ? v : v.description || v}</dd>`).join('')}</dl></div>` : ''}
            ${f.example ? `<div class="formula-example"><strong>Example:</strong> ${f.example}</div>` : ''}
          </div>
        `).join('')}`
      });
    }

    // Reactions (Chemistry)
    if (chapter.reactions && chapter.reactions.length > 0) {
      sections.push({
        id: 'reactions',
        label: 'Reactions',
        html: `<h2 class="chapter-section-title">Important Reactions</h2>${chapter.reactions.map(r => `
          <div class="reaction-card">
            <div class="reaction-name">${r.name}</div>
            <div class="reaction-equation">${r.equation}</div>
            <div class="reaction-meta">
              ${r.type ? `<span class="reaction-tag">${r.type}</span>` : ''}
              ${r.condition ? `<span class="reaction-tag">${r.condition}</span>` : ''}
            </div>
            ${r.note ? `<div class="reaction-note">${r.note}</div>` : ''}
          </div>
        `).join('')}`
      });
    }

    // Derivations
    if (chapter.derivations && chapter.derivations.length > 0) {
      sections.push({
        id: 'derivations',
        label: 'Derivations',
        html: `<h2 class="chapter-section-title">Derivations</h2>${chapter.derivations.map(d => `
          <div class="concept-card">
            <h4>${d.title}</h4>
            ${d.steps ? d.steps.map((s, i) => `<div class="derivation-step"><strong>Step ${i + 1}:</strong> ${s}</div>`).join('') : `<p>${d.content || ''}</p>`}
          </div>
        `).join('')}`
      });
    }

    // Examples
    if (chapter.examples && chapter.examples.length > 0) {
      sections.push({
        id: 'examples',
        label: 'Examples',
        html: `<h2 class="chapter-section-title">Worked Examples</h2>${chapter.examples.map(ex => `
          <div class="generated-question">
            <div class="generated-question-text">${ex.question}</div>
            ${ex.solution ? NumericalGenerator.renderSolution({ solution: ex.solution }) : ''}
          </div>
        `).join('')}`
      });
    }

    // Common Mistakes
    if (chapter.commonMistakes && chapter.commonMistakes.length > 0) {
      sections.push({
        id: 'mistakes',
        label: 'Common Mistakes',
        html: `<h2 class="chapter-section-title">Common Mistakes</h2>${chapter.commonMistakes.map(m => `
          <div class="mistake-card">
            <div class="mistake-title">&#9888; ${m.title || 'Watch Out!'}</div>
            <div class="mistake-text">${m.text || m}</div>
          </div>
        `).join('')}`
      });
    }

    // Quick Revision
    if (chapter.quickRevision && chapter.quickRevision.length > 0) {
      sections.push({
        id: 'revision',
        label: 'Quick Revision',
        html: `<h2 class="chapter-section-title">Quick Revision</h2>${chapter.quickRevision.map(r => `
          <div class="revision-card">
            <strong>${r.title || 'Key Point'}</strong>
            ${r.text || r}
          </div>
        `).join('')}`
      });
    }

    // Important Questions
    if (chapter.importantQuestions && chapter.importantQuestions.length > 0) {
      sections.push({
        id: 'questions',
        label: 'Important Questions',
        html: `<h2 class="chapter-section-title">Important Questions</h2>${chapter.importantQuestions.map(q => `
          <div class="question-card">
            <span class="question-type">${q.type || 'Important'}</span>
            <div class="question-text">${q.question || q}</div>
          </div>
        `).join('')}`
      });
    }

    // Exam Tips
    if (chapter.examTips && chapter.examTips.length > 0) {
      sections.push({
        id: 'tips',
        label: 'Exam Tips',
        html: `<h2 class="chapter-section-title">Exam Tips</h2>${chapter.examTips.map(t => `
          <div class="exam-tip"><strong>&#128161; Tip:</strong> ${t}</div>
        `).join('')}`
      });
    }

    return sections;
  },

  renderExamples() {
    const examples = window.ExamplesDB || [];
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
    const subjectFilter = urlParams.get('subject') || 'all';

    const filtered = subjectFilter === 'all' ? examples : examples.filter(e => e.subject === subjectFilter);

    return `
      <div class="dashboard-header">
        <h1 class="dashboard-title">Examples Library</h1>
        <p class="dashboard-subtitle">Worked examples with step-by-step solutions</p>
      </div>

      <div class="filter-bar">
        <button class="tag ${subjectFilter === 'all' ? 'tag-active' : ''}" onclick="location.hash='/examples?subject=all'">All</button>
        <button class="tag ${subjectFilter === 'physics' ? 'tag-active' : ''}" onclick="location.hash='/examples?subject=physics'">Physics</button>
        <button class="tag ${subjectFilter === 'chemistry' ? 'tag-active' : ''}" onclick="location.hash='/examples?subject=chemistry'">Chemistry</button>
      </div>

      ${filtered.length === 0 ? UI.renderEmptyState('&#128214;', 'No examples yet', 'Examples will be added soon.') : ''}

      ${filtered.map(ex => `
        <div class="example-card">
          <div class="example-card-header">
            <div class="example-card-tags">
              <span class="tag">${ex.subject}</span>
              ${ex.chapter ? `<span class="tag">${ex.chapter}</span>` : ''}
              ${ex.difficulty ? `<span class="tag">${ex.difficulty}</span>` : ''}
            </div>
          </div>
          <div class="example-card-question">${ex.question}</div>
          ${ex.solution ? `<div class="numerical-solution">${NumericalGenerator.renderSolution({ solution: ex.solution })}</div>` : ''}
        </div>
      `).join('')}
    `;
  },

  renderImportantQuestions() {
    const questions = window.QuestionsDB || [];
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
    const subjectFilter = urlParams.get('subject') || 'all';
    const typeFilter = urlParams.get('type') || 'all';

    let filtered = questions;
    if (subjectFilter !== 'all') filtered = filtered.filter(q => q.subject === subjectFilter);
    if (typeFilter !== 'all') filtered = filtered.filter(q => q.type === typeFilter);

    const types = [...new Set(questions.map(q => q.type))];

    return `
      <div class="dashboard-header">
        <h1 class="dashboard-title">Important Questions</h1>
        <p class="dashboard-subtitle">Practice questions organized by type</p>
      </div>

      <div class="filter-bar">
        <button class="tag ${subjectFilter === 'all' ? 'tag-active' : ''}" onclick="location.hash='/important-questions?subject=all&type=${typeFilter}'">All Subjects</button>
        <button class="tag ${subjectFilter === 'physics' ? 'tag-active' : ''}" onclick="location.hash='/important-questions?subject=physics&type=${typeFilter}'">Physics</button>
        <button class="tag ${subjectFilter === 'chemistry' ? 'tag-active' : ''}" onclick="location.hash='/important-questions?subject=chemistry&type=${typeFilter}'">Chemistry</button>
      </div>

      <div class="filter-bar">
        <button class="tag ${typeFilter === 'all' ? 'tag-active' : ''}" onclick="location.hash='/important-questions?subject=${subjectFilter}&type=all'">All Types</button>
        ${types.map(t => `<button class="tag ${typeFilter === t ? 'tag-active' : ''}" onclick="location.hash='/important-questions?subject=${subjectFilter}&type=${encodeURIComponent(t)}'">${t}</button>`).join('')}
      </div>

      ${filtered.length === 0 ? UI.renderEmptyState('&#10067;', 'No questions found', 'Try adjusting your filters.') : ''}

      ${filtered.map(q => `
        <div class="question-card">
          <div class="flex justify-between items-center mb-1">
            <span class="question-type">${q.type}</span>
            <span class="tag">${q.subject}</span>
          </div>
          ${q.chapterTitle ? `<div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-bottom:6px">${q.chapterTitle}</div>` : ''}
          <div class="question-text">${q.question}</div>
        </div>
      `).join('')}
    `;
  },

  renderBookmarks() {
    const bookmarks = Storage.getBookmarks();
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
    const typeFilter = urlParams.get('type') || 'all';

    const filtered = typeFilter === 'all' ? bookmarks : bookmarks.filter(b => b.type === typeFilter);
    const types = [...new Set(bookmarks.map(b => b.type))];

    return `
      <div class="dashboard-header">
        <h1 class="dashboard-title">Bookmarks</h1>
        <p class="dashboard-subtitle">Your saved formulas, chapters, and questions</p>
      </div>

      <div class="bookmark-categories">
        <button class="tag ${typeFilter === 'all' ? 'tag-active' : ''}" onclick="location.hash='/bookmarks?type=all'">All</button>
        ${types.map(t => `<button class="tag ${typeFilter === t ? 'tag-active' : ''}" onclick="location.hash='/bookmarks?type=${t}'">${t}</button>`).join('')}
      </div>

      ${bookmarks.length === 0 ? UI.renderEmptyState('&#128278;', 'No bookmarks yet', 'Bookmark formulas, chapters, and questions to access them quickly.') : ''}

      ${filtered.map(b => `
        <div class="bookmark-item" onclick="Router.navigate('${b.route || '#/'}')">
          <div class="bookmark-item-icon">${b.type === 'formula' ? '&#128209;' : b.type === 'element' ? '&#9883;' : b.type === 'chapter' ? '&#128214;' : '&#128196;'}</div>
          <div class="bookmark-item-info">
            <div class="bookmark-item-title">${b.name}</div>
            <div class="bookmark-item-meta">${b.subject || ''} · ${b.type} ${b.chapter ? '· ' + b.chapter : ''}</div>
          </div>
          <button class="bookmark-remove" onclick="Storage.removeBookmark('${b.type}', '${b.id}'); Router.navigate('/bookmarks'); event.stopPropagation();" title="Remove">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      `).join('')}
    `;
  },

  renderSettings() {
    const textSize = Storage.getTextSize();
    return `
      <div class="dashboard-header">
        <h1 class="dashboard-title">Settings</h1>
        <p class="dashboard-subtitle">Customize your study experience</p>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">Display</div>
        <div class="settings-item">
          <div>
            <div class="settings-item-label">Text Size</div>
            <div class="settings-item-desc">Adjust the base text size across the app</div>
          </div>
          <div class="settings-item-action flex items-center gap-1">
            <span style="font-size:var(--text-xs)">A</span>
            <input type="range" class="text-size-slider" min="80" max="130" value="${textSize}" id="text-size-range">
            <span style="font-size:var(--text-xl);font-weight:700">A</span>
            <span style="font-size:var(--text-xs);color:var(--text-tertiary);margin-left:4px">${textSize}%</span>
          </div>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">Security</div>
        <div class="settings-item">
          <div>
            <div class="settings-item-label">Lock App</div>
            <div class="settings-item-desc">Lock the app and require password to re-enter</div>
          </div>
          <div class="settings-item-action">
            <button class="btn btn-outline" onclick="App.lockApp()">Lock</button>
          </div>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">Data</div>
        <div class="settings-item">
          <div>
            <div class="settings-item-label">Reset Progress</div>
            <div class="settings-item-desc">Clear all study progress data</div>
          </div>
          <div class="settings-item-action">
            <button class="btn btn-outline" onclick="if(confirm('Reset all progress?')){Storage.resetProgress(); UI.toast('Progress reset'); Router.navigate('/settings');}">Reset</button>
          </div>
        </div>
        <div class="settings-item">
          <div>
            <div class="settings-item-label">Clear Bookmarks</div>
            <div class="settings-item-desc">Remove all saved bookmarks</div>
          </div>
          <div class="settings-item-action">
            <button class="btn btn-outline" onclick="if(confirm('Clear all bookmarks?')){Storage.set('bookmarks',[]); UI.toast('Bookmarks cleared'); Router.navigate('/settings');}">Clear</button>
          </div>
        </div>
        <div class="settings-item">
          <div>
            <div class="settings-item-label">Clear Search History</div>
            <div class="settings-item-desc">Remove all search history</div>
          </div>
          <div class="settings-item-action">
            <button class="btn btn-outline" onclick="Storage.clearSearchHistory(); UI.toast('Search history cleared');">Clear</button>
          </div>
        </div>
        <div class="settings-item">
          <div>
            <div class="settings-item-label">Clear Recently Viewed</div>
            <div class="settings-item-desc">Remove all recently viewed items</div>
          </div>
          <div class="settings-item-action">
            <button class="btn btn-outline" onclick="Storage.clearRecentlyViewed(); UI.toast('Recently viewed cleared');">Clear</button>
          </div>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">About</div>
        <div class="settings-item">
          <div>
            <div class="settings-item-label">StudyCore 12</div>
            <div class="settings-item-desc">Class 12 PSEB Physics & Chemistry Study App</div>
          </div>
          <div class="settings-item-action">
            <span class="tag">v1.0</span>
          </div>
        </div>
        <div class="settings-item">
          <div>
            <div class="settings-item-label">Content</div>
            <div class="settings-item-desc">${(window.PhysicsChapters || []).length + (window.ChemistryChapters || []).length} chapters · ${(window.FormulasDB || []).length} formulas · ${(window.ElementsDB || []).length} elements</div>
          </div>
        </div>
        <div class="settings-item">
          <div>
            <div class="settings-item-label">Made by</div>
            <div class="settings-item-desc">Udayveer Singh</div>
          </div>
        </div>
      </div>
    `;
  },

  renderSearchPage() {
    return `
      <div class="search-page-container">
        <div class="dashboard-header">
          <h1 class="dashboard-title">Search</h1>
        </div>
        <input type="text" class="search-page-input mb-2" id="search-page-input" placeholder="Search formulas, elements, reactions, chapters..." autofocus>
        <div id="search-page-results"></div>
      </div>
    `;
  },

  renderQuickRevision() {
    const allChapters = [
      ...(window.PhysicsChapters || []).map(ch => ({ ...ch, subject: 'physics' })),
      ...(window.ChemistryChapters || []).map(ch => ({ ...ch, subject: 'chemistry' }))
    ];

    return `
      <div class="dashboard-header">
        <h1 class="dashboard-title">Quick Revision</h1>
        <p class="dashboard-subtitle">Rapid revision cards for quick review</p>
      </div>

      <div class="revision-grid">
        ${allChapters.map(ch => {
          const items = [
            ...(ch.quickRevision || []),
            ...(ch.formulas || []).slice(0, 3).map(f => ({ title: f.name, text: f.formula })),
            ...(ch.definitions || []).slice(0, 2).map(d => ({ title: d.term, text: d.definition }))
          ].slice(0, 5);

          if (items.length === 0) return '';

          return `
            <div class="revision-card" onclick="Router.navigate('#/${ch.subject}/${ch.id}')" style="cursor:pointer">
              <strong>${ch.title}</strong>
              ${items.map(item => `<div style="margin-top:6px;font-size:var(--text-sm)"><strong>${item.title || ''}:</strong> ${item.text || ''}</div>`).join('')}
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  renderChapterRevision(chapterId) {
    // Search across physics and chemistry
    const ch = (window.PhysicsChapters || []).find(c => c.id === chapterId) ||
               (window.ChemistryChapters || []).find(c => c.id === chapterId);

    if (!ch) return UI.renderEmptyState('&#128196;', 'Chapter not found', '');

    const items = [
      ...(ch.quickRevision || []),
      ...(ch.formulas || []).map(f => ({ title: f.name, text: f.formula })),
      ...(ch.definitions || []).map(d => ({ title: d.term, text: d.definition }))
    ];

    return `
      ${UI.renderBackButton('/revision', 'Quick Revision')}
      <div class="dashboard-header">
        <h1 class="dashboard-title">${ch.title}</h1>
        <p class="dashboard-subtitle">Quick Revision</p>
      </div>
      <div class="revision-grid">
        ${items.map(item => `
          <div class="revision-card">
            <strong>${item.title || 'Key Point'}</strong>
            ${item.text || ''}
          </div>
        `).join('')}
      </div>
    `;
  },

  setupServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js').catch(() => {});
    }
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => App.init());
