// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/node_modules/slick-carousel/slick/slick.js'

document.addEventListener('DOMContentLoaded', () => {

	$(document).ready(function () {
		$('.slider__items').slick({

		})
	})

	$(document).ready(function () {
		$('.works__slider').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: false,
			arrows: false
		})
	})


})
