import '../styles/style.css';
import { loadHomePage } from "./homePage";
import { loadGalleryPage } from "./galleryPage";
import { loadContactPage } from "./contactPage";
import { loadAboutPage } from "./aboutPage";

let functions = {
  home: loadHomePage,
  gallery: loadGalleryPage,
  contact: loadContactPage,
  about: loadAboutPage,
};
loadHomePage();

document.addEventListener('click', function(e) {
  //clear current page
  let currentDOM = document.querySelector('#content');
  currentDOM.innerHTML = '';
  
  //load new page
  const module = e.target.dataset.module;
  functions[module]();
});