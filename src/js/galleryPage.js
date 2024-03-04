import '../styles/gallery-page.css'
import { loadConnectWithUs } from "./connectWithUs";

let galleryImgs = [];

function loadGalleryPage() {
  loadConnectWithUs();
  
  const content = document.querySelector('#content');
  content.classList.add('gallery-page');

  // Page structure
  const galleryEventButton = document.createElement('button');
  galleryEventButton.textContent = 'UPCOMING EVENTS';
  galleryEventButton.classList.add('std-btn');
  const gridQuoteWrapper = document.createElement('div'); 
  gridQuoteWrapper.classList.add('gq-wrapper');
  const galleryGridArea = document.createElement('div');
  galleryGridArea.classList.add('gallery-grid-area');
  const galleryQuote = document.createElement('div');
  galleryQuote.classList.add('gallery-quote');

  // Grid area
  const galleryGrid = document.createElement('div');
  galleryGrid.classList.add('gallery-grid');
  const galleryExpand = document.createElement('div');
  galleryExpand.classList.add('gallery-expand');
  galleryGridArea.appendChild(galleryGrid);
  galleryGridArea.appendChild(galleryExpand);

  // Grid

  // Grid expand

  // Quote

  gridQuoteWrapper.appendChild(galleryGridArea);
  gridQuoteWrapper.appendChild(galleryQuote);
  content.appendChild(galleryEventButton);
  content.appendChild(gridQuoteWrapper);
}

export { loadGalleryPage };