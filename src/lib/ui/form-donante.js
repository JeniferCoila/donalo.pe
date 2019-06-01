export default () => {
  const formElem = document.createElement('form');
  /* Colocar en form content el html  */
  const formContent = `
  <h1>¡BIENVENIDO! ¿QUE DESEA DONAR?</h1>
  <form id= "form-donacion">
  <div id ="prueba">
  <input type="text" class="descripcion" id="descripcion-input" />
  <button type="button" class="agregra-otros" id="agrega-otros">+</button>
  </div>
  <select class="categoria" id="categoria-select">
    <option>Medicamentos</option>
    <option>Alimentos</option>
    <option>Vestimenta</option>
    <option>Artículos de rehabilitación</option> 
  </select>
  <input name="uploadedfile" type="file" class="imagen-dona" id="imagen-input" />
  <input type="number" class="cantidad" id="cantidad-input" />
  <select class="instituciones" id="instituciones-select">
    <option>Care Perú</option>
    <option>Cambiando vidas</option>
    <option>Proa</option>
  </select>
  <input type="date" class="fecha" id="fecha-input" />
  <button class="boton" id="boton-donar">DONAR!</button>
</form>`;
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

  const btnSelect = formElem.querySelector('#instituciones-select');
  const descripcionSelect = () => {
        const inputElement = document.createElement('input');
        return inputElement;
    }
  btnSelect.addEventListener('click', () => { 
const divContain = document.querySelector('#prueba');
    return divContain.appendChild(creaInput()); 
  });
  
  return formElem;
};
// const descripcionValor = document.querySelector('#descripcion-input').value;
