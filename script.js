const slides = document.querySelectorAll('.slide__img'),
	prev = document.querySelector('.arrow-left'),
	next = document.querySelector('.arrow-right');
let slideIndex = 1;

showSlides(slideIndex);

function showSlides (n) {
	if (n > slides.length) {
		slideIndex = slides.length;
	}

	if (n < 1) {
		slideIndex = 1;
	}

	slides.forEach(item => item.style.display = "none");

	slides[slideIndex - 1].style.display = "block";

};

function plusSlides(n) {
	showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
	plusSlides(-1);
});

next.addEventListener('click', () => {
	plusSlides(1);
});
//form

const submitForm = document.querySelectorAll('.form__input');
const submitBtn = document.querySelector('.form__btn');
const form = document.querySelector('.form-register');




form.addEventListener('submit', (e) => {
	if (form == "") {
		alert('Ошибка!');
	} else {
		alert('Форма отправлена!');
	}
	e.preventDefault();
	console.log(submitForm[0].value, submitForm[1].value, submitForm[2].value);
	form.reset();
});
//coding 

let n = 267;

document.write(reverseBits(n));
    function reverseBits(n) {
        let reverse = 0;
        while (n > 0) {
            reverse <<= 1;
            if ((n & 1) == 1)
				reverse ^= 1;
            n >>= 1;
        }
        return reverse;
    }
 
 