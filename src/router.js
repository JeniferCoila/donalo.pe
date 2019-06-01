import home from './lib/ui/home.js';
import login from './lib/ui/login.js';
import formDonante from './lib/ui/form-donante.js';
import formInstituciones from './lib/ui/form-instituciones.js';
import perfil from './lib/ui/perfil.js';
import donativos from './lib/ui/donativos.js';
import loginDon from './lib/ui/loginDonante.js';
// import getInstituciones from '../src/lib/controller/c-get-instituciones.js';

const getInstituciones = (dataSnapshot) =>{
  const newArray = [];
  firebase.firestore().collection("Instituciones").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          newArray.push({
              id:doc.id,
              nombre: doc.data().nombre,
              descripción: doc.data().descripción,
          })           
      });
      dataSnapshot(newArray);
  });    
}



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
  case 'loginDon':
    container.appendChild(loginDon());
    break;
  case 'formDonante':
  getInstituciones((data) =>{
    container.appendChild(formDonante(data));
  })
    
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
  if (hash === '#/home' || hash === '#/login' || hash === '#/formDonante' || hash === '#/perfil' || hash === '#/formInstituciones' || hash === '#/donativos' || hash === '#/loginDon') return viewTemplate(hash);
  else return viewTemplate('#/home'); 
};

export const initRouter = () => {
  window.addEventListener('load', changeTemplate(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTemplate(window.location.hash);
}