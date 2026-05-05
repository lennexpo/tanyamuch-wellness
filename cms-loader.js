/**
 * TanyaMuch CMS Loader v1.0
 * Fetches content.json and patches DOM on each page.
 * Add this script tag just before </body> on every HTML page:
 *   <script src="cms-loader.js"></script>
 */
(function () {
  var BASE = (function () {
    var s = document.querySelector('script[src*="cms-loader"]');
    if (s) {
      var src = s.getAttribute('src');
      var parts = src.split('/');
      parts.pop();
      return parts.length ? parts.join('/') + '/' : '';
    }
    return '';
  })();

  fetch(BASE + 'content.json?v=' + Date.now())
    .then(function (r) { return r.json(); })
    .then(function (c) {
      applyGlobal(c);
      var page = location.pathname.split('/').pop().replace('.html', '') || 'index';
      if (page === 'index' || page === '') applyIndex(c);
      if (page === 'booking') applyBooking(c);
      if (page === 'services') applyServices(c);
      if (page === 'about') applyAbout(c);
    })
    .catch(function () { /* silently fail */ });

  /* ─── helpers ─────────────────────────────────────── */
  function setText(sel, val, all) {
    if (!val && val !== 0) return;
    var els = all ? document.querySelectorAll(sel) : [document.querySelector(sel)];
    els.forEach(function (el) { if (el) el.textContent = val; });
  }

  function patchTextNode(el, newText) {
    if (!el || !newText) return;
    var nodes = Array.prototype.slice.call(el.childNodes);
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (n.nodeType === 3 && n.textContent.trim()) {
        n.textContent = newText;
        return;
      }
    }
  }

  /* ─── global (all pages) ──────────────────────────── */
  function applyGlobal(c) {
    var s = c.site || {};
    var ct = c.contact || {};

    // Footer
    setText('.footer-brand strong', s.name);
    setText('.footer-brand span', s.tagline);
    setText('.footer-copy', s.footer_copy);

    // Phone links
    document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
      if (ct.phone_href) el.href = 'tel:+' + ct.phone_href;
      if (ct.phone_display) patchTextNode(el, ct.phone_display);
    });

    // WhatsApp links
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (el) {
      if (ct.whatsapp_number) el.href = 'https://wa.me/' + ct.whatsapp_number;
    });

    // Email links
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (el) {
      if (ct.email) {
        el.href = 'mailto:' + ct.email;
        patchTextNode(el, ct.email);
      }
    });

    // Address spans/anchors
    if (ct.address) {
      document.querySelectorAll('.cta-contact-link, .contact-item').forEach(function (el) {
        var txt = el.textContent || '';
        if (txt.indexOf('Cnr') !== -1 || txt.indexOf('Waterfalls') !== -1 || txt.indexOf('Masotsha') !== -1) {
          patchTextNode(el, ct.address);
        }
      });
    }
  }

  /* ─── index page ──────────────────────────────────── */
  function applyIndex(c) {
    var h = c.hero || {};
    var w = c.why || {};
    var ct = c.cta || {};
    var t = (c.testimonials || [])[0] || {};

    // Hero tag
    if (h.tag) {
      var tag = document.querySelector('.hero-tag');
      if (tag) patchTextNode(tag, h.tag);
    }

    // Hero heading
    var h1 = document.querySelector('.hero-h1');
    if (h1) {
      if (h.heading_line1) {
        var nodes = Array.prototype.slice.call(h1.childNodes);
        for (var i = 0; i < nodes.length; i++) {
          var n = nodes[i];
          if (n.nodeType === 3 && n.textContent.trim()) {
            n.textContent = '\n      ' + h.heading_line1 + '\n      ';
            break;
          }
        }
      }
      if (h.heading_line2) {
        var em = h1.querySelector('em');
        if (em) em.textContent = h.heading_line2;
      }
    }

    setText('.hero-p', h.subtext);

    // Services
    if (c.services) {
      var svcs = document.querySelectorAll('.svc');
      c.services.forEach(function (svc, i) {
        if (svcs[i]) {
          var h3 = svcs[i].querySelector('h3');
          var p = svcs[i].querySelector('p');
          if (h3) h3.textContent = svc.title;
          if (p) p.textContent = svc.description;
        }
      });
    }

    // Why section
    setText('.why-h', w.heading);
    setText('.why-body', w.body);
    if (w.points) {
      var wItems = document.querySelectorAll('.why-item-text');
      w.points.forEach(function (pt, i) {
        if (wItems[i]) {
          var h4 = wItems[i].querySelector('h4');
          var p = wItems[i].querySelector('p');
          if (h4) h4.textContent = pt.title;
          if (p) p.textContent = pt.body;
        }
      });
    }

    // Steps / approach
    if (c.steps) {
      var steps = document.querySelectorAll('.step-body');
      c.steps.forEach(function (step, i) {
        if (steps[i]) {
          var h4 = steps[i].querySelector('h4');
          var p = steps[i].querySelector('p');
          if (h4) h4.textContent = step.title;
          if (p) p.textContent = step.body;
        }
      });
    }

    // Testimonial
    if (t.text) setText('.tcard-text', '\u201c' + t.text + '\u201d');
    setText('.tcard-name', t.name);
    setText('.tcard-role', t.role);

    // CTA
    setText('.cta-h', ct.heading);
    setText('.cta-p', ct.body);
  }

  /* ─── booking page ────────────────────────────────── */
  function applyBooking(c) {
    var hr = c.hours || {};
    var ct = c.contact || {};

    // Address paragraphs
    document.querySelectorAll('p').forEach(function (p) {
      var txt = p.textContent || '';
      if (txt.indexOf('Masotsha') !== -1 || txt.indexOf('Waterfalls') !== -1) {
        p.innerHTML = ct.address + '<br>Easily accessible by commuter';
      }
      if (txt.indexOf('Monday') !== -1 || txt.indexOf('Friday') !== -1) {
        p.innerHTML = (hr.weekdays || '') + '<br>' + (hr.saturday || '');
      }
    });
  }

  /* ─── services page ───────────────────────────────── */
  function applyServices(c) {
    if (!c.services) return;
    // Services page may have its own layout — patch matching headings
    var h3s = document.querySelectorAll('.service-card h3, .svc-full h3, .service-item h3');
    c.services.forEach(function (svc, i) {
      if (h3s[i]) h3s[i].textContent = svc.title;
    });
  }

  /* ─── about page ──────────────────────────────────── */
  function applyAbout(c) {
    // placeholder — extend as needed
  }
})();
