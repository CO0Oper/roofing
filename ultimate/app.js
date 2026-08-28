/* Review wall: render, filter, search, expand. No dependencies. */
(function () {
  'use strict';

  var wall = document.getElementById('rv-wall');
  var empty = document.getElementById('rv-empty');
  var search = document.getElementById('rv-q');
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip[data-filter]'));
  if (!wall || !window.REVIEWS) return;

  var AVATAR = ['#1F5F8B', '#8B3A2E', '#3F6B4A', '#6B4A8B', '#8B6B1F', '#2E5F6B', '#7A3F5F', '#4A5F2E'];

  function initials(name) {
    return name.trim().charAt(0).toUpperCase();
  }

  function colourFor(name) {
    var h = 0;
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return AVATAR[h % AVATAR.length];
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function card(r) {
    var el = document.createElement('article');
    el.className = 'rv-card';
    el.setAttribute('data-tag', r.tag);
    el.setAttribute('data-hay', (r.name + ' ' + r.service + ' ' + r.text).toLowerCase());
    el.innerHTML =
      '<div class="rv-top">' +
        '<div class="rv-av" style="background:' + colourFor(r.name) + '" aria-hidden="true">' + initials(r.name) + '</div>' +
        '<div class="rv-who"><strong>' + esc(r.name) + '</strong><span>' + esc(r.meta) + '</span></div>' +
      '</div>' +
      '<div class="rv-meta">' +
        '<span class="stars" role="img" aria-label="' + r.rating + ' out of 5 stars">' + '★★★★★'.slice(0, r.rating) + '</span>' +
        '<span>' + esc(r.when) + '</span>' +
      '</div>' +
      '<span class="rv-tag">' + esc(r.service) + '</span>' +
      '<p class="rv-body is-clamped">' + esc(r.text) + '</p>' +
      '<p class="rv-src">Google review · quoted verbatim</p>';

    var body = el.querySelector('.rv-body');
    // Only offer the toggle when the text is actually clipped.
    requestAnimationFrame(function () {
      if (body.scrollHeight - body.clientHeight > 4) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'rv-more';
        btn.textContent = 'Read full review';
        btn.setAttribute('aria-expanded', 'false');
        btn.addEventListener('click', function () {
          var open = body.classList.toggle('is-clamped') === false;
          btn.textContent = open ? 'Show less' : 'Read full review';
          btn.setAttribute('aria-expanded', String(open));
        });
        body.insertAdjacentElement('afterend', btn);
      }
    });
    return el;
  }

  window.REVIEWS.forEach(function (r) { wall.appendChild(card(r)); });

  // Chip counts are derived from the data so they cannot drift out of sync.
  chips.forEach(function (c) {
    var key = c.getAttribute('data-filter');
    var n = key === 'all'
      ? window.REVIEWS.length
      : window.REVIEWS.filter(function (r) { return r.tag === key; }).length;
    var slot = c.querySelector('span');
    if (slot) slot.textContent = n;
    if (n === 0 && key !== 'all') c.hidden = true;
  });

  var activeFilter = 'all';
  var query = '';

  function apply() {
    var shown = 0;
    Array.prototype.forEach.call(wall.children, function (el) {
      var okTag = activeFilter === 'all' || el.getAttribute('data-tag') === activeFilter;
      var okQ = !query || el.getAttribute('data-hay').indexOf(query) !== -1;
      var show = okTag && okQ;
      el.hidden = !show;
      if (show) shown++;
    });
    empty.hidden = shown !== 0;
  }

  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      chips.forEach(function (o) { o.classList.remove('is-on'); });
      c.classList.add('is-on');
      activeFilter = c.getAttribute('data-filter');
      apply();
    });
  });

  if (search) {
    search.addEventListener('input', function () {
      query = search.value.trim().toLowerCase();
      apply();
    });
  }

  var reset = document.querySelector('[data-reset]');
  if (reset) {
    reset.addEventListener('click', function () {
      activeFilter = 'all';
      query = '';
      if (search) search.value = '';
      chips.forEach(function (o) { o.classList.toggle('is-on', o.getAttribute('data-filter') === 'all'); });
      apply();
    });
  }

  /* Hero quote form (demo) */
  var qForm = document.getElementById('quote-form');
  var qDone = document.getElementById('quote-done');
  var qAgain = document.getElementById('quote-reset');
  if (qForm && qDone) {
    qForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!qForm.reportValidity()) return;
      qForm.hidden = true;
      document.querySelector('.quote-kicker').hidden = true;
      document.querySelector('.quote-title').hidden = true;
      document.querySelector('.quote-sub').hidden = true;
      qDone.hidden = false;
    });
  }
  if (qAgain) {
    qAgain.addEventListener('click', function () {
      qDone.hidden = true;
      qForm.hidden = false;
      document.querySelector('.quote-kicker').hidden = false;
      document.querySelector('.quote-title').hidden = false;
      document.querySelector('.quote-sub').hidden = false;
      qForm.reset();
    });
  }

  /* Detailed request form (demo) */
  var form = document.getElementById('form');
  var done = document.getElementById('form-done');
  var again = document.getElementById('form-reset');
  if (form && done) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      form.hidden = true;
      done.hidden = false;
      done.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
  }
  if (again) {
    again.addEventListener('click', function () {
      done.hidden = true;
      form.hidden = false;
      form.reset();
    });
  }
})();
