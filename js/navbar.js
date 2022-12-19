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
};

btnMenu.addEventListener('click', () => {
  onMenuInteraction();
});

const menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    onMenuInteraction();
  });
});
