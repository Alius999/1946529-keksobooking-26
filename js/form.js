import { resetMap } from './map.js';
import { updateSliderOptions } from './slider.js';
import { resetValidation } from './validation.js';
import { resetHousePreviews } from './upload-images.js';

const DEFAULT_VALUE = 'any';

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
  adFormSelectElements.forEach((element) => {element.disabled = true;});
  mapFiltersContainerElement.classList.add('map__filters--disabled');
  mapSelectElements.forEach((element) => {element.disabled = true;});
  mapCheckBoxElements.forEach((element) => {element.disabled = true;});
};

const setMapFiltersFormEnabled = () => {
  mapFiltersContainerElement.classList.remove('map__filters--disabled');
  mapSelectElements.forEach((element) => {element.disabled = false;});
  mapCheckBoxElements.forEach((element) => {element.disabled = false;});
};

const setAdFormEnabled = () => {
  addFormElement.classList.remove('ad-form--disabled');
  adFormInputElements.forEach((element) => element.classList.remove('ad-form--disabled'));
  adFormSelectElements.forEach((element) => {element.disabled = false;});
};

const resetForm = () => {
  addFormElement.reset();
  updateSliderOptions(0);
  resetValidation();
  resetMap();
  resetHousePreviews();
  document.querySelector('input[id="price"]').placeholder = 'от 0';
};

const setDefaultValues = () => {
  mapSelectElements.forEach((element) => {
    element.value = DEFAULT_VALUE;
  }
  );
};

const onResetButtonClick = (evt) => {
  evt.preventDefault();
  resetForm();
  setDefaultValues();
};

resetAllButtonElement.addEventListener('click', (evt) => onResetButtonClick(evt));

export { setAllFormsDisabled, setAdFormEnabled, setMapFiltersFormEnabled, resetForm };
