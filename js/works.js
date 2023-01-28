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
      src: '../img/mockups/todo.jpg',
      alt: 'Todo List Website preview',
    },
    video: '../videos/todos.mp4',
    title: 'Todo List',
    description:
      'To Do list project with drag and drop to sort the tasks, localStorage to save them, and Jest to test the main functionality of the app. I also used webpack to create a JavaScript bundle file to reduce the amount of server requests for javascript files and to boost the web performance.',
    technologies: ['html', 'css', 'JavaScript/ES6', 'Web APIs', 'Jest', 'Webpack'],
    links: {
      liveVersion: 'https://jorgeabrahan.github.io/todo_list/',
      sourceCode: 'https://github.com/jorgeabrahan/todo_list',
    },
  },
  {
    img: {
      src: '../img/mockups/awesome_books.jpg',
      alt: 'Awesome Books Website preview',
    },
    video: '../videos/awesome_books.mp4',
    title: 'Awesome Books',
    description:
      'Awesome Books project to manage and save your favorite books by name and author and quick access them later. Implemented <a href="https://moment.github.io/luxon/#/" target="_blank">Luxon</a> to display the actual date and time on a nice format when the page loads.',
    technologies: ['html', 'css', 'JavaScript/ES6', 'Web APIs', 'Luxon'],
    links: {
      liveVersion: 'https://jorgeabrahan.github.io/awesome_books_es6/',
      sourceCode: 'https://github.com/jorgeabrahan/awesome_books_es6',
    },
  },
  {
    img: {
      src: '../img/mockups/regclients.jpg',
      alt: 'Clients Registry Website preview',
    },
    video: '../videos/regclients.mp4',
    title: 'Clients Registry',
    description:
      'App to create registries of your sales, built using Typescript and webpack to create a single JavasSript bundle file to boost the web performance and reduce the number of server requests. <br /><br />All data is stored in Firestore database, a Firebase service. Also while creating a new registry before storing the data in the database, everything is stored locally, that way even if you lose your internet connection, your progress remains safe.',
    technologies: ['html', 'css', 'Typescript', 'Web APIs', 'Webpack', 'Firebase'],
    links: {
      liveVersion: 'https://jorgeabrahan.github.io/regclients/',
      sourceCode: 'https://github.com/jorgeabrahan/regclients',
    },
  },
  {
    img: {
      src: '../img/mockups/fullstack_course.jpg',
      alt: 'Fullstack Course Website preview',
    },
    video: '../videos/fullstack_course.mp4',
    title: 'Fullstack Course',
    description:
      'Fullstack Web Developer course webpage mockup, NOT a real course yet. I built this project with vanilla JavaScript and CSS to practice sticking to a template, the <a href="https://www.behance.net/gallery/29845175/CC-Global-Summit-2015" target="_blank">original design</a> idea is by <a href="https://www.behance.net/adagio07" target="_blank">Cindy Shin</a>.<br /><br /> I used Photoshop to edit the images of the speakers and Illustrator to create the logo. Also my main focus during the process was to write neat and clean CSS styles and I truly believe I accomplished my goal.',
    technologies: ['html', 'css', 'JavaScript/ES6', 'Photoshop', 'Illustrator'],
    links: {
      liveVersion: 'https://jorgeabrahan.github.io/development_course/',
      sourceCode: 'https://github.com/jorgeabrahan/development_course',
    },
  },
  {
    img: {
      src: '../img/mockups/finance_manger.jpg',
      alt: 'Finance Manager Website preview',
    },
    video: '../videos/budget_calc.mp4',
    title: 'Finance Manager',
    description:
      'Finance Manager web application built with vanilla JavaScipt. Uses authentication, storage, and firestore database services from Firebase. Also I implemented localStorage and File web APIs. <br /><br /> Contains filter functionality for all the incomes and expenses and allows you to keep registry of your finances by date, with a useful description and a subject or title. Also if you <a href="https://github.com/jorgeabrahan/budgtcalc#readme" target="_blank">create an account</a> you\'ll be able to manage the finances of multiple years, not just the current one',
    technologies: ['html', 'css', 'JavaScript/ES6', 'Async', 'Web APIs', 'Firebase'],
    links: {
      liveVersion: 'https://budgtcalc.web.app/',
      sourceCode: 'https://github.com/jorgeabrahan/budgtcalc',
    },
  },
  {
    img: {
      src: '../img/mockups/watch.jpg',
      alt: 'Watch Website preview',
    },
    video: '../videos/watch.mp4',
    title: 'Watch App',
    description:
      'Watch React app with clock, timer, stopwatch and counter functionalities. Uses localStorage to store and manage the color theme preferences of the user and Firebase hosting for deployment.',
    technologies: ['html', 'css', 'JavaScript/ES6', 'Web APIs', 'React', 'Firebase'],
    links: {
      liveVersion: 'https://watch-js.web.app/',
      sourceCode: 'https://github.com/jorgeabrahan/watch',
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
  popupDesc.innerHTML = work.description;
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
