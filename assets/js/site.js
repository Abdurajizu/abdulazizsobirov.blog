(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // Dark mode
  // -------------------------------------------------------------------------

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function syncToggle() {
    if (toggle) {
      toggle.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark');
    }
  }

  syncToggle();

  // Transitions are off until now so the initial theme does not animate in.
  window.requestAnimationFrame(function () {
    root.classList.add('theme-ready');
  });

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      syncToggle();
      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        // Private browsing: the choice just will not persist.
      }
    });
  }

  // Follow the OS setting until the visitor picks a theme themselves.
  if (window.matchMedia) {
    var query = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function (event) {
      try {
        if (localStorage.getItem('theme')) { return; }
      } catch (e) { /* fall through */ }
      root.setAttribute('data-theme', event.matches ? 'dark' : 'light');
      syncToggle();
    };
    if (query.addEventListener) {
      query.addEventListener('change', onChange);
    } else if (query.addListener) {
      query.addListener(onChange);
    }
  }

  // -------------------------------------------------------------------------
  // Research entries: details disclosure + hover-to-play video
  // -------------------------------------------------------------------------

  Array.prototype.forEach.call(document.querySelectorAll('.entry-toggle'), function (button) {
    var panel = document.getElementById(button.getAttribute('aria-controls'));
    if (!panel) { return; }

    button.addEventListener('click', function () {
      var open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      panel.classList.toggle('is-open', !open);
      var label = button.querySelector('.entry-toggle-label');
      if (label) { label.textContent = open ? 'Details' : 'Hide details'; }
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll('.lab-toggle'), function (button) {
    var panel = document.getElementById(button.getAttribute('aria-controls'));
    if (!panel) { return; }

    button.addEventListener('click', function () {
      var open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      panel.classList.toggle('is-open', !open);
      var label = button.querySelector('.lab-toggle-label');
      if (label) { label.textContent = open ? 'Lab info' : 'Hide info'; }
    });
  });

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  Array.prototype.forEach.call(document.querySelectorAll('.entry-media video'), function (video) {
    var figure = video.closest('.entry-media');
    var entry = video.closest('.entry');
    if (!entry || reduceMotion) { return; }

    entry.addEventListener('mouseenter', function () {
      var playing = video.play();
      if (playing && playing.catch) { playing.catch(function () {}); }
      if (figure) { figure.classList.add('is-playing'); }
    });

    entry.addEventListener('mouseleave', function () {
      video.pause();
      if (figure) { figure.classList.remove('is-playing'); }
    });
  });

  // -------------------------------------------------------------------------
  // Search
  // -------------------------------------------------------------------------

  var openButton = document.getElementById('search-open');
  var dialog = document.getElementById('search-dialog');
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  if (!openButton || !dialog || !input || !results) { return; }

  var index = null;
  var loading = false;
  var matches = [];
  var active = -1;
  var baseurl = openButton.getAttribute('data-baseurl') || '';

  function loadIndex() {
    if (index || loading) { return; }
    loading = true;
    fetch(baseurl + '/search.json')
      .then(function (response) { return response.json(); })
      .then(function (data) {
        index = data;
        loading = false;
        if (input.value.trim()) { render(input.value); }
      })
      .catch(function () { loading = false; });
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function openPalette() {
    loadIndex();
    if (!dialog.open) {
      if (dialog.showModal) {
        dialog.showModal();
      } else {
        dialog.setAttribute('open', ''); // very old browsers: inline panel
      }
    }
    openButton.setAttribute('aria-expanded', 'true');
    input.focus();
    input.select();
  }

  function closePalette() {
    if (dialog.open) {
      if (dialog.close) { dialog.close(); } else { dialog.removeAttribute('open'); }
    }
  }

  function setActive(next) {
    var items = results.querySelectorAll('.palette-item');
    if (!items.length) { return; }
    if (next < 0) { next = items.length - 1; }
    if (next >= items.length) { next = 0; }
    active = next;
    Array.prototype.forEach.call(items, function (item, i) {
      var on = i === active;
      item.classList.toggle('is-active', on);
      item.setAttribute('aria-selected', String(on));
      if (on) { item.scrollIntoView({ block: 'nearest' }); }
    });
  }

  function render(rawQuery) {
    var query = rawQuery.trim().toLowerCase();
    active = -1;

    if (!query) {
      matches = [];
      results.innerHTML = '';
      input.setAttribute('aria-expanded', 'false');
      return;
    }
    if (!index) { loadIndex(); return; }

    matches = index.filter(function (item) {
      return (item.title + ' ' + item.body).toLowerCase().indexOf(query) !== -1;
    }).sort(function (a, b) {
      // Title matches rank above body-only matches.
      var aTitle = a.title.toLowerCase().indexOf(query) !== -1 ? 0 : 1;
      var bTitle = b.title.toLowerCase().indexOf(query) !== -1 ? 0 : 1;
      return aTitle - bTitle;
    }).slice(0, 8);

    input.setAttribute('aria-expanded', 'true');

    if (!matches.length) {
      results.innerHTML = '<li><p class="palette-empty">No matches</p></li>';
      return;
    }

    results.innerHTML = matches.map(function (item) {
      var meta = item.date || (item.kind === 'page' ? 'Page' : '');
      return '<li role="presentation">' +
             '<a class="palette-item" role="option" aria-selected="false" href="' + escapeHtml(item.url) + '">' +
             '<span class="palette-item-title">' + escapeHtml(item.title) + '</span>' +
             (meta ? '<span class="palette-item-meta">' + escapeHtml(meta) + '</span>' : '') +
             '</a></li>';
    }).join('');

    setActive(0);
  }

  openButton.addEventListener('click', openPalette);

  // Cmd/Ctrl+K from anywhere.
  document.addEventListener('keydown', function (event) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      openPalette();
    }
  });

  // Clicking the backdrop (outside the box) closes it.
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) { closePalette(); }
  });

  dialog.addEventListener('close', function () {
    openButton.setAttribute('aria-expanded', 'false');
    input.value = '';
    results.innerHTML = '';
    matches = [];
    active = -1;
  });

  input.addEventListener('input', function () { render(input.value); });

  input.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActive(active + 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive(active - 1);
    } else if (event.key === 'Enter') {
      var current = results.querySelectorAll('.palette-item')[active];
      if (current) {
        event.preventDefault();
        window.location.href = current.getAttribute('href');
      }
    }
  });
})();
