// SET HOW MANY PANELS FOR HOME PAGE
const HOMEPANELS = 4;

const content = document.querySelector('#content');

// CREATE PANEL ELEMENTS ARRAY
let panels = [];
for (let i = 0; i < HOMEPANELS; i++) {
  const homePagePanel = document.createElement('div');
  homePagePanel.classList.add(`panel-${i}`);
  panels.push(homePagePanel);
}

function videoPanel() {

}

function facebookPanel() {

}

function contactPanel() {

}

function mapPanel() {

}

function loadHomePage() {
  videoPanel();
  facebookPanel();
  contactPanel();
  mapPanel();
}

export { loadHomePage };