import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Отримую доступ до елемента div.gallery з HTML
const gallery = document.querySelector(".gallery");

// Створюю розмітку шляхом перебирання масиву об'єктів зображень та додаю до основної HTML розмітки
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
    </div>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

// Ставлю прослуховувач подій на всю галерею зображень
gallery.addEventListener("click", galleryItemModalOpen);

// Прописую умову функції при кліку на картинку
function galleryItemModalOpen(evt) {
  // Відміняю дію браузера за замовчуванням
  evt.preventDefault();

  // Приписую умову аби клікати можна було лише на зображення, а не на всю галерею
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  // За допомогою підключеної бібліотеки basicLightbox створюю модальне вікно з більшим зображенням
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => window.addEventListener("keydown", onEscKeyPress),
      onClose: () => window.removeEventListener("keydown", onEscKeyPress),
    }
  );

  // Відкриваю модальне вікно
  instance.show();

  // Прописую умову функції, яка закриває модальне вікно при натисненні на клавішу Esc
  function onEscKeyPress(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
