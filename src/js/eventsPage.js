import { loadConnectWithUs } from "./connectWithUs";

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
  
  container.appendChild(titleContainer);
}

export { loadEventsPage };