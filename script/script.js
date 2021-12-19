/* HOME PAGE, FEATURED SPEAKERS SECTION - DATA BASE */
const speaker1 = {
  name: 'Yochai Benkler',
  title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  image: '',
};

const speaker2 = {
  name: 'Yochai Benkler',
  title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  image: '',
};

const speaker3 = {
  name: 'Yochai Benkler',
  title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  image: '',
};

const speaker4 = {
  name: 'Yochai Benkler',
  title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  image: '',
};

const speaker5 = {
  name: 'Yochai Benkler',
  title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  image: '',
};

const speaker6 = {
  name: 'Yochai Benkler',
  title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  image: '',
};

const speakers = [
  speaker1,
  speaker2,
  speaker3,
  speaker4,
  speaker5,
  speaker6,
];

/* CREATE SPEAKERS IN SPEAKERS SECTION */
for (let i = 0; i < speakers.length; i += 1) {
  /* SPEAKER OUTER CONTAINER */
  const speakerOutContainer = document.createElement('div');
  speakerOutContainer.setAttribute('id', `speaker-container-${i + 1}`);
  speakerOutContainer.classList.add('container-fluid', 'mb-5');

  /* --- SPEAKER INNER CONTAINER */
  const speakerInnContainer = document.createElement('div');
  speakerInnContainer.classList.add('row', 'speaker-container');
  speakerOutContainer.appendChild(speakerInnContainer);

  /* --- --- SPEAKER IMAGE CONTAINER */
  const speakerImageContainer = document.createElement('div');
  speakerImageContainer.classList.add('col-4', 'speaker-back-image');
  speakerInnContainer.appendChild(speakerImageContainer);

  /* --- --- --- SPEAKER IMAGE */
  const speakerImage = document.createElement('img');
  speakerImage.setAttribute('src', speakers[i].image);
  speakerImage.setAttribute('alt', 'speaker-image');
  speakerImage.classList.add('speaker-image');
  speakerImageContainer.appendChild(speakerImage);

  /* --- --- SPEAKER CONTENT CONTAINER */
  const speakerContContainer = document.createElement('div');
  speakerContContainer.classList.add('col-8', 'd-flex', 'flex-column');
  speakerInnContainer.appendChild(speakerContContainer);

  /* --- --- --- SPEAKER NAME */
  const speakerName = document.createElement('h3');
  speakerName.classList.add('font-20px', 'color-black', 'font-lato', 'fw-bolder');
  let text = document.createTextNode(speakers[i].name);
  speakerName.appendChild(text);
  speakerContContainer.appendChild(speakerName);

  /* --- --- --- SPEAKER TITLE */
  const speakerTitle = document.createElement('p');
  speakerTitle.classList.add('font-15px', 'fst-italic', 'color-red', 'font-lato');
  text = document.createTextNode(speakers[i].title);
  speakerTitle.appendChild(text);
  speakerContContainer.appendChild(speakerTitle);

  /* --- --- --- SPEAKER CONTENT SEPARATOR */
  const speakerContSeparator = document.createElement('img');
  speakerContSeparator.setAttribute('src', './images/separator-2.png');
  speakerContSeparator.setAttribute('alt', 'separator');
  speakerContSeparator.classList.add('align-self-start', 'mb-3');
  speakerContContainer.appendChild(speakerContSeparator);

  /* --- --- --- SPEAKER DESCRIPTION */
  const speakerDescription = document.createElement('p');
  speakerDescription.classList.add('font-12px', 'font-lato');
  text = document.createTextNode(speakers[i].description);
  speakerDescription.appendChild(text);
  speakerContContainer.appendChild(speakerDescription);

  /* APPEND TO SPEAKERS CONTAINER */
  const speakersContainer = document.getElementById('speakers-content-container');
  // speakersContainer.appendChild(speakerOutContainer); AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
}

/* SPEAKERS SECTION - MORE BUTTON */
const moreButtonContainer = document.createElement('div');
moreButtonContainer.classList.add('container-fluid', 'd-flex', 'justify-content-center', 'align-content-center', 'border-2', 'border-gray', 'border', 'py-3');

/* MORE BUTTON TEXT */
const moreButtonText = document.createElement('a');
moreButtonText.setAttribute('href', '#');
moreButtonText.classList.add('font-15px', 'text-decoration-none', 'color-black', 'font-lato', 'fw-bold');
const text2 = document.createTextNode('MORE');
moreButtonText.appendChild(text2);
moreButtonContainer.appendChild(moreButtonText);

/* MORE BUTTON ARROW */
const moreButtonArrow = document.createElement('img');
moreButtonArrow.setAttribute('src', ''); /* SET SOURCE */
moreButtonArrow.setAttribute('alt', 'down-arroww');
/* SET CLASSES IF ANY */
moreButtonContainer.appendChild(moreButtonArrow);

/* APPEND TO SPEAKERS CONTAINER */
const speakersContainer2 = document.getElementById('speakers-content-container');
// speakersContainer2.appendChild(moreButtonContainer); AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA