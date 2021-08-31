/* ======= MENU SHOW & HIDDEN =======*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

/* MENU SHOW */
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}

/* MENU HIDDEN */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	/* мб, убрать константу, тк она уже объявлена? */
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* === ACCORDION SKILLS === */
const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach((item) => {
	const accordionHeader = item.querySelector('.accordion__header')

	accordionHeader.addEventListener('click', () => {
		const openItem = document.querySelector('.accordion-open')

		toggleItem(item)

		if (openItem && openItem !== item) {
			toggleItem(openItem)
		}
	})
})

const toggleItem = (item) => {
	const accordionContent = item.querySelector('.accordion__content')

	if (item.classList.contains('accordion-open')) {
		accordionContent.removeAttribute('style')
		item.classList.remove('accordion-open')
	} else {
		accordionContent.style.height = accordionContent.scrollHeight + 'px'
		item.classList.add('accordion-open')
	}
}


/* === SERVICES MODAL === */
const modalViews = document.querySelectorAll('.services__modal'),
	modalBtns = document.querySelectorAll('.services__button'),
	modalClose = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
	modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i)
	})
})

modalClose.forEach((modalClose) => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach((modalView) => {
			modalView.classList.remove('active-modal')
		})
	})
})

/* === PORTFOLIO SWIPER === */
let swiper = new Swiper(".portfolio__container", {
	cssMode: true,
	loop: true,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});