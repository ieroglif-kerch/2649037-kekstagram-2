
const bigPictureContainer = document.querySelector('.big-picture');
const buttonClose = document.querySelector('.big-picture__cancel');

const closeContainer = () => {
  bigPictureContainer.classList.toggle('hidden');
  document.body.classList.toggle('modal-open');
  document.removeEventListener('keydown', onESC);
};

function onESC (evt) {
  if(evt.key === 'Escape'){
    closeContainer();
  }
}

const drawBigPicture = function (pictureData){
  bigPictureContainer.classList.toggle('hidden');
  //заполняем данными
  bigPictureContainer.querySelector('.big-picture__img img').src = pictureData.url;
  bigPictureContainer.querySelector('.likes-count').textContent = pictureData.likes;
  bigPictureContainer.querySelector('.social__caption').textContent = pictureData.description;
  // need also social__comment-shown-count
  bigPictureContainer.querySelector('.social__comment-total-count').textContent = pictureData.comments.length;

  //скрываем по заданию
  bigPictureContainer.querySelector('.social__comment-count').classList.add('hidden');
  bigPictureContainer.querySelector('.comments-loader').classList.add('hidden');

  //убираем прокрутку
  document.body.classList.toggle('modal-open');

  //добавляем событие на документ
  document.addEventListener('keydown', onESC);
};

buttonClose.addEventListener('click', closeContainer);

export {drawBigPicture};
