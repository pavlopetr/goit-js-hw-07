import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryWraper = document.querySelector("div.gallery");

const makeGalery = galleryItems
  .map(
    ({preview, original, description}) =>
      `<a class="gallery__link" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt= "${description}"
    >
  </a>`
  )
  .join("");

galleryWraper.insertAdjacentHTML("afterbegin", makeGalery);

galleryWraper.addEventListener("click", (e) => {
  e.preventDefault();
  const itemEl = e.target.dataset.source;
  console.log(e.target.dataset)

  const instance = basicLightbox.create(`
    <img src="${itemEl}" width="800" height="600">
`);
  instance.show();
});





