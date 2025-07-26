const container = document.getElementById('jigsaw-container');
const winMessage = document.getElementById('win-message');
const images = [
  'img/img2.png',
  'img/img4.png',
  'img/img5.png',
  'img/img7.png',
  'img/img10.png',
  'img/img11.png'
];
// Duplicamos para hacer pares
const cards = [...images, ...images];
shuffle(cards);
let firstCard = null;
let lockBoard = false;
let matchesFound = 0;
cards.forEach(src => {
  const card = document.createElement('div');
  card.className = 'card';
  const inner = document.createElement('div');
  inner.className = 'card-inner';
  const front = document.createElement('div');
  front.className = 'card-front';
  front.textContent = '?';
  const back = document.createElement('div');
  back.className = 'card-back';
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'pareja';
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'cover';
  img.style.borderRadius = '0px';
  back.appendChild(img);
  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);
  container.appendChild(card);
  card.addEventListener('click', () => {
    if (lockBoard || card.classList.contains('flipped')) return;
    card.classList.add('flipped');
    if (!firstCard) {
      firstCard = card;
    } else {
      const secondCard = card;
      const img1 = firstCard.querySelector('.card-back img').src;
      const img2 = secondCard.querySelector('.card-back img').src;
      if (img1 === img2) {
        firstCard = null;
        matchesFound++;
        if (matchesFound === images.length) {
          winMessage.style.display = 'block';
        }
      } else {
        lockBoard = true;
        setTimeout(() => {
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
          firstCard = null;
          lockBoard = false;
        }, 500);
      }
    }
  });
});
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
