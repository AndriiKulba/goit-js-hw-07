const inputRef = document.querySelector("#name-input")
const outputNameRef = document.querySelector("#name-output")


inputRef.addEventListener('input', handleNameInput)

function handleNameInput(event) {
    outputNameRef.textContent=event.target.value
}