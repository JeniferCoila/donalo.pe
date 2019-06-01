import {initRouter} from './router.js';
import {configFirebase} from './lib/controller/c-firebase.js';

window.addEventListener('load', () => {
  configFirebase();
  initRouter();
});