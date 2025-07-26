 const monthsData = [
    { month: "Noviembre", img: "img/img2.png" },
    { month: "Diciembre", img: "img/img3.png" },
    { month: "Enero", img: "img/img4.png" },
    { month: "Febrero", img: "img/img5.png" },
    { month: "Marzo", img: "img/img6.png" },
    { month: "Abril", img: "img/img7.png" },
    { month: "Mayo", img: "img/img8.png" },
    { month: "Junio", img: "img/img9.png" },
    { month: "Julio", img: "img/img10.png" },
  ];

  function createMonthsGrid() {
    const grid = document.getElementById("monthsGrid");
    grid.innerHTML = "";
    monthsData.forEach(({month, img}) => {
      const card = document.createElement("div");
      card.classList.add("month-card");
      card.innerHTML = `
        <img src="${img}" alt="${month}" />
        <div class="month-name">${month}</div>
      `;
      grid.appendChild(card);
    });
  }

  const modal = document.getElementById("modal");
  const profilePic = document.getElementById("profilePic");
  const modalClose = document.getElementById("modalClose");

  profilePic.addEventListener("click", () => {
    createMonthsGrid();
    modal.classList.add("show");
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });

  const startDate = new Date('2024-11-04T00:00:00');
  function updateCountdown() {
    const now = new Date();
    let diff = now - startDate;
    if (diff < 0) diff = 0;

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
      seconds += 60; minutes--;
    }
    if (minutes < 0) {
      minutes += 60; hours--;
    }
    if (hours < 0) {
      hours += 24; days--;
    }
    if (days < 0) {
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += prevMonth; months--;
    }
    if (months < 0) {
      months += 12; years--;
    }
    if (years < 0) {
      years = months = days = hours = minutes = seconds = 0;
    }

    const countdownEl = document.getElementById('countdown');
    countdownEl.innerHTML = `
      <div><div class="number">${String(years).padStart(2,'0')}</div><div class="label">Años</div></div>
      <div class="countdown-colon">:</div>
      <div><div class="number">${String(months).padStart(2,'0')}</div><div class="label">Meses</div></div>
      <div class="countdown-colon">:</div>
      <div><div class="number">${String(days).padStart(2,'0')}</div><div class="label">Dias</div></div>
      <div class="countdown-colon">:</div>
      <div><div class="number">${String(hours).padStart(2,'0')}</div><div class="label">Horas</div></div>
      <div class="countdown-colon">:</div>
      <div><div class="number">${String(minutes).padStart(2,'0')}</div><div class="label">Minutos</div></div>
      <div class="countdown-colon">:</div>
      <div><div class="number">${String(seconds).padStart(2,'0')}</div><div class="label">Segundos</div></div>
    `;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();