const input = document.getElementById('font-size-control');
const text = document.getElementById('text');


const changeFontSize = () => {
    input.addEventListener('input', () => {
        text.style.fontSize = `${input.value}px`;
    })
}

changeFontSize();