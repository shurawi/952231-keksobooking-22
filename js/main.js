'use strict'

let getRandomInt = function (min, max) { //getRandomInt - возвращающает случайное целое число из переданного диапазона включительно.
  if (min < 0 || max < 0 || min > max) {
    return alert('Введенные числа должны быть положительными. Минимальное значение диапазона не должно превышать максимальное.');
  } else if (min == max) {
    return max;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

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

const TITLE = ['Большое монументальное парадное здание, выделяющееся своей архитектурой, являлось первоначально резиденцией царствующих владетельных лиц и высшей знати', 'Превосходная квартира с роскошным дизайном интерьера расположена в центре Токио', 'Роскошные апартаменты с видом на город, в 2 км от храма Омори Хачиман и в 2,2 км от святилища Мива-Ицукусим', 'Прекрасная квартира оформленная в стиле минимализм', 'Дом для отпуска с 3 спальнями и патио находится в Токио, всего в 1,1 км от краеведческого музея Сугинами и парка Вадабери'];

const TYPE = ['palace', 'flat', 'house ', 'bungalow'];

const CHECKIN = ['12:00', '13:00', '14:00'];

const CHECKOUT = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const DESCRIPTIONS = ['К услугам гостей сауна и душ с функцией ароматерапии. Желающие смогут заказать массажные и косметические процедуры. Гостям предоставляются услуги персонального тренера. За дополнительную плату организован трансфер от/до аэропорта на лимузине Rolls-Royce. Стойка регистрации отеля открыта круглосуточно. На территории обустроена платная парковка.', 'Среди популярных достопримечательностей рядом находятся — парк Хикава, Гейно Каденша и храм Кумано.', 'Популярные достопримечательности вблизи включают краеведческий музей Сетагая, дополнительное здание Мукаи Хункичи и храм Джокко-дзи. Расстояние до международного аэропорта Токио Ханэда составляет 32 км.', 'Популярные достопримечательности вблизи включают храм Инари Кио, музей Кореи и парк Окубо. Расстояние до токийского международного аэропорта Ханэда составляет 17 км. За дополнительную плату организуется трансфер от/до аэропорта.'];

const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const getRandomArrayElement = function (elements) {
  return elements[getRandomInt(0, elements.length - 1)];
};

const getRandomFillArry = function (array, values) {
  const newArray = [];
  for (let i = 0; i < values; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

const SIMILAR_HOUSE_INFO_COUNT = 10;

let createHousInfo = function () {
  return {
    author: {
      avatar: `img/avatars/user0${getRandomInt(1, 8)}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: `${getRandomIntDot(35.65, 35.7, 5)}, ${getRandomIntDot(139.7, 139.8, 5)}`,
      price: getRandomInt(50, 1500) + '$',
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(1, 10),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomFillArry(FEATURES, getRandomInt(1, FEATURES.length)),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElement(PHOTOS),
    },
    location: {
      x: getRandomIntDot(35.65, 35.7, 5),
      y: getRandomIntDot(139.7, 139.8, 5),
    },
  }
}

const similarHousInfo = new Array(SIMILAR_HOUSE_INFO_COUNT).fill(null).map(() => createHousInfo());

similarHousInfo;
