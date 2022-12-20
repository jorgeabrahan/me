const works = document.getElementById('works');
const aboutMe = document.getElementById('about-me');
const contact = document.getElementById('contact');
const menuItems = document.querySelectorAll('.menu__item');
const menuUnderline = document.querySelector('.menu__underline');

const sectionsOptions = {
  rootMargin: '0px',
  threshold: 0.5,
};

const onSectionsObserverChange = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const { id } = entry.target;
      if (id === 'works') {
        menuItems[0].appendChild(menuUnderline);
      }
      if (id === 'about-me') {
        menuItems[1].appendChild(menuUnderline);
      }
      if (id === 'contact') {
        menuItems[2].appendChild(menuUnderline);
      }
    }
  });
};

const sectionsObserver = new IntersectionObserver(onSectionsObserverChange, sectionsOptions);
sectionsObserver.observe(works);
sectionsObserver.observe(aboutMe);
sectionsObserver.observe(contact);