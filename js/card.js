import {getOffers} from './data.js';
import {getRusTypeOfCard, getRooms, fillingElement, getGuests, getCheckinCheckout} from './utils.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarOfferCards = getOffers();
const mapElement = document.querySelector('#map-canvas');
const card = similarOfferCards[0];

const renderCard = (offerCard) => {
  const cardElement = cardTemplate.cloneNode(true); // клонировал карточку
  const photosContainerElement = cardElement.querySelector('.popup__photos'); // нашёл узел  с фотками
  const photoElement = photosContainerElement.querySelector('.popup__photo'); // нашёл отдельную фотографию
  photosContainerElement.removeChild(photoElement); // удалил из шаблона пустую строку, которая мне не нужна
  const clonedPhoto = photoElement.cloneNode(true); // клонировал отдельную строку с фотографией для дальнейшего заполнения информацией

  //создал объект, чтобы обращаться к нему во время работы функции, которая наполняет блок информацией или скрывает его
  const typesOfCard = {
    title: 'title',
    address: 'address',
    price: 'price',
    type: 'type',
    description: 'description',
  };

  const popupTitle = cardElement.querySelector('.popup__title');
  popupTitle.textContent = fillingElement(offerCard, popupTitle, typesOfCard.title);

  const popupAddress = cardElement.querySelector('.popup__text--address');
  popupAddress.textContent = fillingElement(offerCard, popupAddress, typesOfCard.address);

  const popupPrice = cardElement.querySelector('.popup__text--price');
  popupPrice.textContent = `${fillingElement(offerCard, popupPrice, typesOfCard.price)} ₽/ночь`;

  cardElement.querySelector('.popup__type').textContent = getRusTypeOfCard(offerCard, offerCard.offer.type);

  cardElement.querySelector('.popup__text--capacity').textContent = `${getRooms(offerCard.offer.rooms)} для ${getGuests(offerCard.offer.guests)}`;

  const popupTime = cardElement.querySelector('.popup__text--time');
  popupTime.textContent = getCheckinCheckout(offerCard);

  // убираю значки характеристики объекта
  const popupFeatures = cardElement.querySelectorAll('.popup__feature');

  popupFeatures.forEach((featuresListItem) => {
    const cardFeatures = offerCard.offer.features;
    const isNecessary = cardFeatures.some(
      (cardFeature) => featuresListItem.classList.contains(`popup__feature--${cardFeature}`),
    );

    if (!isNecessary) {
      featuresListItem.remove();
    }
  });

  const popupDescription = cardElement.querySelector('.popup__description');
  popupDescription.textContent = fillingElement(offerCard, popupDescription, typesOfCard.description);

  const photos = offerCard.offer.photos;
  // функция, которая помогает получаеть отдельные значения src в карточке оффера

  const renderPhotos = (photoArray, elementForClone, node) => {
    if (photoArray.length) {
      photoArray.forEach((photo) => {
        const clonedElement = elementForClone.cloneNode(true);
        clonedElement.src = photo;
        node.append(clonedElement);
      });
    } else {
      const newElement = document.createElement('p');
      newElement.classList.add('popup__description');
      newElement.textContent = 'Фотографии объекта отсутствуют';
      node.append(newElement);
    }
  };

  renderPhotos(photos, clonedPhoto, photosContainerElement);

  cardElement.querySelector('.popup__avatar').src = offerCard.author.avatar;
  mapElement.append(cardElement);
};

renderCard(card);
