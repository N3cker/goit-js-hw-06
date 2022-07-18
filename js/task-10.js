function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createDiv = (size, color) => {
  const div = document.createElement('div');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.backgroundColor = `${color}`;

  return div;
}

const createElements = (count) => {
  const boxesContainer = document.getElementById('boxes');
  let i = 0;
  let size = 30;
  while (i < count) {
    const color = getRandomHexColor();
    const div = createDiv(size, color);
    boxesContainer.appendChild(div);
    
    size += 10;
    i++
  }
}

const destroyElements = () => {
  document.getElementById('boxes').innerHTML = '';
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const inputValue = document.querySelector('input').value;
  createElements(inputValue);
})

document.querySelector('[data-destroy]').addEventListener('click', destroyElements);