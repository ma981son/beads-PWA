import { Workbox } from "workbox-window";

let wb;

if ("serviceWorker" in navigator) {
  console.log('registering service-worker')
  wb = new Workbox(`${process.env.BASE_URL}service-worker.js`);
  wb.addEventListener("controlling", () => {
    window.location.reload();
  });
  wb.register();
} else {
  console.log('run in production mode to register service-worker')
  wb = null;
}

export default wb;