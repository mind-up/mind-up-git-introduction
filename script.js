const colors = [
	"#ffffff",
	"#fefffe",
	"#fdfffd",
	"#fcfffc",
	"#fbfffb",
	"#fafffa",
	"#f9fff9",
	"#f8fff8",
	"#f7fff7",
	"#f6fff6",
	"#f5fff5",
	"#f4fff4",
	"#f3fff3",
	"#f2fff2",
	"#f1fff1",
	"#f0fff0",
	"#efffef",
	"#eeffee",
	"#edffed",
	"#ecffec",
	"#ebffeb",
	"#eaffea",
	"#e9ffe9",
	"#e8ffe8",
	"#e7ffe7",
	"#e6ffe6",
	"#e5ffe5",
	"#e4ffe4",
	"#e3ffe3",
	"#e2ffe2",
	"#e1ffe1",
	"#e0ffe0",
	"#dfffdf",
	"#deffde",
	"#ddffdd",
	"#dcffdc",
	"#dbffdb",
	"#daffda",
	"#d9ffd9",
	"#d8ffd8",
	"#d7ffd7",
	"#d6ffd6",
	"#d5ffd5",
	"#d4ffd4",
	"#d3ffd3",
	"#d2ffd2",
	"#d1ffd1",
	"#d0ffd0",
	"#cfffcf",
	"#ceffce",
	"#cdffcd",
	"#ccffcc",
	"#cbffcb",
	"#caffca",
	"#c9ffc9",
	"#c8ffc8",
	"#c7ffc7",
	"#c6ffc6",
	"#c5ffc5",
	"#c4ffc4",
	"#c3ffc3",
	"#c2ffc2",
	"#c1ffc1",
	"#c0ffc0",
	"#bfffbf",
	"#beffbe",
	"#bdffbd",
	"#bcffbc",
	"#bbffbb",
	"#baffba",
	"#b9ffb9",
	"#b8ffb8",
	"#b7ffb7",
	"#b6ffb6",
	"#b5ffb5",
	"#b4ffb4",
	"#b3ffb3",
	"#b2ffb2",
	"#b1ffb1",
	"#b0ffb0",
	"#afffaf",
	"#aeffae",
	"#adffad",
	"#acffac",
	"#abffab",
	"#aaffaa",
	"#a9ffa9",
	"#a8ffa8",
	"#a7ffa7",
	"#a6ffa6",
	"#a5ffa5",
	"#a4ffa4",
	"#a3ffa3",
	"#a2ffa2",
	"#a1ffa1",
	"#a0ffa0",
	"#9fff9f",
	"#9eff9e",
	"#9dff9d",
	"#9cff9c",
	"#9bff9b",
	"#9aff9a",
	"#99ff99",
	"#98ff98",
	"#97ff97",
	"#96ff96",
	"#95ff95",
	"#94ff94",
	"#93ff93",
	"#92ff92",
	"#91ff91",
	"#90ff90",
	"#8fff8f",
	"#8eff8e",
	"#8dff8d",
	"#8cff8c",
	"#8bff8b",
	"#8aff8a",
	"#89ff89",
	"#88ff88",
	"#87ff87",
	"#86ff86",
	"#85ff85",
	"#84ff84",
	"#83ff83",
	"#82ff82",
	"#81ff81",
	"#80ff80",
	"#7fff7f",
	"#7eff7e",
	"#7dff7d",
	"#7cff7c",
	"#7bff7b",
	"#7aff7a",
	"#79ff79",
	"#78ff78",
	"#77ff77",
	"#76ff76",
	"#75ff75",
	"#74ff74",
	"#73ff73",
	"#72ff72",
	"#71ff71",
	"#70ff70",
	"#6fff6f",
	"#6eff6e",
	"#6dff6d",
	"#6cff6c",
	"#6bff6b",
	"#6aff6a",
	"#69ff69",
	"#68ff68",
	"#67ff67",
	"#66ff66",
	"#65ff65",
	"#64ff64",
	"#63ff63",
	"#62ff62",
	"#61ff61",
	"#60ff60",
	"#5fff5f",
	"#5eff5e",
	"#5dff5d",
	"#5cff5c",
	"#5bff5b",
	"#5aff5a",
	"#59ff59",
	"#58ff58",
	"#57ff57",
	"#56ff56",
	"#55ff55",
	"#54ff54",
	"#53ff53",
	"#52ff52",
	"#51ff51",
	"#50ff50",
	"#4fff4f",
	"#4eff4e",
	"#4dff4d",
	"#4cff4c",
	"#4bff4b",
	"#4aff4a",
	"#49ff49",
	"#48ff48",
	"#47ff47",
	"#46ff46",
	"#45ff45",
	"#44ff44",
	"#43ff43",
	"#42ff42",
	"#41ff41",
	"#40ff40",
	"#3fff3f",
	"#3eff3e",
	"#3dff3d",
	"#3cff3c",
	"#3bff3b",
	"#3aff3a",
	"#39ff39",
	"#38ff38",
	"#37ff37",
	"#36ff36",
	"#35ff35",
	"#34ff34",
	"#33ff33",
	"#32ff32",
	"#31ff31",
	"#30ff30",
	"#2fff2f",
	"#2eff2e",
	"#2dff2d",
	"#2cff2c",
	"#2bff2b",
	"#2aff2a",
	"#29ff29",
	"#28ff28",
	"#27ff27",
	"#26ff26",
	"#25ff25",
	"#24ff24",
	"#23ff23",
	"#22ff22",
	"#21ff21",
	"#20ff20",
	"#1fff1f",
	"#1eff1e",
	"#1dff1d",
	"#1cff1c",
	"#1bff1b",
	"#1aff1a",
	"#19ff19",
	"#18ff18",
	"#17ff17",
	"#16ff16",
	"#15ff15",
	"#14ff14",
	"#13ff13",
	"#12ff12",
	"#11ff11",
	"#10ff10",
	"#0fff0f",
	"#0eff0e",
	"#0dff0d",
	"#0cff0c",
	"#0bff0b",
	"#0aff0a",
	"#09ff09",
	"#08ff08",
	"#07ff07",
	"#06ff06",
	"#05ff05",
	"#04ff04",
	"#03ff03",
	"#02ff02",
	"#01ff01",
	"#00ff00"
];
const url = 'https://api.github.com/repos/mind-up/mind-up-git-introduction/forks';
const intervalMerci = 1000;
let id = 0;
let merciId = -1;


function main() {
	console.log('Hello');
	showSlide(id);
	document.addEventListener('keydown', (event) => {
		if(event.key === 'ArrowRight') {
			id++;
		} else if (event.key === 'ArrowLeft') {
			id--;
		} else {
			return;
		}
		const go = (id >= 0 && id < document.getElementsByClassName('slide').length);
		id = Math.max(0, Math.min(id, document.getElementsByClassName('slide').length-1));
		if(go) {
			showSlide(id);
		}
	});
}


function hideSlides() {
	let slides = document.getElementsByClassName('slide');
	merciId = slides.length - 1;
	for(let i = 0 ; i < slides.length ; i++) {
		slides[i].style.display = 'none';
	};
}


function showSlide(id) {
	hideSlides();
	document.getElementsByClassName('slide')[id].style.display = 'flex';
	document.getElementsByClassName('slide')[id].style.backgroundColor = colors[id % colors.length];
	document.getElementsByClassName('slide')[id].style.backgroundColor = colors[id];
	if(id === merciId) {
		merci();
	}
}


function httpGetAsync(theUrl, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText);
	}
	xmlHttp.open("GET", theUrl, true);
	xmlHttp.send(null);
}


function merci() {
	console.log('merci');
	document.getElementById('merci').innerHTML = '';
	httpGetAsync(url, function(result) {
		merciNext(JSON.parse(result));
	});
}


function merciNext(forks) {
	if(forks.length) {
		setTimeout(function() {
			const fork = forks.pop();
			console.log('Merci', fork.owner.login);
			let div = document.createElement('div');
			div.className = 'login';
			const rand = Math.floor(Math.random() * Math.floor(2));
			const r = String.fromCharCode(rand === 0 ? '0'.charCodeAt() : Math.floor(Math.random() * Math.floor(5)) + 'a'.charCodeAt() );
			const g = String.fromCharCode(rand === 1 ? '0'.charCodeAt() : Math.floor(Math.random() * Math.floor(5)) + 'a'.charCodeAt() );
			const b = String.fromCharCode(rand === 2 ? '0'.charCodeAt() : Math.floor(Math.random() * Math.floor(5)) + 'a'.charCodeAt() );
			div.innerHTML = `
				<p>Merci <span style="color:#${r}${g}${b}">${fork.owner.login}</span></p>
			`;
			document.getElementById('merci').prepend(div);
			merciNext(forks);
		}, intervalMerci);
	}
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
