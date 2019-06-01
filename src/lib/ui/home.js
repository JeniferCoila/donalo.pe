export default () => {
  const formElem = document.createElement('form');
  /* Colocar en form content el html  */
  const formContent = `
  <h1>Home</h1>`;
  formElem.innerHTML = formContent;
  return formElem;
};