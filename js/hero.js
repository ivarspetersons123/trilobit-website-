/* 4. posms: titullapas saturs no data/hero.json */
(async () => {
  try {
    const r = await fetch('data/hero.json', {cache:'no-store'});
    if (!r.ok) return;
    const h = await r.json();
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const eyebrow = hero.querySelector('.eyebrow');
    const description = hero.querySelector('.wrap > p');
    if (eyebrow) eyebrow.textContent = h.eyebrow;
    if (description) description.textContent = h.description;
    if (typeof h.image === 'string' && /^assets\/images\/[a-zA-Z0-9_.-]+$/.test(h.image)) {
      hero.style.backgroundImage = 'linear-gradient(90deg,rgba(8,10,12,.91) 0%,rgba(8,10,12,.62) 32%,rgba(8,10,12,.05) 72%),url("' + h.image + '")';
    }
    document.dispatchEvent(new Event('trilobit:data-ready'));
  } catch (err) { console.warn('Titullapas iestatījumi nav pieejami', err); }
})();
