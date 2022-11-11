import {getOffers} from './data.js';
import {getRusTypeOfCard, getRooms, getSeparatePhoto} from './utils.js';

const similarOfferCardTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarOfferCard = getOffers();
const mapCanvas = document.querySelector('#map-canvas');


similarOfferCard.forEach((offerCard) => {
  const offerCardElement = similarOfferCardTemplate.cloneNode(true);
  const nodeOfPhotos = offerCardElement.querySelector('.popup__photos');
  const photoElement = nodeOfPhotos.querySelector('.popup__photo');
  nodeOfPhotos.removeChild(photoElement);
  const clonedPhoto = photoElement.cloneNode(true);

  offerCardElement.querySelector('.popup__title').textContent = offerCard.offer.title;
  offerCardElement.querySelector('.popup__text--address').textContent = offerCard.offer.address;
  offerCardElement.querySelector('.popup__text--price').textContent = `${offerCard.offer.price} + ₽/ночь`;
  offerCardElement.querySelector('.popup__type').textContent = getRusTypeOfCard(offerCard.offer.type);
  offerCardElement.querySelector('.popup__text--capacity').textContent = `${getRooms(offerCard.offer.rooms)} для ${offerCard.offer.guests} гостей`;
  offerCardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offerCard.offer.checkin}, выезд после ${offerCard.offer.checkout}`;
  offerCardElement.querySelector('.popup__features').textContent = offerCard.offer.features;
  offerCardElement.querySelector('.popup__description').textContent = offerCard.offer.description;
  const arrayWithPhotos = offerCard.offer.photos;
  getSeparatePhoto(arrayWithPhotos, clonedPhoto, nodeOfPhotos);

  // const elementForClone
  // пропустил пунк с фото, надо проконсультироваться, я заебался искать инфу 4 часа, возможно, опять ебаный затуп

  offerCardElement.querySelector('.popup__avatar').src = offerCard.author.avatar;
  mapCanvas.append(offerCardElement);
});


/* В блок .popup__photos выведите все фотографии из списка offer.photos. Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.
Список offer.photos - это массив с ссылками. Получается, что с учётом того, что может прийти разное кол-во ссылок из массива offer.photos, надо создать кол-во изображений исходя из длины массива offer.photos. Получается, что нужно написать функцию, которая будет клонировать узел исходя из длины массива + записывать в этот узел значение src, которое будет лежать в массиве offer.photos через индекс

Функция будет принимать массив offer.photos и узел, который надо клонировать. В функции мы будем клонировать узел и добавлять его как потомка к

*/
