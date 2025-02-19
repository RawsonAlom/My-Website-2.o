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
document.getElementById("btn_home").addEventListener("click", () => {
	const HomePage = document.getElementById("HomePage");
	HomePage.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("btn_skill").addEventListener("click", () => {
	const SkillPage = document.getElementById("SkillPage");
	SkillPage.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Scroll to hide navbar
const targetDiv = document.getElementById("targetDiv");
const home = document.getElementById("home");

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
	// Get the current scroll position
	const scrollPosition = window.scrollY;

	// Change the opacity based on scroll position
	if (scrollPosition > 100) {
		// Adjust 100 to your desired scroll threshold
		targetDiv.style.boxShadow = "5px 5px 15px 1px rgb(99, 99, 100)";
	} else {
		targetDiv.style.boxShadow = "0.5px 2px 10px rgb(99, 99, 100)";
	}
});

// Supernova Click Explosion Effect
document.getElementById("ai_btn").addEventListener("click", (e) => {
	for (let i = 0; i < 30; i++) {
		let particle = document.createElement("div");
		particle.classList.add("particle");
		document.body.appendChild(particle);

		let x = e.clientX + (Math.random() - 0.5) * 200;
		let y = e.clientY + (Math.random() - 0.5) * 200;
		let size = Math.random() * 8 + 5;
		let duration = Math.random() * 1 + 0.5;

		particle.style.width = `${size}px`;
		particle.style.height = `${size}px`;
		particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
		particle.style.position = "absolute";
		particle.style.borderRadius = "50%";
		particle.style.left = `${e.clientX}px`;
		particle.style.top = `${e.clientY}px`;
		particle.style.transition = `transform ${duration}s ease-out, opacity ${duration}s ease-out`;
		particle.style.transform = `translate(${x - e.clientX}px, ${
			y - e.clientY
		}px) scale(0)`;
		particle.style.opacity = 0;

		setTimeout(() => {
			particle.remove();
		}, duration * 1000);
	}
});

// Create particle explosion CSS
let style = document.createElement("style");
style.innerHTML = `
.particle {
	position: absolute;
	width: 5px;
	height: 5px;
	background: white;
	border-radius: 50%;
	pointer-events: none;
	animation: particleFade 1s ease-out;
}

@keyframes particleFade {
	from { opacity: 1; transform: scale(1); }
	to { opacity: 0; transform: scale(3); }
}
`;
document.head.appendChild(style);


// Light Trail Effect
document.addEventListener('mousemove', (e) => {
	let trail = document.createElement('div');
	trail.classList.add('light-trail');
	document.body.appendChild(trail);

	trail.style.left = `${e.clientX}px`;
	trail.style.top = `${e.clientY}px`;

	setTimeout(() => {
		trail.remove();
	}, 500);


        // Create light trail CSS
        let style = document.createElement('style');
        style.innerHTML = `
            .light-trail {
                position: absolute;
                width: 10px;
                height: 10px;
                background: radial-gradient(circle, rgba(0, 255, 255, 0.8) 10%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                animation: fadeOut 0.5s ease-out;
            }

            @keyframes fadeOut {
                from { opacity: 1; transform: scale(1); }
                to { opacity: 0; transform: scale(2); }
            }

            .spark {
                position: absolute;
                width: 5px;
                height: 5px;
                background: white;
                border-radius: 50%;
                pointer-events: none;
                animation: sparkFade 1s ease-out;
            }

            @keyframes sparkFade {
                from { opacity: 1; transform: scale(1); }
                to { opacity: 0; transform: scale(3); }
            }
        `;
        document.head.appendChild(style);
});