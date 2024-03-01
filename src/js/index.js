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
  if(e.target.classList.contains('nav-btn')) {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach((btn) => {
      btn.classList.remove('active-btn');
    })
    
    const currentDOM = document.querySelector('#content');
    currentDOM.innerHTML = '';

    //load new page
    const module = e.target.dataset.module;
    functions[module]();
    e.target.classList.add('active-btn');
  }  
});