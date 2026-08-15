/* StudyCore 12 — Progress Manager */
const ProgressManager = {
  getChapterProgress(subject, chapterId, totalItems) {
    const progress = Storage.getProgress();
    const completed = (progress[subject] && progress[subject][chapterId]) ? progress[subject][chapterId].length : 0;
    return totalItems > 0 ? Math.round((completed / totalItems) * 100) : 0;
  },

  getSubjectProgress(subject) {
    const chapters = subject === 'physics' ? window.PhysicsChapters : window.ChemistryChapters;
    if (!chapters) return 0;

    let totalCompleted = 0;
    let totalItems = 0;

    chapters.forEach(ch => {
      const total = (ch.concepts || []).length + (ch.formulas || []).length + (ch.definitions || []).length;
      totalItems += total;
      const progress = Storage.getProgress();
      const completed = (progress[subject] && progress[subject][ch.id]) ? progress[subject][ch.id].length : 0;
      totalCompleted += completed;
    });

    return totalItems > 0 ? Math.round((totalCompleted / totalItems) * 100) : 0;
  },

  getOverallProgress() {
    const p = this.getSubjectProgress('physics');
    const c = this.getSubjectProgress('chemistry');
    return Math.round((p + c) / 2);
  },

  getStats() {
    const bookmarks = Storage.getBookmarks().length;
    const recent = Storage.getRecentlyViewed().length;
    const physicsProgress = this.getSubjectProgress('physics');
    const chemProgress = this.getSubjectProgress('chemistry');
    const totalChapters = (window.PhysicsChapters || []).length + (window.ChemistryChapters || []).length;
    return {
      bookmarks,
      recent,
      physicsProgress,
      chemistryProgress: chemProgress,
      overallProgress: this.getOverallProgress(),
      totalChapters
    };
  },

  renderProgressPage() {
    const stats = this.getStats();
    return `
      <div class="dashboard-header">
        <h1 class="dashboard-title">Study Progress</h1>
        <p class="dashboard-subtitle">Track your learning across Physics and Chemistry</p>
      </div>

      <div class="progress-overview">
        <div class="stat-card">
          ${UI.renderProgressRing(stats.overallProgress)}
          <div class="stat-label">Overall Progress</div>
        </div>
        <div class="stat-card">
          ${UI.renderProgressRing(stats.physicsProgress)}
          <div class="stat-label">Physics</div>
        </div>
        <div class="stat-card">
          ${UI.renderProgressRing(stats.chemistryProgress)}
          <div class="stat-label">Chemistry</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${stats.bookmarks}</div>
          <div class="stat-label">Bookmarks</div>
        </div>
      </div>

      <div class="dashboard-section">
        <h2 class="dashboard-section-title">Physics Chapters</h2>
        <div class="chapter-list">
          ${(window.PhysicsChapters || []).map((ch, i) => {
            const total = (ch.concepts || []).length + (ch.formulas || []).length + (ch.definitions || []).length;
            const progress = this.getChapterProgress('physics', ch.id, total);
            return `<a class="chapter-item" data-navigate="#/physics/${ch.id}">
              <div class="chapter-num">${i + 1}</div>
              <div class="chapter-info">
                <div class="chapter-name">${ch.title}</div>
                <div class="chapter-meta">${total} items · ${progress}% complete</div>
              </div>
              <div class="chapter-progress-bar">
                <div class="chapter-progress-fill" style="width:${progress}%"></div>
              </div>
            </a>`;
          }).join('')}
        </div>
      </div>

      <div class="dashboard-section">
        <h2 class="dashboard-section-title">Chemistry Chapters</h2>
        <div class="chapter-list">
          ${(window.ChemistryChapters || []).map((ch, i) => {
            const total = (ch.concepts || []).length + (ch.formulas || []).length + (ch.definitions || []).length;
            const progress = this.getChapterProgress('chemistry', ch.id, total);
            return `<a class="chapter-item" data-navigate="#/chemistry/${ch.id}">
              <div class="chapter-num">${i + 1}</div>
              <div class="chapter-info">
                <div class="chapter-name">${ch.title}</div>
                <div class="chapter-meta">${total} items · ${progress}% complete</div>
              </div>
              <div class="chapter-progress-bar">
                <div class="chapter-progress-fill" style="width:${progress}%"></div>
              </div>
            </a>`;
          }).join('')}
        </div>
      </div>
    `;
  }
};
