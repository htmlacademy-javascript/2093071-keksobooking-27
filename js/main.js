// Функция, возвращающая случайное целое число из переданного диапазона включительно. Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random.

const getRandomInt = (minValue, maxValue) => {

  const minInt = Math.ceil(minValue);
  const maxInt = Math.floor(maxValue);

  if (typeof(minValue) !== 'number' || typeof(maxValue) !== 'number' || minInt < 0 || minInt > maxInt || minInt === maxInt) {
    return NaN;
  }

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};
getRandomInt (1, 20);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Источник: https://learn.javascript.ru/number.
const getRandomFloat = (minValue, maxValue, decimalPlaces) => {

  if (typeof(minValue) !== 'number' || typeof(maxValue) !== 'number' || typeof(decimalPlaces) !== 'number' || minValue < 0 || minValue > maxValue || minValue === maxValue) {
    return NaN;
  }

  const randomNumber = Math.random() * (maxValue - minValue + 1) + minValue;

  return Number(randomNumber.toFixed(decimalPlaces));
};

getRandomFloat (0, 20);
