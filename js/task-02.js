const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.getElementById('ingredients');

const createListItem = text => {
  const li = document.createElement('li');
  li.innerText = text;
  return li;
};

const addIngredientsToList = () => {
  ingredients.forEach(ingredient => {
    const li = createListItem(ingredient);
    li.classList.add('item');
    ingredientsContainer.appendChild(li);
  });
};

addIngredientsToList();