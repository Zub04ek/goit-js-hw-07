import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

// Ініціалізую бібліотеку SimpleLightbox
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
