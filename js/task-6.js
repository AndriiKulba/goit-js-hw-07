const inputSymbolRef = document.querySelector("#validation-input")

console.dir(inputSymbolRef.target)
console.dir(inputSymbolRef)
const handleClick = event => {
   console.log(event.dataset[DOMStringMap] )
}

inputSymbolRef .addEventListener("input", handleClick);