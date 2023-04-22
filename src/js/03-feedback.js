const throttle = require('lodash.throttle');
let userDate = {}
const form = document.querySelector('.feedback-form')
form.addEventListener('input', throttle(onInput,500))
form.addEventListener('submit', onSubmit)
function onInput(event) {
    userDate[event.target.name] = event.target.value
    // console.log(userDate)
    localStorage.setItem("feedback-form-state", JSON.stringify(userDate))
    // console.log(localStorage.getItem("feedback-form-state"))
}
function checkLocalStorage() {
    const stateForm = JSON.parse(localStorage.getItem("feedback-form-state"))
    // console.log(stateForm)
    // console.log(userDate)
    if (stateForm) {
        const { email, message } = stateForm
        form.email.value = email||''
        form.message.value = message||''
    }
}
checkLocalStorage()
function onSubmit(event) {
    event.preventDefault()
    console.log(userDate)
    localStorage.removeItem("feedback-form-state")
    event.target.reset()
    userDate = {}
}

