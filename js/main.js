import './array-generating.js';
import './cards.js';
import {listOfBookingObjects} from './data.js';
import {disableForms} from './form.js';
// import {adForm} from './form.js';

import {enableForms} from './form.js';
import {createObject} from './cards.js';
import {bookingObjectArray} from './cards.js';

createObject(bookingObjectArray[1]);

/*eslint-disable */
console.log(listOfBookingObjects());
console.log(createObject(bookingObjectArray[1]));
/*eslint-enable */

export {listOfBookingObjects};

disableForms();
enableForms();

import { activateFormValidation } from './validation.js';
import { setAllFormsDisabled, setAdFormEnabled, setMapFiltersFormEnabled } from './form.js';
import { activateMap } from './map.js';
import { activateSlider } from './slider.js';
import { fetchOffers } from './api.js';
import { initFilters } from './filter.js';
import { initUploadAvatar, initUploadHousePic } from './upload-images.js';
import { showAlert } from './messages.js';

setAllFormsDisabled();

fetchOffers((offers) => {
  activateMap(setAdFormEnabled, offers);
  initFilters(offers);
}, setMapFiltersFormEnabled, (error) => showAlert(`Ошибка загрузки данных, попробуйте обновить страницу. ${error}`));

initUploadAvatar();
initUploadHousePic();
activateSlider();
activateFormValidation();

