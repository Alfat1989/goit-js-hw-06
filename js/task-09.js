const btn = document.querySelector(".change-color")
const nameBgColor=document.querySelector(".color")

btn.addEventListener("click", bgColorChange)

function bgColorChange() {
  const bgColor = getRandomHexColor()
  // console.log(bgColor)
  document.body.style.backgroundColor = bgColor
  nameBgColor.textContent=bgColor
}


function getRandomHexColor() {
 
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}





// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const buttonEl = document.querySelector('.change-color');

// buttonEl.addEventListener('click', onChangeColor);

// function onChangeColor(e) {
//   document.body.style.backgroundColor = getRandomHexColor();
//   e.currentTarget.previousElementSibling.firstElementChild.textContent =
//     getRandomHexColor();
// }




