import '../styles/gallery-page.css'
import { loadConnectWithUs } from "./connectWithUs";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../assets/img/', false, /gallery([0-9]|[0-9][0-9])\.(png|jpe?g|svg)$/));

function loadGalleryPage() {
  loadConnectWithUs();
  
  const content = document.querySelector('#content');
  content.classList.add('gallery-page');

  // Page structure
  const galleryEventButton = document.createElement('button');
  galleryEventButton.textContent = 'UPCOMING EVENTS';
  galleryEventButton.classList.add('std-btn', 'nav-btn');
  galleryEventButton.dataset.module = 'events';
  const gridQuoteWrapper = document.createElement('div'); 
  gridQuoteWrapper.classList.add('gq-wrapper');
  const galleryGridArea = document.createElement('div');
  galleryGridArea.classList.add('gallery-grid-area');
  const galleryQuote = document.createElement('div');
  galleryQuote.classList.add('gallery-quote');
  galleryQuote.classList.add('bg-tint');

  // Grid area
  const galleryGrid = document.createElement('div');
  galleryGrid.classList.add('gallery-grid');
  const galleryExpand = document.createElement('div');
  galleryExpand.classList.add('gallery-expand');
  galleryGridArea.appendChild(galleryGrid);
  galleryGridArea.appendChild(galleryExpand);

  // Gallery
  let i = 0;
  images.forEach((image) => {    
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    const imageCell = document.createElement('div');
    imageCell.classList.add('gallery-cell');
    imageCell.style.backgroundImage = `url(${image})`;
    if (i > 11) {
      cell.classList.add('final-grid-row');
    }
    cell.appendChild(imageCell);
    galleryGrid.appendChild(cell);
    i++
  });

  // Gallery expand
  const expandText = document.createElement('button');
  expandText.classList.add('expand-btn');
  expandText.innerText = '+ Show more';
  galleryExpand.appendChild(expandText);
  galleryExpand.addEventListener('click', function() {
    let isExpanded = galleryGrid.classList.toggle('expanded');
    if (isExpanded) {
      expandText.innerText = '- Show less';
    } else {
      scroll(0,0);
      expandText.innerText = '+ Show more';
    }
  });

  // Quote
  const quoteSVG = `<svg viewBox="0 0 24 24" fill="#78716c" width="48" height="48"><path fill-rule="evenodd" d="M7.373 20c-1.343 0-2.417-.494-3.222-1.482C3.384 17.491 3 16.168 3 14.548c0-2.212.575-4.207 1.726-5.985C5.915 6.746 7.718 5.225 10.134 4l.633.948c-1.15.711-2.205 1.719-3.164 3.022-.92 1.265-1.381 2.548-1.381 3.852 0 .356.096.652.288.89.191.197.479.295.863.295.958 0 1.764.356 2.416 1.067.69.672 1.036 1.501 1.036 2.489s-.346 1.817-1.036 2.489c-.652.632-1.458.948-2.416.948zm9.953 0c-1.343 0-2.417-.494-3.222-1.482-.767-1.027-1.15-2.35-1.15-3.97 0-2.212.575-4.207 1.725-5.985C15.87 6.746 17.671 5.225 20.087 4l.633.948c-1.15.711-2.205 1.719-3.164 3.022-.92 1.265-1.38 2.548-1.38 3.852 0 .356.095.652.287.89.192.197.48.295.863.295.959 0 1.764.356 2.416 1.067.69.672 1.036 1.501 1.036 2.489s-.345 1.817-1.036 2.489c-.652.632-1.457.948-2.416.948z"></path></svg>`;
  const quotePara = document.createElement('p');
  quotePara.classList.add('quote-text');
  quotePara.textContent = "“Look deep into nature, and then you will understand everything better.”";
  const quoteSplit = document.createElement('hr');
  const quoteAuthor = document.createElement('p');
  quoteAuthor.classList.add('quote-author');
  quoteAuthor.textContent = "Albert Einstein";
  galleryQuote.innerHTML = quoteSVG;
  galleryQuote.appendChild(quotePara);
  galleryQuote.appendChild(quoteSplit);
  galleryQuote.appendChild(quoteAuthor);


  gridQuoteWrapper.appendChild(galleryGridArea);
  gridQuoteWrapper.appendChild(galleryQuote);
  content.appendChild(galleryEventButton);
  content.appendChild(gridQuoteWrapper);
}

export { loadGalleryPage };