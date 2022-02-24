const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector("#ingredients")
console.log(listEl)
const itemsEl = [];

const itemInnerEl = ingredients.map(el => {
  const itemEl = document.createElement("li")
  itemEl.classList.add("item")
  itemEl.textContent = el
  itemsEl.push(itemEl)
})

listEl.append(...itemsEl)

