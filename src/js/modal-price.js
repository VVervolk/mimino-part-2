const selector = document.querySelector('.js-select-price');
const finalPrice = document.querySelector('.js-price');
const inputForDays = document.querySelector('.js-inputmask-days');

inputForDays.value = 1;
let price = 1000;

selector.addEventListener('change', () => {
  switch (selector.value) {
    case 'double':
      price = 1000;
      break;

    case 'double-lux':
      price = 1500;
      break;

    case 'triple':
      price = 2000;
      break;

    default:
      break;
  }

  onGetFinalPrice();
});

inputForDays.addEventListener('input', event => {
  inputForDays.value = event.currentTarget.value;

  onGetFinalPrice();
});

inputForDays.addEventListener('blur', () => {
  if (!inputForDays.value) {
    inputForDays.value = 1;
    finalPrice.textContent = price;
  }
});

function onGetFinalPrice() {
  finalPrice.textContent = price * inputForDays.value;
}
