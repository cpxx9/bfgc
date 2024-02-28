import HomeVideo from '../assets/vid/BFGC.mp4';

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
  const innerPanel = document.createElement('video');
  innerPanel.src = HomeVideo;
  innerPanel.autoplay = true;
  innerPanel.loop = true;
  innerPanel.muted = true;
  innerPanel.playsInline = true;
  
  panel.appendChild(innerPanel);
  content.appendChild(panel);
}

function facebookPanel(panel) {
  const innerPanel = document.createElement('button');

  innerPanel.innerHTML = `<a href="https://www.facebook.com/groups/206992666713771/?ref=share&mibextid=S66gvF" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40" data-ux="IconSocial" class="x-el x-el-svg c1-1 c1-2 c1-35 c1-2l c1-55 c1-6k c1-6l c1-5l c1-b c1-c c1-6m c1-6n c1-d c1-6o c1-6p c1-6q c1-6r c1-6s c1-6t c1-6u c1-6v c1-e c1-f c1-g"><path fill-rule="evenodd" d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939z"></path></svg></a>`;

  panel.appendChild(innerPanel);
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