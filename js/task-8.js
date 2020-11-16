const inputControlRef = document.querySelector("#controls input");
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 0; i < inputControlRef.value; i++) {
    const divRef = document.createElement("div");

    boxesRef.append(divRef);
  }
  const a = document.querySelector("#boxes div");
  console.dir(a.clientWidth);
  inputControlRef.value;
}

function destroyBoxes() {
  console.dir(1);
}

btnRender.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
inputControlRef.addEventListener("input", inputAmount);

function inputAmount(event) {
  if ((Number(event.target.value) > 0) & (Number(event.target.value) <= 100)) {
    console.dir(event.target.value);
  } else {
    event.target.value = "";
  }
}
