const inputSymbolRef = document.querySelector("#validation-input")

function handleClick (event) {
   event.target.value.length > inputSymbolRef.dataset.length ? inputSymbolRef.classList = "invalid":inputSymbolRef.classList = "valid"
}
inputSymbolRef .addEventListener("input", handleClick);

