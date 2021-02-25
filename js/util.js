import {TITLES, TYPES, CHECKIN, CHECKOUT, FEATURES, DESCRIPTIONS, PHOTOS, SIMILAR_HOUSE_INFO_COUNT} from './data.js';

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
      price: getRandomIntDot(50, 1500) + '$',
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

const similarHousInfo = new Array(SIMILAR_HOUSE_INFO_COUNT).fill(null).map(() => createHousInfo());

export {similarHousInfo};
