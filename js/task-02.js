const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');
const liCreate = document.createElement('li');

const addIngredientToList = () => {
  ingredients.forEach(element => {
    ingredientsList.append(liCreate.innerText = element);
  });
}

addIngredientToList();