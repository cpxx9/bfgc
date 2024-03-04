import { loadConnectWithUs } from "./connectWithUs";

function loadGalleryPage() {
  loadConnectWithUs();
  
  const content = document.querySelector('#content');
  content.classList.add('gallery-page');

  const galleryEventButton = document.createElement('button');
  const gridQuoteWrapper = document.createElement('div'); 
  gridQuoteWrapper.classList.add('gq-wrapper');
  const galleryGridArea = document.createElement('div');
  galleryGridArea.classList.add('gallery-grid-area');
  const galleryQuote = document.createElement('div');
  galleryQuote.classList.add('gallery-quote');
  gridQuoteWrapper.appendChild(galleryGridArea);
  gridQuoteWrapper.appendChild(galleryQuote);
  content.appendChild(galleryEventButton);
  content.appendChild(gridQuoteWrapper);
}

export { loadGalleryPage };