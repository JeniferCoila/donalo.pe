export default () => {
  const formElem = document.createElement('form');
  const formContent = `<div class="login d-flex justify-content-center">
    <form class="d-flex flex-column justify-content-center container-login">
      <span>DÓNALO.PE</span>
      <label for="">
        <input placeholder="Usuario" type="text">
      </label>
      <label for="">
        <input placeholder="Contraseña" type="password">
      </label>
      <button class="btn-width btn btn-lg justify-content-center">
        INICIA SESION
      </button>
    </form>
  </div>`;
  formElem.innerHTML = formContent;
  return formElem;
};