const menu = document.getElementById('menu');
const btnMenu = document.getElementById('btnMenu');
const iconMenu = btnMenu.firstElementChild;

const toggleIcon = (iconMenu) => {
  const iconText = iconMenu.textContent.toLowerCase().trim();
  const icons = {
    close: 'menu',
    menu: 'close',
  };
  iconMenu.textContent = icons[iconText];
};

const onMenuInteraction = () => {
  menu.classList.toggle('toolbar__menu--translate');
  toggleIcon(iconMenu);
  if (!menu.classList.contains('toolbar__menu--translate')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

btnMenu.addEventListener('click', () => {
  onMenuInteraction();
});

const menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      onMenuInteraction();
    }
  });
});

const toolbar = document.getElementById('toolbar');
const headlineTitle = document.querySelector('.headline__title');

const observerOptions = {
  rootMargin: '200px',
  threshold: 1.0,
};

const onHeadlineObserverChange = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      toolbar.classList.remove('toolbar--fixed');
    } else {
      toolbar.classList.add('toolbar--fixed');
    }
  });
};

const headlineTitleObserver = new IntersectionObserver(onHeadlineObserverChange, observerOptions);
headlineTitleObserver.observe(headlineTitle);