// Функция, возвращающая случайное целое число из переданного диапазона включительно. Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random.

const getRandomInt = (minValue, maxValue) => {

  if (typeof(minValue) !== 'number' || typeof(maxValue) !== 'number' || minValue < 0 || minValue > maxValue || minValue === maxValue) {
    return NaN;
  }

  const minInt = Math.ceil(minValue);
  const maxInt = Math.floor(maxValue);

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


// В файле main.js на основе написанных в прошлом задании вспомогательных функций напишите необходимые функции для создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.

// пишу функцию, коорая возвращает индекс для аватара
const getAvatar = (lower = 1, upper = 10) => {
  const zeroLength = 2;
  const randomIndex = getRandomInt(lower,upper);

  return (randomIndex < 10) ? `img/avatars/user${(String(randomIndex).padStart(zeroLength, 0))}.png` : 'img/avatars/user/10.png';

};

// offer, объект — содержит информацию об объявлении. Состоит из нескольких полей.

// функция, которая помогает вернуть type.
const typeValue = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const defineTheType = (typeArray) => {
  const arrayRandElement = Math.floor(Math.random() * typeValue.length);
  return typeArray[arrayRandElement];
};

// функция, которая помогает вернуть checkin значение.
const checkinValue = ['12:00', '13:00', '14:00'];
const getCheckin = (checkinArray) => {
  const arrayRandElement = Math.floor(Math.random() * checkinValue.length);
  return checkinArray[arrayRandElement];
};

// функция, которая помогает вернуть checkout значение.
const checkoutValue = ['12:00', '13:00', '14:00'];
const getCheckout = (checkoutArray) => {
  const arrayRandElement = Math.floor(Math.random() * checkoutValue.length);
  return checkoutArray[arrayRandElement];
};

// функция, которая помогает вернуть массив строк features — массив случайной длины из заданных значений (без повторений).
const featuresValue = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const createFeatures = ([...arrayName], maxLength) => Array.from(
  {length: Math.min(arrayName.length, 1 + Math.random() * maxLength | 0) },
  () => arrayName.splice(Math.random() * arrayName.length | 0, 1) [0]
);

// функция, которая помогает вернуть массив строк photos — массив случайной длины из заданных значений.
const photosValue = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const getPhotos = (arrayName) => {
  const newArray = [];
  const minLength = 0;
  const maxLength = arrayName.length;
  for (let i = minLength; i < maxLength; i++) {
    newArray.push(arrayName[getRandomInt(minLength, maxLength - 1)]);
  }
  return newArray;
};

const titleValue = 'Приветствуем! Ознакомьтесь с недвижимость, которая подобрана специально для вас.';
const addressValue = ['location.lat', 'location.lng'];

// функция, которая отвечает за описание недвижимости
const getDescription = () => {
  const message = [' Тип недвижимости, который мы подобрали: ', '. Объект располагается по адресу: ', '. Цена аренды (руб/мес) составляет: ', '. Сколько комнат внутри: ', '. Максимальное кол-во гостей с учётом спальных мест: ', '. Имеются следующие удобства: ', '. Фотографии объекта: ', '. Время заселения: ', '. Время выселения: ', '. Географические координаты места: '];
  return titleValue + message[0] + defineTheType(typeValue) + message[1] + addressValue + message[2] + getRandomInt(0, 1000000) + message[3] + getRandomInt(0, 50) + message[4] + getRandomInt(1, 200) + message[5] + [createFeatures(featuresValue, featuresValue.length)] + message[6] + getAvatar() + message[7] + getCheckin(checkinValue) + message[8] + getCheckout(checkoutValue); // как я могу перенести строки в консоли браузера? Высчечивается одна сплошная строчка, советы по типу добавь \n не работают.
};

getDescription();


const getOffer = () => ({
  author: getAvatar(), // адрес изображения
  title: titleValue, // исходя из задания, текст придумал сам и объявил в переменной, функцию не писал. Надо ли было?
  address: addressValue, // написал из инструкции как маску. Правильно или нет?
  price: getRandomInt(0, 1000000), // использовал функцию, которую написал в прошлом задании. Попытался везде в диапазоне написать +Infinity,на тесте выдавал всегда Infinity. как быть?
  type: defineTheType(typeValue),
  rooms: getRandomInt(0, 50),
  guests: getRandomInt(1, 200),
  checkin: getCheckin(checkinValue),
  checkout: getCheckout(checkoutValue),
  features: [createFeatures(featuresValue, featuresValue.length)] ,
  description: getDescription(),
  photos: [getPhotos(photosValue)],
  location: {
    lat: getRandomFloat(35.65000, 35.70000, 5), // использовал функцию, которую написал в прошлом задании.
    lng: getRandomFloat(139.70000, 139.80000, 5)
  }
});

getOffer();
