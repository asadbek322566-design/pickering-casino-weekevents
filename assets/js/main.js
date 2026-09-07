(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  const backdrop = document.querySelector('.menu-backdrop');
  let previousFocus = null;

  const focusable = () => menu ? [...menu.querySelectorAll('a[href], button:not([disabled])')] : [];

  const closeMenu = (restoreFocus = true) => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    backdrop?.classList.remove('is-visible');
    document.body.classList.remove('menu-open');
    if (restoreFocus && previousFocus instanceof HTMLElement) previousFocus.focus();
  };

  const openMenu = () => {
    if (!toggle || !menu) return;
    previousFocus = document.activeElement;
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('is-open');
    backdrop?.classList.add('is-visible');
    document.body.classList.add('menu-open');
    focusable()[0]?.focus();
  };

  toggle?.addEventListener('click', () => {
    toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu(false)));
  backdrop?.addEventListener('click', () => closeMenu());

  document.addEventListener('keydown', (event) => {
    if (!menu?.classList.contains('is-open')) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }
    if (event.key !== 'Tab') return;
    const items = [toggle, ...focusable()].filter(Boolean);
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) closeMenu(false);
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    reveals.forEach((item) => observer.observe(item));
  }

  const stage = document.querySelector('.device-stage');
  if (stage && !reduceMotion) {
    window.addEventListener('pointermove', (event) => {
      const x = (event.clientX / window.innerWidth - .5) * 8;
      const y = (event.clientY / window.innerHeight - .5) * 8;
      stage.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }, { passive: true });
  }
})();
