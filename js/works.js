const popup = document.getElementById('popup');
const btnClosePopup = document.getElementById('btnClosePopup');

popup.addEventListener('click', (e) => {
  if (e.target.id === 'popup') {
    popup.style.display = 'none';
  }
});

btnClosePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

const myWorks = [
  {
    img: {
      src: '../img/projects/todo.png',
      alt: 'Todo List Website preview',
    },
    video: '../videos/todos.mp4',
    title: 'Todo List',
    description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'JavaScript', 'Firebase', 'Authentication'],
    links: {
      liveVersion: 'https://jorgeabrahan.github.io/todo_list/',
      sourceCode: 'https://github.com/jorgeabrahan/todo_list',
    },
  },
  {
    img: {
      src: '../img/projects/awesome_books.png',
      alt: 'Awesome Books Website preview',
    },
    video: '../videos/awesome_books.mp4',
    title: 'Awesome Books',
    description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'JavaScript', 'TypeScript', 'Authentication'],
    links: {
      liveVersion: 'https://jorgeabrahan.github.io/awesome_books_es6/',
      sourceCode: 'https://github.com/jorgeabrahan/awesome_books_es6',
    },
  },
  {
    img: {
      src: '../img/projects/regclients.png',
      alt: 'Clients Registry Website preview',
    },
    video: '../videos/regclients.mp4',
    title: 'Clients Registry',
    description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'JavaScript', 'Firebase', 'ReactJS'],
    links: {
      liveVersion: 'https://jorgeabrahan.github.io/regclients/',
      sourceCode: 'https://github.com/jorgeabrahan/regclients',
    },
  },
  {
    img: {
      src: '../img/projects/fullstack_course.png',
      alt: 'Fullstack Course Website preview',
    },
    video: '../videos/fullstack_course.mp4',
    title: 'Fullstack Course',
    description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'JavaScript', 'Firebase', 'ReactJS'],
    links: {
      liveVersion: 'https://jorgeabrahan.github.io/development_course/',
      sourceCode: 'https://github.com/jorgeabrahan/development_course',
    },
  },
  {
    img: {
      src: '../img/projects/budet_calculator.png',
      alt: 'Budget Calculator Website preview',
    },
    video: '../videos/budget_calc.mp4',
    title: 'Budget Calculator',
    description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'JavaScript', 'Firebase', 'ReactJS'],
    links: {
      liveVersion: 'https://budgtcalc.web.app/',
      sourceCode: 'https://github.com/jorgeabrahan/budgtcalc',
    },
  },
  {
    img: {
      src: '../img/projects/calculator.png',
      alt: 'Calculator Website preview',
    },
    video: '../videos/calculator.mp4',
    title: 'Calculator',
    description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['html', 'css', 'JavaScript', 'Firebase', 'ReactJS'],
    links: {
      liveVersion: 'https://jorgeabrahan.github.io/calculator/',
      sourceCode: 'https://github.com/jorgeabrahan/calculator',
    },
  },
];

// const popupImg = popup.querySelector('.popup__image');
const popupHeader = popup.querySelector('.popup__header');
const popupTitle = popup.querySelector('.popup__title');
const popupTech = popup.querySelector('.popup__technologies');
const popupDesc = popup.querySelector('.popup__description');
const popupLinksDeploy = popup.querySelectorAll('.popup__link--deploy');
const popupLinksCode = popup.querySelectorAll('.popup__link--code');

const createPopupVideo = (videoSrc) => {
  const prevVideo = popupHeader.querySelector('video');
  if (prevVideo !== null) prevVideo.remove();
  const popupVideo = document.createElement('video');
  popupVideo.className = 'popup__image';
  popupVideo.setAttribute('autoplay', '');
  popupVideo.setAttribute('loop', '');
  popupVideo.innerHTML = `
    <source src="${videoSrc}" type="video/mp4">
    Your browser does not support HTML5 video.
  `;
  popupHeader.appendChild(popupVideo);
};

const showWorksInfo = (work) => {
  popup.style.display = 'block';
  createPopupVideo(work.video);
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
      <img class="card__image" src="${work.img.src}"alt="${work.img.alt}"></img>
    </figure>
    <div class="card__content">
        <h3 class="card__title">${work.title}</h3>
        <ul class="technologies">
            ${work.technologies.map((technology) => `<li>${technology}</li>`).join('')}
        </ul>
        <button class="button works__button">See project</button>
    </div>
  `;
  const btnWork = workCnt.querySelector('.works__button');
  const imgWork = workCnt.querySelector('figure');
  btnWork.addEventListener('click', () => showWorksInfo(work));
  imgWork.addEventListener('click', () => showWorksInfo(work));
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
