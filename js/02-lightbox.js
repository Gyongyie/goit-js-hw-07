import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

// Crearea și inserarea markup-ului galeriei
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

// Inițializarea SimpleLightbox cu opțiuni
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',        // Folosiți atributul alt pentru descriere
  captionDelay: 250,          // Apare cu întârziere de 250ms
});

console.log(galleryItems);