let enteredCode = '';
const correctCode = '0411'; // código
const maxLength = 4;
const display = document.getElementById('codeDisplay');
function updateDisplay() {
  let displayText = enteredCode
    .split('')
    .map((digit) => digit)
    .join(' ');
  // Rellena con guion
  while (displayText.length < maxLength * 2 - 1) {
    displayText += ' _';
  }
  display.textContent = displayText;
}
function addDigit(digit) {
  if (enteredCode.length < maxLength) {
    enteredCode += digit;
    updateDisplay();
  }
}
function clearCode() {
  enteredCode = enteredCode.slice(0, -1);
  updateDisplay();
}
function submitCode() {
  if (enteredCode === correctCode) {
    // Redirige o desbloquea
    window.location.href = 'index.html';
  } else {
    display.textContent = '❌ Código incorrecto';
    setTimeout(() => {
      enteredCode = '';
      updateDisplay();
    }, 1500);
  }
}
