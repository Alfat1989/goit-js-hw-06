const inputEl = document.querySelector("#font-size-control")

const spanEl = document.querySelector("#text")

const changeSize = (event)=> {
    // console.log(event.currentTarget.value)
    spanEl.style.fontSize=`${event.currentTarget.value}px`
}

inputEl.addEventListener("input", changeSize)


