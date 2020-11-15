const inputSymbolRef = document.querySelector("#validation-input");

function handleClick(event) {
  inputSymbolRef.classList = "invalid";
  if (Number(inputSymbolRef.dataset.length) === event.target.value.length) {
    inputSymbolRef.classList = "valid";
  }
}
inputSymbolRef.addEventListener("input", handleClick);
