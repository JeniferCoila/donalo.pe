// import { getInstituciones }  from '../../lib/controller/c-get-instituciones';
const descripcionValor = document.querySelector('#descripcion-input').value;
const categoriaSelect = document.querySelector('#categoria-select').value;
const agregaOtro = document.querySelector('#agrega-otros');
const imagenInput = document.querySelector('#imagen-input').value;
const cantidadInput = document.querySelector('#cantidad-input').value;
const institucionInput = document.querySelector('#instituciones-select');
const fechaInput = document.querySelector('#fecha-input').value;
const botonDonar = document.querySelector('#boton-donar');
const valorSeleccionado = document.querySelector('#instituciones-select').value;

// const creaInput = () => {
//     const inputElement = document.createElement('input');
//     return inputElement;
// }

// agregaOtro.addEventListener('click', () => {
//   console.log('jolkcdkv');
//     // const divContain = document.querySelector('prueba');
//     // return divContain.appendChild(creaInput());
// return alert('hola')
//   });
const filtraInstituciones = (valor) => {
  // const data = getInstituciones;
  return alert('hola');
  }
institucionInput.addEventListener('change', () => filtraInstituciones(valorSeleccionado));

const mostrarInstituciones = () => {
  const formElement = document.createElement('div');

  const formInicio =`
  <div class="container-nombre">
    <div class="container-input"></div>
    <div class="container-input"></div>
    <button type="button" id="btn-donar">DONAR</button>
  </div>
  `;
  formElement.setAttribute('id', 'frm-home');
  formElement.innerHTML = formInicio;
  const btnDonar = formElement.querySelector('#btn-donar');
} 






