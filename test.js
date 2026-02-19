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
	const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
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
const bars1 = document.getElementById("bars1");
const toggleContainer1 = document.getElementById("toggleContainer1");
bars1.addEventListener("click", function () {
	if (toggleContainer1.style.display === "flex") {
		toggleContainer1.style.transform = "scaleX(0)";
		toggleContainer1.style.opacity = "0";
		setTimeout(() => {
			toggleContainer1.style.display = "none";
		}, 400);
	} else {
		toggleContainer1.style.display = "flex";
		setTimeout(() => {
			toggleContainer1.style.transform = "scaleX(1)";
			toggleContainer1.style.opacity = "1";
		}, 10);
	}
	bars1.classList.toggle("active");
});
const targetDiv = document.getElementById("targetDiv");
const quality_box = document.getElementById("quality_box");
const show_mbna = document.getElementById("show_mbna");
let ticking = !1;
window.addEventListener("scroll", () => {
	if (!ticking) {
		requestAnimationFrame(() => {
			updateScrollEffects();
			ticking = !1;
		});
		ticking = !0;
	}
});
function updateScrollEffects() {
	const scrollPosition = window.scrollY;
	if (scrollPosition > 50) {
		targetDiv.style.boxShadow = "5px 5px 15px 1px rgba(27, 27, 27, 0.7)";
		targetDiv.style.top = "0";
		quality_box.style.top = "0";
		quality_box.style.boxShadow = "0px 1px 15px rgba(27, 27, 27, 0.7)";
		show_mbna.style.marginTop = "5px";
	} else {
		targetDiv.style.boxShadow = "0.5px 2px 10px rgba(27, 27, 27, 0.7)";
		targetDiv.style.top = "10px";
		quality_box.style.top = "5px";
		quality_box.style.boxShadow = "0px 1px 15px rgba(27, 27, 27, 0.7)";
		show_mbna.style.marginTop = "10px";
	}
}
document.getElementById("show_mbna").addEventListener("click", function (event) {
	let mbna = document.getElementById("mbna");
	mbna.style.display = "flex";
	setTimeout(() => {
		mbna.style.transform = "translateX(0)";
	}, 100);
	let children = document.querySelectorAll("#mbna_boxes .mbna1");
	children.forEach((div, index) => {
		setTimeout(() => {
			div.style.opacity = "1";
			div.style.transform = "skewX(20deg)";
		}, (index + 2) * 200);
	});
	event.stopPropagation();
});
document.addEventListener("click", function (event) {
	let mbna = document.getElementById("mbna");
	if (!mbna.contains(event.target) && event.target.id !== "showDivA") {
		mbna.style.transform = "translateX(-100%)";
		mbna.style.display = "none";
	}
});
document.getElementById("Wtxt").addEventListener("click", function () {
	let Wellcome_txt = document.getElementById("Wellcome_txt");
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
		{ duration: 1000, fill: "forwards" }
	);
	setTimeout(() => {
		Wellcome_txt.style.display = "inlineBlock";
	}, 1000);
	let Wtxt = document.getElementById("Wtxt");
	if (Wtxt.style.display !== "none") {
		Wtxt.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 500,
			fill: "forwards",
		});
		setTimeout(() => (Wtxt.style.display = "none"), 500);
	}
	let Rtxt = document.getElementById("Rtxt");
	if (Rtxt.style.display !== "flex") {
		Rtxt.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 1000,
			fill: "forwards",
		});
		setTimeout(() => (Rtxt.style.display = "flex"), 500);
	}
	let Rawson_home = document.getElementById("Rawson_home");
	if (Rawson_home.style.display !== "none") {
		Rawson_home.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 1100,
			fill: "forwards",
		});
		setTimeout(() => (Rawson_home.style.display = "none"), 500);
	}
	let Wellcome_home = document.getElementById("Wellcome_home");
	if (Wellcome_home.style.display !== "flex") {
		Wellcome_home.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 1100,
			fill: "forwards",
		});
		setTimeout(() => (Wellcome_home.style.display = "flex"), 500);
	}
	let animation1 = Wellcome_home.animate([{ left: "0%" }, { left: "20%" }], {
		duration: 1000,
		fill: "forwards",
	});
});
document.getElementById("Rtxt").addEventListener("click", function () {
	let Wellcome_txt = document.getElementById("Wellcome_txt");
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
				borderBottomLeftRadius: "100px",
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
		{ duration: 1000, fill: "forwards" }
	);
	setTimeout(() => {
		Wellcome_txt.style.display = "flex";
	}, 1000);
	let Rtxt = document.getElementById("Rtxt");
	if (Rtxt.style.display !== "none") {
		Rtxt.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 500,
			fill: "forwards",
		});
		setTimeout(() => (Rtxt.style.display = "none"), 500);
	}
	let Wtxt1 = document.getElementById("Wtxt1");
	if (Wtxt1.style.display !== "flex") {
		Wtxt1.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 1000,
			fill: "forwards",
		});
		setTimeout(() => (Wtxt1.style.display = "flex"), 500);
	}
	let Wellcome_home = document.getElementById("Wellcome_home");
	if (Wellcome_home.style.display !== "none") {
		Wellcome_home.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 1100,
			fill: "forwards",
		});
		setTimeout(() => (Wellcome_home.style.display = "none"), 500);
	}
	let Rawson_home = document.getElementById("Rawson_home");
	if (Rawson_home.style.display !== "flex") {
		Rawson_home.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 1100,
			fill: "forwards",
		});
		setTimeout(() => (Rawson_home.style.display = "flex"), 500);
	}
	let animation2 = Rawson_home.animate(
		[
			{ opacity: "0", left: "20%" },
			{ opacity: "1", left: "0%" },
		],
		{ duration: 1000, fill: "forwards" }
	);
});
document.getElementById("Wtxt1").addEventListener("click", function () {
	location.reload();
});
document.getElementById("ai_btn").addEventListener("click", function () {
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
document.getElementById("ai_btn1").addEventListener("click", function () {
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
		let progress = (timestamp - startTime) / 300;
		if (progress < 1) {
			element.style.left = `${startPosition + distance * progress}px`;
			requestAnimationFrame(step);
		} else {
			element.style.left = `${targetPosition}px`;
		}
	}
	requestAnimationFrame(step);
}
function toggleSwitch(index) {
	let targetPosition = index * 78;
	animateToggle(toggleBtn, targetPosition);
	animateToggle(toggleBtn1, targetPosition);
	options.forEach((opt, i) => {
		opt.classList.toggle("selected", i === index);
		opt.classList.toggle("unselected", i !== index);
	});
	options1.forEach((opt, i) => {
		opt.classList.toggle("selected", i === index);
		opt.classList.toggle("unselected", i !== index);
	});
}

// Device capability detection function
function getDeviceScore() {
	let score = 0;

	// Check RAM (navigator.deviceMemory, returns GB, Chrome/Edge only)
	const ram = navigator.deviceMemory || 4; // Fallback to 4GB if not supported
	score += ram >= 8 ? 3 : ram >= 4 ? 2 : 1;

	// Check CPU cores (navigator.hardwareConcurrency)
	const cores = navigator.hardwareConcurrency || 2; // Fallback to 2 cores
	score += cores >= 8 ? 3 : cores >= 4 ? 2 : 1;

	// Check screen resolution
	const screenWidth = window.screen.width || 1280; // Fallback to 1280px
	const screenHeight = window.screen.height || 720; // Fallback to 720px
	const isHighRes = screenWidth >= 1920 && screenHeight >= 1080;
	score += isHighRes ? 2 : 1;

	// Check WebGL support
	const canvas = document.createElement("canvas");
	const gl =
		canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
	score += gl ? 2 : 0;

	return score; // Max score: 10 (3+3+2+2), Min score: 3 (1+1+1+0)
}

// Determine default mode based on device score
function getDefaultMode() {
	const savedMode = localStorage.getItem("selectedMode");
	if (savedMode) return savedMode; // Prioritize user preference

	const score = getDeviceScore();
	return score >= 6 ? "ultra" : "standard"; // Ultra for high-end, Standard for low-end
}

// Mode changer section
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

	// Set default mode based on device capability
	const defaultMode = getDefaultMode();
	body.classList.add("no-animation"); // Start with no animations
	if (defaultMode === "ultra") {
		ultraBtn.classList.add("selected");
		ultraBtn1.classList.add("selected");
		body.classList.remove("no-animation", "black-white");
		ultraModeActive = true;
		enableLightTrail();
		toggleSwitch(2); // Set toggle to Ultra (index 2)
	} else if (defaultMode === "standard") {
		standardBtn.classList.add("selected");
		standardBtn1.classList.add("selected");
		body.classList.remove("black-white");
		ultraModeActive = false;
		disableLightTrail();
		resetColors();
		toggleSwitch(1); // Set toggle to Standard (index 1)
	} else if (defaultMode === "smooth") {
		smoothBtn.classList.add("selected");
		smoothBtn1.classList.add("selected");
		ultraModeActive = false;
		disableLightTrail();
		applySmoothModeColors();
		toggleSwitch(0); // Set toggle to Smooth (index 0)
	}

	function createLightTrail(event) {
		const trail = document.createElement("div");
		trail.className = "light-trail";
		trail.style.left = `${event.pageX}px`;
		trail.style.top = `${event.pageY}px`;
		document.body.appendChild(trail);
		setTimeout(() => {
			trail.remove();
		}, 500);
	}

	function enableLightTrail() {
		document.addEventListener("mousemove", createLightTrail);
	}

	function disableLightTrail() {
		document.removeEventListener("mousemove", createLightTrail);
	}

	ultraBtn.addEventListener("click", function () {
		body.classList.remove("no-animation", "black-white");
		ultraModeActive = true;
		updateActiveButton(ultraBtn);
		resetColors();
		enableLightTrail();
		toggleContainer1.style.transition =
			"transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
		localStorage.setItem("selectedMode", "ultra"); // Save user preference
		toggleSwitch(2); // Set toggle to Ultra
	});

	ultraBtn1.addEventListener("click", function () {
		body.classList.remove("no-animation", "black-white");
		ultraModeActive = true;
		updateActiveButton(ultraBtn1);
		resetColors();
		enableLightTrail();
		toggleContainer1.style.transition =
			"transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
		localStorage.setItem("selectedMode", "ultra");
		toggleSwitch(2); // Set toggle to Ultra
	});

	smoothBtn.addEventListener("click", function () {
		body.classList.add("no-animation");
		ultraModeActive = false;
		updateActiveButton(smoothBtn);
		disableLightTrail();
		applySmoothModeColors();
		toggleContainer1.style.transition =
			"transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
		localStorage.setItem("selectedMode", "smooth");
		toggleSwitch(0); // Set toggle to Smooth
	});

	smoothBtn1.addEventListener("click", function () {
		body.classList.add("no-animation");
		ultraModeActive = false;
		updateActiveButton(smoothBtn1);
		disableLightTrail();
		applySmoothModeColors();
		toggleContainer1.style.transition =
			"transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
		localStorage.setItem("selectedMode", "smooth");
		toggleSwitch(0); // Set toggle to Smooth
	});

	standardBtn.addEventListener("click", function () {
		body.classList.add("no-animation");
		body.classList.remove("black-white");
		ultraModeActive = false;
		updateActiveButton(standardBtn);
		disableLightTrail();
		resetColors();
		toggleContainer1.style.transition =
			"transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
		localStorage.setItem("selectedMode", "standard");
		toggleSwitch(1); // Set toggle to Standard
	});

	standardBtn1.addEventListener("click", function () {
		body.classList.add("no-animation");
		body.classList.remove("black-white");
		ultraModeActive = false;
		updateActiveButton(standardBtn1);
		disableLightTrail();
		resetColors();
		toggleContainer1.style.transition =
			"transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
		localStorage.setItem("selectedMode", "standard");
		toggleSwitch(1); // Set toggle to Standard
	});

	function updateActiveButton(activeBtn) {
		[
			smoothBtn,
			standardBtn,
			ultraBtn,
			smoothBtn1,
			standardBtn1,
			ultraBtn1,
		].forEach((btn) => btn.classList.remove("selected"));
		activeBtn.classList.add("selected");
	}

	function applySmoothModeColors() {
		document.querySelector(".logo-box").style.background =
			"linear-gradient(135deg,rgb(254, 243, 255),rgba(183, 193, 255, 0.415))";
		document.querySelector(".logo-box").style.boxShadow =
			"inset 0px 0px 6px rgb(6, 39, 172)";
		document.querySelector(".wave-text").style.color = "rgb(50, 50, 50)";
		document.querySelector(".option1").style.background =
			"linear-gradient(45deg, rgb(240, 255, 241), rgb(255, 220, 242))";
		document.querySelector(".home-page").style.background =
			"rgb(220, 250, 248)";
		document.querySelector("#designShape1").style.background = "none";
		document.querySelector("#designShape2").style.background = "none";
		document.querySelector("#designShape3").style.background = "none";
		document.querySelector(".my-img-box").style.boxShadow =
			"0 0 50px rgb(0, 0, 0)";
		document.querySelector(".Wellcome-txt").style.background =
			"linear-gradient(45deg, #ffe5ed, #def2ff)";
		document.querySelector(".Wellcome-txt").style.boxShadow =
			"0 10px 25px rgb(0, 0, 0), inset 0 0 20px rgb(139, 139, 139)";
		document.querySelector(".Wellcome-txt").style.border =
			"5px solid rgba(208, 210, 225, 0.772)";
		document.querySelector(".my-img-box-wl").style.boxShadow =
			"0 0 50px rgb(0, 0, 0)";
		document.querySelector(".about-section").style.background =
			"linear-gradient(135deg, #f6ff0033, #00ffee41)";
		document.querySelector(".aimg").style.boxShadow =
			"0 0 50px rgb(0, 0, 0)";
		document.querySelector(".aboutRightH2").style.color =
			"rgb(21, 68, 235)";
		document.querySelector(".aboutRightP").style.color = "rgb(49, 49, 49)";
		document.querySelector(".floating-shape1").style.background = "none";
		document.querySelector(".floating-shape2").style.background = "none";
		document.querySelector(".floating-shape3").style.background = "none";
		document.querySelector(".Skill-Section").style.background =
			"rgb(235, 243, 243)";
		document.querySelector(".skills-box").style.background =
			"rgb(51, 51, 51)";
		document.querySelector(".skills-box").style.boxShadow =
			"0 0 20px rgba(0, 149, 255, 0.579)";
		document.querySelector("#skillsBox").style.background =
			"rgb(51, 51, 51)";
		document.querySelector("#skillsBox").style.boxShadow =
			"0 0 20px rgba(0, 149, 255, 0.579)";
		document.querySelector("#ProjectSection").style.background =
			"linear-gradient(135deg, #332c7459, #8afb8a38, #4c7b8889)";
		document.querySelector(".title").style.color = "rgb(171, 36, 255)";
		document.querySelector("#projectCard1").style.background =
			"rgba(13, 39, 235, 0.836)";
		document.querySelector("#projectCard2").style.background =
			"rgba(13, 39, 235, 0.836)";
		document.querySelector("#projectCard3").style.background =
			"rgba(13, 39, 235, 0.836)";
		document.querySelector("#btn11").style.background =
			"linear-gradient(45deg, #db3f8d80, #ffceae85)";
		document.querySelector("#btn22").style.background =
			"linear-gradient(45deg, #db3f8d80, #ffceae85)";
		document.querySelector("#btn33").style.background =
			"linear-gradient(45deg, #db3f8d80, #ffceae85)";
		document.querySelector(".githubL").style.color = "#0062ff";
		document.querySelector("#ContactSection").style.background =
			"rgb(229, 252, 255)";
		document.querySelector("#layer1").style.background =
			"rgba(255, 0, 0, 0.123)";
		document.querySelector("#layer2").style.background =
			"rgba(255, 0, 0, 0.123)";
		document.querySelector("#layer3").style.background =
			"rgba(255, 0, 0, 0.123)";
		document.querySelector(".contact-box").style.background =
			"rgb(40, 40, 40)";
		document.querySelectorAll("button").forEach((btn) => {
			btn.style.backgroundColor = "#666";
			btn.style.color = "white";
		});
	}

	function resetColors() {
		document.querySelector(".logo-box").style.background = "";
		document.querySelector(".logo-box").style.boxShadow = "";
		document.querySelector(".wave-text").style.color = "";
		document.querySelector(".option1").style.background = "";
		document.querySelector(".home-page").style.background = "";
		document.querySelector("#designShape1").style.background = "";
		document.querySelector("#designShape2").style.background = "";
		document.querySelector("#designShape3").style.background = "";
		document.querySelector(".my-img-box").style.boxShadow = "";
		document.querySelector(".Wellcome-txt").style.background = "";
		document.querySelector(".Wellcome-txt").style.boxShadow = "";
		document.querySelector(".Wellcome-txt").style.border = "";
		document.querySelector(".my-img-box-wl").style.boxShadow = "";
		document.querySelector(".about-section").style.background = "";
		document.querySelector(".aimg").style.boxShadow = "";
		document.querySelector(".aboutRightH2").style.color = "";
		document.querySelector(".aboutRightP").style.color = "";
		document.querySelector(".floating-shape1").style.background = "";
		document.querySelector(".floating-shape2").style.background = "";
		document.querySelector(".floating-shape3").style.background = "";
		document.querySelector(".Skill-Section").style.background = "";
		document.querySelector(".skills-box").style.background = "";
		document.querySelector(".skills-box").style.boxShadow = "";
		document.querySelector("#skillsBox").style.background = "";
		document.querySelector("#skillsBox").style.boxShadow = "";
		document.querySelector("#ProjectSection").style.background = "";
		document.querySelector(".title").style.color = "";
		document.querySelector("#projectCard1").style.background = "";
		document.querySelector("#projectCard2").style.background = "";
		document.querySelector("#projectCard3").style.background = "";
		document.querySelector("#btn11").style.background = "";
		document.querySelector("#btn22").style.background = "";
		document.querySelector("#btn33").style.background = "";
		document.querySelector(".githubL").style.color = "";
		document.querySelector("#ContactSection").style.background = "";
		document.querySelector("#layer1").style.background = "";
		document.querySelector("#layer2").style.background = "";
		document.querySelector("#layer3").style.background = "";
		document.querySelector(".contact-box").style.background = "";
		document.querySelectorAll("button").forEach((btn) => {
			btn.style.backgroundColor = "";
			btn.style.color = "";
		});
	}
});

// Handle feedback box animation
document.addEventListener("DOMContentLoaded", function () {
	const feedbackInput = document.getElementById("fdbtn");
	const closeButton = document.getElementById("fdcbtn");
	let isFocused = !1;
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
		isFocused = !0;
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
			isFocused = !1;
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
		isFocused = !1;
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

// Feedback elements for submission
const feedbackInput = document.getElementById("fdbtn");
const feedbackIcon = document.getElementById("fdcbtn");

// Handle contact form submission
const contactForm = document.getElementById("contact-form");
if (contactForm) {
	contactForm.addEventListener("submit", async (e) => {
		e.preventDefault();
		const submitBtn = contactForm.querySelector("button");
		submitBtn.disabled = true;
		submitBtn.innerText = "Sending...";

		const formData = new FormData(contactForm);
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		};

		try {
			const response = await fetch(
				"https://programmer-bd-backend.onrender.com/api/contact",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			const result = await response.json();
			if (response.ok) {
				alert("Message sent successfully!");
				contactForm.reset();
			} else {
				alert(`Failed to send message: ${result.error}`);
			}
		} catch (error) {
			console.error("Error:", error);
			alert("An error occurred. Please try again later.");
		} finally {
			submitBtn.disabled = false;
			submitBtn.innerText = "Send";
		}
	});
}

// Handle feedback box submission
if (feedbackIcon && feedbackInput) {
	feedbackIcon.addEventListener("click", async () => {
		const feedback = feedbackInput.value.trim();
		if (!feedback) {
			alert("Please enter feedback");
			return;
		}

		feedbackIcon.disabled = true;
		feedbackIcon.style.opacity = "0.5";

		try {
			const response = await fetch(
				"https://programmer-bd-backend.onrender.com/api/feedback",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ feedback }),
				}
			);

			const result = await response.json();
			if (response.ok) {
				alert("Feedback sent successfully!");
				feedbackInput.value = "";
				feedbackInput.style.width = "18px";
				feedbackInput.style.opacity = "0.3";
				feedbackIcon.classList.remove("show");
			} else {
				alert(`Failed to send feedback: ${result.error}`);
			}
		} catch (error) {
			console.error("Error:", error);
			alert("An error occurred.");
		} finally {
			feedbackIcon.disabled = false;
			feedbackIcon.style.opacity = "1";
		}
	});
}

// Handle skills tab functionality + progress animation
document.addEventListener("DOMContentLoaded", () => {
	const tabButtons = document.querySelectorAll(".tab-btn");
	const programming = document.getElementById("programming");
	const others = document.getElementById("others");
	const developer = document.getElementById("developer");
	const youtuber = document.getElementById("youtuber");
	const circles = document.querySelectorAll(".progress");

	function setCircleProgress(circle) {
		const percent = circle.getAttribute("data-fill");
		const circumference = 314;
		const offset = circumference - (percent / 100) * circumference;
		circle.style.strokeDashoffset = offset;
	}

	function animateProgressCircles(tabId) {
		if (document.body.classList.contains("no-animation")) {
			// keep progress visible even in standard/smooth mode
			document.querySelectorAll(`#${tabId} .progress`).forEach(setCircleProgress);
			return;
		}

		document.querySelectorAll(`#${tabId} .progress`).forEach((circle) => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const fill = circle.getAttribute("data-fill");
							circle.style.setProperty("--fill", fill);
							circle.classList.add("animate");
							setCircleProgress(circle);
							observer.unobserve(circle);
						}
					});
				},
				{ threshold: 0.5, rootMargin: "50px" }
			);
			observer.observe(circle);
		});
	}

	function updateSkillView(tabId) {
		if (!programming || !others || !developer || !youtuber) return;
		const showProgramming = tabId === "programming";
		programming.style.display = showProgramming ? "flex" : "none";
		others.style.display = showProgramming ? "none" : "flex";
		developer.style.display = showProgramming ? "block" : "none";
		youtuber.style.display = showProgramming ? "none" : "block";
	}

	tabButtons.forEach((button) => {
		button.addEventListener("click", () => {
			tabButtons.forEach((btn) => btn.classList.remove("active"));
			button.classList.add("active");

			const tabId = button.getAttribute("data-tab");
			updateSkillView(tabId);
			animateProgressCircles(tabId);
		});
	});

	// Initial state
	updateSkillView("programming");
	circles.forEach(setCircleProgress);
	animateProgressCircles("programming");

	async function pingBackend() {
		try {
			await fetch("https://programmer-bd-backend.onrender.com/ping");
		} catch (error) {}
	}

	pingBackend();
});
