
const 	navLinks = document.querySelectorAll('.nav__link'),
		navList = document.querySelector('.nav__list'),
		menuBtn = document.querySelector('.menu__btn'),
		mobileMenu = document.querySelector('.menu__btn span'),
		header = document.querySelector('.header__inner'),
		arrowUp = document.querySelector('.arrow__up');

$(window).scroll(function(){
	if ($(this).scrollTop() > 50){
		$(header).addClass('fixed');
	}
	else if ($(this).scrollTop() < 50){
		$(header).removeClass('fixed');
	}
});

$(window).scroll( function() {
	if ($(this).scrollTop() > header.clientHeight){
		$(arrowUp).addClass('arrow__fixed');
	}
	else if ($(this).scrollTop() < header.clientHeight){
		$(arrowUp).removeClass('arrow__fixed');
	}
});

menuBtn.addEventListener('click', () => {
	navList.classList.toggle('show');
});

function activeLink() {
	navLinks.forEach(navLink => {
		navLink.addEventListener('click', function() {
			for (let i = 0; i < navLinks.length; i++) {
				navLinks[i].classList.remove('active'); 
			}
			this.classList.add('active');
		});
	});
}

activeLink();


window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

if (window.innerWidth > 768) {
	document.querySelectorAll('.section').forEach((el, i) => {
	if (el.offsetTop - document.querySelector('.header__promo').clientHeight  <= scrollDistance) {
		console.log(el.offsetTop);
		document.querySelectorAll('.nav a').forEach((el) => {
		if (el.classList.contains('active')) {
			el.classList.remove('active');
		}
		});

		document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
		
		}
	});
	}
});


// scroll smooth

{
	const scrollLinks = document.querySelectorAll('.scroll-link');

	for (const scrollLink of scrollLinks) {
		scrollLink.addEventListener('click', event => {
			event.preventDefault();
			const id = scrollLink.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}
}
