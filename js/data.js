import {getRandomInt, getRandomFloat, getRandomArrayElement, getAvatar, getFeatures, getRandomPhotos} from './utils.js';

// Функции, необходимые для создания массива из 10 сгенерированных JS-объектов.

const OFFER_COUNT = 10;

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECKINS = ['12:00', '13:00', '14:00'];

const CHECKOUTS = ['12:00', '13:00', '14:00'];

const Price = {
  MIN: 0,
  MAX: 1000000,
};

const TITLES = [
  'Уютные аппартаменты недалеко от центра',
  'Бунгало с большим бассейном',
  'Большой дом с подземной парковкой',
  'Многоквартирный жилой комплекс',
  'Малоэтажный многоквартирный дом с наземной парковкой',
];

const PHOTOS = [
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

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

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
      price: getRandomInt(Price.MIN, Price.MAX),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(0, 50),
      guests: getRandomInt(1, 200),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getFeatures(FEATURES, FEATURES.length),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomPhotos(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng
    },
  };
};

const offers = Array.from({length:OFFER_COUNT}, getOffer);

export {offers};
