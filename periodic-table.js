/* StudyCore 12 — Periodic Table */
const PeriodicTable = {
  selectedElement: null,

  render() {
    return `
      <div class="dashboard-header">
        <h1 class="dashboard-title">Periodic Table</h1>
        <p class="dashboard-subtitle">Interactive periodic table of elements</p>
      </div>

      <div class="filter-bar" style="margin-bottom:16px">
        <input type="text" id="pt-search" class="search-page-input" placeholder="Search element by name, symbol, or atomic number..." style="max-width:400px">
      </div>

      <div class="periodic-table-container">
        <div class="periodic-table" id="periodic-table-grid"></div>
      </div>

      <div class="dashboard-section mt-3">
        <h2 class="dashboard-section-title">Legend</h2>
        <div class="flex flex-wrap gap-1">
          <span class="tag" style="background:#fff3e0;border-color:#ffcc80">Alkali Metal</span>
          <span class="tag" style="background:#fff8e1;border-color:#ffe082">Alkaline Earth</span>
          <span class="tag" style="background:#fce4ec;border-color:#f8bbd0">Transition Metal</span>
          <span class="tag" style="background:#e8f5e9;border-color:#a5d6a7">Post-Transition</span>
          <span class="tag" style="background:#e0f2f1;border-color:#80cbc4">Metalloid</span>
          <span class="tag" style="background:#e3f2fd;border-color:#90caf9">Nonmetal</span>
          <span class="tag" style="background:#f3e5f5;border-color:#ce93d8">Halogen</span>
          <span class="tag" style="background:#ede7f6;border-color:#b39ddb">Noble Gas</span>
          <span class="tag" style="background:#fbe9e7;border-color:#ffab91">Lanthanide</span>
          <span class="tag" style="background:#fff3e0;border-color:#ffab91">Actinide</span>
        </div>
      </div>

      <div id="element-panel-container"></div>
    `;
  },

  buildTable() {
    const grid = document.getElementById('periodic-table-grid');
    if (!grid || !window.ElementsDB) return;

    // Standard periodic table layout
    const layout = this.getLayout();
    grid.innerHTML = '';

    layout.forEach(pos => {
      if (pos === null) {
        const spacer = document.createElement('div');
        spacer.className = 'element-cell spacer';
        grid.appendChild(spacer);
        return;
      }

      const el = window.ElementsDB.find(e => e.number === pos);
      if (!el) return;

      const cell = document.createElement('div');
      cell.className = `element-cell ${this.getCategoryClass(el.category)}`;
      cell.innerHTML = `
        <span class="atomic-num">${el.number}</span>
        <span class="symbol">${el.symbol}</span>
        <span class="name">${el.name}</span>
      `;
      cell.addEventListener('click', () => this.showElement(el));
      grid.appendChild(cell);
    });
  },

  showElement(el) {
    this.selectedElement = el;
    const container = document.getElementById('element-panel-container');
    if (!container) return;

    container.innerHTML = `
      <div class="element-panel-overlay" onclick="PeriodicTable.closePanel()"></div>
      <div class="element-panel">
        <div class="element-panel-header">
          <button class="element-panel-close" onclick="PeriodicTable.closePanel()">&times;</button>
          <div class="element-panel-number">Atomic Number ${el.number}</div>
          <div class="element-panel-symbol">${el.symbol}</div>
          <div class="element-panel-name">${el.name}</div>
          <div style="font-size:0.875rem;opacity:0.7;margin-top:4px">${el.mass}</div>
        </div>
        <div class="element-panel-body">
          <div class="element-detail-row"><span class="element-detail-label">Atomic Number</span><span class="element-detail-value">${el.number}</span></div>
          <div class="element-detail-row"><span class="element-detail-label">Symbol</span><span class="element-detail-value">${el.symbol}</span></div>
          <div class="element-detail-row"><span class="element-detail-label">Name</span><span class="element-detail-value">${el.name}</span></div>
          <div class="element-detail-row"><span class="element-detail-label">Atomic Mass</span><span class="element-detail-value">${el.mass}</span></div>
          <div class="element-detail-row"><span class="element-detail-label">Group</span><span class="element-detail-value">${el.group || '-'}</span></div>
          <div class="element-detail-row"><span class="element-detail-label">Period</span><span class="element-detail-value">${el.period || '-'}</span></div>
          <div class="element-detail-row"><span class="element-detail-label">Block</span><span class="element-detail-value">${el.block || '-'}</span></div>
          <div class="element-detail-row"><span class="element-detail-label">Category</span><span class="element-detail-value">${el.category || '-'}</span></div>
          <div class="element-detail-row"><span class="element-detail-label">Electron Config</span><span class="element-detail-value" style="font-family:var(--font-mono);font-size:0.8rem">${el.electronConfig || '-'}</span></div>
          <div class="element-detail-row"><span class="element-detail-label">Oxidation States</span><span class="element-detail-value">${el.oxidationStates || '-'}</span></div>
          <div class="element-detail-row"><span class="element-detail-label">State (STP)</span><span class="element-detail-value">${el.state || '-'}</span></div>
          ${el.uses ? `<div style="margin-top:16px"><div class="element-detail-label" style="margin-bottom:8px">Common Uses</div><div style="font-size:0.875rem;color:var(--text-secondary);line-height:1.6">${el.uses}</div></div>` : ''}
        </div>
      </div>
    `;
  },

  closePanel() {
    const container = document.getElementById('element-panel-container');
    if (container) container.innerHTML = '';
  },

  getCategoryClass(category) {
    if (!category) return '';
    const c = category.toLowerCase();
    if (c.includes('alkali')) return 'alkali-metal';
    if (c.includes('alkaline')) return 'alkaline-earth';
    if (c.includes('transition')) return 'transition-metal';
    if (c.includes('post-transition') || c.includes('poor')) return 'post-transition';
    if (c.includes('metalloid') || c.includes('semi')) return 'metalloid';
    if (c.includes('nonmetal') || c.includes('reactive')) return 'nonmetal';
    if (c.includes('halogen')) return 'halogen';
    if (c.includes('noble')) return 'noble-gas';
    if (c.includes('lanthanide') || c.includes('lanthanoid')) return 'lanthanide';
    if (c.includes('actinide') || c.includes('actinoid')) return 'actinide';
    if (c.includes('unknown')) return 'unknown';
    return '';
  },

  getLayout() {
    // Standard 18-column layout for elements 1-118
    return [
      1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 2,
      3, 4, null, null, null, null, null, null, null, null, null, null, 5, 6, 7, 8, 9, 10,
      11, 12, null, null, null, null, null, null, null, null, null, null, 13, 14, 15, 16, 17, 18,
      19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
      37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
      55, 56, null, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
      87, 88, null, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
      // Lanthanides
      null, null, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, null,
      // Actinides
      null, null, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, null
    ];
  },

  init() {
    this.buildTable();

    // Check URL for element parameter
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const elNum = params.get('element');
    if (elNum) {
      const el = window.ElementsDB.find(e => e.number === parseInt(elNum));
      if (el) this.showElement(el);
    }

    // Search
    const searchEl = document.getElementById('pt-search');
    if (searchEl) {
      searchEl.addEventListener('input', UI.debounce(() => {
        const q = searchEl.value.toLowerCase().trim();
        if (!q) {
          this.buildTable();
          return;
        }
        this.filterTable(q);
      }, 200));
    }
  },

  filterTable(query) {
    const grid = document.getElementById('periodic-table-grid');
    if (!grid) return;

    const cells = grid.querySelectorAll('.element-cell:not(.spacer)');
    cells.forEach(cell => {
      const num = cell.querySelector('.atomic-num')?.textContent;
      const sym = cell.querySelector('.symbol')?.textContent.toLowerCase();
      const name = cell.querySelector('.name')?.textContent.toLowerCase();
      const match = num === query || sym?.includes(query) || name?.includes(query);
      cell.style.opacity = match ? '1' : '0.2';
      cell.style.transform = match ? 'scale(1.05)' : 'scale(1)';
    });
  }
};
