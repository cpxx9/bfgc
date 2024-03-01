import { loadConnectWithUs } from "./connectWithUs";

function loadAboutPage() {
  loadConnectWithUs();
  const container = document.querySelector('#content');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');
    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "About Our Club";
    const aboutTitleSplit = document.createElement('hr');
  titleContainer.appendChild(aboutTitle);
  titleContainer.appendChild(aboutTitleSplit);

  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container');
    const mainCard = document.createElement('div');
    mainCard.classList.add('card', 'main-card');
    const cards = document.createElement('div');
    cards.classList.add('cards');
  cardsContainer.appendChild(mainCard);
  cardsContainer.appendChild(cards);

  const NUMBER_OF_CARDS = 2;
  for(let i = 0; i < NUMBER_OF_CARDS; i++) {
    const card = document.createElement('div');
    card.classList.add('card', `card-${i}`);
    cards.appendChild(card);
  }

  container.appendChild(titleContainer);
  container.appendChild(cardsContainer);
}

export { loadAboutPage };