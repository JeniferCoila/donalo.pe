import { getInstituciones }  from '../../lib/controller/c-get-instituciones';
const descripcionValor = document.getElementById('descripcion-input').value;
const categoriaSelect = document.getElementById('categoria-select').value;
const agregaOtros = document.getElementById('agrega-otros');
const imagenInput = document.getElementById('imagen-input').value;
const cantidadInput = document.getElementById('cantidad-input').value;
const institucionInput = document.getElementById('instituciones-select');
const fechaInput = document.getElementById('fecha-input').value;
const botonDonar = document.getElementById('boton-donar');
const valorSeleccionado = document.getElementById('instituciones-select').value;

const creaInput = () => {
    const inputElement = document.createElement('input');
    return inputElement;
}

agregaOtros.addEventListener('click', () => {
    const divContain = document.getElementById('prueba');
    return divContain.appendChild(creaInput());
});
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






