import '../styles/style.css';
import { loadHomePage } from "./homePage";

loadHomePage();

let navButtons = document.querySelectorAll('.nav-btn');
console.log(navButtons);
navButtons.forEach((navButton) => {
  navButton.addEventListener('click', navButton.dataset.function);
})