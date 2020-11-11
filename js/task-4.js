const counterRef = document.querySelector("#counter")
const valueRef = document.querySelector("#value")
const btnDecrement = document.querySelector('button[data-action="decrement"]')
const btnIncrement = document.querySelector('button[data-action="increment"]')

console.log(btnDecrement)
console.log(btnIncrement)
console.dir(valueRef)

btnIncrement.addEventListener('click', onBtnIncrement)
btnDecrement.addEventListener('click', onBtnDecrement)

function onBtnIncrement (event) {
    valueRef.textContent = Number(valueRef.textContent)+1
}
    
function onBtnDecrement (event) {
    valueRef.textContent = Number(valueRef.textContent)-1
}
    