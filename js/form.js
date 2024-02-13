import { resetMap } from './map.js';
import { updateSliderOptions } from './slider.js';
import { resetValidation } from './validation.js';
import { resetHousePreviews } from './upload-images.js';

<<<<<<< HEAD
const adForm = document.querySelector('.ad-form');
const mapFiltres = document.querySelector('.map__filters');
const filtresChildren = [...mapFiltres.children];
const formChildren = [...adForm.children];

// Находим  список
const type = adForm.querySelector('#type');
// Находим поле с ценой
const priceField = adForm.querySelector('#price');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const optionRooms = adForm.querySelector('#room_number');
const optionGuests = adForm.querySelector('#capacity');

const ROOMS_MAX_VALUE = 100;
const NOT_FOR_GUESTS = 0;


// Создаём функцию для обекта со значением цены
// const placeholderPrice = (priceObject) => OBJECTS_TYPES_PRICE[priceObject].price;

const disableForms = () => {
  adForm.setAttribute('disabled', 'disabled');
  filtresChildren.forEach((child) => {
    child.setAttribute('disabled', 'disabled');
  });
  formChildren.forEach((field) => {
    field.setAttribute('disabled', 'disabled');
  });
=======
const addFormElement = document.querySelector('.ad-form');
const resetAllButtonElement = document.querySelector('.ad-form__reset');
const adFormInputElements = document.querySelectorAll('.ad-form fieldset');
const adFormSelectElements = document.querySelectorAll('.ad-form__element');
const mapSelectElements = document.querySelectorAll('.map__filter');
const mapCheckBoxElements = document.querySelectorAll('.map__checkbox ');
const mapFiltersContainerElement = document.querySelector('.map__filters');

const setAllFormsDisabled = () => {
  addFormElement.classList.add('ad-form--disabled');
  adFormInputElements.forEach((element) => element.classList.add('ad-form--disabled'));
  adFormSelectElements.forEach((element) => element.setAttribute('disabled', 'true'));
  mapFiltersContainerElement.classList.add('map__filters--disabled');
  mapSelectElements.forEach((element) => element.setAttribute('disabled', 'true'));
  mapCheckBoxElements.forEach((element) => element.setAttribute('disabled', 'true'));
>>>>>>> ddf3a0e (Завершает проект)
};

const setMapFiltersFormEnabled = () => {
  mapFiltersContainerElement.classList.remove('map__filters--disabled');
  mapSelectElements.forEach((element) => element.removeAttribute('disabled'));
  mapCheckBoxElements.forEach((element) => element.removeAttribute('disabled'));
};

<<<<<<< HEAD
// Код валидации pristine
const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__element--error-text',
}, false);

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

// По событию change меняем значение placeholder

type.addEventListener('change', () => {
  priceField.placeholder = OBJECTS_TYPES_PRICE[type.value].price;
});
=======
const setAdFormEnabled = () => {
  addFormElement.classList.remove('ad-form--disabled');
  adFormInputElements.forEach((element) => element.classList.remove('ad-form--disabled'));
  adFormSelectElements.forEach((element) => element.removeAttribute('disabled'));
};

const resetForm = () => {
  addFormElement.reset();
  updateSliderOptions(0);
  resetValidation();
  resetMap();
  resetHousePreviews();
};
>>>>>>> ddf3a0e (Завершает проект)

const setDefaultValues = () => {
  document.querySelector('input[id="price"]').placeholder = 'от 0';
  mapSelectElements.forEach((element) => {
    element.value = 'any';
  }
  );
};

const onResetButtonClick = (evt) => {
  evt.preventDefault();
  resetForm();
  setDefaultValues();
};

resetAllButtonElement.addEventListener('click', (evt) => onResetButtonClick(evt));

<<<<<<< HEAD
export {disableForms};
export {enableForms};
export {adForm};

=======
export { setAllFormsDisabled, setAdFormEnabled, setMapFiltersFormEnabled, resetForm };
>>>>>>> ddf3a0e (Завершает проект)
