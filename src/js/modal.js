(() => {
  const refs = {
    modal: document.getElementById('notification'),
    form: document.getElementById('form'),
  };

  refs.form.addEventListener('submit', openModal);

  async function openModal(e) {
    e.preventDefault();
    refs.modal.classList.remove('is-hidden');
    setTimeout(() => {
      closeModal();
    }, 1000);
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
  }
})();
