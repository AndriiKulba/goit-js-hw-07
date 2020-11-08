const itemRefAll = document.querySelectorAll(".item")
console.log(`В списке ${itemRefAll.length} категории.`)
const itemRef = itemRefAll.forEach(element => console.log(
`Категория: ${element.querySelector("h2").textContent}
Количество элементов: ${element.querySelectorAll("li").length}`))
