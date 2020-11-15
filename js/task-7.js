const sizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

sizeControlRef.addEventListener("input", handleNameInput);

function handleNameInput(event) {
  textRef.style.fontSize = `${event.target.value - 50 + 100}%`;
}
