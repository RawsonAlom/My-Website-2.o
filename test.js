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
let typingInterval;

function type() {
	if (count === texts.length) {
		count = 0;
	}
	currentText = texts[count];
	letter = currentText.slice(0, ++index);

	document.querySelector(".typing").textContent = letter;
	if (letter.length === currentText.length) {
		count++;
		index = 0;
		typingInterval = setTimeout(type, 1500);
	} else {
		typingInterval = setTimeout(type, 100);
	}
}

function startTypingEffect() {
	if (!typingInterval) {
		type();
	}
}

function stopTypingEffect() {
	clearTimeout(typingInterval);
	typingInterval = null;
}

document.addEventListener("DOMContentLoaded", function () {
	const homeSection = document.getElementById("HomePage");

	const observerOptions = {
		root: null,
		rootMargin: "0px",
		threshold: 0.1, // 10% এলিমেন্ট ভিউপোর্টে প্রবেশ করলে ট্রিগার হবে
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				startTypingEffect();
			} else {
				stopTypingEffect();
			}
		});
	}, observerOptions);

	observer.observe(homeSection);
});

// Qulity Button for web...

const bars1 = document.getElementById("bars1");
const toggleContainer1 = document.getElementById("toggleContainer1");

bars1.addEventListener("click", function () {
	if (toggleContainer1.style.display === "flex") {
		// Slide into bars1 (hide)
		toggleContainer1.style.transform = "scaleX(0)";
		toggleContainer1.style.opacity = "0";

		// Animation শেষ হলে display: none;
		setTimeout(() => {
			toggleContainer1.style.display = "none";
		}, 400);
	} else {
		// Display flex করে একটু পরে animation trigger করবো
		toggleContainer1.style.display = "flex";
		setTimeout(() => {
			toggleContainer1.style.transform = "scaleX(1)";
			toggleContainer1.style.opacity = "1";
		}, 10);
	}

	// bars1 animation toggle
	bars1.classList.toggle("active");
});

// Animate Skill Circle
document.addEventListener("DOMContentLoaded", function () {
	const circles = document.querySelectorAll(".progress");

	const observerOptions = {
		root: null,
		rootMargin: "0px",
		threshold: 0.1, // 10% এলিমেন্ট ভিউপোর্টে প্রবেশ করলে ট্রিগার হবে
	};

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				let circle = entry.target;
				let percent = circle.getAttribute("data-fill");
				let circumference = 314;
				let offset = circumference - (percent / 100) * circumference;
				circle.style.strokeDashoffset = offset;
				observer.unobserve(circle); // একবার রান করার পর পর্যবেক্ষণ বন্ধ করা
			}
		});
	}, observerOptions);

	circles.forEach((circle) => {
		observer.observe(circle);
	});
});

// NavBar Scroll Effect
const targetDiv = document.getElementById("targetDiv");
const quality_box = document.getElementById("quality_box");
const show_mbna = document.getElementById("show_mbna");

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

let selectedIndex = 1;
const toggleBtn = document.getElementById("toggle-btn");
const options = document.querySelectorAll(".option");
const toggleBtn1 = document.getElementById("toggle-btn1");
const options1 = document.querySelectorAll(".option1");

function animateToggle(element, targetPosition) {
    let startPosition = parseInt(element.style.left) || 0;
    let distance = targetPosition - startPosition;
    let startTime;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = (timestamp - startTime) / 300; // Animation duration: 300ms

        if (progress < 1) {
            element.style.left = `${startPosition + distance * progress}px`;
            requestAnimationFrame(step);
        } else {
            element.style.left = `${targetPosition}px`; // Ensure it lands on exact position
        }
    }

    requestAnimationFrame(step);
}

function toggleSwitch(index) {
    let targetPosition = index * 78;

    // Animate toggle buttons
    animateToggle(toggleBtn, targetPosition);
    animateToggle(toggleBtn1, targetPosition);

    // Update class for options
    options.forEach((opt, i) => {
        opt.classList.toggle("selected", i === index);
        opt.classList.toggle("unselected", i !== index);
    });

    options1.forEach((opt, i) => {
        opt.classList.toggle("selected", i === index);
        opt.classList.toggle("unselected", i !== index);
    });
}



// FeedBack Option's Effect

document.addEventListener("DOMContentLoaded", function () {
	const feedbackInput = document.getElementById("fdbtn");
	const closeButton = document.getElementById("fdcbtn");

	let isFocused = false;
	let hoverTimeout;

	feedbackInput.addEventListener("mouseover", function () {
		if (!isFocused) {
			feedbackInput.style.width = "169px";
			feedbackInput.style.opacity = "0.8";
			feedbackInput.style.paddingLeft = "13px";
			feedbackInput.style.paddingRight = "38px";
			feedbackInput.style.background = "rgb(230, 230, 230)";
			feedbackInput.style.transition =
				"width 0.5s, opacity 0.5s, padding .5s";
			closeButton.style.display = "inline";

			clearTimeout(hoverTimeout);
			hoverTimeout = setTimeout(function () {
				if (!isFocused) {
					feedbackInput.style.width = "20px";
					feedbackInput.style.opacity = "0.3";
					feedbackInput.style.background =
						"linear-gradient(45deg, rgb(50, 132, 231), rgb(0, 0, 255))";
					feedbackInput.style.padding = "9px";
					feedbackInput.style.transition =
						"width 0.5s, opacity 0.5s, background .5s, padding .5s";
					closeButton.style.display = "none";
				}
			}, 2000);
		}
	});

	feedbackInput.addEventListener("mouseout", function () {
		if (!isFocused) {
			clearTimeout(hoverTimeout);
			hoverTimeout = setTimeout(function () {
				if (!isFocused) {
					feedbackInput.style.width = "20px";
					feedbackInput.style.opacity = "0.3";
					feedbackInput.style.padding = "9px";
					feedbackInput.style.background =
						"linear-gradient(45deg, rgb(50, 132, 231), rgb(0, 0, 255))";
					feedbackInput.style.transition =
						"width 0.5s, opacity 0.5s, background .5s, padding .5s";
					closeButton.style.display = "none";
				}
			}, 2000);
		}
	});

	feedbackInput.addEventListener("focus", function () {
		isFocused = true;
		feedbackInput.style.width = "169px";
		feedbackInput.style.opacity = "0.8";
		feedbackInput.style.paddingLeft = "13px";
		feedbackInput.style.paddingRight = "38px";
		feedbackInput.style.background = "rgb(230, 230, 230)";
		closeButton.style.display = "inline";
	});

	feedbackInput.addEventListener("blur", function () {
		if (!isFocused) {
			feedbackInput.style.width = "20px";
			feedbackInput.style.opacity = "0.3";
			feedbackInput.style.padding = "9px";
			feedbackInput.style.background =
				"linear-gradient(45deg, rgb(50, 132, 231), rgb(0, 0, 255))";
			closeButton.style.display = "none";
		}
	});

	closeButton.addEventListener("click", function (event) {
		event.stopPropagation();
	});

	document.addEventListener("click", function (event) {
		if (
			!feedbackInput.contains(event.target) &&
			event.target !== feedbackInput &&
			event.target !== closeButton
		) {
			isFocused = false;
			feedbackInput.style.width = "20px";
			feedbackInput.style.opacity = "0.3";
			feedbackInput.style.padding = "9px";
			feedbackInput.style.background =
				"linear-gradient(45deg, rgb(50, 132, 231), rgb(0, 0, 255))";
			feedbackInput.style.transition =
				"width 0.5s, opacity 0.5s, background .5s, padding .5s";
			closeButton.style.display = "none";
		}
	});

	window.addEventListener("scroll", function () {
		isFocused = false;
		feedbackInput.style.width = "20px";
		feedbackInput.style.opacity = "0.3";
		feedbackInput.style.padding = "9px";
		feedbackInput.style.background =
			"linear-gradient(45deg, rgb(50, 132, 231), rgb(0, 0, 255))";
		feedbackInput.style.transition =
			"width 0.5s, opacity 0.5s, background .5s, padding .5s";
		closeButton.style.display = "none";
	});
});




// Menu Dropdown Effect

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const toggleContainer1 = document.querySelector(".toggle-container1");

    const smoothBtn = document.getElementById("smoothbtn");
    const standardBtn = document.getElementById("standardbtn");
    const ultraBtn = document.getElementById("ultrabtn");
    const smoothBtn1 = document.getElementById("smoothbtn1");
    const standardBtn1 = document.getElementById("standardbtn1");
    const ultraBtn1 = document.getElementById("ultrabtn1");

    let ultraModeActive = false;

    // By default Standard Mode active (animations & Light Trail off)
    body.classList.add("no-animation"); // Disable global animations
    standardBtn.classList.add("selected");
    standardBtn1.classList.add("selected");

    // Light Trail Effect
    function createLightTrail(event) {
        const trail = document.createElement("div");
        trail.className = "light-trail";
        trail.style.left = `${event.clientX}px`;
        trail.style.top = `${event.clientY}px`;
        document.body.appendChild(trail);
        setTimeout(() => {
            trail.remove();
        }, 500); // Adjust the duration as needed
    }

    function enableLightTrail() {
        document.addEventListener("mousemove", createLightTrail);
    }

    function disableLightTrail() {
        document.removeEventListener("mousemove", createLightTrail);
    }

    // Ultra Mode: All animations on + Light Trail Effect on
    ultraBtn.addEventListener("click", function () {
        body.classList.remove("no-animation", "black-white");
        ultraModeActive = true;
        updateActiveButton(ultraBtn);

        enableLightTrail();
        toggleContainer1.style.transition = "transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
    });

    ultraBtn1.addEventListener("click", function () {
        body.classList.remove("no-animation", "black-white");
        ultraModeActive = true;
        updateActiveButton(ultraBtn1);

        enableLightTrail();
        toggleContainer1.style.transition = "transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
    });

    // Smooth Mode: Animations Off + Light Trail Off + Custom Colors
    smoothBtn.addEventListener("click", function () {
        body.classList.add("no-animation");
        ultraModeActive = false;
        updateActiveButton(smoothBtn);
        disableLightTrail();

        // ✅ New Colors for Smooth Mode
        applySmoothModeColors();

        toggleContainer1.style.transition = "transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
    });

    smoothBtn1.addEventListener("click", function () {
        body.classList.add("no-animation");
        ultraModeActive = false;
        updateActiveButton(smoothBtn1);
        disableLightTrail();

        // ✅ New Colors for Smooth Mode
        applySmoothModeColors();

        toggleContainer1.style.transition = "transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
    });

    // Standard Mode: Reset colors to default
    standardBtn.addEventListener("click", function () {
        body.classList.add("no-animation");
        body.classList.remove("black-white");
        ultraModeActive = false;
        updateActiveButton(standardBtn);
        disableLightTrail();

        // ✅ Reset Colors to Default
        resetColors();

        toggleContainer1.style.transition = "transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
    });

    standardBtn1.addEventListener("click", function () {
        body.classList.add("no-animation");
        body.classList.remove("black-white");
        ultraModeActive = false;
        updateActiveButton(standardBtn1);
        disableLightTrail();

        // ✅ Reset Colors to Default
        resetColors();

        toggleContainer1.style.transition = "transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
    });

    // Active button highlight function
    function updateActiveButton(activeBtn) {
        [smoothBtn, standardBtn, ultraBtn, smoothBtn1, standardBtn1, ultraBtn1].forEach((btn) =>
            btn.classList.remove("selected")
        );
        activeBtn.classList.add("selected");
    }

    // ✅ Function to Apply Smooth Mode Colors (New)
    function applySmoothModeColors() {

        document.querySelector(".home-page").style.background = "#fff"; // Light Brown
        document.querySelector(".home-page").style.color = "#FFFF";

        document.querySelector(".about-section").style.background = "#d1e8e2"; // Light Green
        document.querySelector(".about-section").style.color = "#ffff";

        document.querySelector(".contact-section").style.background = "#cce7ff"; // Light Blue


        // ✅ Buttons inside Smooth Mode
        document.querySelectorAll("button").forEach((btn) => {
            btn.style.backgroundColor = "#666";
            btn.style.color = "white";
        });
    }

    // ✅ Function to Reset Colors to Default
    function resetColors() {
        document.querySelector("nav").style.backgroundColor = "";
        document.querySelector("nav").style.color = "";

        document.querySelector(".home-page").style.backgroundColor = "";
        document.querySelector(".home-page").style.color = "";

        document.querySelector(".about-section").style.background = "";
        document.querySelector(".about-section").style.color = "";

        document.querySelector(".contact-section").style.backgroundColor = "";
        document.querySelector(".contact-section").style.color = "";

        // ✅ Reset button styles
        document.querySelectorAll("button").forEach((btn) => {
            btn.style.backgroundColor = "";
            btn.style.color = "";
        });
    }
});


