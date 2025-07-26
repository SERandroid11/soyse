const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const fullscreen = document.getElementById("fullscreenLetter");
const closeBtn = document.getElementById("closeBtn");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
});

letter.addEventListener("click", (e) => {
  e.stopPropagation(); // para que no reaccione de nuevo al sobre
  fullscreen.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  fullscreen.style.display = "none";
});
document.querySelector('.envelope').addEventListener('click', function () {
  const flap = document.querySelector('.flap');
  const envelope = this;

  envelope.classList.add('open');

  // Esperá a que termine la animación (800ms)
  setTimeout(() => {
    flap.classList.add('behind');
  }, 800);
});
document.querySelector('.envelope').addEventListener('click', function () {
  const flap = document.querySelector('.flap');
  const envelope = this;

  envelope.classList.add('open');

  // Aplicar animación suave
  setTimeout(() => {
    flap.classList.add('behind');
  }, 400); // justo después del inicio de la animación de apertura
});
