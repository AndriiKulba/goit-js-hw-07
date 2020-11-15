const inputRef = document.querySelector("#name-input");
const outputNameRef = document.querySelector("#name-output");
const incognito = outputNameRef.textContent;

inputRef.addEventListener("input", handleNameInput);

function handleNameInput(event) {
  if (event.target.value !== "") {
    outputNameRef.textContent = event.target.value;
  } else {
    outputNameRef.textContent = incognito;
  }
}
