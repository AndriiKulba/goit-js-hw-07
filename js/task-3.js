const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryRef = document.querySelector("#gallery")
const createLinksGalleryRef = image=>{
  const linkGalleryRef = document.createElement('li')
  linkGalleryRef.insertAdjacentHTML('afterbegin',`<img src="${image.url}" alt="${image.alt}" />`);
  return linkGalleryRef
}
const linksGalleryRef = images.map(image => createLinksGalleryRef(image))
galleryRef.append(...linksGalleryRef)

console.log(galleryRef)
/* <li class="team-element">
              <img src="./images/comand4.jpg" alt="Иван Николаев" width="270" /> */

// const listRef=document.querySelector("#ingredients")
// const linksRef = arr =>
//    arr.map((el) => {
//     const linkRef = document.createElement('li')
//     linkRef.textContent = el;
//     listRef.appendChild(linkRef)
//     return linkRef
//   })

// const listRef = document.querySelector("#ingredients")
// const createLinksRef = ingredient =>{
//   const linkRef = document.createElement('li')
//   linkRef.textContent = ingredient;
//   return linkRef
// }
// const linksRef = arr=>arr.map(ingredient => createLinksRef(ingredient))
// listRef.append(...linksRef(ingredients))
  
// console.log(linksRef(ingredients))