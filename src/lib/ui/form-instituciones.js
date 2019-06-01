export default () => {
  const formElem = document.createElement('form');
  const formContent = `<div>
      <h2>Lista de Espera</h2>
      <div>
        <table border="1">
            <tr>
                <th>Lista de Artículos donados</th>
                <th>Marcar como recibido</th>
            </tr> 
            <tr>
                <td>
                    ${listado}
                </td>
                <td>
                    <input type="checkbox" id= "${idCheckbox}"/>
                </td>
            </tr>
        </table>
      </div>
      <button id="btn-login" type="button" class="btn-registrar">Cambiar Estatus</button>
    </div>`;
  formElem.setAttribute('id', 'frm-instituciones');
  formElem.innerHTML = formContent;
  return formElem;
};