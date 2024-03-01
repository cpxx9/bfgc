import L, { map } from "leaflet";
import HomeVideo from '../assets/vid/BFGC.mp4';
import MapBoxLogo from '../assets/img/mapbox-logo-black.svg';
import 'leaflet/dist/leaflet.css';

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
  panel.innerHTML = '';
  const innerPanel = document.createElement('h3');
  innerPanel.textContent = "Now Accepting New Members";

  panel.appendChild(innerPanel);
  homeBody.prepend(panel);
}

function videoPanel(panel) {
  panel.innerHTML = '';
  const innerPanel = document.createElement('video');
  innerPanel.classList.add('home-video')
  innerPanel.src = HomeVideo;
  innerPanel.autoplay = true;
  innerPanel.loop = true;
  innerPanel.muted = true;
  innerPanel.playsInline = true;
  
  panel.appendChild(innerPanel);
  content.appendChild(panel);
}

function facebookPanel(panel) {
  panel.innerHTML = '';
  const innerPanel = document.createElement('button');

  innerPanel.innerHTML = `<a href="https://www.facebook.com/groups/206992666713771/?ref=share&mibextid=S66gvF" target="_blank"><svg fill='#ffffff' viewBox="0 0 24 24" width="60" height="60"><path fill-rule="evenodd" d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939z"></path></svg></a>`;

  panel.appendChild(innerPanel);
  content.appendChild(panel);
}

function contactPanel(panel) {
  panel.innerHTML = '';
  const CONTACTPANELS = 3;
  let contactPanels = [];
  for (let i = 0; i < CONTACTPANELS; i++) {
    const contactPanel = document.createElement('div');
    contactPanel.classList.add('contact-panel');
    contactPanel.classList.add(`contact-panel-${i}`);
    contactPanels.push(contactPanel);
  }

  //title panel
  const contactPanelTitle = document.createElement('h1');
    contactPanelTitle.textContent = "Contact Us";
    const contactPanelSplit = document.createElement('hr');
  contactPanels[0].appendChild(contactPanelTitle);
  contactPanels[0].appendChild(contactPanelSplit);

  //middle panel
  const contactPanelInterested = document.createElement('div');
  contactPanelInterested.classList.add('contact-panel-interest')

    const contactPanelInterestTitle = document.createElement('h3');
      contactPanelInterestTitle.textContent = "Interested in Joining?";
    contactPanelInterested.appendChild(contactPanelInterestTitle);

    const contactPanelInterestPara = document.createElement('div');
      const contactPanelInterestMsg = document.createElement('p');
        contactPanelInterestMsg.textContent = "Now Accepting New Members.";
      const contactPanelInterestEmail = document.createElement('a');
        contactPanelInterestEmail.textContent = "Info@bloomfieldfishandgame.com";
        contactPanelInterestEmail.href = "mailto:Info@bloomfieldfishandgame.com";
        contactPanelInterestEmail.target = "_blank";
      contactPanelInterestPara.appendChild(contactPanelInterestMsg);
      contactPanelInterestPara.appendChild(contactPanelInterestEmail);

    contactPanelInterested.appendChild(contactPanelInterestPara);

  const contactPanelAddress = document.createElement('div');
    contactPanelAddress.classList.add('contact-panel-address')
    const contactPanelAddressTitle = document.createElement('h3');
    contactPanelAddressTitle.textContent = "Bloomfield Fish & Game Club"
    const contactPanelAddressContent = document.createElement('p');
    contactPanelAddressContent.textContent = "400 Terry Plains Road, Bloomfield, Connecticut 06002, United States";

    contactPanelAddress.appendChild(contactPanelAddressTitle);
    contactPanelAddress.appendChild(contactPanelAddressContent);

  contactPanels[1].appendChild(contactPanelInterested);
  contactPanels[1].appendChild(contactPanelAddress);
  
  const contactPanelButton = document.createElement('button');
  contactPanelButton.textContent = "DROP US A LINE!";

  contactPanels[2].appendChild(contactPanelButton);

  contactPanels.forEach((cPanel) => panel.appendChild(cPanel));
  content.appendChild(panel);
}

function mapPanel(panel) {
  panel.innerHTML = '';
  const mapCanvas = document.createElement('div');
  mapCanvas.id = "mapCanvas";

  panel.appendChild(mapCanvas);
  content.appendChild(panel);

  let map = L.map('mapCanvas').setView([41.86818963620112, -72.76401037272284], 14);

  L.marker([41.86818963620112, -72.76401037272284]).addTo(map);

  L.Control.MyControl = L.Control.extend({
    onAdd: function() {
      var el = document.createElement('img');
  
      el.src = MapBoxLogo;
      el.width = 80;
      el.height = 20;
  
      return el;
    },
  });
  
  L.control.myControl = function(opts) {
    return new L.Control.MyControl(opts);
  }
  
  L.control.myControl({
    position: 'bottomleft'
  }).addTo(map);

  L.tileLayer('https://api.mapbox.com/styles/v1/cjplabs1/clt6g56j600it01qp7vvqfakj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2pwbGFiczEiLCJhIjoiY2x0NmcyNzFqMGIzZDJ3bzJ1eGVmdGxqZyJ9.aU0yeew5JEiw6RlZR4mvZw', {
    maxZoom: 19,
    prefix: `<img src='${MapBoxLogo}' class='mapbox-logo'>`,
    attribution: `&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a><a href="https://www.mapbox.com/map-feedback/#/-74.5/40/10"> Improve this map</a>`
}).addTo(map);  
}

function loadHomePage() {
  memberPanel(panels[0]);
  videoPanel(panels[1]);
  facebookPanel(panels[2]);
  contactPanel(panels[3]);
  mapPanel(panels[4]);
  
}

export { loadHomePage };