import '../styles/event-page.css';
import { loadConnectWithUs } from "./connectWithUs";

const events = [];

function loadEventsPage() {
  loadConnectWithUs();
  const container = document.querySelector("#content");
  container.classList.add('event-page');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');
    const eventTitle = document.createElement('h1');
    eventTitle.textContent = "UPCOMING EVENTS";
    eventTitle.classList.add('page-heading');
    const eventTitleSplit = document.createElement('hr');
  titleContainer.appendChild(eventTitle);
  titleContainer.appendChild(eventTitleSplit);

  const eventsContainer = document.createElement('div');
  eventsContainer.classList.add('events-container');
  if (!events.length) {
    const noEventsTitle = document.createElement('h3');
    noEventsTitle.textContent = 'No upcoming events.';
    eventsContainer.appendChild(noEventsTitle);
  }
  
  container.appendChild(titleContainer);
  container.appendChild(eventsContainer);
}

export { loadEventsPage };