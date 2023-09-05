


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	modal();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}



$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})



$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})



function accordion(title, content) {

	let accordionTitle = $(title),
		accordionContent = $(content);
	$(accordionContent).hide();
	
	$(accordionTitle).on('click', function () {
		let $this = $(this);
		$this.parent().toggleClass('active_mod').siblings().removeClass('active_mod');
		$(accordionContent).slideUp();

		if (!$this.next().is(":visible")) {
			$this.next().slideDown();
		}
	});
};

accordion('.services_item_head', '.services_item_bottom');


const pagination = ['1', '2', '3', '4', '5']

const stepSlider = new Swiper('.know_slider', {
	spaceBetween: 100,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (pagination[index]) + '</span>';
			},
	},
})




function modal() {
	let popup = document.querySelectorAll('.popup')
	let btnArray = document.querySelectorAll('.trigger')
	
	btnArray.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			let path = e.currentTarget.dataset.target
			
			popup.forEach((el) => {
				if(el.dataset.id == path) {
					isOpen(el)
				}
			})
			
		})
	})
	

	popup.forEach((pop) => {
		let remove = pop.querySelectorAll('.remove')
		remove.forEach(el => {
			el.addEventListener('click', (e) => {
				isRemove(pop);
			})
		});
	})
	fileInputName();
}



function isOpen(popup) {
	document.body.classList.add('fixed')
	popup.classList.add('active')
}

function isRemove(popup) {
	popup.classList.remove('active')
	document.body.classList.remove('fixed')
}


function fileInputName() {
		let input = document.querySelector('#my-file')
		let totalName = document.querySelector('.file_return')
		let pattern = /((?:.(?!\(\d+\)))+.)(?:\(\d+\))?\..+/

		document.addEventListener('change', () => {
			totalName.innerHTML = input.files[0].name.match(pattern)[1]
		})
}
































