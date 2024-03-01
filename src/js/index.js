import '../styles/style.css';
import { loadHomePage } from "./homePage";
let functions = {
  home: loadHomePage,
};
// loadHomePage();

document.addEventListener('click', function(e) {
  //clear current page
  let currentDOM = document.querySelector('#content');
  currentDOM.innerHTML = '';
  
  //load new page
  const currentElement = e.target;
  const module = currentElement.dataset.module;
  functions[module]();
});