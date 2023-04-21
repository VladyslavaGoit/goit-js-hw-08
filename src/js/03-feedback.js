const throttle = require('lodash.throttle');
const userDate = {}||''
const form = document.querySelector('.feedback-form')
checkLocalStorage()
form.addEventListener('input', throttle(onInput,500))
form.addEventListener('submit', onSubmit)
function onInput(event) {
    userDate[event.target.name] = event.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(userDate))
}
function checkLocalStorage() {
    const stateForm = JSON.parse(localStorage.getItem("feedback-form-state"))
    if (stateForm) {
        const { email, message } = stateForm
        form.email.value = email
        form.message.value = message
    }
}
function onSubmit(event) {
    event.preventDefault()
    localStorage.clear()
    event.target.reset()
}

