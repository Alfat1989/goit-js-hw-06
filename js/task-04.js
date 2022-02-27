const valueEl = document.querySelector("#value")
let counterValue = 0;

console.log(counterValue)

const decrementBtn = document.querySelector('button[data-action="decrement"]')
// console.log(decrementBtn.dataset.action)

const incrementBtn = document.querySelector('button[data-action="increment"]')
// console.log(incrementBtn.dataset.action)

const decrement = function () {
    valueEl.textContent = counterValue -= 1;

}
const increment = function () {
    valueEl.textContent = counterValue += 1;

}

incrementBtn.addEventListener("click", increment)
decrementBtn.addEventListener("click", decrement)

