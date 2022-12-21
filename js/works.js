const popup = document.getElementById('popup');
const btnClosePopup = document.getElementById('btnClosePopup');

btnClosePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

const myWorks = [
  {
    img: {
      src: './img/projects/budget-calculator.png',
      alt: 'Budget Calculator Website',
    },
    title: 'Budget Calculator',
    description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'JavaScript', 'Firebase', 'Authentication'],
    links: {
      liveVersion: 'https://budgtcalc.web.app/',
      sourceCode: 'https://github.com/jorgeabrahan/budgtcalc',
    },
  },
  {
    img: {
      src: './img/projects/clients-registry.png',
      alt: 'Clients Registry Website',
    },
    title: 'Clients Registry',
    description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'JavaScript', 'TypeScript', 'Authentication'],
    links: {
      liveVersion: 'https://lives-tool.web.app/',
      sourceCode: 'https://github.com/jorgeabrahan/regclients',
    },
  },
  {
    img: {
      src: './img/projects/digital-watch.png',
      alt: 'Digital Watch Website',
    },
    title: 'Digital Watch',
    description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'JavaScript', 'Firebase', 'ReactJS'],
    links: {
      liveVersion: 'https://watch-js.web.app/',
      sourceCode: 'https://github.com/jorgeabrahan/watch',
    },
  },
];

const popupImg = popup.querySelector('.popup__image');
const popupTitle = popup.querySelector('.popup__title');
const popupTech = popup.querySelector('.popup__technologies');
const popupDesc = popup.querySelector('.popup__description');
const popupLinksDeploy = popup.querySelectorAll('.popup__link--deploy');
const popupLinksCode = popup.querySelectorAll('.popup__link--code');

const showWorksInfo = (work) => {
  popup.style.display = 'block';
  popupImg.src = work.img.src;
  popupImg.alt = work.img.alt;
  popupTitle.textContent = work.title;
  popupTech.innerHTML = work.technologies.map((technology) => `<li>${technology}</li>`).join('');
  popupDesc.textContent = work.description;
  popupLinksDeploy.forEach((link) => {
    link.href = work.links.liveVersion;
  });
  popupLinksCode.forEach((link) => {
    link.href = work.links.sourceCode;
  });
};

const createWorkHTML = (work) => {
  const workCnt = document.createElement('div');
  workCnt.className = 'works__card';
  workCnt.innerHTML = `
    <figure class="card__image-container">
        <img
            class="card__image"
            src="${work.img.src}"
            alt="${work.img.alt}"
            loading="lazy"
        />
    </figure>
    <div class="card__content">
        <h3 class="card__title">${work.title}</h3>
        <ul class="technologies">
            ${work.technologies.map((technology) => `<li>${technology}</li>`).join('')}
        </ul>
        <button class="button works__button">See project</button>
    </div>
  `;
  const btnWorks = workCnt.querySelector('.works__button');
  btnWorks.addEventListener('click', () => showWorksInfo(work));
  return workCnt;
};

const worksCnt = document.querySelector('.works__cards');
const loadMyWorksSection = () => {
  const worksElements = myWorks.map((work) => createWorkHTML(work));
  const worksFragment = document.createDocumentFragment();
  worksElements.forEach((workElement) => {
    worksFragment.appendChild(workElement);
  });
  worksCnt.appendChild(worksFragment);
};

loadMyWorksSection();
