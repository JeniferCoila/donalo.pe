import {initRouter} from './router.js';
import {configFirebase} from './lib/controller/c-firebase.js';

const init = () => {
  configFirebase();
  initRouter();
};
  
window.onload = init();