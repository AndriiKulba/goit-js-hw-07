const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// const listRef=document.querySelector("#ingredients")
// const linksRef = arr =>
//    arr.map((el) => {
//     const linkRef = document.createElement('li')
//     linkRef.textContent = el;
//     listRef.appendChild(linkRef)
//     return linkRef
//   })
  
// console.log(linksRef(ingredients))

const listRef = document.querySelector("#ingredients")
const createLinksRef = ingredient =>{
  const linkRef = document.createElement('li')
  linkRef.textContent = ingredient;
  return linkRef
}
const linksRef = arr=>arr.map(ingredient => createLinksRef(ingredient))
listRef.append(...linksRef(ingredients))
