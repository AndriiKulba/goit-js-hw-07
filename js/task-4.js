const counterRef = document.querySelector("#counter");
const valueRef = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnIncrement.addEventListener("click", onBtnIncrement);
btnDecrement.addEventListener("click", onBtnDecrement);

function onBtnIncrement(event) {
  valueRef.textContent = Number(valueRef.textContent) + 1;
}

function onBtnDecrement(event) {
  valueRef.textContent = Number(valueRef.textContent) - 1;
}
