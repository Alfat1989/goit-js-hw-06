const form = document.querySelector("form");
// console.log(form)
form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
    
    event.preventDefault()
    
    const inputEl = event.currentTarget.elements
    const formObj = {}
   
     if (inputEl.email.value==="" || inputEl.password.value==="") {
        return window.alert("Все поля должны быть заполнены")
         
    } else {
        formObj.email=inputEl.email.value
        formObj.password=inputEl.password.value
          
     }
    
    console.log(formObj)
    event.currentTarget.reset()
       
}  


