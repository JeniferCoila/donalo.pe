import home from './lib/ui/home.js';
import login from './lib/ui/login.js';
import formDonante from './lib/ui/form-donante.js';
import formInstituciones from './lib/ui/form-instituciones.js';
import perfil from './lib/ui/perfil.js';
import donativos from './lib/ui/donativos.js';

export const viewTemplate = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (router) {
  case 'home':
    container.appendChild(home());
    break;
  case 'login':
    container.appendChild(login());
    break;
  case 'formDonante':
    container.appendChild(formDonante());
//     const agregaOtro = document.querySelector('#agrega-otros');
// agregaOtro.addEventListener('click', () => {
//     const divContain = document.querySelector('prueba');
//     return divContain.appendChild(creaInput());
  // });
    break;
  case 'perfil':
    container.appendChild(perfil());
    break;
  case 'formInstituciones':
    container.appendChild(formInstituciones());
    break;
  case 'donativos':
    container.appendChild(donativos());
    break;
  }
};

export const changeTemplate = (hash) => {
  if (hash === '#/home' || hash === '#/login' || hash === '#/formDonante' || hash === '#/perfil' || hash === '#/formInstituciones'|| hash === '#/donativos') return viewTemplate(hash);
  else return viewTemplate('#/home'); 
};

export const initRouter = () => {
  window.addEventListener('load', changeTemplate(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTemplate(window.location.hash);
}