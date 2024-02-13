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
