

export default (data) => {
  const formElem = document.createElement('form');
  /* Colocar en form content el html  */
  const formContent = `
<div class="container">
  <h1 class="color-blue title-donante my-5">¡Bienvenido! ¿Qúe desea donar?</h1>
  <form id= "form-donacion">
  <div id ="prueba" class="d-flex flex-row my-2">
  <p class="mr-1">Escribe aquí lo que deseas donar</p>
  <input type="text" class="descripcion form-control" id="descripcion-input" />
  <button type="button" class="agregra-otros btn-form color-b-4 ml-1" id="agrega-otros">+</button>
  </div>
  <div class="d-flex">
  <p class="mr-1">Selecciona una categoría</p>
  <select class="categoria descripcion form-control" id="categoria-select">
    <option>Medicamentos</option>
    <option>Alimentos</option>
    <option>Vestimenta</option>
    <option>Artículos de rehabilitación</option> 
  </select>
  </div>
  <div class="d-flex flex-column">
  <div>
  <input name="uploadedfile" type="file" class="imagen-dona my-2" id="imagen-input" />
  </div>
  <div class="d-flex">
  <p class="mr-1">Selecciona la cantidad que donarás</p>
  <input type="number" class="cantidad form-control descripcion my-2" id="cantidad-input" />
  </div>
  
  <select class="instituciones form-control descripcion" id="instituciones-select">
    <option>Care Perú</option>
    <option>Cambiando vidas</option>
    <option>Proa</option>
  </select>
  </div>
  <div class="institucion" id="institucion-container">
  ${paintDonar(data)}
  </div>
  <p>Coloca la fecha en la que deseas realizar tu donación :</p>
  <input type="date" class="fecha form-control my-1 mb-3 descripcion" id="fecha-input" />
  <button class="boton btn-form color-b-3 mb-5" id="boton-donar">Donar</button>
</form>
</div>`;
  formElem.innerHTML = formContent;
  formElem.setAttribute('id', 'frm-home');
  const btnDonar = formElem.querySelector('#agrega-otros');
  const creaInput = () => {
        const inputElement = document.createElement('input');
        return inputElement;
    }
  btnDonar.addEventListener('click', () => { 
const divContain = document.querySelector('#prueba');
    return divContain.appendChild(creaInput()); 
  });

  const btnDona = formElem.querySelector('#boton-donar');
  btnDona.addEventListener('click', () => { 
    window.location.hash = '#/perfil';
      });

  const btnSelect = formElem.querySelector('#instituciones-select');
  const descripcionSelect = () => {
        const inputSelect = document.createElement('div');
        return inputSelect;
    }
  btnSelect.addEventListener('change', () => { 
const divSelect = document.querySelector('#institucion-container');
    return divSelect.appendChild(descripcionSelect()); 
  });
  
  return formElem;
};
// const descripcionValor = document.querySelector('#descripcion-input').value;


export const paintDonar = (dataDonar) => {
  let listaDonar = '';
   dataDonar.forEach((doc) => {
     const formPedido = `
     <div class="container my-5">
        <div class="row">
          <div class="column-6">
            <div class="d-flex flex-row" id="donar">
               <p type="text" id="text-${doc.nombre}">${doc.nombre} :
               </p>
                <p class="pedido color-blanco" id="agregar-${doc.descripción}">${doc.descripción}</p>
             </div>
          </div>
       </div>
     </div>
     `;
     listaDonar +=formPedido;
   });
   return listaDonar;
};