import {getRusTypeOfCard, getRooms, getGuests, getCheckinCheckout} from './utils.js';
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapElement = document.querySelector('#map-canvas');

// вынес функцию, которая отвечате за отрисовку фотографий
const renderPhotos = (photoContiner, elementForClone, node) => {
  if (photoContiner.length) {
    photoContiner.forEach((photo) => {
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

const renderCard = (offerCard) => {
  const {author, offer} = offerCard;
  const cardElement = cardTemplate.cloneNode(true); // клонировал карточку
  const photosContainerElement = cardElement.querySelector('.popup__photos'); // нашёл узел  с фотками
  const photoElement = photosContainerElement.querySelector('.popup__photo'); // нашёл отдельную фотографию
  photosContainerElement.removeChild(photoElement); // удалил из шаблона пустую строку, которая мне не нужна
  const clonedPhoto = photoElement.cloneNode(true); // клонировал отдельную строку с фотографией для дальнейшего заполнения информацией

  const popupTitle = cardElement.querySelector('.popup__title');

  if (offer.title) {
    popupTitle.textContent = offer.title;
  } else {
    popupTitle.classList.add('hidden');
  }

  const popupAddress = cardElement.querySelector('.popup__text--address');
  if (offer.address) {
    popupAddress.textContent = offer.address;
  } else {
    popupAddress.classList.add('hidden');
  }

  const popupPrice = cardElement.querySelector('.popup__text--price');
  // popupPrice.textContent = `${fillingElement(offerCard, popupPrice, typesOfCard.price)} ₽/ночь`;
  if (offer.price) {
    popupPrice.textContent = `${offer.price} ₽/ночь`;
  } else {
    popupPrice.classList.add('hidden');
  }

  cardElement.querySelector('.popup__type').textContent = getRusTypeOfCard(offer.type);

  cardElement.querySelector('.popup__text--capacity').textContent = `${getRooms(offer.rooms)} ${getGuests(offer.guests)}`;

  const popupTime = cardElement.querySelector('.popup__text--time');
  popupTime.textContent = getCheckinCheckout(offerCard);

  // убираю значки характеристики объекта
  const popupFeatures = cardElement.querySelectorAll('.popup__feature');

  popupFeatures.forEach((featuresListItem) => {
    const cardFeatures = offer.features;
    const isAdded = cardFeatures.some(
      (cardFeature) => featuresListItem.classList.contains(`popup__feature--${cardFeature}`),
    );

    if (!isAdded) {
      featuresListItem.remove();
    }
  });

  const popupDescription = cardElement.querySelector('.popup__description');
  if (offer.description) {
    popupDescription.textContent = offer.description;
  } else {
    popupDescription.classList.add('hidden');
  }

  // функция, которая помогает получаеть отдельные значения src в карточке оффера
  const photos = offer.photos;

  renderPhotos(photos, clonedPhoto, photosContainerElement);

  cardElement.querySelector('.popup__avatar').src = author.avatar;
  mapElement.append(cardElement);
};

export {renderCard};

