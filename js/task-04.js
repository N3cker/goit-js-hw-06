const decreaseBtn = document.querySelector('[data-action="decrement"]');
const increaseBtn = document.querySelector('[data-action="increment"]');
const count = document.getElementById('value');
let counterValue = 0;

function counter() {

    const increase = () => {
        increaseBtn.addEventListener('click', () => {
            counterValue += 1;
            count.innerHTML = counterValue;
        })
    }

    const decrease = () => {
        decreaseBtn.addEventListener('click', () => {
            counterValue -= 1;
            count.innerHTML = counterValue;
        })
    }
    increase();
    decrease();
}
    
counter();