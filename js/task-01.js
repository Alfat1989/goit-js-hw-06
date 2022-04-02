const listItemEl = document.querySelectorAll(".item")
console.log("Number of categories: ", listItemEl.length)

const childEl = listItemEl.forEach(el => {
    console.log(
    `Category: ${el.firstElementChild.textContent} 
    Elements:${el.querySelectorAll("li").length}
    `)
})

