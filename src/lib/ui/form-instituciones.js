export default () => {
 
  const formElem = document.createElement('form');
  const formContent = `
  <div>
      <h2>Lista de Espera</h2>
      <div>
        <table class="container-table" border="1">
          <thead>
            <tr>
              <td>Descripción</td>
              <td>Cambiar Estatus</td>
            </tr>
          </thead>
          <tbody id="content-list">

          </tbody>
        </table>
      </div>
      <button id="btn-estatus" type="button">Cambiar Estatus</button>
    </div>`;
  formElem.setAttribute('id', 'frm-instituciones');
  formElem.innerHTML = formContent;

  const contentList = document.querySelector('content-list');
  // console.log(contentList);
  firebase.firestore().collection('donaciones').onSnapshot((querySnapshot) => {
    // console.log('entra en query');
    // console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().descripcion}`);
      contentList.innerHTML += `
          <tr css="table">
              <td> ${doc.data().descripcion} </td>
              <td><input type="checkbox" id= "${doc.id}"/></td>
          </tr>`;
      // console.log('entra aqui');
    });
  });
 
  return formElem;
};