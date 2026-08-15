/* StudyCore 12 — Search Engine */
const SearchEngine = {
  index: [],
  built: false,

  buildIndex() {
    this.index = [];
    
    // Index Physics chapters
    if (window.PhysicsChapters) {
      window.PhysicsChapters.forEach(ch => {
        this.index.push({
          type: 'chapter',
          subject: 'physics',
          id: ch.id,
          title: ch.title,
          description: ch.description || '',
          keywords: ch.keywords || [],
          searchText: [ch.title, ch.description, ...(ch.keywords || [])].join(' ').toLowerCase(),
          route: `#/physics/${ch.id}`
        });

        // Index concepts
        if (ch.concepts) {
          ch.concepts.forEach((c, i) => {
            this.index.push({
              type: 'concept',
              subject: 'physics',
              id: ch.id + '-concept-' + i,
              chapterId: ch.id,
              chapterTitle: ch.title,
              title: c.title || 'Concept',
              description: c.content || c.text || '',
              keywords: c.keywords || [],
              searchText: [c.title, c.content, c.text, ...(c.keywords || [])].join(' ').toLowerCase(),
              route: `#/physics/${ch.id}`
            });
          });
        }

        // Index definitions
        if (ch.definitions) {
          ch.definitions.forEach((d, i) => {
            this.index.push({
              type: 'definition',
              subject: 'physics',
              id: ch.id + '-def-' + i,
              chapterId: ch.id,
              chapterTitle: ch.title,
              title: d.term,
              description: d.definition,
              keywords: [d.term],
              searchText: [d.term, d.definition].join(' ').toLowerCase(),
              route: `#/physics/${ch.id}`
            });
          });
        }

        // Index formulas
        if (ch.formulas) {
          ch.formulas.forEach((f, i) => {
            this.index.push({
              type: 'formula',
              subject: 'physics',
              id: ch.id + '-formula-' + i,
              chapterId: ch.id,
              chapterTitle: ch.title,
              title: f.name,
              description: f.formula,
              keywords: [f.name, f.formula],
              searchText: [f.name, f.formula, f.meaning || '', ...(f.variables ? Object.values(f.variables).map(v => v.description) : [])].join(' ').toLowerCase(),
              route: `#/physics/${ch.id}`
            });
          });
        }
      });
    }

    // Index Chemistry chapters
    if (window.ChemistryChapters) {
      window.ChemistryChapters.forEach(ch => {
        this.index.push({
          type: 'chapter',
          subject: 'chemistry',
          id: ch.id,
          title: ch.title,
          description: ch.description || '',
          keywords: ch.keywords || [],
          searchText: [ch.title, ch.description, ...(ch.keywords || [])].join(' ').toLowerCase(),
          route: `#/chemistry/${ch.id}`
        });

        if (ch.concepts) {
          ch.concepts.forEach((c, i) => {
            this.index.push({
              type: 'concept',
              subject: 'chemistry',
              id: ch.id + '-concept-' + i,
              chapterId: ch.id,
              chapterTitle: ch.title,
              title: c.title || 'Concept',
              description: c.content || c.text || '',
              keywords: c.keywords || [],
              searchText: [c.title, c.content, c.text, ...(c.keywords || [])].join(' ').toLowerCase(),
              route: `#/chemistry/${ch.id}`
            });
          });
        }

        if (ch.definitions) {
          ch.definitions.forEach((d, i) => {
            this.index.push({
              type: 'definition',
              subject: 'chemistry',
              id: ch.id + '-def-' + i,
              chapterId: ch.id,
              chapterTitle: ch.title,
              title: d.term,
              description: d.definition,
              keywords: [d.term],
              searchText: [d.term, d.definition].join(' ').toLowerCase(),
              route: `#/chemistry/${ch.id}`
            });
          });
        }

        if (ch.reactions) {
          ch.reactions.forEach((r, i) => {
            this.index.push({
              type: 'reaction',
              subject: 'chemistry',
              id: ch.id + '-reaction-' + i,
              chapterId: ch.id,
              chapterTitle: ch.title,
              title: r.name,
              description: r.equation,
              keywords: [r.name, r.equation],
              searchText: [r.name, r.equation, r.type || '', r.note || ''].join(' ').toLowerCase(),
              route: `#/chemistry/${ch.id}`
            });
          });
        }

        if (ch.formulas) {
          ch.formulas.forEach((f, i) => {
            this.index.push({
              type: 'formula',
              subject: 'chemistry',
              id: ch.id + '-formula-' + i,
              chapterId: ch.id,
              chapterTitle: ch.title,
              title: f.name,
              description: f.formula,
              keywords: [f.name, f.formula],
              searchText: [f.name, f.formula, f.meaning || ''].join(' ').toLowerCase(),
              route: `#/chemistry/${ch.id}`
            });
          });
        }
      });
    }

    // Index Elements
    if (window.ElementsDB) {
      window.ElementsDB.forEach(el => {
        const names = [el.name, el.symbol, String(el.number), el.category || ''];
        this.index.push({
          type: 'element',
          subject: 'chemistry',
          id: 'element-' + el.number,
          title: `${el.name} (${el.symbol})`,
          description: `Atomic Number: ${el.number}, Mass: ${el.mass}`,
          keywords: [el.name, el.symbol, String(el.number)],
          searchText: [el.name, el.symbol, String(el.number), el.mass, el.category, el.block, el.electronConfig].join(' ').toLowerCase(),
          route: `#/periodic-table?element=${el.number}`
        });
      });
    }

    // Index Formulas DB
    if (window.FormulasDB) {
      window.FormulasDB.forEach(f => {
        this.index.push({
          type: 'formula',
          subject: f.subject || 'physics',
          id: 'formula-' + f.id,
          title: f.name,
          description: f.formula,
          keywords: [f.name, f.formula, f.chapter],
          searchText: [f.name, f.formula, f.chapter, f.subject, f.meaning || ''].join(' ').toLowerCase(),
          route: `#/formulas?search=${encodeURIComponent(f.name)}`
        });
      });
    }

    // Index Questions
    if (window.QuestionsDB) {
      window.QuestionsDB.forEach(q => {
        this.index.push({
          type: 'question',
          subject: q.subject,
          id: 'question-' + q.id,
          chapterId: q.chapterId,
          chapterTitle: q.chapterTitle,
          title: q.question.substring(0, 100),
          description: q.question,
          keywords: [q.type],
          searchText: [q.question, q.type, q.chapterTitle, q.subject].join(' ').toLowerCase(),
          route: `#/important-questions?subject=${q.subject}`
        });
      });
    }

    this.built = true;
  },

  search(query) {
    if (!this.built) this.buildIndex();
    if (!query || query.length < 2) return [];

    const q = query.toLowerCase().trim();
    const words = q.split(/\s+/);

    const results = this.index.map(item => {
      let score = 0;
      const text = item.searchText;
      const title = (item.title || '').toLowerCase();

      // Exact title match
      if (title === q) score += 100;
      // Title starts with query
      else if (title.startsWith(q)) score += 80;
      // Title contains query
      else if (title.includes(q)) score += 60;

      // All words in text
      if (words.every(w => text.includes(w))) score += 30;

      // Any word in text
      words.forEach(w => {
        if (text.includes(w)) score += 10;
        if (title.includes(w)) score += 15;
      });

      return { ...item, score };
    });

    return results
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 30);
  },

  getSuggestions() {
    return [
      'Newton', 'Gauss law', 'Faraday', 'molarity', 'electrolysis',
      'benzene', 'kinetic energy', 'lens formula', 'aldehyde',
      'atomic number 26', 'Fe', 'electromagnetic induction'
    ];
  }
};
