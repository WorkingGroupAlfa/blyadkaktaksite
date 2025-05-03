// Первый попап
const openBtn1 = document.getElementById('openPopup');
const popup1 = document.getElementById('popup');
const closeBtn1 = popup1.querySelector('.closech');

openBtn1.addEventListener('click', (e) => {
  e.preventDefault();
  popup1.classList.add('show');
  document.body.classList.add('no-scroll');
});

closeBtn1.addEventListener('click', () => {
  popup1.classList.remove('show');
  document.body.classList.remove('no-scroll');
});

window.addEventListener('click', (e) => {
  if (e.target === popup1) {
    popup1.classList.remove('show');
    document.body.classList.remove('no-scroll');
  }
});

// Второй попап
const openBtn2 = document.getElementById('openPopup2');
const popup2 = document.getElementById('popup2');
const closeBtn2 = popup2.querySelector('.closech');

openBtn2.addEventListener('click', (e) => {
  e.preventDefault();
  popup2.classList.add('show');
  document.body.classList.add('no-scroll');
});

closeBtn2.addEventListener('click', () => {
  popup2.classList.remove('show');
  document.body.classList.remove('no-scroll');
});

window.addEventListener('click', (e) => {
  if (e.target === popup2) {
    popup2.classList.remove('show');
    document.body.classList.remove('no-scroll');
  }
});

// Третий попап
const openBtn3 = document.getElementById('openPopup3');
const popup3 = document.getElementById('popup3');
const closeBtn3 = popup3.querySelector('.closech');

openBtn3.addEventListener('click', (e) => {
  e.preventDefault();
  popup3.classList.add('show');
  document.body.classList.add('no-scroll');
});

closeBtn3.addEventListener('click', () => {
  popup3.classList.remove('show');
  document.body.classList.remove('no-scroll');
});

window.addEventListener('click', (e) => {
  if (e.target === popup3) {
    popup3.classList.remove('show');
    document.body.classList.remove('no-scroll');
  }
});
