/* Shared JS — runs on every page */

/* ---------- Nav scroll state ---------- */
const nav = document.getElementById('nav');
const floatCta = document.getElementById('floatCta');
const onScroll = () => {
  const y = window.scrollY;
  if (nav && !nav.classList.contains('solid')) nav.classList.toggle('scrolled', y > 60);
  if (floatCta) floatCta.classList.toggle('visible', y > 700);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Mobile menu toggle ---------- */
const toggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if (toggle && navMenu) {
  toggle.addEventListener('click', () => navMenu.classList.toggle('open'));
  navMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navMenu.classList.remove('open'))
  );
}

/* ---------- Menu tabs (menu page) ---------- */
const tabs = document.querySelectorAll('.menu-tab');
const panels = document.querySelectorAll('.menu-panel');
tabs.forEach(t => t.addEventListener('click', () => {
  const target = t.dataset.tab;
  tabs.forEach(x => x.classList.toggle('active', x === t));
  panels.forEach(p => p.classList.toggle('active', p.dataset.panel === target));

  // Scroll so the top of the menu section sits just below the fixed nav.
  // Only scroll up if the user is below that point — don't jerk them down.
  const menuPage = document.querySelector('.menu-page');
  if (menuPage) {
    const navOffset = window.innerWidth < 560 ? 60 : 90;
    const targetY = menuPage.getBoundingClientRect().top + window.scrollY - navOffset;
    if (window.scrollY > targetY + 20) {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  }
}));

/* ---------- Reveal on scroll ---------- */
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  reveals.forEach(r => io.observe(r));
}

/* ---------- Number counters ---------- */
const counters = document.querySelectorAll('[data-counter]');
if (counters.length) {
  const countIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.counter, 10);
      const duration = 1800;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.floor(eased * target);
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      countIO.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(c => countIO.observe(c));
}

/* ---------- Default reservation date = today ---------- */
const dateInput = document.getElementById('resDate');
if (dateInput) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  dateInput.value = `${yyyy}-${mm}-${dd}`;
}
