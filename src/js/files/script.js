// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// птичка в хедере
const birdElem = document.querySelector('.phones__arrow');
const subList = document.querySelector('.phones__sublist');
birdElem.addEventListener("click", function (e) {
	subList.classList.toggle('open')
	birdElem.classList.toggle('active');
});

//бургер
const burger = document.querySelector('.icon-menu');
const elemMunu = document.querySelector('.menu__body');
burger.addEventListener("click", function (e) {
	elemMunu.classList.toggle('active')
});

//рулетка
let wrap = document.querySelector('.roulette__container');
let btn = document.getElementById('roulette__spin');
let number = Math.random() * 2000;
btn.onclick = function () {
	wrap.style.transform = "rotate(" + number + 360 + "deg)";
	number += Math.random() * 2000;
}

//слвйдер "Наши специалисты"
if (document.querySelector('.slider-people__slider')) {
	var swiper = new Swiper('.slider-people__slider', {
		loop: true,
		slidesPerView: 4,
		slidesPerGroup: 1,
		speed: 1000,
		pagination: {
			el: '.slider-people__pagination',
			type: 'fraction',
			formatFractionCurrent: function (number) { // 01 / 04
				return ('0' + number).slice(-2);
			},
			formatFractionTotal: function (number) {
				return ('0' + number).slice(-2);
			},
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
			}
		},
		navigation: {
			nextEl: '.slider-people__next',
			prevEl: '.slider-people__prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 15,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
	});
}

// слайдер "карточки товаров"
if (document.querySelector('.cart__slider')) {
	var swiper = new Swiper('.cart__slider', {
		loop: true,
		slidesPerView: 4,
		speed: 1000,
		centeredSlides: true,
		navigation: {
			nextEl: '.cart-slider__next',
			prevEl: '.cart-slider__prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
				autoHeight: true,
			},
			468: {
				slidesPerView: 1.5,
				spaceBetween: 15,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});
}

// слайдер Видео
if (document.querySelector('.video-gallery__slider')) {
	var swiper = new Swiper('.video-gallery__slider', {
		loop: true,
		slidesPerView: 3,
		slidesPerGroup: 1,
		centeredSlides: true,
		speed: 1000,
		pagination: {
			el: '.video-gallery__pagination',
			type: 'fraction',
			formatFractionCurrent: function (number) { // 01 / 04
				return ('0' + number).slice(-2);
			},
			formatFractionTotal: function (number) {
				return ('0' + number).slice(-2);
			},
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
			}
		},
		navigation: {
			nextEl: '.video-gallery__next',
			prevEl: '.video-gallery__prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
				autoHeight: true,
			},
			468: {
				slidesPerView: 1.5,
				spaceBetween: 15,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});
}

// слайдер сертификаты (пока, думаю, не нужен)
// const sertificationItems = document.querySelectorAll('.sertification__item');
// if (document.querySelector('.sertification__slider')) {
// 	var swiper = new Swiper('.sertification__slider', {
// 		// loop: true,
// 		slidesPerView: 3,
// 		watchOverflow: true,
// 		slidesPerGroup: 1,
// 		speed: 1000,
// 		pagination: {
// 			el: '.sertification__pagination',
// 			type: 'fraction',
// 			formatFractionCurrent: function (number) { // 01 / 04
// 				return ('0' + number).slice(-2);
// 			},
// 			formatFractionTotal: function (number) {
// 				return ('0' + number).slice(-2);
// 			},
// 			renderFraction: function (currentClass, totalClass) {
// 				return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
// 			}
// 		},
// 		navigation: {
// 			nextEl: '.sertification__next',
// 			prevEl: '.sertification__prev',
// 		},
// 		breakpoints: {
// 			320: {
// 				spaceBetween: 10,
// 				autoHeight: true,
// 				slidesPerView: 3,
// 			},
// 			768: {
// 				spaceBetween: 15,
// 				slidesPerView: 3,
// 			},
// 			992: {
// 				spaceBetween: 20,
// 				slidesPerView: 3,
// 			},
// 			1268: {
// 				spaceBetween: 30,
// 				slidesPerView: 3,
// 			},
// 		},
// 	});
// }

// слайдер отзывы
if (document.querySelector('.fitback__slider')) {
	var swiper = new Swiper('.fitback__slider', {
		loop: true,
		slidesPerView: 3,
		slidesPerGroup: 1,
		speed: 1000,
		centeredSlides: true,
		pagination: {
			el: '.fitback__pagination',
			type: 'fraction',
			formatFractionCurrent: function (number) { // 01 / 04
				return ('0' + number).slice(-2);
			},
			formatFractionTotal: function (number) {
				return ('0' + number).slice(-2);
			},
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
			}
		},
		navigation: {
			nextEl: '.fitback__next',
			prevEl: '.fitback__prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
				autoHeight: true,
			},
			468: {
				slidesPerView: 1.5,
				spaceBetween: 15,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});
}

// // popup Оставить отзыв
// const popupFitbackOpen = document.querySelector('.popup-fitback-open');
// const popupFitback = document.querySelector('.popup-fitback');
// const popupClose = document.querySelector('.popup__close');

// popupFitbackOpen.addEventListener("click", function (e) {
// 	popupFitback.classList.add('popup_show')
// });

// popupClose.addEventListener("click", function (e) {
// 	popupFitback.classList.remove('popup_show');
// });


