/* eslint-disable no-console */

// Функция, возвращающая случайное целое число из переданного диапазона включительно. Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random.

const getRandomInt = (minValue, maxValue) => {
  const minInt = Math.ceil(minValue);
  const maxInt = Math.floor(maxValue);

  if (minInt < 0) {
    return 'Пожалуйста, введите положительное число от нуля включительно';
  }

  if (minInt > maxInt) {
    return 'Вы написали числа диапазона наоборот. Поменяйте значения друг с другом.';
  }

  if (minInt === maxInt) {
    return 'Вы написали одинаковые числа диапазона. Пожалуйста, задайте разные значения.';
  }
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};
getRandomInt (1, 20);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Источник: https://learn.javascript.ru/number.
const getRandomFloat = (minValue, maxValue, decimalPlaces) => {
  if (minValue < 0) {
    return 'Пожалуйста, введите положительное число от нуля включительно';
  }

  if (minValue > maxValue) {
    return 'Вы написали числа диапазона наоборот. Поменяйте значения друг с другом.';
  }

  if (minValue === maxValue) {
    return 'Вы написали одинаковые числа диапазона. Пожалуйста, задайте разные значения.';
  }

  const randomNumber = Math.random() * (maxValue - minValue + 1) + minValue;
  return Number(randomNumber.toFixed(decimalPlaces));
};

getRandomFloat (0, 20);
