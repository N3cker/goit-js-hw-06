const categoriesList = document.getElementById('categories');
const categoriesItem = categoriesList.getElementsByClassName('item')
const categoriesItemsLength = categoriesItem.length;
const categoryHead = categoriesList.getElementsByTagName("h2");
const categoryList = categoriesList.getElementsByTagName("ul");


const categoryElements = () => {
    console.log('Number of categories:', categoriesItemsLength);
    
    for(let i = 0; i <  categoriesItem.length; i++) {
        console.log('Category:', categoryHead[i].innerText);
        console.log('Elements:', categoriesItem[i].querySelectorAll("ul li").length);
    }
}
categoryElements();