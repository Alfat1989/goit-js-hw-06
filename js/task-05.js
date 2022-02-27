const inputEl = document.querySelector("#name-input");
console.log(inputEl)

const spanEl = document.querySelector("#name-output")
console.log(spanEl)

inputEl.addEventListener("input", inputValue);

function inputValue(event) {
    
    event.currentTarget.value === "" ?
        spanEl.textContent = "Anonymous" :
        spanEl.textContent = event.currentTarget.value;
    
    
} 


