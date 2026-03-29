import { openModal, closeModal } from './modal.js';

const uploadForm = document.querySelector('.img-upload__form');
const fileInput = uploadForm.querySelector('.img-upload__input');
const overlay = uploadForm.querySelector('.img-upload__overlay');
const uploadButtonCancel = uploadForm.querySelector('.img-upload__cancel ');

const pristine = new Pristine (uploadForm, {
  classTo: ''
}

fileInput.addEventListener('change', () =>{
  openModal(overlay);
});

uploadButtonCancel.addEventListener('click', () => {
  fileInput.value = '';
  closeModal(overlay);

});
