// Typing Effect
const texts = [
	"A Passionate Programmer",
	"A Web Developer",
	"A Creative Thinker",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
	if (count === texts.length) {
		count = 0;
	}
	currentText = texts[count];
	letter = currentText.slice(0, ++index);

	document.querySelector(".typing").textContent = letter;
	if (letter.length === currentText.length) {
		count++;
		index = 0;
		setTimeout(type, 1500);
	} else {
		setTimeout(type, 100);
	}
})();

// Troggle effect Controler

function Fwellcome() {
	document.getElementById("Rawson-home").style = "display:none;";
	document.getElementById("Wellcome-txt").style = "display:none;";
	document.getElementById("Rawson-txt").style =
		"display:flex;background-color: rgb(0, 255, 255);width: 20%;height: 582px;border-top-right-radius: 100px;border-bottom-right-radius: 100px;justify-content: center;align-items: center;";
	document.getElementById("Wellcome-home").style =
		"display: flex;width: 80%;height: 582px;border-top-right-radius: 10px;border-bottom-right-radius: 10px;border-top-left-radius: 150px;border-bottom-left-radius: 150px;align-items: center;justify-content: center;flex-direction: column;background-color: rgb(234, 234, 234);";
}

function Frawson() {
	document.getElementById("Rawson-home").style =
		"display:flex;width: 80%;height: 590px;border-top-right-radius: 10px;border-bottom-right-radius: 10px;border-top-left-radius: 300px;align-items: center;justify-content: center;flex-direction: column;";
	document.getElementById("Wellcome-txt").style =
		"display:flex;background-color: aqua;width: 20%;height: 582px;border-top-left-radius: 100px;border-bottom-left-radius: 100px;justify-content: center;align-items: center;";
	document.getElementById("Rawson-txt").style = "display:none;";
	document.getElementById("Wellcome-home").style = "display:none;";
}

/*
// Home Page Hover Controler

let x = (document.getElementById("Rawson-txt").innerHTML = myFunction());

function Fwellcome() {
	document.getElementById("Wellcome-txt").style = "display: none;";
	document.getElementById("Rawson-txt").style =
		"display: flex; background-color: rgb(0, 255, 255);width: 20%;height: 100px;height: 590px;border-top-right-radius: 100px;border-bottom-right-radius: 100px;justify-content: center;align-items: center;";
	document.getElementById("Wellcome-home").style = "display: flex;";
	document.getElementById("Rawson-home").style =
		"display: none;width: 80%;height: 590px;border-top-right-radius: 10px;border-bottom-right-radius: 10px;border-top-left-radius: 150px;border-bottom-left-radius: 150px;align-items: center;justify-center;flex-direction: column;background-color: rgb(234, 234, 234);";
}
*/
