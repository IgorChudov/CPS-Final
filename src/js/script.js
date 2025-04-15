// кнопки
const btnBurger = document.querySelector('.menu-button__burger');
const btnBurgerClose = document.querySelector('.menu-button__close');
const btnCall = document.querySelectorAll('.menu-button__call');
const btnMessage = document.querySelectorAll('.menu-button__chat');
const btnCallClose = document.querySelector('.modal-call__btn-close');
const btnMessageClose = document.querySelector('.modal-message__btn-close');
const body = document.querySelector('body');
const veil = document.querySelector('.page-container__veil');
const aboutControl = document.querySelector('.about__control');
const brandControl = document.querySelector('.brand-control');
const repairControl = document.querySelector('.repair-control');

// блоки
const dropdown = document.querySelector('.dropdown');
const modalCall = document.querySelector('.modal-call');
const modalMessage = document.querySelector('.modal-message');
const hiddenText = document.querySelector('.about-text-section');
const btnMoreInfoAbout = document.querySelector('.about__control');
const moreInfoTextAbout = document.querySelector('.about__control-name');
const arrowAbout = document.querySelector('.about__control-icon');
const hiddenTextAbout = document.querySelector('.about-text-section__hidden');
const arrowBrand = document.querySelector('.brand__control-icon');
const brandText = document.querySelector('.brand__control-name');
const brandWrap = document.querySelector('.brand-card-desktop-wrap');
const repairWrap = document.querySelector('.repair-card-desktop-wrap');
const repairText = document.querySelector('.repair__control-name');
const repairArrow = document.querySelector('.brand__control-icon');
const bodyMain = document.querySelector('body');

btnBurger.addEventListener('click', function () {
	dropdown.classList.add('dropdown-container__active');
	veil.classList.add('page-container__veil--active');
	bodyMain.classList.add('overflow-block');
});

btnBurgerClose.addEventListener('click', function () {
	dropdown.classList.remove('dropdown-container__active');
	veil.classList.remove('page-container__veil--active');
	bodyMain.classList.remove('overflow-block');
});

for(let call of btnCall){
  call.addEventListener('click', function () {
    if (!modalCall.classList.contains('modal-call__active')) {
      modalCall.classList.add('modal-call__active');
      veil.classList.add('page-container__veil--active');
      bodyMain.classList.add('overflow-block');
      modalMessage.classList.remove('modal-message__active');
    } else {
      modalCall.classList.remove('modal-call__active');
      veil.classList.remove('page-container__veil--active');
      bodyMain.classList.remove('overflow-block');
    }
  });
}

btnCallClose.addEventListener('click', function () {
	modalCall.classList.remove('modal-call__active');
	veil.classList.remove('page-container__veil--active');
	bodyMain.classList.remove('overflow-block');
});

for(let message of btnMessage){
  message.addEventListener('click', function () {
    if (!modalMessage.classList.contains('modal-message__active')) {
      modalMessage.classList.add('modal-message__active');
      veil.classList.add('page-container__veil--active');
      bodyMain.classList.add('overflow-block');
      modalCall.classList.remove('modal-call__active');
    } else {
      modalMessage.classList.remove('modal-message__active');
      veil.classList.remove('page-container__veil--active');
      bodyMain.classList.remove('overflow-block');
    }
  });
}

btnMessageClose.addEventListener('click', function () {
	modalMessage.classList.remove('modal-message__active');
	veil.classList.remove('page-container__veil--active');
	bodyMain.classList.remove('overflow-block');
});

veil.addEventListener('click', function () {
	dropdown.classList.remove('dropdown-container__active');
	modalCall.classList.remove('modal-call__active');
	modalMessage.classList.remove('modal-message__active');
	veil.classList.remove('page-container__veil--active');
	bodyMain.classList.remove('overflow-block');
});

aboutControl.addEventListener('click', function () {
	if (!hiddenText.classList.contains('about-text-section--active')) {
		hiddenText.classList.add('about-text-section--active');
		hiddenTextAbout.classList.add('about-text-section__hidden--active');
		arrowAbout.style.transform = 'rotate(180deg)';
		moreInfoTextAbout.innerText = 'Скрыть';
	} else {
		arrowAbout.style.transform = 'rotate(0deg)';
		moreInfoTextAbout.innerText = 'Читать далее';
		hiddenText.classList.remove('about-text-section--active');
		hiddenTextAbout.classList.remove('about-text-section__hidden--active');
	}
});

brandControl.addEventListener('click', function () {
	if (!brandWrap.classList.contains('brand-card-wrap--active')) {
		brandWrap.classList.add('brand-card-wrap--active');
		arrowBrand.style.transform = 'rotate(180deg)';
		brandText.innerText = 'Скрыть';
	} else {
		arrowBrand.style.transform = 'rotate(0deg)';
		brandText.innerText = 'Показать все';
		brandWrap.classList.remove('brand-card-wrap--active');
	}
});

repairControl.addEventListener('click', function () {
	if (!repairWrap.classList.contains('repair-card-wrap--active')) {
		repairWrap.classList.add('repair-card-wrap--active');
		repairArrow.style.transform = 'rotate(180deg)';
		repairText.innerText = 'Скрыть';
	} else {
		repairArrow.style.transform = 'rotate(0deg)';
		repairText.innerText = 'Показать все';
		repairWrap.classList.remove('repair-card-wrap--active');
	}
});

window.addEventListener('DOMContentLoaded', function () {
	if (window.innerWidth < 768) {

		new Swiper(document.querySelector('.brand-slider'), {
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			initialSlide: 0,
			slidesPerView: 1.2,
			loop: true,
			autoplay: {
				delay: 4000,
				stopOnLastSlide: true,
				disableOnInteraction: false
			}
    });

		new Swiper('.repair-slider', {
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			initialSlide: 0,
			slidesPerView: 1.16,
			loop: true,
			autoplay: {
				delay: 3000,
				stopOnLastSlide: true,
				disableOnInteraction: false
			}
		});

		new Swiper('.price-slider', {
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			initialSlide: 0,
			slidesPerView: 1.16,
			loop: true,
			autoplay: {
				delay: 2000,
				stopOnLastSlide: true,
				disableOnInteraction: false
			}
		});
	}
});
