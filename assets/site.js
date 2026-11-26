/* Shared behaviour for the inner pages (book.html, reviews.html):
   compact nav on scroll, mobile drawer, scroll reveals, footer year. */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const root = document.documentElement;
  const yr = $('#yr'); if (yr) yr.textContent = new Date().getFullYear();

  const menuBtn = $('.nav__menu'), drawer = $('#drawer');
  if (menuBtn && drawer) {
    const setMenu = open => {
      menuBtn.setAttribute('aria-expanded', open);
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      drawer.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };
    menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
    $$('a', drawer).forEach(a => a.addEventListener('click', () => setMenu(false)));
    addEventListener('keydown', e => { if (e.key === 'Escape' && drawer.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); } });
  }

  const onScroll = () => root.classList.toggle('is-compact', scrollY > 60);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -6% 0px' });
  window.observeReveals = (c = document) => $$('.reveal:not(.is-in)', c).forEach(el => io.observe(el));
  observeReveals();
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-ready')));
})();
