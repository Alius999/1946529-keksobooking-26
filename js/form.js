const adForm = document.querySelector('.ad-form');
// const formSubmit = document.querySelector('.ad-form__element');
const mapFiltres = document.querySelector('.map__filters');
const filtresChildren = [...mapFiltres.children];
// const formButtons = [...formSubmit.children];
const formChildren = [...adForm.children];

const disableForms = () => {
  adForm.setAttribute('disabled', 'disabled');
  filtresChildren.forEach((child) => {
    child.setAttribute('disabled', 'disabled');
  });
  formChildren.forEach((field) => {
    field.setAttribute('disabled', 'disabled');
  });
};

const enableForms = () => {
  adForm.removeAttribute('disabled');
  filtresChildren.forEach((child) => {
    child.removeAttribute('disabled');
  });
  formChildren.forEach((field) => {
    field.removeAttribute('disabled');
  });
};

disableForms();
enableForms();

export {disableForms};
export {enableForms};
