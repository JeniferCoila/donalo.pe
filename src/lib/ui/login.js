export default () => {
  const formElem = document.createElement('form');
  const formContent = `
  <div class="container-login d-flex justify-content-center flex-column">
    <div class="d-flex justify-content-center margin-bottom margin-top ">
      <div class="logo">
      <h1> Dónalo.pe</h1>
      </div>
    </div>
    <div class=" d-flex justify-content-center form-group row">
      <div>
        <label for="inputPassword" class="ancho-label col-form-label"">  <span class="color"></span></label>
      </div>
      <div class="col-sm-9">
        <input type="text" class="form-control" placeholder="Usuario" id="inputPassword" required>
      </div>
    </div>

    <div class=" d-flex justify-content-center form-group row">
      <div>
        <label for="inputPassword" class="ancho-label col-form-label" "> <span class="color"> 
        </span></label>
      </div>
      <div class="col-sm-9">
        <input type="password" class="form-control" placeholder="Contraseña" id="inputPassword" required>
      </div>
    </div>
 
    <div class="d-flex justify-content-center margin-top-low">
      <button id= "login-btn"class="width btn btn-lg btn-danger justify-content-center">INICIAR SESIÓN</button>
    </div>
  </div>
  
</div>`;
  formElem.setAttribute('id', 'frm-login');
  formElem.setAttribute('class', 'd-flex justify-content-center');

  formElem.innerHTML = formContent;
  const linkForm = formElem.querySelector('#login-btn');
  linkForm.addEventListener('click', () => {
    window.location.hash = '#/formInstituciones';
  });
  return formElem;
};