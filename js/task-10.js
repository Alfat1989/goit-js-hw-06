function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl=document.querySelector("#boxes")
const createBtn = document.querySelector("button[data-create]")
const destroyBtn = document.querySelector("button[data-destroy]")
const inputEl = document.querySelector("input")

const boxSize = 30;
const boxIncrease = 10;
let divBoxes = [];

function createBox() {
  let boxLength = 0;
  for (let i = 0; i < inputEl.value; i += 1){
    
    const box = document.createElement("div");
    box.style.width=`${boxSize+i*boxIncrease}px`
    box.style.height = `${boxSize+i*boxIncrease}px`
    box.style.backgroundColor = getRandomHexColor();
    divBoxes.push(box)
    boxLength += 1;
    // console.log(boxLength)

  }
  
}

function appendBoxes() {
  divEl.append(...divBoxes)
}

function clearAll() {
  divBoxes = [];
  divEl.innerHTML = '';
}

createBtn.addEventListener("click", createBox)
createBtn.addEventListener("click", appendBoxes)
destroyBtn.addEventListener("click", clearAll)








// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const createBtnEl = document.querySelector('button[data-create]');
// const destroyBtnEl = document.querySelector('button[data-destroy]');
// const containerBoxes = document.querySelector('#boxes');

// createBtnEl.addEventListener('click', onCreateBtn);
// let counterValue = 0;
// function onCreateBtn(e) {
//   counterValue += 1;

//   const amount = Number(e.currentTarget.previousElementSibling.value);
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   let num = 20 * counterValue;
//   for (let i = 1; i <= amount; i += 1) {
//     num += 10;
//     const box = `<div style="background-color: ${getRandomHexColor()}; height: ${num}px; width: ${num}px;"></div>`;
//     containerBoxes.insertAdjacentHTML('afterbegin', box);
//   }
// }

// destroyBtnEl.addEventListener('click', destroyBoxes);
// function destroyBoxes() {
//   counterValue = 0;
//   containerBoxes.innerHTML = '';
// }
