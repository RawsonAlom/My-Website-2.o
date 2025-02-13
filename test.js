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

// right to left slide...
document.getElementById("Wtxt").addEventListener("click", function () {
	let Wellcome_txt = document.getElementById("Wellcome_txt");

	// Wtxt Slide Right to Left with animation
	let animation = Wellcome_txt.animate(
		[
			{
				right: "0%",
				width: "20%",
				borderTopLeftRadius: "100px",
				borderBottomLeftRadius: "100px",
				zIndex: "11",
			},
			{
				right: "0%",
				width: "100%",
				borderTopLeftRadius: "10px",
				borderBottomLeftRadius: "10px",
				zIndex: "11",
			},
			{
				right: "80%",
				width: "20%",
				borderTopRightRadius: "100px",
				borderBottomRightRadius: "100px",
				borderTopLeftRadius: "0px",
				borderBottomLeftRadius: "0px",
				zIndex: "11",
			},
		],
		{
			duration: 1000,
			fill: "forwards",
		}
	);
	// Hide after animation
	setTimeout(() => {
		Wellcome_txt.style.display = "inlineBlock";
	}, 1000);

	// Wtxt hide with animation
	let Wtxt = document.getElementById("Wtxt");

	if (Wtxt.style.display !== "none") {
		Wtxt.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 500,
			fill: "forwards",
		});
		setTimeout(() => (Wtxt.style.display = "none"), 500);
	}

	// Rtxt Show with animation
	let Rtxt = document.getElementById("Rtxt");

	if (Rtxt.style.display !== "flex") {
		Rtxt.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 1000,
			fill: "forwards",
		});
		setTimeout(() => (Rtxt.style.display = "flex"), 500);
	}

	// Rawson home hide with animation
	let Rawson_home = document.getElementById("Rawson_home");

	if (Rawson_home.style.display !== "none") {
		Rawson_home.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 1100,
			fill: "forwards",
		});
		setTimeout(() => (Rawson_home.style.display = "none"), 500);
	}

	// Wellcome home Show with animation
	let Wellcome_home = document.getElementById("Wellcome_home");

	if (Wellcome_home.style.display !== "flex") {
		Wellcome_home.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 1100,
			fill: "forwards",
		});
		setTimeout(() => (Wellcome_home.style.display = "flex"), 500);
	}

	// Wellcome home left to right slide animation
	let animation1 = Wellcome_home.animate(
		[
			{
				left: "0%",
			},
			{
				left: "20%",
			},
		],
		{
			duration: 1000,
			fill: "forwards",
		}
	);
});

// left to right slide...
document.getElementById("Rtxt").addEventListener("click", function () {
	let Wellcome_txt = document.getElementById("Wellcome_txt");

	// Wtxt Slide Left to Right with animation
	let animation = Wellcome_txt.animate(
		[
			{
				left: "0%",
				width: "20%",
				borderTopRightRadius: "100px",
				borderBottomRightRadius: "100px",
				zIndex: "11",
			},
			{
				left: "0%",
				width: "100%",
				borderTopLeftRadius: "100px",
				borderBottomLefttRadius: "100px",
				zIndex: "11",
			},
			{
				left: "80%",
				width: "20%",
				borderTopLeftRadius: "100px",
				borderBottomLeftRadius: "100px",
				borderTopRightRadius: "0px",
				borderBottomRightRadius: "0px",
				zIndex: "11",
			},
		],
		{
			duration: 1000,
			fill: "forwards",
		}
	);
	// Hide after animation
	setTimeout(() => {
		Wellcome_txt.style.display = "flex";
	}, 1000);

	// Rtxt hide with animation
	let Rtxt = document.getElementById("Rtxt");

	if (Rtxt.style.display !== "none") {
		Rtxt.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 500,
			fill: "forwards",
		});
		setTimeout(() => (Rtxt.style.display = "none"), 500);
	}

	// Wtxt Show with animation
	let Wtxt1 = document.getElementById("Wtxt1");

	if (Wtxt1.style.display !== "flex") {
		Wtxt1.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 1000,
			fill: "forwards",
		});
		setTimeout(() => (Wtxt1.style.display = "flex"), 500);
	}

	// Wellcome home hide with animation
	let Wellcome_home = document.getElementById("Wellcome_home");

	if (Wellcome_home.style.display !== "none") {
		Wellcome_home.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 1100,
			fill: "forwards",
		});
		setTimeout(() => (Wellcome_home.style.display = "none"), 500);
	}

	// Rawson home Show with animation
	let Rawson_home = document.getElementById("Rawson_home");

	if (Rawson_home.style.display !== "flex") {
		Rawson_home.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 1100,
			fill: "forwards",
		});
		setTimeout(() => (Rawson_home.style.display = "flex"), 500);
	}

	// Rawson home left to right slide animation
	let animation2 = Rawson_home.animate(
		[
			{ opacity: "0", left: "20%" },

			{ opacity: "1", left: "0%" },
		],
		{
			duration: 1000,
			fill: "forwards",
		}
	);
});

// Reload Page
document.getElementById("Wtxt1").addEventListener("click", function () {
	location.reload(); // Reloads the current page
});


// Button click to page show
/*
document.getElementById('btn_home').addEventListener('click', () => {
    const HomePage = document.getElementById('HomePage');
    HomePage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  
  document.getElementById('btn_skill').addEventListener('click', () => {
    const SkillPage = document.getElementById('SkillPage');
    SkillPage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  
  document.getElementById('btn3').addEventListener('click', () => {
    const div3 = document.getElementById('div3');
    div3.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  */