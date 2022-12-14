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
let lightbox = new SimpleLightbox(".gallery a", {
  options: {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  },
});

gallery.addEventListener("click", galleryItemModalOpen);

function galleryItemModalOpen(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  lightbox.options.captionsData = "alt";
  lightbox.options.captionDelay = 250;
  lightbox.next();
}
