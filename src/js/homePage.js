const HOMEPANELS = 8;
function loadHomePage() {
  const content = document.querySelector('#content');
  for (i = 0; i < 8; i++) {
    const homePagePanel = document.createElement('div');
    homePagePanel.classList.add('panel');
    content.appendChild(homePagePanel);
  }
}

export { loadHomePage };