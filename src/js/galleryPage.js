import { loadConnectWithUs } from "./connectWithUs";

function loadGalleryPage() {
  loadConnectWithUs();
  
  const content = document.querySelector('#content');
  content.classList.add('gallery-page');
}

export { loadGalleryPage };