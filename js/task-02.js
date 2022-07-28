const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.getElementById('ingredients');

const addIngredientsToList = () => {
  ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.innerText = ingredient;
    li.classList.add('item');
    ingredientsContainer.appendChild(li);
  });
};

addIngredientsToList();

