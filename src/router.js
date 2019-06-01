import home from './ui/home.js';
import login from './ui/login.js';
import formDonante from './ui/form-donante.js';
import formInstituciones from './ui/form-instituciones.js';
import perfil from './ui/perfil.js';
import donativos from './ui/donativos.js';
export  const viewTemplate = (routers) => {
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
      case 'fromDonante':
          container.appendChild(formDonante());
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
  if(hash === '#/home' || hash === '#/login' || hash === '#/form-donante' || hash === '#/perfil' || hash === '#/form-instituciones'|| hash === '#/donativos') return viewTemplate(hash);
  else return viewTemplate('#/home'); 
};

export const initRouter = () => {
  window.addEventListener('load', changeTemplate(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTemplate(window.location.hash);
}