function loadConnectWithUs() {
  const footer = document.querySelector('.main-footer');
  const oldFooter = document.querySelector('.connect-footer');
  if(oldFooter){
    oldFooter.remove()
  };
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

  connectFooterBottom.innerHTML = `<a href="https://www.facebook.com/groups/206992666713771/?ref=share&mibextid=S66gvF" target="_blank"><svg fill='#1877F2' viewBox="0 0 24 24" width="60" height="60"><path fill-rule="evenodd" d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939z"></path></svg></a>`;

  connectFooter.appendChild(connectFooterTop);
  connectFooter.appendChild(connectFooterBottom);

  footer.before(connectFooter);
}

export { loadConnectWithUs }; 