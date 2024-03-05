import '../styles/style.css';
import { loadHomePage } from "./homePage";
import { loadGalleryPage } from "./galleryPage";
import { loadEventsPage } from "./eventsPage";
import { loadAboutPage } from "./aboutPage";

let functions = {
  home: loadHomePage,
  gallery: loadGalleryPage,
  events: loadEventsPage,
  about: loadAboutPage,
};

loadHomePage();
console.log('test');

const header = document.querySelector('.main-header');
const observer = new IntersectionObserver(
  ([e]) => {
    e.target.classList.toggle('is-pinned', e.intersectionRatio < 1);
    let panelZero = document.querySelector('.panel-0');
    let memberTitle = document.querySelector('.panel-0 h3');
    if(e.intersectionRatio < 1) {
      memberTitle.hidden = true;
      panelZero.hidden = true;
    } else {
      memberTitle.hidden = false;
      panelZero.hidden = false;
    }
  },
  { threshold: [1] }
);
observer.observe(header);

document.addEventListener('click', function(e) {
  if(e.target.classList.contains('nav-btn')) {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach((btn) => {
      btn.classList.remove('active-btn');
    })
    
    const currentDOM = document.querySelector('#content');
    currentDOM.className = '';
    currentDOM.innerHTML = '';

    //load new page
    const module = e.target.dataset.module;
    functions[module]();
    e.target.classList.add('active-btn');
    scroll(0,0);
  }  
});