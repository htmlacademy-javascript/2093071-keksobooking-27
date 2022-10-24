// Функция, возвращающая случайное целое число из переданного диапазона включительно. Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random.

const getRandomInt = (minValue, maxValue) => {
  if (
    typeof minValue !== 'number' ||
    typeof maxValue !== 'number' ||
    minValue < 0 ||
    minValue > maxValue ||
    minValue === maxValue
  ) {
    return NaN;
  }

  const minInt = Math.ceil(minValue);
  const maxInt = Math.floor(maxValue);

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};
getRandomInt(1, 20);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Источник: https://learn.javascript.ru/number.
const getRandomFloat = (minValue, maxValue, decimalPlaces) => {
  if (
    typeof minValue !== 'number' ||
    typeof maxValue !== 'number' ||
    typeof decimalPlaces !== 'number' ||
    minValue < 0 ||
    minValue > maxValue ||
    minValue === maxValue
  ) {
    return NaN;
  }

  const randomNumber = Math.random() * (maxValue - minValue + 1) + minValue;

  return Number(randomNumber.toFixed(decimalPlaces));
};

getRandomFloat(0, 20);

// Функции, необходимые для создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.


const OFFER_COUNT = 10;

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECKINS = ['12:00', '13:00', '14:00'];

const CHECKOUTS = ['12:00', '13:00', '14:00'];

const price = {
  minValue: 0,
  maxValue: 1000000,
};

const TITLES = [
  'Уютные аппартаменты недалеко от центра',
  'Бунгало с большим бассейном',
  'Большой дом с подземной парковкой',
  'Многоквартирный жилой комплекс',
  'Малоэтажный многоквартирный дом с наземной парковкой',
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const DESCRIPTIONS = [
  'Большой дом',
  'Уютная хата',
  'Место для остановки на один день',
  'Дом у леса - мечта курьера',
  'Et cetera',
];

// пишу функцию, коорая возвращает индекс для аватара
const getAvatar = (lower = 1, upper = 10) => {
  const zeroLength = 2;
  const randomIndex = getRandomInt(lower, upper);

  return randomIndex < 10 ? `img/avatars/user${String(randomIndex).padStart(zeroLength, 0)}.png` : 'img/avatars/user/10.png';
};

// функция, которая помогает вернуть рандомный элемент массива
const getRandomArrayElement = (elements) =>
  elements[getRandomInt(0, elements.length - 1)];

// функция, которая помогает вернуть массив строк features — массив случайной длины из заданных значений (без повторений).
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const getFeatures = ([...arrayName], maxLength) =>
  Array.from(
    { length: Math.min(arrayName.length, (1 + Math.random() * maxLength) | 0) },
    () => arrayName.splice((Math.random() * arrayName.length) | 0, 1)[0]
  );

// функция, которая помогает вернуть массив строк photos — массив случайной длины из заданных значений. Функцию переделывать не стал.
const getRandomElements = (elements) => {
  let currentIndex = elements.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [elements[currentIndex], elements[randomIndex]] = [
      elements[randomIndex],
      elements[currentIndex],
    ];
  }
  return elements.slice(getRandomInt(0, elements.length));
};

const getOffer = () => {
  const lat = getRandomFloat(35.65, 35.7, 5);
  const lng = getRandomFloat(139.7, 139.8, 5);

  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${lat}, ${lng}`,
      price: getRandomInt(price.minValue, price.maxValue),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(0, 50),
      guests: getRandomInt(1, 200),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getFeatures(FEATURES, FEATURES.length),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomElements(photos),
    },
    location: {
      lat: lat,
      lng: lng
    },
  };
};

const offers = Array.from({length:OFFER_COUNT}, getOffer);

getOffer(offers);
