export default () => {
  const listado = 'listado...';
  const idCheckbox = 'id01';
  const newArray = [];
  firebase.firestore().collection('donaciones').onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      newArray.push({
        id: doc.id,
        descripcion: doc.data().descripcion
      })
    });
    dataSnapshot(newArray);
  });   
  const formElem = document.createElement('form');
  const formContent = `
  <div>
      <h2>Lista de Espera</h2>
      <div>
        <table border="1">
          <tr>
            <td>Lista de Artículos donados</td>
            <td>Marcar como recibido</td>
          </tr> 
          <tr>
              <td>
                  ${newArray.descripcion}
              </td>
              <td>
                  <input type="checkbox" id= "${newArray.id}"/>
              </td>
          </tr>
        </table>
      </div>
      <button id="btn-estatus" type="button">Cambiar Estatus</button>
    </div>`;
  formElem.setAttribute('id', 'frm-instituciones');
  formElem.innerHTML = formContent;
  return formElem;
};