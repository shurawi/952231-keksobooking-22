//getRandomInt - возвращающает случайное целое число из переданного диапазона включительно.
//getRandomIntDot - возвращающает случайное число с плавающей точкой из переданного диапазона включительно

let getRandomInt = function (min, max) {
  if (min < 0 || max < 0 || min > max) {
    return alert('Введенные числа должны быть положительными. Минимальное значение диапазона не должно превышать максимальное.');
  } else if (min == max) {
      return max;
  } else {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

let getRandomIntDot = function (min, max, dot) {
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
