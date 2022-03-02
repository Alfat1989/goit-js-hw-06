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
  
  for (let i = 0; i < inputEl.value; i += 1){
    
    const box = document.createElement("div");
    box.style.width=`${boxSize+i*boxIncrease}px`
    box.style.height = `${boxSize+i*boxIncrease}px`
    box.style.backgroundColor = getRandomHexColor();
    divBoxes.push(box)

    
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


