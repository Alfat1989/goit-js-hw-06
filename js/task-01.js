const listEl = document.querySelector("#categories")
console.log(listEl)

const listItemEl = listEl.querySelectorAll(".item")
console.log("Number of categories: ", listItemEl.length)

const subArrEl = listEl.querySelectorAll("h2");
const subEl = subArrEl.forEach(el => {
    console.log(`Category: ${el.textContent}`)
    
})

console.log(subEl)


const itemsInInemEl = listItemEl.querySelectorAll("li")
console.log(itemsInInemEl)