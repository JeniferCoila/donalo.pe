export default () => {
  const formElem = document.createElement('form');
  /* Colocar en form content el html  */
  const formContent = `
  <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a class="navbar-brand" href="#Inicio">Donalo.pe</a>
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" href="#Inicio">Inicio<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#instituciones">Institucions</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#pasos">Pasos para donar</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <button   id="donante-btn" class="btn btn-outline-success my-2 mr-2 my-sm-0" type="submit">Donante</button>
                <button  id="inst-btn" class="btn btn-outline-success my-2 my-sm-0" type="submit">Instituciones</button>
              </form>
            </div>
          </nav>


            <section class="color-b mask rgba-black-light" id="Inicio">
                    <div class="bd-example color-b">
                            <div id="carouselExampleCaptions" class="carousel slide color-b" data-ride="carousel">
                              <ol class="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                              </ol>
                              <div class="carousel-inner color-b mask rgba-black-light">
                                <div class="carousel-item active">
                                  <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="d-block color-b img-fluid img-c" alt="Responsive image">
                                  <div class="carousel-caption d-none d-md-block">
                                    <h5>Donando ayudas a miles de niños a combatir el friaje</h5>
                                    <p>Con tu apoyo, comunidades de bajo recursos podran ser apoyado combatiendo el friaje y desnutrición.</p>
                                  </div>
                                </div>
                                <div class="carousel-item">
                                  <img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" class="d-block  color-b img-fluid img-c" alt="Responsive image">
                                  <div class="carousel-caption d-none d-md-block">
                                    <h5>Compartir es amor</h5>
                                    <p>Dona prendas en buenas condiciones para apoyar a diferentes institucions y ONGs.</p>
                                  </div>
                                </div>
                                <div class="carousel-item">
                                  <img src="https://images.unsplash.com/photo-1530490125459-847a6d437825?ixlib=rb-1.2.1&auto=format&fit=crop&w=763&q=80" class="d-block  color-b img-fluid img-c" alt="Responsive image">
                                  <div class="carousel-caption d-none d-md-block">
                                    <h5>Tu apoyo puede hacer el cambio</h5>
                                    <p>Donando viveres, medicina o ropa en buenas condiciones ayudas a miles de familias, devolviendo la esperanza.</p>
                                  </div>
                                </div>
                              </div>
                              <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                              </a>
                              <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                              </a>
                            </div>
                          </div>
                   
                        

            </section>

            <section id="instituciones">
                    <div class="container mt-5">
                            <div class="row">
                                <div class="d-flex flex-row justify-content-ceter">
                                 <div class="flex-column col-4 mt-5">
                                    <img src="https://user-images.githubusercontent.com/44485081/58752838-3534b000-847b-11e9-822a-accbb0594db9.jpg" alt="" class="img-e color-b mb-2 ml-5">
                                    <p class="text-e color-g text-justify">CARE es un líder global dentro de un movimiento mundial dedicado a erradicar la pobreza. Somos reconocidos en todas partes por nuestro compromiso inquebrantable a favor de la dignidad de las personas. CARE fue constituida hace 70 años y hoy expande su acción en más de 90 países.</p>
                                </div>
                                    <div class="flex-column col-4 mt-5">
                                            <img src="https://user-images.githubusercontent.com/44485081/58752395-cef85f00-8473-11e9-8ded-1b42c92d82d5.png" alt="" class="img-e color-b mb-2 ml-5">
                                            <p class="text-e color-g text-justify">El Albergue Inspira es la materialización de un sueño que empezó en abril del 2008. Su principal meta era conseguir una casa que sirva de albergue para niños con cáncer que vengan del interior de nuestro Perú y necesiten tratarse en el INEN. Así poder ofrecerles la oportunidad de continuar con su tratamiento y la posibilidad de una esperanza de vida.</p>
                                                      
                                        </div>
                                        <div class="col-4">
                                                <img src="https://user-images.githubusercontent.com/44485081/58752861-95c3ed00-847b-11e9-8b9d-6f9b43a18036.png" alt="" class="img-e color-b mb-2 ml-5">
                                                <p class="text-e color-g text-justify">Somos una asociación sin fines de lucro que trabaja en diferentes proyectos sociales dirigidos a las personas más necesitadas y vulnerables del país, buscando lograr conciencia y generar un cambio de vidas por medio de la educación, salud, recreación, cuidado del medio ambiente, creación de empresas y mejoras en la calidad de vida, para realmente crear una transformación duradera, sostenible y que impacten en las familias.</p>
                                                          
                                  </div>
                                </div>
                            </div>
                        </div>
            </section>
           
            <section id="pasos">
                    <div class="container mt-5">
                            <div class="row">
                                <div class="d-flex flex-row justify-content-ceter">
                                 <div class="flex-column col-7 mt-5">
                                    <h1>Paso1</h1>
                                    <h2>Registrate </h2>
                                    <p>
                                        Registrate como donador, creando tu cuenta en google o facebook.
                                    </p>
                                </div>
                                <div class="flex-column col-4 mt-5">
                                        <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-p color-b mb-2 ml-5 img-thumbnail">
                                    </div>
                        </div>
                        <div class="row">
                                <div class="d-flex flex-row justify-content-ceter">
                                        <div class="flex-column col-7 mt-5">
                                                <img src="https://www.lancetalent.com/blog/wp-content/uploads/crear-formularios-online-1.png" alt="" class="img-p color-b mb-2 ml-5 img-thumbnail">
                                            </div>
                                 <div class="flex-column col-4 mt-5">
                                    <h1>Paso 2</h1>
                                    <h2>Escoje la institución a la deseas ayudar</h2>
                                    <p>
                                        Dentro de la lista de institucións y ONGs disponibles selecciona una de ella y apoyalos.
                                    </p>
                                </div>
                               
                        </div>
                        <div class="row">
                                <div class="d-flex flex-row justify-content-ceter">
                                 <div class="flex-column col-7 mt-5">
                                    <h1>Paso 3</h1>
                                    <h2>Lleva tu pedido</h2>
                                    <p>
                                       Envia tu donación a la institución escogida.
                                    </p>
                                </div>
                                <div class="flex-column col-4 mt-5">
                                        <img src="https://images.unsplash.com/photo-1449247666642-264389f5f5b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80" class="img-p color-b mb-2 ml-5 img-thumbnail">
                                    </div>
                        </div>
                
            </section>
        
        </main>
        <footer class="color-b-3 text-center color-white py-3">
            Donalo.pe 2019
        </footer>
    </div>`;
  formElem.innerHTML = formContent;

  const donButton = formElem.querySelector('#donante-btn');
  donButton.addEventListener('click', () => {
    window.location.hash = '#/loginDon';
  });
  const instButton = formElem.querySelector('#inst-btn');
  instButton.addEventListener('click', () => {
    window.location.hash = '#/login';
  });
  return formElem;
};