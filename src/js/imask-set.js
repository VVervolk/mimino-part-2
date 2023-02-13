import IMask from 'imask';

function inputMask() {
  const maskInputs = document.querySelectorAll('.js-inputmask');
  const maskInputsDays = document.querySelectorAll('.js-inputmask-days');
  const maskInputs01 = document.querySelectorAll('.js-inputmask-01');
  const maskInputsName = document.querySelectorAll('.js-inputmask-name');

  if (maskInputs.length > 0) {
    maskInputs.forEach(input => {
      var maskOptions = {
        mask: '+{38}(000)000-00-00',
        lazy: false,
      };
      var mask = IMask(input, maskOptions);
    });
  }
  //
  if (maskInputsDays.length > 0) {
    maskInputsDays.forEach(input => {
      var maskOptions = {
        mask: Number,
        lazy: false,
        min: 1,
        max: 31,
      };
      var mask = IMask(input, maskOptions);
    });
  }

  ////
  if (maskInputs01.length > 0) {
    maskInputs01.forEach(input => {
      var maskOptions = {
        mask: 'DD.MM.YYYY',
        lazy: false,
        blocks: {
          YYYY: {
            mask: IMask.MaskedRange,
            from: 2022,
            to: 2023,
          },

          MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
          },

          DD: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31,
          },
        },
      };
      var mask = IMask(input, maskOptions);
    });
  }
  //
  if (maskInputsName.length > 0) {
    maskInputsName.forEach(input => {
      var maskOptions = {
        mask: /^[а-яА-яa-zA-Z ']*$/,
        lazy: false,
      };
      var mask = IMask(input, maskOptions);
    });
  }
}

inputMask();
