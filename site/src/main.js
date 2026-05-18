const catalogFiles = {
  decks: './catalog/decks-index.json',
  slides: './catalog/slides-index.json',
  taxonomy: './catalog/taxonomy.json',
  dependencyGraph: './catalog/dependency-graph.json',
};

const facetConfig = [
  { key: 'topics', label: 'Topics' },
  { key: 'categories', label: 'Categories' },
  { key: 'audiences', label: 'Audiences' },
  { key: 'use_cases', label: 'Use cases' },
  { key: 'products', label: 'Products' },
];

const state = {
  search: '',
  selected: Object.fromEntries(facetConfig.map(({ key }) => [key, new Set()])),
  data: null,
};

const elements = {
  summaryGrid: document.getElementById('summary-grid'),
  decksCount: document.getElementById('decks-count'),
  slidesCount: document.getElementById('slides-count'),
  decksGrid: document.getElementById('decks-grid'),
  slidesList: document.getElementById('slides-list'),
  filtersRoot: document.getElementById('filters-root'),
  activeFilters: document.getElementById('active-filters'),
  searchInput: document.getElementById('search-input'),
  clearFilters: document.getElementById('clear-filters'),
  taxonomyGrid: document.getElementById('taxonomy-grid'),
  compositionList: document.getElementById('composition-list'),
  compositionNotes: document.getElementById('composition-notes'),
  catalogLinks: document.getElementById('catalog-links'),
};

const emptyMessage = (message) => `<p class="empty-state">${message}</p>`;

const titleCase = (value) => value.replace(/[-_]/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());

const formatFacetLabel = (taxonomy, group, value) => taxonomy?.[group]?.[value]?.label ?? titleCase(value);

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const hasOverlap = (source = [], selected = new Set()) => !selected.size || source.some((item) => selected.has(item));

const includesSearchTerm = (record, searchText) => {
  if (!searchText) {
    return true;
  }

  const haystack = [
    record.id,
    record.title,
    record.summary,
    ...(record.topics ?? []),
    ...(record.categories ?? []),
    ...(record.audiences ?? []),
    ...(record.use_cases ?? []),
    ...(record.products ?? []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return haystack.includes(searchText);
};

const matchesFilters = (record) =>
  includesSearchTerm(record, state.search) &&
  facetConfig.every(({ key }) => hasOverlap(record[key], state.selected[key]));

const tagList = (items, group, taxonomy) =>
  items.length
    ? `<ul class="tag-list">${items
        .map((item) => `<li><button type="button" class="tag" data-filter-group="${group}" data-filter-value="${item}">${escapeHtml(formatFacetLabel(taxonomy, group, item))}</button></li>`)
        .join('')}</ul>`
    : '<p class="muted">None</p>';

const linkList = () => {
  elements.catalogLinks.innerHTML = '';
  for (const [name, href] of Object.entries(catalogFiles)) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${href}">${escapeHtml(name)}</a>`;
    elements.catalogLinks.appendChild(li);
  }
};

const buildSummaryCards = (visibleDecks, visibleSlides, compositionCandidates) => {
  const totalReusable = visibleSlides.filter((slide) => slide.reusable).length;
  const totalStandalone = visibleSlides.filter((slide) => slide.standalone_safe).length;
  const cards = [
    {
      label: 'Decks matched',
      value: visibleDecks.length,
      detail: `${state.data.decks.length} total in catalog`,
    },
    {
      label: 'Slides matched',
      value: visibleSlides.length,
      detail: `${state.data.slides.length} total indexed`,
    },
    {
      label: 'Reusable slides',
      value: totalReusable,
      detail: `${totalStandalone} standalone-safe`,
    },
    {
      label: 'Composition-ready shortlist',
      value: compositionCandidates.length,
      detail: 'Reusable and customer-visible',
    },
  ];

  elements.summaryGrid.innerHTML = cards
    .map(
      (card) => `
        <article class="summary-card">
          <p class="section-kicker">${escapeHtml(card.label)}</p>
          <strong>${escapeHtml(card.value)}</strong>
          <span>${escapeHtml(card.detail)}</span>
        </article>
      `,
    )
    .join('');
};

const renderActiveFilters = (taxonomy) => {
  const filters = [];
  if (state.search) {
    filters.push(`
      <button class="chip removable" type="button" data-clear-search="true">
        Search: ${escapeHtml(state.search)} ×
      </button>
    `);
  }

  for (const { key, label } of facetConfig) {
    for (const value of state.selected[key]) {
      filters.push(`
        <button class="chip removable" type="button" data-filter-group="${key}" data-filter-value="${value}" data-selected="true">
          ${escapeHtml(label)}: ${escapeHtml(formatFacetLabel(taxonomy, key, value))} ×
        </button>
      `);
    }
  }

  elements.activeFilters.innerHTML = filters.length
    ? `<div class="chip-row">${filters.join('')}</div>`
    : '<p class="muted">No active filters. Use the facets below to narrow the catalog.</p>';
};

const renderFacetGroups = (taxonomy, counts) => {
  elements.filtersRoot.innerHTML = facetConfig
    .map(({ key, label }) => {
      const entries = Object.entries(taxonomy[key] ?? {});
      const options = entries
        .map(([value, metadata]) => {
          const selected = state.selected[key].has(value);
          const count = counts[key]?.get(value) ?? 0;
          return `
            <button
              type="button"
              class="facet-option${selected ? ' selected' : ''}"
              data-filter-group="${key}"
              data-filter-value="${value}"
              aria-pressed="${selected}"
            >
              <span>${escapeHtml(metadata.label ?? titleCase(value))}</span>
              <span class="facet-count">${count}</span>
            </button>
          `;
        })
        .join('');

      return `
        <section class="filter-group">
          <div class="filter-group-header">
            <h3>${escapeHtml(label)}</h3>
            <p>${entries.length} available</p>
          </div>
          <div class="facet-options">${options || '<p class="muted">No options</p>'}</div>
        </section>
      `;
    })
    .join('');
};

const deckLinks = (deck) => {
  const slug = deck.slug ?? deck.id;
  return `
    <div class="link-row">
      <a href="./decks/${slug}/deck.md">Deck overview</a>
      <a href="./decks/${slug}/manifest.yaml">Manifest</a>
      <a href="./catalog/decks-index.json">Deck JSON</a>
    </div>
  `;
};

const renderDecks = (visibleDecks, taxonomy, slidesByDeck) => {
  elements.decksCount.textContent = `${visibleDecks.length} deck${visibleDecks.length === 1 ? '' : 's'} shown`;
  elements.decksGrid.innerHTML = visibleDecks.length
    ? visibleDecks
        .map((deck) => {
          const slides = slidesByDeck.get(deck.id) ?? [];
          const standalone = slides.filter((slide) => slide.standalone_safe).length;
          const reusable = slides.filter((slide) => slide.reusable).length;
          return `
            <article class="catalog-card">
              <div class="card-topline">
                <span class="status-pill">${escapeHtml(deck.status ?? 'unknown')}</span>
                <span class="muted">v${escapeHtml(deck.version ?? '—')}</span>
              </div>
              <h3>${escapeHtml(deck.title)}</h3>
              <p>${escapeHtml(deck.summary ?? 'No summary yet.')}</p>
              <dl class="stats-list">
                <div><dt>Slides</dt><dd>${slides.length}</dd></div>
                <div><dt>Reusable</dt><dd>${reusable}</dd></div>
                <div><dt>Standalone</dt><dd>${standalone}</dd></div>
              </dl>
              <div class="card-section">
                <strong>Topics</strong>
                ${tagList(deck.topics ?? [], 'topics', taxonomy)}
              </div>
              <div class="card-section">
                <strong>Audiences</strong>
                ${tagList(deck.audiences ?? [], 'audiences', taxonomy)}
              </div>
              <div class="card-section">
                <strong>Use cases</strong>
                ${tagList(deck.use_cases ?? [], 'use_cases', taxonomy)}
              </div>
              ${deckLinks(deck)}
            </article>
          `;
        })
        .join('')
    : emptyMessage('No decks match the current filters. Try clearing one or more facets.');
};

const renderSlides = (visibleSlides, taxonomy) => {
  elements.slidesCount.textContent = `${visibleSlides.length} slide${visibleSlides.length === 1 ? '' : 's'} shown`;
  elements.slidesList.innerHTML = visibleSlides.length
    ? visibleSlides
        .map(
          (slide) => `
            <article class="slide-card">
              <div class="card-topline">
                <span class="muted">${escapeHtml(slide.deck_id)}</span>
                <span class="status-pill subtle">#${escapeHtml(slide.order)}</span>
              </div>
              <h3>${escapeHtml(slide.title)}</h3>
              <p>${escapeHtml(slide.summary ?? 'No summary yet.')}</p>
              <div class="chip-row">
                <span class="chip ${slide.standalone_safe ? 'good' : ''}">${slide.standalone_safe ? 'Standalone-safe' : 'Needs context'}</span>
                <span class="chip ${slide.reusable ? 'good' : ''}">${slide.reusable ? 'Reusable' : 'Fixed to deck'}</span>
                ${slide.sequence_group ? `<span class="chip">Sequence: ${escapeHtml(slide.sequence_group)}</span>` : ''}
              </div>
              <div class="card-section">
                <strong>Topics</strong>
                ${tagList(slide.topics ?? [], 'topics', taxonomy)}
              </div>
              <div class="card-section metadata-grid">
                <div>
                  <strong>Requires context</strong>
                  <p>${slide.requires_context?.length ? slide.requires_context.map(escapeHtml).join(', ') : 'None'}</p>
                </div>
                <div>
                  <strong>Recommended next</strong>
                  <p>${slide.recommended_next?.length ? slide.recommended_next.map(escapeHtml).join(', ') : 'None'}</p>
                </div>
              </div>
              <div class="link-row">
                <a href="./${slide.source_file}">Source slide</a>
                <a href="./catalog/slides-index.json">Slide JSON</a>
              </div>
            </article>
          `,
        )
        .join('')
    : emptyMessage('No slides match the current scope. Clear filters or broaden the search to see more reusable units.');
};

const renderTaxonomy = (taxonomy, counts) => {
  elements.taxonomyGrid.innerHTML = facetConfig
    .map(({ key, label }) => {
      const items = Object.entries(taxonomy[key] ?? {});
      return `
        <section class="taxonomy-card">
          <div class="panel-heading compact">
            <div>
              <p class="section-kicker">${escapeHtml(label)}</p>
              <h3>${escapeHtml(label)}</h3>
            </div>
          </div>
          <ul class="taxonomy-list">
            ${items
              .map(([value, metadata]) => {
                const description = metadata.description ? `<p>${escapeHtml(metadata.description)}</p>` : '';
                return `
                  <li>
                    <button type="button" class="taxonomy-link" data-filter-group="${key}" data-filter-value="${value}">
                      <span>${escapeHtml(metadata.label ?? titleCase(value))}</span>
                      <span class="facet-count">${counts[key]?.get(value) ?? 0}</span>
                    </button>
                    ${description}
                  </li>
                `;
              })
              .join('')}
          </ul>
        </section>
      `;
    })
    .join('');
};

const compositionAdvice = (visibleDecks, visibleSlides) => {
  const notes = [];
  const standalone = visibleSlides.filter((slide) => slide.standalone_safe);
  const sequenced = visibleSlides.filter((slide) => slide.sequence_group);

  notes.push(`
    <article class="note-card">
      <h4>Current scope</h4>
      <p>${visibleDecks.length} deck(s) and ${visibleSlides.length} slide(s) match the active filters.</p>
    </article>
  `);

  notes.push(`
    <article class="note-card">
      <h4>Reusable seed set</h4>
      <p>${standalone.length} standalone-safe slide(s) can anchor a customer-facing subdeck without prerequisite cleanup.</p>
    </article>
  `);

  if (sequenced.length) {
    const groups = [...new Set(sequenced.map((slide) => slide.sequence_group).filter(Boolean))];
    notes.push(`
      <article class="note-card">
        <h4>Sequence awareness</h4>
        <p>${groups.length} sequence group(s) are present. Preserve order for slides that depend on narrative buildup.</p>
      </article>
    `);
  }

  if (!visibleSlides.some((slide) => slide.standalone_safe)) {
    notes.push(`
      <article class="note-card warning">
        <h4>Composition caution</h4>
        <p>No standalone-safe slides match the current filters. Broaden the search before building a customer-ready shortlist.</p>
      </article>
    `);
  }

  elements.compositionNotes.innerHTML = notes.join('');
};

const renderCompositionList = (compositionCandidates) => {
  elements.compositionList.innerHTML = compositionCandidates.length
    ? compositionCandidates
        .map(
          (slide) => `
            <article class="slide-card compact">
              <div class="card-topline">
                <span class="muted">${escapeHtml(slide.deck_id)}</span>
                <span class="chip ${slide.standalone_safe ? 'good' : ''}">${slide.standalone_safe ? 'Standalone-safe' : 'Reusable'}</span>
              </div>
              <h4>${escapeHtml(slide.title)}</h4>
              <p>${escapeHtml(slide.summary ?? 'No summary yet.')}</p>
              <div class="link-row">
                <a href="./${slide.source_file}">Open source</a>
              </div>
            </article>
          `,
        )
        .join('')
    : emptyMessage('No composition-ready slides match the current scope yet.');
};

const buildCounts = (records, taxonomy) =>
  Object.fromEntries(
    facetConfig.map(({ key }) => {
      const counter = new Map();
      for (const value of Object.keys(taxonomy[key] ?? {})) {
        counter.set(value, 0);
      }
      for (const record of records) {
        for (const value of record[key] ?? []) {
          counter.set(value, (counter.get(value) ?? 0) + 1);
        }
      }
      return [key, counter];
    }),
  );

const applyFilter = (group, value) => {
  const selected = state.selected[group];
  if (selected.has(value)) {
    selected.delete(value);
  } else {
    selected.add(value);
  }
  render();
};

const render = () => {
  const { decks, slides, taxonomy } = state.data;
  const visibleDecks = decks.filter(matchesFilters);
  const visibleSlides = slides.filter(matchesFilters);
  const slidesByDeck = new Map();
  for (const slide of visibleSlides) {
    if (!slidesByDeck.has(slide.deck_id)) {
      slidesByDeck.set(slide.deck_id, []);
    }
    slidesByDeck.get(slide.deck_id).push(slide);
  }

  const counts = buildCounts([...visibleDecks, ...visibleSlides], taxonomy);
  const compositionCandidates = visibleSlides
    .filter((slide) => slide.reusable && slide.customer_visible && (slide.standalone_safe || !slide.requires_context?.length))
    .sort((left, right) => Number(right.standalone_safe) - Number(left.standalone_safe) || left.deck_id.localeCompare(right.deck_id) || left.order - right.order);

  buildSummaryCards(visibleDecks, visibleSlides, compositionCandidates);
  renderActiveFilters(taxonomy);
  renderFacetGroups(taxonomy, counts);
  renderDecks(visibleDecks, taxonomy, slidesByDeck);
  renderSlides(visibleSlides, taxonomy);
  renderTaxonomy(taxonomy, counts);
  renderCompositionList(compositionCandidates);
  compositionAdvice(visibleDecks, visibleSlides);
};

const handleClick = (event) => {
  const filterTarget = event.target.closest('[data-filter-group][data-filter-value]');
  if (filterTarget) {
    applyFilter(filterTarget.dataset.filterGroup, filterTarget.dataset.filterValue);
    return;
  }

  const clearSearch = event.target.closest('[data-clear-search="true"]');
  if (clearSearch) {
    state.search = '';
    elements.searchInput.value = '';
    render();
  }
};

const resetFilters = () => {
  state.search = '';
  for (const selected of Object.values(state.selected)) {
    selected.clear();
  }
  elements.searchInput.value = '';
  render();
};

const init = async () => {
  const [decksResponse, slidesResponse, taxonomyResponse, dependencyResponse] = await Promise.all([
    fetch(catalogFiles.decks),
    fetch(catalogFiles.slides),
    fetch(catalogFiles.taxonomy),
    fetch(catalogFiles.dependencyGraph),
  ]);

  const [decksData, slidesData, taxonomyData, dependencyGraph] = await Promise.all([
    decksResponse.json(),
    slidesResponse.json(),
    taxonomyResponse.json(),
    dependencyResponse.json(),
  ]);

  state.data = {
    decks: decksData.decks ?? [],
    slides: slidesData.slides ?? [],
    taxonomy: taxonomyData,
    dependencyGraph,
  };

  linkList();
  render();
};

elements.searchInput.addEventListener('input', (event) => {
  state.search = event.target.value.trim().toLowerCase();
  render();
});

elements.clearFilters.addEventListener('click', resetFilters);
document.addEventListener('click', handleClick);

init().catch((error) => {
  console.error(error);
  elements.summaryGrid.innerHTML = emptyMessage('Failed to load catalog data. Check the browser console for details.');
  elements.decksGrid.innerHTML = '';
  elements.slidesList.innerHTML = '';
  elements.taxonomyGrid.innerHTML = '';
  elements.compositionList.innerHTML = '';
  elements.compositionNotes.innerHTML = '';
});
