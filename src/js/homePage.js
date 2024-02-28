const HOMEPANELS = 4;
function loadHomePage() {
  const content = document.querySelector('#content');
  for (let i = 0; i < 8; i++) {
    const homePagePanel = document.createElement('div');
    homePagePanel.classList.add(`panel-${i}`);
    content.appendChild(homePagePanel);
  }
}

export { loadHomePage };