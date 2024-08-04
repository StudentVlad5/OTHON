(() => {
  const refs = {
    form: document.getElementById('form'),
  };

  refs.form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.reset();
  });

  refs.form.addEventListener(
    'invalid',
    function (e) {
      e.preventDefault();
      e.target.classList.add('invalid');
      [...e.target.form.querySelectorAll('.form__input')].forEach(elm =>
        elm.classList.add('opacity')
      );
    },
    true
  );

  refs.form.addEventListener(
    'focus',
    function (e) {
      e.preventDefault();
      [...e.target.form.querySelectorAll('.invalid')].forEach(elm =>
        elm.classList.remove('invalid')
      );
      [...e.target.form.querySelectorAll('.form__input')].forEach(elm =>
        elm.classList.remove('opacity')
      );
    },
    true
  );
})();
