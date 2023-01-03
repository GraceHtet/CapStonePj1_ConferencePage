const bodyelem = document.body;
const navBtn = document.querySelector('.nav-btn');
const navLinks = document.querySelectorAll('.nav-links');

navBtn.onclick = () => {
  bodyelem.classList.toggle('active');
};

navLinks.forEach((navlink) => {
  navlink.addEventListener('click', () => {
    bodyelem.classList.remove('active');
  });
});

const speakerInfos = [
  {
    title: 'speaker1',
    img: './assets/img/mayninioo.jpg',
    name: 'May Ni Ni Oo',
    status: 'Page Owner of Tarot Queen Gorgeous, Oracle Queen Gorgeous 990',
    detail: 'Internationally approved Third eye intuitive Oracle & Tarot Jury, Crystal Specialist, Mentor, Energy',
  }, {
    title: 'speaker2',
    img: './assets/img/cajelVedas.jpg',
    name: 'Cajel Vedas',
    status: 'Owner of Cajel Veda Facebook page and youtube page',
    detail: 'Tarot Reader, International Sub Maker',
  }, {
    title: 'speaker3',
    img: './assets/img/anii.jpg',
    name: 'Anii Chann',
    status: 'Owner of Elysian Facebook page',
    detail: 'Blogger at Elysian, Spiritual Teacher and Energy Healer',
  }, {
    title: 'speaker4',
    img: './assets/img/monhalsey.jpg',
    name: 'Mon Halsey',
    status: 'Owner of Mon Halsey Facebook page',
    detail: 'Author and Speaker',
  }, {
    title: 'speaker5',
    img: './assets/img/yamone.jpg',
    name: 'Yamone',
    status: 'Owner of Yamone Scarlett Facebook page',
    detail: 'Spiritual and mental coach, Energy Healer',
  }, {
    title: 'speaker6',
    img: './assets/img/arabelleyee.jpg',
    name: 'Arabelle Yee',
    status: 'Owner of Arabelle Yee Facebook page',
    detail: 'Spiritual and mental coach',
  },
];

function speakers(elem) {
  const li = document.createElement('li');
  li.className = 'speakers';
  li.classList.add(elem.title);

  const imgDiv = document.createElement('div');
  imgDiv.className = 'img-container';
  const image = document.createElement('img');
  image.src = elem.img;
  image.className = 'speaker-imgs';
  image.alt = elem.title;
  imgDiv.appendChild(image);

  const infoDiv = document.createElement('div');
  const nameText = document.createElement('p');
  nameText.className = 'speaker-names';
  nameText.textContent = elem.name;
  const statusText = document.createElement('p');
  statusText.className = 'speaker-status';
  statusText.textContent = elem.status;
  const detailText = document.createElement('p');
  detailText.className = 'speaker-details';
  detailText.textContent = elem.detail;
  infoDiv.append(nameText, statusText, detailText);

  li.append(imgDiv, infoDiv);

  const speakerList = document.querySelector('.speaker-list');
  speakerList.appendChild(li);
}

const speakerBtn = document.querySelector('.speaker-btn');

for (let i = 0; i < speakerInfos.length; i += 1) {
  speakers(speakerInfos[i]);
  const speakerElems = document.querySelectorAll('.speakers');

  if (i > 1) {
    speakerElems[i].classList.add('no-mobile');

    speakerBtn.addEventListener('click', () => {
      speakerElems[i].classList.toggle('no-mobile');
    });
  }
}

const moreText = 'MORE <i class="fa-solid fa-chevron-down"></i>';
const lessText = 'LESS <i class="fa-solid fa-chevron-up"></i>';

speakerBtn.addEventListener('click', () => {
  if (speakerBtn.innerHTML === moreText) {
    speakerBtn.innerHTML = lessText;
  } else if (speakerBtn.innerHTML === lessText) {
    speakerBtn.innerHTML = '';
    speakerBtn.innerHTML = moreText;
  }
});