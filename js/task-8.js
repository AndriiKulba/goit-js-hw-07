const inputControlRef = document.querySelector("#controls input");
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector("#boxes");

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

const rgb = (el) => {
  const randomColor = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomColor(0, 255);
  const g = randomColor(0, 255);
  const b = randomColor(0, 255);
  const color = `rgb(${r},${g},${b})`;
  return (el.style.backgroundColor = color);
};

function createBoxes() {
  const divRef = document.createElement("div");
  divRef.style.width = "30px";
  divRef.style.height = "30px";
  rgb(divRef);

  boxesRef.append(divRef);
  for (let i = 1; i < inputControlRef.value; i++) {
    const divRef = document.createElement("div");
    boxesRef.append(divRef);
    divRef.style.width = `${
      parseInt(divRef.previousSibling.style.width) + 10
    }px`;
    divRef.style.height = `${
      parseInt(divRef.previousSibling.style.height) + 10
    }px`;
    rgb(divRef);
  }
}

function destroyBoxes() {
  boxesRef.childNodes.forEach((el) => el.remove());
}
