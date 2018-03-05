const colors = [
	'#ffffff',
	'#fefffe',
	'#fdfffd',
	'#fcfffc',
];
let id = 0;


function main() {
	console.log('Hello');
	showSlide(id);
	document.addEventListener('keydown', (event) => {
		if(event.key === 'ArrowRight') {
			id++;
		} else if (event.key === 'ArrowLeft') {
			id--;
		}
		id = Math.max(0, Math.min(id, document.getElementsByClassName('slide').length-1));
		showSlide(id);
	});
}


function hideSlides() {
	let slides = document.getElementsByClassName('slide');
	for(let i = 0 ; i < slides.length ; i++) {
		slides[i].style.display = 'none';
	};
}


function showSlide(id) {
	//hideSlides();
	document.getElementsByClassName('slide')[id].style.display = 'flex';
	document.getElementsByClassName('slide')[id].style.backgroundColor = colors[id];
}


function autorun() {
	main();
}


if (document.addEventListener) {
	document.addEventListener('DOMContentLoaded', autorun, false);
}
else if (document.attachEvent) {
	document.attachEvent('onreadystatechange', autorun);
}
else {
	window.onload = autorun;
}
