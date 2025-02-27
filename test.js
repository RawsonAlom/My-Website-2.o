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

// Qulity Button for web...
const bars1 = document.getElementById("bars1");

bars1.addEventListener("click", function () {
	bars1.classList.toggle("active");
});

/*NavBar Start*/

/*Bars Design Start*/
const bars = document.querySelector(".particle-bars");

// Particle Explosion Effect
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
	constructor(x, y, size, color, velocity) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.color = color;
		this.velocity = velocity;
	}

	update() {
		this.x += this.velocity.x;
		this.y += this.velocity.y;
		this.size *= 0.96;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fillStyle = this.color;
		ctx.fill();
	}
}

// Create Particle Explosion
function createParticles(x, y) {
	const colors = ["#00ffff", "#ff00ff", "#ffff00", "#ff6600"];
	for (let i = 0; i < 15; i++) {
		let size = Math.random() * 6 + 2;
		let velocity = {
			x: (Math.random() - 0.5) * 4,
			y: (Math.random() - 0.5) * 4,
		};
		let color = colors[Math.floor(Math.random() * colors.length)];
		particlesArray.push(new Particle(x, y, size, color, velocity));
	}
}

// Animate Particles
function animateParticles() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	particlesArray.forEach((particle, index) => {
		particle.update();
		particle.draw();
		if (particle.size < 0.5) {
			particlesArray.splice(index, 1);
		}
	});
	requestAnimationFrame(animateParticles);
}

// Resize Canvas
window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

// Trigger Particle Explosion on Hover
bars.addEventListener("mouseenter", (event) => {
	const rect = bars.getBoundingClientRect();
	const x = rect.left + rect.width / 2;
	const y = rect.top + rect.height / 2;
	createParticles(x, y);
});

// Start Animation
animateParticles();

/*Bars Design End*/

document.getElementById("show_mbna").addEventListener("click", function () {
	let mbna = document.getElementById("mbna");

	// NavBar দেখানো হবে এবং স্লাইড ইন হবে
	mbna.style.display = "flex";
	setTimeout(() => {
		mbna.style.transform = "translateX(0)";
	}, 100);

	// ধাপে ধাপে child div গুলো অ্যানিমেশন করবে
	let children = document.querySelectorAll("#mbna_boxes .mbna1");
	children.forEach((div, index) => {
		setTimeout(() => {
			div.style.opacity = "1";
			div.style.transform = "skewX(20deg)";
		}, (index + 2) * 200); // Customize animation Speed...
	});

	// Click event bubbling থামানোর জন্য
	event.stopPropagation();
});

// mbna এর বাইরে ক্লিক করলে hide করে দিবে
document.addEventListener("click", function (event) {
	let mbna = document.getElementById("mbna");

	// যদি ক্লিক করা যায়গাটি mbna বা তার ভিতরের কিছু না হয়, তাহলে hide করো
	if (!mbna.contains(event.target) && event.target.id !== "showDivA") {
		mbna.style.transform = "translateX(-100%)"; // আবার লুকানোর জন্য
		mbna.style.display = "none";
	}
});

/*NavBar End*/

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
				zIndex: "6",
			},
			{
				right: "0%",
				width: "100%",
				borderTopLeftRadius: "10px",
				borderBottomLeftRadius: "10px",
				zIndex: "6",
			},
			{
				right: "80%",
				width: "20%",
				borderTopRightRadius: "100px",
				borderBottomRightRadius: "100px",
				borderTopLeftRadius: "0px",
				borderBottomLeftRadius: "0px",
				zIndex: "6",
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
				zIndex: "6",
			},
			{
				left: "0%",
				width: "100%",
				borderTopLeftRadius: "100px",
				borderBottomLefttRadius: "100px",
				zIndex: "6",
			},
			{
				left: "80%",
				width: "20%",
				borderTopLeftRadius: "100px",
				borderBottomLeftRadius: "100px",
				borderTopRightRadius: "0px",
				borderBottomRightRadius: "0px",
				zIndex: "6",
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
document.getElementById("btn_home").addEventListener("click", () => {
	const HomePage = document.getElementById("HomePage");
	HomePage.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("btn_skill").addEventListener("click", () => {
	const SkillPage = document.getElementById("SkillPage");
	SkillPage.scrollIntoView({ behavior: "smooth", block: "center" });
});

let ticking = false; // Prevent multiple redundant calls

window.addEventListener("scroll", () => {
	if (!ticking) {
		requestAnimationFrame(() => {
			updateScrollEffects();
			ticking = false;
		});
		ticking = true;
	}
});

function updateScrollEffects() {
	const scrollPosition = window.scrollY;

	if (scrollPosition > 50) {
		targetDiv.style.boxShadow = "5px 5px 15px 1px rgba(27, 27, 27, 0.7)";
		targetDiv.style.top = "0";
		quality_box.style.top = "0";
		quality_box.style.boxShadow =
			"0px 1px 15px rgba(27, 27, 27, 0.7)"; /* Subtle shadow */
		show_mbna.style.marginTop = "5px";
	} else {
		targetDiv.style.boxShadow = "0.5px 2px 10px rgba(27, 27, 27, 0.7)";
		targetDiv.style.top = "10px";
		quality_box.style.top = "5px";
		quality_box.style.boxShadow =
			"0px 1px 15px rgba(27, 27, 27, 0.7)"; /* Subtle shadow */
		show_mbna.style.marginTop = "10px";
	}
}

// Light Trail Effect
document.addEventListener("mousemove", (e) => {
	let trail = document.createElement("div");
	trail.classList.add("light-trail");
	document.body.appendChild(trail);

	trail.style.left = `${e.pageX}px`;
	trail.style.top = `${e.pageY}px`;

	setTimeout(() => {
		trail.remove();
	}, 500);
});

// AI-btn Press Effect...
document.getElementById("ai_btn").addEventListener("click", function () {
	// Rawson home hide with animation
	let Rawson_home = document.getElementById("Rawson_home");
	let ai_btn = document.getElementById("ai_btn");
	let ai_btn1 = document.getElementById("ai_btn1");

	if (Rawson_home.style.display !== "none") {
		Rawson_home.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 1100,
			fill: "forwards",
		});
		setTimeout(() => (Rawson_home.style.display = "none"), 500),
			(ai_btn.style.display = "none");
	}

	// Wellcome home Show with animation
	let Wellcome_home = document.getElementById("Wellcome_home");

	if (Wellcome_home.style.display !== "flex") {
		Wellcome_home.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 1100,
			fill: "forwards",
		});
		setTimeout(
			() => (Wellcome_home.style.display = "flex"),
			(ai_btn1.style.display = "flex"),
			500
		);
	}
});

// AI-btn1 Press Effect...
document.getElementById("ai_btn1").addEventListener("click", function () {
	// Rawson home hide with animation
	let Wellcome_home = document.getElementById("Wellcome_home");
	let ai_btn = document.getElementById("ai_btn");
	let ai_btn1 = document.getElementById("ai_btn1");

	if (Wellcome_home.style.display !== "none") {
		Wellcome_home.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 1100,
			fill: "forwards",
		});
		setTimeout(() => (Wellcome_home.style.display = "none"), 500),
			(ai_btn1.style.display = "none");
	}

	// Wellcome home Show with animation
	let Rawson_home = document.getElementById("Rawson_home");

	if (Rawson_home.style.display !== "flex") {
		Rawson_home.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 1100,
			fill: "forwards",
		});
		setTimeout(
			() => (Rawson_home.style.display = "flex"),
			(ai_btn.style.display = "flex"),
			500
		);
	}
});

// Qulity box effect...

let selectedIndex = 0;
const buttons = document.querySelectorAll(".toggle-button");
const highlight = document.querySelector(".highlight");

function changeSelection(index) {
	selectedIndex = index;
	highlight.style.left = `${index * 33.3}%`;
	buttons.forEach((btn, i) => {
		btn.classList.toggle("active", i === index);
	});

	// Enhanced gradient color based on selection
	const colors = [
		"linear-gradient(to right, #e0e0e0, #83fffd))",
		"linear-gradient(to right, #33ccff, #3366ff)",
		"linear-gradient( 45deg ,rgb(255, 0, 234),rgb(255, 255, 0))",
	];
	highlight.style.background = colors[index];
	highlight.style.boxShadow = `0px 0px 30px ${colors[index]
		.split(",")[0]
		.replace("linear-gradient(to right, ", "")}`;
}

// Animate Skill Circles
document.addEventListener("DOMContentLoaded", function () {
	let circles = document.querySelectorAll(".progress");

	circles.forEach((circle) => {
		let percent = circle.getAttribute("data-fill");
		let circumference = 314;
		let offset = circumference - (percent / 100) * circumference;
		circle.style.strokeDashoffset = offset;
	});
});
