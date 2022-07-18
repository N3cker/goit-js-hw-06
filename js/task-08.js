const form = document.querySelector('.login-form');
const inputs = form.querySelectorAll('input');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formValues = {};

    for(const element of form.elements) {
        if(element.tagName.toLowerCase() === 'button') continue;
        if(!element.value.length) return alert(`Required fields are empty!`);
        formValues[element.name] = element.value;
    }
    console.log(formValues);
    form.reset();
})