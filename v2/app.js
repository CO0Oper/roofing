/* TopGuard Roofing — v2 interactions */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ── sticky header shadow ─────────────────────────────── */
  var hdr = $('.hdr');
  var onScroll = function () { hdr.classList.toggle('stuck', window.scrollY > 8); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── mobile nav ───────────────────────────────────────── */
  var burger = $('.burger'), mnav = $('#mnav');
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    mnav.hidden = open;
  });
  $$('#mnav a').forEach(function (a) {
    a.addEventListener('click', function () {
      burger.setAttribute('aria-expanded', 'false');
      mnav.hidden = true;
    });
  });

  /* ── review wall ──────────────────────────────────────── */
  var DATA = window.TOPGUARD_REVIEWS || [];
  var FILTERS = window.TOPGUARD_FILTERS || [];
  var wall = $('#rvWall'), chips = $('#chips'), search = $('#rvSearch'), status = $('#rvStatus');
  var active = 'all', query = '';

  var AV = ['#c0682c', '#2f5d50', '#7a3f5d', '#3b5a7a', '#8a6a24', '#4a4f8c', '#2e6b6b', '#8c4a2f'];
  var hash = function (s) { var h = 0, i; for (i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var isNew = function (w) { return /hour|day|week/.test(w) && !/month|year/.test(w); };

  var GOOGLE_G =
    '<svg class="rv-g" viewBox="0 0 24 24" aria-label="Google review">' +
    '<path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.2-2.2H12v4h6.6c-.1 1.1-.9 2.8-2.5 3.9l3.8 3c2.3-2.1 3.6-5.2 3.6-8.7z"/>' +
    '<path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.8-3c-1 .7-2.4 1.2-4.2 1.2-3.2 0-5.9-2.1-6.9-5l-4 3.1C3.1 21.3 7.2 24 12 24z"/>' +
    '<path fill="#FBBC05" d="M5.1 14.3a7.4 7.4 0 0 1 0-4.6L1.1 6.6a12 12 0 0 0 0 10.8z"/>' +
    '<path fill="#EA4335" d="M12 4.7c2.3 0 3.8 1 4.7 1.8l3.4-3.3C18 1.2 15.2 0 12 0 7.2 0 3.1 2.7 1.1 6.6l4 3.1C6.1 6.8 8.8 4.7 12 4.7z"/></svg>';

  function countFor(id) {
    if (id === 'all') return DATA.length;
    return DATA.filter(function (r) { return r.tags.indexOf(id) > -1; }).length;
  }

  function matches(r) {
    if (active !== 'all' && r.tags.indexOf(active) === -1) return false;
    if (!query) return true;
    var hay = (r.name + ' ' + r.text + ' ' + r.services.join(' ')).toLowerCase();
    return hay.indexOf(query) > -1;
  }

  function card(r) {
    var el = document.createElement('article');
    el.className = 'rv';
    var initial = r.name.trim().charAt(0).toUpperCase();
    var color = AV[hash(r.name) % AV.length];
    var long = r.text.length > 460;

    el.innerHTML =
      '<div class="rv-top">' +
        '<span class="av" style="background:' + color + '" aria-hidden="true">' + esc(initial) + '</span>' +
        '<span class="rv-id"><b>' + esc(r.name) + '</b>' + (r.meta ? '<small>' + esc(r.meta) + '</small>' : '') + '</span>' +
        GOOGLE_G +
      '</div>' +
      '<div class="rv-meta">' +
        '<span class="stars" aria-label="5 out of 5 stars">★★★★★</span>' +
        '<span>' + esc(r.when) + '</span>' +
        (isNew(r.when) ? '<span class="rv-new">New</span>' : '') +
        (r.price ? '<span class="rv-price">' + esc(r.price) + '</span>' : '') +
      '</div>' +
      '<p class="rv-txt' + (long ? ' clip' : '') + '">' + esc(r.text) + '</p>' +
      (long ? '<button class="rv-more" type="button">Read full review</button>' : '') +
      (r.services.length
        ? '<div class="rv-svc">' + r.services.map(function (s) { return '<span>' + esc(s) + '</span>'; }).join('') + '</div>'
        : '');

    if (long) {
      var btn = $('.rv-more', el), txt = $('.rv-txt', el);
      btn.addEventListener('click', function () {
        var clipped = txt.classList.toggle('clip');
        btn.textContent = clipped ? 'Read full review' : 'Show less';
      });
    }
    return el;
  }

  function render() {
    var list = DATA.filter(matches);
    wall.innerHTML = '';
    if (!list.length) {
      wall.innerHTML = '<p class="rv-empty">No reviews match that. Try clearing the search or picking “All reviews”.</p>';
    } else {
      var frag = document.createDocumentFragment();
      list.forEach(function (r) { frag.appendChild(card(r)); });
      wall.appendChild(frag);
    }
    var label = FILTERS.filter(function (f) { return f.id === active; })[0];
    status.textContent =
      'Showing ' + list.length + ' of ' + DATA.length + ' written reviews' +
      (active !== 'all' ? ' · ' + label.label : '') +
      (query ? ' · matching “' + query + '”' : '');
  }

  FILTERS.forEach(function (f) {
    var n = countFor(f.id);
    if (!n) return;
    var b = document.createElement('button');
    b.className = 'chip';
    b.type = 'button';
    b.setAttribute('aria-pressed', String(f.id === active));
    b.innerHTML = esc(f.label) + '<span class="n">' + n + '</span>';
    b.addEventListener('click', function () {
      active = f.id;
      $$('.chip', chips).forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      render();
    });
    chips.appendChild(b);
  });

  var t;
  search.addEventListener('input', function () {
    clearTimeout(t);
    t = setTimeout(function () { query = search.value.trim().toLowerCase(); render(); }, 140);
  });

  render();

  /* ── quote form (demo) ────────────────────────────────── */
  var form = $('#qForm'), done = $('#qDone'), reset = $('#qReset');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    form.hidden = true;
    done.hidden = false;
    done.setAttribute('tabindex', '-1');
    done.focus({ preventScroll: true });
    done.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  reset.addEventListener('click', function () {
    form.reset();
    done.hidden = true;
    form.hidden = false;
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  /* ── scroll reveal ────────────────────────────────────── */
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var targets = $$('.svc, .steps li, .craft-img, .craft-copy, .rv-score, .crew-list li, .q-form, .faq details');
    targets.forEach(function (el) { el.classList.add('rvl'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (!en.isIntersecting) return;
        var el = en.target;
        setTimeout(function () { el.classList.add('in'); }, Math.min(i * 55, 260));
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    targets.forEach(function (el) { io.observe(el); });

    // Failsafe: never leave content invisible if the observer misses something.
    setTimeout(function () {
      targets.forEach(function (el) { el.classList.add('in'); });
    }, 4000);
  }
})();
