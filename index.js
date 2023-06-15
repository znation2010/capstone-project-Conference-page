// Pop-up Mobile Menu
const btn = document.querySelector('#mobile-menu');
const img = document.querySelector('#mobile-menu img');
const mobileMenu = document.createElement('div');
const menuList = document.createElement('div');
const mobileHeader = document.querySelector('.no-pop');
const menuItems = [
  { text: 'Home', id: 'about', specialClass: '' },
  { text: 'Program', id: 'program', specialClass: '' },
  { text: 'Join', id: 'join', specialClass: '' },
  { text: 'Sponsor', id: 'sponsor', specialClass: '' },
  { text: 'News', id: 'news', specialClass: '' },
  { text: 'Campaign', id: 'campaign', specialClass: 'special-nav-style' },
];

menuList.id = 'mobile-menu-list';

menuItems.forEach((item) => {
  const menuItem = document.getElementById(item.id).cloneNode(true);
  menuItem.classList.add('nav-style');
  if (item.specialClass) {
    menuItem.classList.add(item.specialClass);
  }
  menuList.appendChild(menuItem);
});

mobileMenu.id = 'popup-mobile-menu';
mobileMenu.appendChild(menuList);

btn.addEventListener('click', (event) => {
  event.preventDefault();

  if (!mobileMenu.classList.contains('visible')) {
    img.src = 'assets/close_mobile_menu.png';
    mobileHeader.classList.replace('no-pop', 'pop');
    mobileMenu.style.display = 'block';
    const siblngContainer = document.querySelector('header');
    siblngContainer.insertAdjacentElement('afterend', mobileMenu);
    mobileMenu.classList.add('visible');
    document.body.style.overflow = 'hidden';
  } else {
    img.src = 'assets/mobile_menu.png';
    mobileHeader.classList.replace('pop', 'no-pop');
    mobileMenu.style.display = 'none';
    mobileMenu.classList.remove('visible');
    document.body.style.overflow = 'auto';
  }

  menuList.addEventListener('click', () => {
    img.src = 'assets/mobile_menu.png';
    mobileHeader.classList.replace('pop', 'no-pop');
    mobileMenu.style.display = 'none';
    mobileMenu.classList.remove('visible');
  });
});

// Features Speakers
const speakers = [
  {
    name: 'Yochai Benkler',
    job: 'NSA Contractor',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex quo facere incidunt dignissimos illo!',
    Image: 'assets/Yochai.png',
  },
  {
    name: 'SohYeong Noh',
    job: 'Director of Art Center Nabi, CC Korea Director',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex quo facere incidunt dignissimos illo!',
    Image: 'assets/SohYeong.png',
  },
  {
    name: 'Lila Tretiov',
    job: 'Executive Director at the Wikimedia Foundation',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex quo facere incidunt dignissimos illo!',
    Image: 'assets/Lila.png',
  },
  {
    name: 'Kilnam Chon',
    job: 'NATO General Secretary',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex quo facere incidunt dignissimos illo!',
    Image: 'assets/Kilnam.png',
  },
  {
    name: 'Julia Leda',
    job: 'FBI Director',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex quo facere incidunt dignissimos illo!',
    Image: 'assets/Julia.png',
  },
  {
    name: 'Ryan Merkley',
    job: 'CIA Specialist',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex quo facere incidunt dignissimos illo!',
    mobileImg: 'assets/RyanMobile.png',
    Image: 'assets/Ryan.png',
  },
];

const speakerDiv = document.getElementById('speakers');
speakers.forEach((speaker) => {
  const speakerCard = document.createElement('div');
  speakerCard.classList.add('speaker-card');
  speakerCard.innerHTML = `
    <div class="speaker-img">
      <img class="mobile" src="${speaker.Image}" alt="Yochai-img">
      <img class="desktop" src="${speaker.Image}" alt="Yochai-img">
    </div>
    <div class="speaker-details">
      <h5 class="name">${speaker.name}</h5>
      <p class="job">${speaker.job}</p>
      <p class="desc">${speaker.desc}</p>
    </div>
  `;
  speakerDiv.appendChild(speakerCard);
});
