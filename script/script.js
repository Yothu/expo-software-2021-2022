const bodyTag = document.getElementsByTagName('body');
const pageIsHome = bodyTag[0].classList.contains('home');

if (pageIsHome) {
  const speaker1 = {
    name: 'Gina Green',
    title: 'Bachelor of Science degrees in math and computer science working at Jungle',
    description: 'She also has a post-graduate degree in medicine.',
    image: './images/speakers/p1.jpg',
  };

  const speaker2 = {
    name: 'Colette Cross',
    title: '',
    description: 'She has a post-graduate degree in philosophy, politics and economics. She has a severe phobia of heights',
    image: './images/speakers/p4.jpg',
  };

  const speaker3 = {
    name: 'Wayne Coomer',
    title: 'Professor of Software Engineering at Ceres University',
    description: 'He has a post-graduate degree in law. She has a severe phobia of bridges',
    image: './images/speakers/p2.jpg',
  };

  const speaker4 = {
    name: 'Arne Casali',
    title: 'Doctor degree in Web dessign working at Coca Kola',
    description: 'He has a post-graduate degree in computing. He has a severe phobia of spiders, and is obsessed with selfies. ',
    image: './images/speakers/p3.jpg',
  };

  const speaker5 = {
    name: 'Barney Rosenberg',
    title: 'Master degree in Telecomunications Security working at Invidia',
    description: 'He has a post-graduate degree in sports science. He is obsessed with tank tops. ',
    image: './images/speakers/p5.jpg',
  };

  const speaker6 = {
    name: 'Isaac Keller',
    title: 'Bachelor of Science degrees in math and computer science working at Macrosoft',
    description: 'He has a post-graduate degree in computing. He is obsessed with running and reading. Published a software book in 2001.',
    image: './images/speakers/p6.jpg',
  };

  const speakers = [
    speaker1,
    speaker2,
    speaker3,
    speaker4,
    speaker5,
    speaker6,
  ];

  const frontSpeakers = 2;

  const speakersSection = document.createElement('section');
  speakersSection.setAttribute('id', 'speakers-section');

  const spkerTitleContainer = document.createElement('div');
  spkerTitleContainer.setAttribute('id', 'speakers-title-container');
  spkerTitleContainer.classList.add('d-flex', 'flex-column', 'align-content-center', 'align-items-center', 'my-5');
  speakersSection.appendChild(spkerTitleContainer);

  const spkerTitle = document.createElement('h2');
  spkerTitle.classList.add('color-black', 'font-lato', 'font-30px', 'fw-bolder');
  let text = document.createTextNode('Featured Speakers');
  spkerTitle.appendChild(text);
  spkerTitleContainer.appendChild(spkerTitle);

  const spkerTitleSeparator = document.createElement('img');
  spkerTitleSeparator.setAttribute('src', './images/separator.png');
  spkerTitleSeparator.setAttribute('alt', 'separator');
  spkerTitleContainer.appendChild(spkerTitleSeparator);

  const spkerSecContContainer = document.createElement('div');
  spkerSecContContainer.setAttribute('id', 'speakers-content-container');
  spkerSecContContainer.classList.add('p-1', 'p-sm-3', 'd-md-flex', 'flex-md-wrap', 'justify-content-md-center', 'speakers-container', 'mx-md-auto');
  speakersSection.appendChild(spkerSecContContainer);

  for (let i = 0; i < speakers.length; i += 1) {
    const speakerOutContainer = document.createElement('div');
    speakerOutContainer.setAttribute('id', `speaker-container-${i + 1}`);
    speakerOutContainer.classList.add('container-fluid', 'mb-5', 'speaker-outer-container', 'mx-md-0', 'd-md-block', 'speaker');

    if (i >= frontSpeakers) {
      speakerOutContainer.classList.add('d-none');
    }

    const speakerInnContainer = document.createElement('div');
    speakerInnContainer.classList.add('row', 'speaker-container');
    speakerOutContainer.appendChild(speakerInnContainer);

    const speakerImageContainer = document.createElement('div');
    speakerImageContainer.classList.add('col-4', 'col-md-5', 'col-xxl-4', 'speaker-back-image');
    speakerInnContainer.appendChild(speakerImageContainer);

    const speakerImage = document.createElement('img');
    speakerImage.setAttribute('src', speakers[i].image);
    speakerImage.setAttribute('alt', 'speaker-image');
    speakerImage.classList.add('speaker-image');
    speakerImageContainer.appendChild(speakerImage);

    const speakerContContainer = document.createElement('div');
    speakerContContainer.classList.add('col-8', 'col-md-7', 'col-xxl-8', 'd-flex', 'flex-column');
    speakerInnContainer.appendChild(speakerContContainer);

    const speakerName = document.createElement('h3');
    speakerName.classList.add('font-20px', 'font-md-25px', 'color-black', 'font-lato', 'fw-bolder');
    text = document.createTextNode(speakers[i].name);
    speakerName.appendChild(text);
    speakerContContainer.appendChild(speakerName);

    const speakerTitle = document.createElement('p');
    speakerTitle.classList.add('font-15px', 'font-md-20px', 'fst-italic', 'color-red', 'font-lato');
    text = document.createTextNode(speakers[i].title);
    speakerTitle.appendChild(text);
    speakerContContainer.appendChild(speakerTitle);

    const speakerContSeparator = document.createElement('img');
    speakerContSeparator.setAttribute('src', './images/separator-2.png');
    speakerContSeparator.setAttribute('alt', 'separator');
    speakerContSeparator.classList.add('align-self-start', 'mb-3');
    speakerContContainer.appendChild(speakerContSeparator);

    const speakerDescription = document.createElement('p');
    speakerDescription.classList.add('font-15px', 'font-md-18px', 'font-lato');
    text = document.createTextNode(speakers[i].description);
    speakerDescription.appendChild(text);
    speakerContContainer.appendChild(speakerDescription);

    spkerSecContContainer.appendChild(speakerOutContainer);
  }

  const holePage = document.getElementById('hole-page');
  const nextSection = holePage.firstElementChild.nextElementSibling.nextElementSibling;
  holePage.insertBefore(speakersSection, nextSection);

  const moreButtonContainer = document.createElement('div');
  moreButtonContainer.classList.add('container-fluid', 'd-flex', 'justify-content-center', 'align-content-center');
  moreButtonContainer.classList.add('border-2', 'border-gray', 'border', 'py-3', 'd-md-none');

  if (speakers.length <= frontSpeakers) {
    moreButtonContainer.classList.add('d-none');
  }

  const moreButtonText = document.createElement('a');
  moreButtonText.setAttribute('href', '#');
  moreButtonText.classList.add('font-15px', 'text-decoration-none', 'color-black', 'font-lato', 'fw-bold');
  const text2 = document.createTextNode('MORE');
  moreButtonText.appendChild(text2);
  moreButtonContainer.appendChild(moreButtonText);

  const moreButtonArrow = document.createElement('img');
  moreButtonArrow.setAttribute('src', './images/red-arrow.png');
  moreButtonArrow.setAttribute('alt', 'down-arroww');
  moreButtonContainer.appendChild(moreButtonArrow);

  const speakersContainer2 = document.getElementById('speakers-content-container');
  speakersContainer2.appendChild(moreButtonContainer);

  const speakerDivs = document.querySelectorAll('.speaker');

  moreButtonContainer.onclick = function deployAllSpeakers() {
    speakerDivs.forEach((spker) => {
      if (spker.classList.contains('d-none')) {
        spker.classList.toggle('d-none');
        moreButtonContainer.classList.add('d-none');
      }
    });
  };
}

const menuButton = document.querySelector('.pop-menu-icon');
const popupMenu = document.querySelector('.inner-header-container');
const menuLogo = document.querySelector('.header-menu-logo');
const topMenuContainer = document.querySelector('.top-menu-container');
const popMenuItems = document.querySelector('.pop-menu-item');
const popCross = document.querySelector('.cross-icon-a');

menuButton.onclick = function openMenu() {
  popupMenu.classList.toggle('pop-menu-toggle');
  menuLogo.classList.toggle('d-flex');
  topMenuContainer.classList.toggle('d-flex');
  popMenuItems.classList.toggle('pop-menu-item-toggle');
  popCross.classList.toggle('d-flex');
  menuButton.classList.toggle('d-none');
};

const popupButtons = document.querySelectorAll('.close');

popupButtons.forEach((item) => {
  item.onclick = function closeMenu() {
    popupMenu.classList.toggle('pop-menu-toggle');
    menuLogo.classList.toggle('d-flex');
    topMenuContainer.classList.toggle('d-flex');
    popMenuItems.classList.toggle('pop-menu-item-toggle');
    popCross.classList.toggle('d-flex');
    menuButton.classList.toggle('d-none');
  };
});