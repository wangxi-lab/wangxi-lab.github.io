type Theme = 'light' | 'dark';

function preferredTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function initTheme() {
  const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  const root = document.documentElement;

  const paint = (theme: Theme) => {
    root.setAttribute('data-theme', theme);
    button?.setAttribute('aria-label', theme === 'light' ? '切换深色' : '切换浅色');
    button?.setAttribute('aria-pressed', String(theme === 'light'));
  };

  paint(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  button?.addEventListener('click', () => {
    const next: Theme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    paint(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore private mode */
    }
  });

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem('theme');
    } catch {
      stored = 'dark';
    }
    if (stored === 'light' || stored === 'dark') return;
    paint(preferredTheme());
  });
}

function initNav() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
  if (!nav || !toggle) return;

  const close = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', '打开菜单');
  };

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });

  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initSpy() {
  const sections = [...document.querySelectorAll<HTMLElement>('main section[id]')];
  if (!sections.length) return;
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      for (const link of links) {
        const active = link.hash === `#${visible.target.id}`;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      }
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: [0.15, 0.4] },
  );
  sections.forEach((section) => observer.observe(section));
}

function initToc() {
  const toc = document.querySelector<HTMLDetailsElement>('[data-toc]');
  if (!toc) return;
  const desktop = window.matchMedia('(min-width: 901px)');
  const sync = () => {
    toc.open = desktop.matches;
  };
  sync();
  desktop.addEventListener('change', sync);
}

function initCopy() {
  document.querySelectorAll<HTMLElement>('.prose pre').forEach((block) => {
    if (block.querySelector('[data-copy]')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy';
    button.dataset.copy = '';
    button.textContent = '复制';
    button.addEventListener('click', async () => {
      const text = block.querySelector('code')?.textContent ?? '';
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = '已复制';
      } catch {
        button.textContent = '复制失败';
      }
      window.setTimeout(() => {
        button.textContent = '复制';
      }, 1600);
    });
    block.append(button);
  });
}

function initTop() {
  const button = document.querySelector<HTMLButtonElement>('[data-top]');
  if (!button) return;
  const onScroll = () => {
    button.hidden = window.scrollY < 700;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

initTheme();
initNav();
initSpy();
initToc();
initCopy();
initTop();
