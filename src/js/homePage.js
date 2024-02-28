// SET HOW MANY PANELS FOR HOME PAGE
const HOMEPANELS = 5;

const content = document.querySelector('#content');
const homeBody = document.querySelector('#home');

// CREATE PANEL ELEMENTS ARRAY
let panels = [];
for (let i = 0; i < HOMEPANELS; i++) {
  const homePagePanel = document.createElement('div');
  homePagePanel.classList.add('panel');
  homePagePanel.classList.add(`panel-${i}`);
  panels.push(homePagePanel);
}

function memberPanel(panel) {
  const innerPanel = document.createElement('h3');
  innerPanel.textContent = "Now Accepting New Members";

  panel.appendChild(innerPanel);
  homeBody.prepend(panel);
}

function videoPanel(panel) {
  content.appendChild(panel);
}

function facebookPanel(panel) {
  content.appendChild(panel);
}

function contactPanel(panel) {
  content.appendChild(panel);
}

function mapPanel(panel) {
  content.appendChild(panel);
}

function loadHomePage() {
  memberPanel(panels[0]);
  videoPanel(panels[1]);
  facebookPanel(panels[2]);
  contactPanel(panels[3]);
  mapPanel(panels[4]);
}

export { loadHomePage };