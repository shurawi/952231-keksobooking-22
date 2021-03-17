import { getOfferType } from './util.js';

const offerListElement = document.querySelector('.map__canvas');
const offerTemplate = document.querySelector('#card').content.querySelector('.popup');
const declarationsFragment = document.createDocumentFragment();


const createOfferElement = (array) => {
  const offerElement = offerTemplate.cloneNode(true);
  const offerType = getOfferType(array.offer.type);
  offerElement.querySelector('.popup__type').textContent = offerType;

  // наполняем данными
  if (array.author.avatar) {
    offerElement.querySelector('.popup__avatar').textContent = array.author.avatar;
  } else {
    offerElement.querySelector('.popup__avatar').classList.add('hidden');
  }
  if (array.offer.title) {
    offerElement.querySelector('.popup__title').textContent = array.offer.title;
  } else {
    offerElement.querySelector('.popup__title').classList.add('hidden');
  }
  if (array.offer.address) {
    offerElement.querySelector('.popup__text--address').textContent = array.offer.address;
  } else {
    offerElement.querySelector('.popup__text--address').classList.add('hidden');
  }
  if (array.offer.price) {
    offerElement.querySelector('.popup__text--price').textContent = `${array.offer.price} ₽/ночь`;
  } else {
    offerElement.querySelector('.popup__text--price').classList.add('hidden');
  }
  if (array.offer.rooms || array.offer.guests) {
    offerElement.querySelector('.popup__text--capacity').textContent = `${array.offer.rooms} комнаты для ${array.offer.guests} гостей`;
  } else {
    offerElement.querySelector('.popup__text--capacity').classList.add('hidden');
  }
  if (array.offer.checkin || array.offer.checkout) {
    offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${array.offer.checkin}, выезд до ${array.offer.checkout}`;
  } else {
    offerElement.querySelector('.popup__text--time').classList.add('hidden');
  }
  if (array.offer.description) {
    offerElement.querySelector('.popup__description').textContent = array.offer.description;
  } else {
    offerElement.querySelector('.popup__description').classList.add('hidden');
  }
  if (array.offer.description) {
    // создать li.popup__feature c class popup__feature--  в popup__features
    offerElement.querySelector('.popup__features').textContent = ' ';
    const featuresList = offerElement.querySelector('.popup__features');
    for (let i = 0; i < array.offer.features.length; i++) {
      const featuresLi = document.createElement('li');
      featuresLi.classList.add('popup__feature');
      const featuresClass = 'popup__feature--' + array.offer.features[i];
      featuresLi.classList.add(featuresClass);
      featuresList.append(featuresLi);
    }
  } else {
    offerElement.querySelector('.popup__features').classList.add('hidden');
  }
  if (array.offer.description) {
    // создать img.popup__photo в popup__photos
    offerElement.querySelector('.popup__photos').textContent = ' ';
    const photoList = offerElement.querySelector('.popup__photos');
    for (let i = 0; i < array.offer.photos.length; i++) {
      const photoImg = new Image(45, 40);
      photoImg.classList.add('popup__photo');
      photoImg.src = array.offer.photos[i];
      photoList.append(photoImg);
    }
  } else {
    offerElement.querySelector('.popup__photos').classList.add('hidden');
  }


  //вывод
  declarationsFragment.appendChild(offerElement);
  return offerListElement.appendChild(declarationsFragment);
};



export { createOfferElement };
