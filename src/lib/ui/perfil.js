export default () => {
  const formElem = document.createElement('form');
  /* Colocar en form content el html  */
  const formContent = `
    <main>
    <p>Jenni Coilla</p>
    <span>Donaciones</span>
    <figure>
      <img>
    </figure>      
    <table class="table">
        <thead>
          <tr>
            <th scope="col">Institución</th>              
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
</main>`;
  formElem.innerHTML = formContent;
  return formElem;
};