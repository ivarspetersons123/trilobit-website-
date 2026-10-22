/* TRILOBIT 03: brand settings loaded from project's data/brand.json via local server. */
(async function () {
  'use strict';
  try {
    const response = await fetch('data/brand.json', {cache:'no-store'});
    if (!response.ok) return;
    const v = await response.json();
    const logo = document.querySelector('a.logo');
    if (logo) {
      const small = document.createElement('small');
      small.textContent = v.subtitle;
      logo.replaceChildren(document.createTextNode(v.name), small);
    }
    const heading = document.querySelector('.hero h1');
    if (heading) {
      const accent = document.createElement('span');
      accent.className = 'hero-longword';
      accent.style.color = 'var(--accent)';
      accent.textContent = v.line2;
      heading.replaceChildren(document.createTextNode(v.line1), document.createElement('br'), accent);
    }
    document.title = 'TRILOBIT — Motocikli';
    const foot = document.querySelector('footer .row span');
    if (foot) foot.textContent = '© TRILOBIT MOTOCIKLI';
    const demo = document.querySelector('.demo');
    if (demo) demo.textContent = demo.textContent.replace(/^TRILOBIT/, v.name);
    document.dispatchEvent(new Event('trilobit:data-ready'));
  } catch (err) { console.warn('TRILOBIT: nevar ielādēt zīmola iestatījumus', err); }
})();
