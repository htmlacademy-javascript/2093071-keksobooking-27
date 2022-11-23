const adForm = document.querySelector('.ad-form');
const title = adForm.querySelector('#title');
const price = adForm.querySelector('#price');
const rooms = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');


const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextClass: 'text-help'
});

const validateTitle = (value) => value.length >= 30 && value.length <= 100;
const validatePrice = (value) => value <= 100000;

const roomsOption = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

const validateRooms = () => roomsOption[rooms.value]?.includes(capacity.value);

pristine.addValidator(title, validateTitle, 'введите от 30 до 100 символов');
pristine.addValidator(price, validatePrice, 'максимальная цена 100 000/ р за ночь');
pristine.addValidator(rooms, validateRooms);
pristine.addValidator(capacity, validateRooms, 'Доступные варианты: 1 комната для 1 гостя, 2 комнаты для 2 или для 1 гостей, 3  комнаты  для 3 или для 2 или для 1 гостей, 100 комнат не для гостей');

adForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

