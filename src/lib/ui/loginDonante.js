/* import {btnGoogle} from '../view-controller/vc-signin.js';
 */ 
export default () => {
  const formElem = document.createElement('form');
  const formContent = `
    <div class="container-login d-flex justify-content-center flex-column">
      <div class="d-flex justify-content-center margin-bottom margin-top ">
        <div class="logo">
        <h1> Dónalo.pe</h1>
        </div>
      </div>

      <div class="d-flex justify-content-center margin-top-low">
        <button id= "btn-google"class="width btn btn-lg btn-danger justify-content-center">Iniciar Sesión con Google</button>
      </div>
    </div>
    
  </div>`;
  formElem.setAttribute('id', 'frm-login');
  formElem.setAttribute('class', 'd-flex justify-content-center');
  
  formElem.innerHTML = formContent;
  
  const btnLoginGoogle = formElem.querySelector('#btn-google');
  btnLoginGoogle.addEventListener('click', () => {
/*   btnGoogle();
 */  window.location.hash = '#/formDonante';
  }); 
  
  return formElem;
};