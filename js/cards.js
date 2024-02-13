import {listOfBookingObjects} from './main.js';
import {OBJECTS_TYPES_PRICE} from './data.js';

const cardTemplate = document.querySelector('#card');
const parentBlock = document.querySelector('.map__canvas');
const cardContainer = document.createElement('div');
const priceSpan = document.createElement('span');
const cardContent = cardTemplate.content;
const clonedContent = cardContent.cloneNode(true);
const bookingObjectArray = listOfBookingObjects();

// const objectType = (type) => OBJECTS_TYPES_PRICE[type].rus;

const createObject = (objectItem) => {
  parentBlock.appendChild(clonedContent);
  cardContainer.setAttribute('id', 'card');
  const cardPhotos = document.querySelector('.popup__photos');
  const featuresItems = document.querySelectorAll('.popup__feature');
  const featuresList = document.querySelector('.popup__features');
  const photoItem = document.querySelector('.popup__photo');
  const cardAvatar = document.querySelector('.popup__avatar');
  const title = document.querySelector('.popup__title');
  const address = document.querySelector('.popup__text--address');
  const price = document.querySelector('.popup__text--price');
  const houseType = document.querySelector('.popup__type');
  const roomsCount = document.querySelector('.popup__text--capacity');
  const checkInOutTime = document.querySelector('.popup__text--time');
  const description = document.querySelector('.popup__description');

  cardAvatar.src = objectItem.author.avatar;
  title.textContent = objectItem.offer.title;
  address.textContent = objectItem.offer.adress;
  price.textContent = '';
  price.insertAdjacentText('afterbegin', objectItem.offer.price);
  price.insertAdjacentElement('beforeend', priceSpan);
  priceSpan.textContent = ' ₽/ночь';
  houseType.textContent = OBJECTS_TYPES_PRICE[objectItem.offer.type].rus;
  roomsCount.textContent = `${objectItem.offer.rooms} комнаты для ${objectItem.offer.guests} гостей`;
  checkInOutTime.textContent = `Заезд после ${objectItem.offer.checkin}, выезд до ${objectItem.offer.checkout}`;

  if (featuresItems.length > objectItem.offer.features.length && objectItem.offer.features.length > 0) {
    featuresList.textContent = '';
    objectItem.offer.features.forEach((index) => {
      const newItem = document.createElement('li');
      newItem.classList.add('popup__feature');
      newItem.classList.add(`popup__feature--${  index}`);
      featuresList.append(newItem);
    });
  }

  if (objectItem.offer.features.length < 1) {
    featuresList.textContent = '';
  }

  description.textContent = objectItem.offer.description;
  cardPhotos.textContent = '';

  for (let i = 0; i < objectItem.offer.photos.length; i ++) {
    if (objectItem.offer.photos.length < 1) {
      cardPhotos.textContent = '';
    }
    cardPhotos.append(photoItem.cloneNode(true));
    const photoItems = document.querySelectorAll('.popup__photo');
    photoItems[i].src = objectItem.offer.photos[i];
  }
}
const HOUSE_TYPE_MATCHES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};

const cardTemplateElement = document.querySelector('template[id="card"]').content.querySelector('.popup');

const generatePhotoUrls = (urlsArr) => {
  const photosFragmentElement = document.createDocumentFragment();
  urlsArr.forEach((item) => {
    const imgTemplate = document.querySelector('template[id="card"]').content.querySelector('.popup__photo').cloneNode(true);
    imgTemplate.src = item;
    photosFragmentElement.appendChild(imgTemplate);
  });
  return photosFragmentElement;
};
const generateFeatures = (arr) => {
  const featuresFragmentElement = document.createDocumentFragment();
  const featureCloneTemplateElement = document.querySelector('template[id="card"]').content.querySelector('.popup__features').cloneNode(true);
  const featureListElement = featureCloneTemplateElement.querySelectorAll('.popup__feature');
  const makeFeatureFullCss = arr.map((item) => `popup__feature--${item}`);
  featureListElement.forEach((listItem) => {
    const cssModifier = listItem.classList[1];
    if (makeFeatureFullCss.includes(cssModifier)) {
      featuresFragmentElement.appendChild(listItem);
    }
  });
  return featuresFragmentElement;
};

const setElementValue = (data, element, attr) => {
  if (data) {
    element[attr] = data;
  } else {
    element.remove();
  }
};

const createCard = (incomingData) => {
  const cardElement = cardTemplateElement.cloneNode(true);
  const featureCardElement = cardElement.querySelector('.popup__features');
  const photosCardElement = cardElement.querySelector('.popup__photos');
  setElementValue(incomingData.author.avatar, cardElement.querySelector('.popup__avatar'), 'src');
  setElementValue(incomingData.offer.title, cardElement.querySelector('.popup__title'), 'textContent');
  setElementValue(incomingData.offer.address, cardElement.querySelector('.popup__text--address'), 'textContent');
  setElementValue(incomingData.offer.price, cardElement.querySelector('.js_price'), 'textContent');
  setElementValue(HOUSE_TYPE_MATCHES[incomingData.offer.type], cardElement.querySelector('.popup__type'), 'textContent');
  setElementValue(incomingData.offer.description, cardElement.querySelector('.popup__description'), 'textContent');
  if (incomingData.offer.checkin && incomingData.offer.checkout) {
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после:${incomingData.offer.checkin}, выезд после ${incomingData.offer.checkout}`;
  } else {
    cardElement.querySelector('.popup__text--time').remove();
  }
  if (incomingData.offer.rooms && incomingData.offer.guests) {
    cardElement.querySelector('.popup__text--capacity').textContent = `${incomingData.offer.rooms} комнаты для ${incomingData.offer.guests} гостей.`;
  } else {
    cardElement.querySelector('.popup__text--capacity').remove();
  }
  if (incomingData.offer.features) {
    featureCardElement.textContent = '';
    featureCardElement.appendChild(generateFeatures(incomingData.offer.features));
  } else {
    featureCardElement.remove();
  }
  if (incomingData.offer.photos) {
    photosCardElement.textContent = '';
    photosCardElement.appendChild(generatePhotoUrls(incomingData.offer.photos));
  } else {
    photosCardElement.remove();
  }
  return cardElement;
};

export { createCard };
