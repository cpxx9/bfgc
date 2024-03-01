import { loadConnectWithUs } from "./connectWithUs";

function loadAboutPage() {
  loadConnectWithUs();
  console.log('about test');
}

export { loadAboutPage };