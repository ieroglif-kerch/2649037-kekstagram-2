let activeModal = null;

/**
 * Закрывает активное модальное окно при нажатии клавиши Escape.
 * @param {KeyboardEvent} evt — объект события клавиатуры.
 */
function onEscKeyDown(evt) {
  if (evt.key === 'Escape' && activeModal) {
    closeModal(activeModal);
  }
}

/**
 * Открывает модальное окно:
 * удаляет класс hidden, блокирует прокрутку страницы
 * и добавляет обработчик закрытия по Esc.
 * @param {HTMLElement} modalElement — DOM‑элемент модального окна.
 */
function openModal(modalElement) {
  activeModal = modalElement;
  modalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
}

/**
 * Закрывает модальное окно:
 * добавляет класс hidden, разблокирует прокрутку
 * и удаляет обработчик закрытия по Esc.
 * @param {HTMLElement} modalElement — DOM‑элемент модального окна.
 */
function closeModal(modalElement) {
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  activeModal = null;
}

export { openModal, closeModal };
