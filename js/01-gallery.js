import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>
  `)
  .join('');

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener('click', event => {
  event.preventDefault();
 const target = event.target;
  if (!target.classList.contains('gallery__image')) return;

  const imageUrl = target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
  `);

  instance.show();
});

console.log(galleryItems);


