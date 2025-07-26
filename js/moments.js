const images = [
  'img/img10.png',
  'img/img2.png',
  'img/img3.png',
  'img/img4.png',
  'img/img5.png',
  'img/img6.png',
  'img/img7.png',
  'img/img8.png',
  'img/img9.png',
  'img/img1.png',
  'img/img11.png',
  'img/img12.png',
  'img/img13.png',
  'img/img14.png',
  'img/img15.png',
  'img/img16.png',
  'img/img17.png',
  'img/img18.png',
  'img/img19.png',
  'img/img20.png',
  'img/img21.png',
  'img/img22.png',
  'img/img23.png',
  'img/img24.png',
  'img/img25.png',
  'img/img26.png',
  'img/img27.png',
  'img/img28.png',
  'img/img29.png',
];
const gallery = document.getElementById('photo-gallery');
function showImagesLoop() {
  gallery.innerHTML = '';
  images.forEach((src, index) => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    const rotation = [-8, 0, 8][index % 3] || (Math.random() * 10 - 5);
    card.style.setProperty('--rotation', `${rotation}deg`);
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Recuerdo ${index + 1}`;
    card.appendChild(img);
    gallery.appendChild(card);

    setTimeout(() => {
      card.classList.add('show');
    }, index * 600);
  });

  const totalDuration = images.length * 500; 
  setTimeout(() => {
    showImagesLoop();
  }, totalDuration);
}

showImagesLoop();
