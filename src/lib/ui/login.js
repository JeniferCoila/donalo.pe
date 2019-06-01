export default () => {
  const formElem = document.createElement('form');
  const formContent = `
    <form class="d-flex flex-column justify-content-center container-login">
      <span>DÓNALO.PE</span>
      <div class="d-flex flex-column justify-content-center" >
      <label for="">
        <input placeholder="Usuario" type="text">
      </label>
      <label for="">
        <input placeholder="Contraseña" type="password">
      </label>
      <div>
      <button id= "login-btn" class="btn-width btn btn-lg justify-content-center">
        INICIA SESION
      </button>
    </form>`;
  formElem.innerHTML = formContent;

  const linkForm = formElem.querySelector('#login-btn');
  linkForm.addEventListener('click', () => {
    window.location.hash = '#/formDonante';
  });
  return formElem;
};