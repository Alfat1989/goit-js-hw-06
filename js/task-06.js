const inputEl = document.querySelector("#validation-input")
console.log(inputEl)

// console.log(Number(inputEl.dataset.length))

inputEl.addEventListener("blur", onInputBlure)

function onInputBlure(event) {
    event.currentTarget.value.length === Number(inputEl.dataset.length) ?
        event.currentTarget.classList = "valid" :
        event.currentTarget.classList = "invalid";
}



