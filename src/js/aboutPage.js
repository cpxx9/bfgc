import { loadConnectWithUs } from "./connectWithUs";

function loadAboutPage() {
  loadConnectWithUs();
  const container = document.querySelector('#content');

  const aboutTitle = document.createElement('h1');
  aboutTitle.textContent = "About Our Club";
  const aboutTitleSplit = document.createElement('hr');

  container.appendChild(aboutTitle);
  container.appendChild(aboutTitleSplit);
}

export { loadAboutPage };