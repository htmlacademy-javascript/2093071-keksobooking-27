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
  offerCardElement.querySelector('.popup__features').textContent = `Присутствуют сдедующие удобства: ${offerCard.offer.features}`;
  offerCardElement.querySelector('.popup__description').textContent = offerCard.offer.description;
  const arrayWithPhotos = offerCard.offer.photos;
  getSeparatePhoto(arrayWithPhotos, clonedPhoto, nodeOfPhotos);

  offerCardElement.querySelector('.popup__avatar').src = offerCard.author.avatar;
  mapCanvas.append(offerCardElement);
});
