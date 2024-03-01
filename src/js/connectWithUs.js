function loadConnectWithUs() {
  const footer = document.querySelector('.main-footer');
  const connectFooter = document.createElement('div');
  connectFooter.classList.add('connect-footer');

  const connectFooterTop = document.createElement('div');
  connectFooterTop.classList.add('connect-footer-top');

  const connectFooterBottom = document.createElement('div');
  connectFooterBottom.classList.add('connect-footer-bottom');

  const connectFooterTitle = document.createElement('h1');
  connectFooterTitle.textContent = "Connect With Us";

  const connectFooterSplit = document.createElement('hr');

  connectFooterTop.appendChild(connectFooterTitle);
  connectFooterTop.appendChild(connectFooterSplit);

  const connectFooterFacebook = document.createElement('div');
}