import { loadConnectWithUs } from "./connectWithUs";

function loadAboutPage() {
  loadConnectWithUs();
  const container = document.querySelector('#content');

  const aboutTitle = document.createElement('h1');
  aboutTitle.textContent = "About Our Club";
  const aboutTitleSplit = document.createElement('hr');

  const mainCard = document.createElement('div');
  mainCard.classList.add('card', 'main-card');

  container.appendChild(aboutTitle);
  container.appendChild(aboutTitleSplit);
  container.appendChild(mainCard);
}

export { loadAboutPage };