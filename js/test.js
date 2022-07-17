// const ingredients = [
//     'Potatoes',
//     'Mushrooms',
//     'Garlic',
//     'Tomatos',
//     'Herbs',
//     'Condiments',
//   ];
  
// const ingredientsList = document.getElementById('ingredients');
  

// const liCreate = document.createElement('li');
// liCreate.innerText = "test";
  
// const addIngredientToList = () => {
//     ingredients.forEach(element => {

//       ingredientsList.appendChild(liCreate.cloneNode(true));
//     });
// }
  
// addIngredientToList();


// To jest anonimowa funkcja która się sama wywołuje
// olej to. To nie jest do tego potrzebne. 
// Ale użyłem tego bo chce kilka razy tej samej nazwy zmiennej użyć
(() => {
    const ingredients = [
        'Potatoes',
        'Mushrooms',
        'Garlic',
        'Tomatos',
        'Herbs',
        'Condiments',
    ];
      
    const ingredientsList = document.getElementById('ingredients');
    // Tutaj tworzysz element 
    // Zmień nazwę bo to nie jest na "li" zamiast "liCreate" 
    // bo to nie jest metoda albo funkcja która tworzy element tylko już gotowy element
    const liCreate = document.createElement('li');
      
    const addIngredientToList = () => {
        ingredients.forEach(element => {
            // tutaj dodajesz cały czas ten sam element dlatego to nie działa.
            // Nie da się dodac kilka razy tego samego elementu 
            // To to jest wgl źle napisane teraz
            ingredientsList.appendChild(liCreate).innerText = element;
        });
    }
      
    addIngredientToList();
})



// Tak bym ja to zrobił
const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

// ul
const ingredientsContainer = document.getElementById("ingredients");

// Funkcja która tworzy i zwraca li 
// Dzięki temu za każdym wywołaniem tej funkcji tworzy się nowy element li
// Ty tworzyłeś li tylko raz i cały czas go dodawałeś co tak nie działa
// Żeby twój kod działał musiałbyś dodać .clone(): 
// ingredientsList.appendChild(liCreate.clone(true))
// chujowo to wygląda i chyba się tego nie używa
const createListItem = text => {
    const li = document.createElement('li');
    li.innerText = text;
    return li;
};

const addIngredientsToList = () => {
    // iteracja po każdym składniu z tablicy
    ingredients.forEach(ingredient => {
        // utworzenie nowego li i przypisanie go do zmiennej
        const li = createListItem(ingredient);

        // Dzięki temu można w tym miejscu dodać różne rzeczy do li np dodać nową klase albo inny tekst
        li.classList.add("test");
        li.innerText += "test";

        // tutaj dodajesz dopiero li do ul 
        ingredientsContainer.appendChild(li);
    });
};

addIngredientsToList();