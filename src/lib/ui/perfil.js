export default () => {
  const formElem = document.createElement('form');
  /* Colocar en form content el html  */
  const formContent = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Donalo.pe</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#Inicio">Inicio<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#instituciones">Institucions</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#pasos">Pasos para donar</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-success my-2 mr-2 my-sm-0" type="submit">Donante</button>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Instituciones</button>
    </form>
  </div>
</nav>
    <main class="main-perfil">
    <figure class="">
        <img><i class="fas fa-user"></i></img>
      </figure>
      <p class="main-perfil__p">Jenni Coilla</p>
      <p class="main-perfil__p">Donaciones</p>
            
      <table class="table">
        <thead>
         <tr>
          <th scope="col">N°</th>        
            <th scope="col">Institución</th>              
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Inspira</td>            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cambiando Vidas</td>            
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Care Perú</td>            
          </tr>

        </tbody>
      </table>
      <span class="main-perfil__span--puntos">Puntos acumulados <i class="far fa-heart">5</i></span>

</main>`;
  formElem.innerHTML = formContent;
  return formElem;
};