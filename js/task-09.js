function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


document.querySelector('.change-color').addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  document.querySelector('.color').innerText = randomColor;
  document.body.style.backgroundColor = randomColor;
})