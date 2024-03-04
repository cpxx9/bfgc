import '../styles/about-page.css';
import { loadConnectWithUs } from "./connectWithUs";

const cardArr = [
  {
    cardType: "main-card",
    title: "Club History",
    info: "Find out more about the Bloomfield Fish & Game club.",
    imgSrc: "../assets/img/truck-group.jpg",    
  },
  {
    cardType: "card",
    title: "Our Land",
    info: "Enjoy the Outdoors at the Bloomfield Fish & Game Club.",
    imgSrc: "../assets/img/fish.jpg",    
  },
  {
    cardType: "card",
    title: "Our Range",
    info: "Find out more about our various ranges.",
    imgSrc: "../assets/img/dog.jpg",    
  },
];

function loadAboutPage() {
  document.title = "About our club";

  loadConnectWithUs();
  const container = document.querySelector("#content");
  container.classList.add('about-page');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');
    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "About Our Club";
    aboutTitle.classList.add('page-heading')
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

  const domCards = document.querySelectorAll('.card');
  let cardCounter = 0;
  domCards.forEach((card) => {    
    const cardImage = document.createElement('img');
    cardImage.src = cardArr[cardCounter].imgSrc;
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = cardArr[cardCounter].title;
    const cardInfo = document.createElement('p');
    cardInfo.textContent = cardArr[cardCounter].info;
    const cardButton = document.createElement('button');
    cardButton.classList.add('std-btn');
    cardButton.textContent = "LEARN MORE";
    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardInfo);
    card.appendChild(cardButton);
    cardCounter++;
  });
}

export { loadAboutPage };