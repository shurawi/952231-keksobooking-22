import {TITLES, TYPES, CHECKIN, CHECKOUT, FEATURES, DESCRIPTIONS, PHOTOS, SIMILAR_HOUSE_INFO_COUNT, OFFER_TYPE} from './data.js';

let getRandomIntDot = function (min, max, dot) { //getRandomIntDot - возвращающает случайное число с плавающей точкой из переданного диапазона включительно
  if (min < 0 || max < 0 || min > max || dot <= 0 ) {
    return alert('Введенные числа должны быть положительными. Минимальное значение диапазона не должно превышать максимальное.');
  } else if (min == max) {
    return max;
  } else {
    let int = Math.random() * (max - min) + min;
    let intDot = int.toFixed(dot);
    return intDot;
  }
}

const getRandomArrayElement = function (elements) {
  return elements[getRandomIntDot(0, elements.length - 1)];
};

const getRandomFillArray = function (array, values) {
  const newArray = [];
  for (let i = 0; i < values; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

const createHousInfo = function () {
  const randomImgNumber = getRandomIntDot(1, 8);
  const randomX = getRandomIntDot(35.65, 35.7, 5);
  const randomY = getRandomIntDot(139.7, 139.8, 5);

  return {
    author: {
      avatar: `img/avatars/user0${randomImgNumber}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${randomX}, ${randomY}`,
      price: getRandomIntDot(50, 1500),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomIntDot(1, 5),
      guests: getRandomIntDot(1, 10),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomFillArray(FEATURES, getRandomIntDot(1, FEATURES.length)),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElement(PHOTOS),
    },
    location: {
      x: randomX,
      y: randomY,
    },
  }
}
const createSimilarArray = function (arrayCount) {
  const similarArray = new Array(arrayCount).fill(null).map(() => createHousInfo());
  return similarArray;
}
const similarHousInfo = createSimilarArray(SIMILAR_HOUSE_INFO_COUNT);

const getOfferType = (TYPES) => {// Функция, возвращающая тип жилья
  switch (TYPES) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    default:
      return 'Любой тип жилья';
  }
};

const offerType = getOfferType(TYPES[OFFER_TYPE]);

export {similarHousInfo, offerType, getOfferType};
