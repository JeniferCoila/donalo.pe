export default () => {
  const formElem = document.createElement('form');
  /* Colocar en form content el html  */
  const formContent = `
      <h1>Lista de Donativos</h1>
      <form>
        <div>
          <select id="category" name="select">
            <option value="alimentos" selected>alimentos</option>
            <option value="rehabilitación">art. de rehabilitación</option>
            <option value="medicamentos">medicamentos</option> 
            <option value="vestimenta">vestimenta</option>
          </select>
        </div>
        <table>
          <thead>
              <tr>
                <td>Fecha</td>
                <td>Cantidad</td>
                <td>categoría</td>
                <td>Descripción</td>
                <td>Donante</td>
              </tr> 
            </thead>
          <tbody id="content-donaciones">
          </tbody>
        </table> 
      </form>
    `;
  formElem.innerHTML = formContent;
  return formElem;
};

let contentDonacion = document.querySelector('content-donaciones');
  
  const paintProducts = (collection, contenedor, category) => {
    contenedor.innerHTML = ` ` 
    db.collection(collection).where('estado','==', 'acept').where('categoria', '==', category).onSnapshot((querySnapshot)=> {
        querySnapshot.forEach((doc) => {
           console.log(`${doc.id} => ${doc.data().nombre}`);
           contenedor.innerHTML += `
               <tr class="" data-id-donacion="${doc.data().id}">                  
                   <td> ${doc.data().fechaEntrega} </td>
                   <td> ${doc.data().cantidad} </td>
                   <td> ${doc.data().categoria} </td>
                   <td> ${doc.data().descripcion} </td>
               </tr>
           `
        })
    })
  }

  const categorias = document.querySelector('category');

categorias.addEventListener('change', () => {
    paintProducts('donaciones', contentDonacion, categorias.value);
})
    