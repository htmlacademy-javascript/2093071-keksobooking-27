const adForm = document.querySelector('.ad-form');
const title = adForm.querySelector('#title');
const price = adForm.querySelector('#price');
const rooms = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');


const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
});

const validateTitle = (value) => value.length >= 30 && value.length <= 100;
const validatePrice = (value) => value <= 100000;

const validateRooms = () => (rooms.value === 1 && capacity === 1) ||
    (rooms.value === 2 && capacity === 1) ||
    (rooms.value === 2 && capacity === 2) ||
    (rooms.value === 3 && capacity === 1) ||
    (rooms.value === 3 && capacity === 2) ||
    (rooms.value === 3 && capacity === 3) ||
    (rooms.value === 100 && capacity === 0);

pristine.addValidator(title, validateTitle, 'введите от 30 до 100 символов');
pristine.addValidator(price, validatePrice, 'максимальная цена 100 000/ р за ночь');
pristine.addValidator(rooms, validateRooms, 'Доступные варианты: 1 комната для 1 гостя, 2 комнаты для 2 или для 1 гостей, 3  комнаты  для 3 или для 2 или для 1 гостей, 100 комнат не для гостей');

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

