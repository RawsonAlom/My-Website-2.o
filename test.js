const TYPING_TEXTS = [
	"A Passionate Programmer",
	"A Web Developer",
	"A Creative Thinker",
];

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => Array.from(document.querySelectorAll(selector));
const byId = (id) => document.getElementById(id);
const setStyle = (selector, prop, value) => {
	const el = qs(selector);
	if (el) el.style[prop] = value;
};

function animateToggle(element, targetPosition) {
	if (!element) return;
	const startPosition = parseInt(element.style.left, 10) || 0;
	const distance = targetPosition - startPosition;
	let startTime;

	function step(timestamp) {
		if (!startTime) startTime = timestamp;
		const progress = Math.min((timestamp - startTime) / 300, 1);
		element.style.left = `${startPosition + distance * progress}px`;
		if (progress < 1) requestAnimationFrame(step);
	}

	requestAnimationFrame(step);
}

function toggleSwitch(index) {
	const toggleBtn = byId("toggle-btn");
	const toggleBtn1 = byId("toggle-btn1");
	const options = qsa(".option");
	const options1 = qsa(".toggle-container1 .option1");
	const targetPosition = index * 78;

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

window.toggleSwitch = toggleSwitch;

function getDeviceScore() {
	let score = 0;
	const ram = navigator.deviceMemory || 4;
	const cores = navigator.hardwareConcurrency || 2;
	const isHighRes = (window.screen.width || 1280) >= 1920 && (window.screen.height || 720) >= 1080;
	const canvas = document.createElement("canvas");
	const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

	score += ram >= 8 ? 3 : ram >= 4 ? 2 : 1;
	score += cores >= 8 ? 3 : cores >= 4 ? 2 : 1;
	score += isHighRes ? 2 : 1;
	score += gl ? 2 : 0;
	return score;
}

function getDefaultMode() {
	const savedMode = localStorage.getItem("selectedMode");
	if (savedMode) return savedMode;

	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	);

	return isMobile ? "standard" : "ultra";
}

function applySmoothModeColors() {
	setStyle(".logo-box", "background", "linear-gradient(135deg,rgb(254, 243, 255),rgba(183, 193, 255, 0.415))");
	setStyle(".logo-box", "boxShadow", "inset 0px 0px 6px rgb(6, 39, 172)");
	setStyle(".wave-text", "color", "rgb(50, 50, 50)");
	setStyle(".option1", "background", "linear-gradient(45deg, rgb(240, 255, 241), rgb(255, 220, 242))");
	setStyle(".home-page", "background", "rgb(220, 250, 248)");
	setStyle("#designShape1", "background", "none");
	setStyle("#designShape2", "background", "none");
	setStyle("#designShape3", "background", "none");
	setStyle(".my-img-box", "boxShadow", "0 0 50px rgb(0, 0, 0)");
	setStyle(".Wellcome-txt", "background", "linear-gradient(45deg, #ffe5ed, #def2ff)");
	setStyle(".Wellcome-txt", "boxShadow", "0 10px 25px rgb(0, 0, 0), inset 0 0 20px rgb(139, 139, 139)");
	setStyle(".Wellcome-txt", "border", "5px solid rgba(208, 210, 225, 0.772)");
	setStyle(".my-img-box-wl", "boxShadow", "0 0 50px rgb(0, 0, 0)");
	setStyle(".about-section", "background", "linear-gradient(135deg, #f6ff0033, #00ffee41)");
	setStyle(".aimg", "boxShadow", "0 0 50px rgb(0, 0, 0)");
	setStyle(".aboutRightH2", "color", "rgb(21, 68, 235)");
	setStyle(".aboutRightP", "color", "rgb(49, 49, 49)");
	setStyle(".floating-shape1", "background", "none");
	setStyle(".floating-shape2", "background", "none");
	setStyle(".floating-shape3", "background", "none");
	setStyle(".Skill-Section", "background", "rgb(235, 243, 243)");
	setStyle(".skills-box", "background", "rgb(51, 51, 51)");
	setStyle(".skills-box", "boxShadow", "0 0 20px rgba(0, 149, 255, 0.579)");
	setStyle("#skillsBox", "background", "rgb(51, 51, 51)");
	setStyle("#skillsBox", "boxShadow", "0 0 20px rgba(0, 149, 255, 0.579)");
	setStyle("#ProjectSection", "background", "linear-gradient(135deg, #332c7459, #8afb8a38, #4c7b8889)");
	setStyle(".title", "color", "rgb(171, 36, 255)");
	setStyle("#projectCard1", "background", "rgba(13, 39, 235, 0.836)");
	setStyle("#projectCard2", "background", "rgba(13, 39, 235, 0.836)");
	setStyle("#projectCard3", "background", "rgba(13, 39, 235, 0.836)");
	setStyle("#btn11", "background", "linear-gradient(45deg, #db3f8d80, #ffceae85)");
	setStyle("#btn22", "background", "linear-gradient(45deg, #db3f8d80, #ffceae85)");
	setStyle("#btn33", "background", "linear-gradient(45deg, #db3f8d80, #ffceae85)");
	setStyle(".githubL", "color", "#0062ff");
	setStyle("#ContactSection", "background", "rgb(229, 252, 255)");
	setStyle("#layer1", "background", "rgba(255, 0, 0, 0.123)");
	setStyle("#layer2", "background", "rgba(255, 0, 0, 0.123)");
	setStyle("#layer3", "background", "rgba(255, 0, 0, 0.123)");
	setStyle(".contact-box", "background", "rgb(40, 40, 40)");
	qsa("button").forEach((btn) => {
		btn.style.backgroundColor = "#666";
		btn.style.color = "white";
	});
}

function resetColors() {
	[
		[".logo-box", "background"], [".logo-box", "boxShadow"], [".wave-text", "color"], [".option1", "background"],
		[".home-page", "background"], ["#designShape1", "background"], ["#designShape2", "background"], ["#designShape3", "background"],
		[".my-img-box", "boxShadow"], [".Wellcome-txt", "background"], [".Wellcome-txt", "boxShadow"], [".Wellcome-txt", "border"],
		[".my-img-box-wl", "boxShadow"], [".about-section", "background"], [".aimg", "boxShadow"], [".aboutRightH2", "color"],
		[".aboutRightP", "color"], [".floating-shape1", "background"], [".floating-shape2", "background"], [".floating-shape3", "background"],
		[".Skill-Section", "background"], [".skills-box", "background"], [".skills-box", "boxShadow"], ["#skillsBox", "background"],
		["#skillsBox", "boxShadow"], ["#ProjectSection", "background"], [".title", "color"], ["#projectCard1", "background"],
		["#projectCard2", "background"], ["#projectCard3", "background"], ["#btn11", "background"], ["#btn22", "background"],
		["#btn33", "background"], [".githubL", "color"], ["#ContactSection", "background"], ["#layer1", "background"],
		["#layer2", "background"], ["#layer3", "background"], [".contact-box", "background"],
	].forEach(([selector, prop]) => setStyle(selector, prop, ""));

	qsa("button").forEach((btn) => {
		btn.style.backgroundColor = "";
		btn.style.color = "";
	});
}

document.addEventListener("DOMContentLoaded", () => {
	let typingIndex = 0;
	let textIndex = 0;
	let typingInterval;

	const typingTarget = qs(".typing");
	const homeSection = byId("HomePage");
	if (typingTarget && homeSection) {
		const type = () => {
			if (textIndex >= TYPING_TEXTS.length) textIndex = 0;
			const current = TYPING_TEXTS[textIndex];
			typingTarget.textContent = current.slice(0, ++typingIndex);
			typingInterval = setTimeout(() => {
				if (typingIndex >= current.length) {
					textIndex++;
					typingIndex = 0;
					typingInterval = setTimeout(type, 1500);
				} else {
					type();
				}
			}, 100);
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !typingInterval) type();
					if (!entry.isIntersecting && typingInterval) {
						clearTimeout(typingInterval);
						typingInterval = null;
					}
				});
			},
			{ threshold: 0.1 }
		);
		observer.observe(homeSection);
	}

	const bars1 = byId("bars1");
	const toggleContainer1 = byId("toggleContainer1");
	if (bars1 && toggleContainer1) {
		bars1.addEventListener("click", () => {
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
	}

	const targetDiv = byId("targetDiv");
	const qualityBox = byId("quality_box");
	const showMbnaBtn = byId("show_mbna");
	if (targetDiv && qualityBox && showMbnaBtn) {
		let ticking = false;
		const updateScrollEffects = () => {
			if (window.scrollY > 50) {
				targetDiv.style.boxShadow = "5px 5px 15px 1px rgba(27, 27, 27, 0.7)";
				targetDiv.style.top = "0";
				qualityBox.style.top = "0";
				qualityBox.style.boxShadow = "0px 1px 15px rgba(27, 27, 27, 0.7)";
				showMbnaBtn.style.marginTop = "5px";
			} else {
				targetDiv.style.boxShadow = "0.5px 2px 10px rgba(27, 27, 27, 0.7)";
				targetDiv.style.top = "10px";
				qualityBox.style.top = "5px";
				qualityBox.style.boxShadow = "0px 1px 15px rgba(27, 27, 27, 0.7)";
				showMbnaBtn.style.marginTop = "10px";
			}
		};

		window.addEventListener("scroll", () => {
			if (ticking) return;
			requestAnimationFrame(() => {
				updateScrollEffects();
				ticking = false;
			});
			ticking = true;
		});
	}

	const mbna = byId("mbna");
	const mbnaItems = qsa("#mbna_boxes .mbna1");
	if (showMbnaBtn && mbna) {
		showMbnaBtn.addEventListener("click", (event) => {
			mbna.style.display = "flex";
			setTimeout(() => {
				mbna.style.transform = "translateX(0)";
			}, 100);
			mbnaItems.forEach((div, index) => {
				setTimeout(() => {
					div.style.opacity = "1";
					div.style.transform = "skewX(20deg)";
				}, (index + 2) * 200);
			});
			event.stopPropagation();
		});

		document.addEventListener("click", (event) => {
			if (!mbna.contains(event.target) && event.target.id !== "showDivA") {
				mbna.style.transform = "translateX(-100%)";
				mbna.style.display = "none";
			}
		});
	}

	const Wtxt = byId("Wtxt");
	const Rtxt = byId("Rtxt");
	const Wtxt1 = byId("Wtxt1");
	const rawsonHome = byId("Rawson_home");
	const welcomeHome = byId("Wellcome_home");
	const welcomeTxt = byId("Wellcome_txt");

	if (Wtxt && Rtxt && Wtxt1 && rawsonHome && welcomeHome && welcomeTxt) {
		Wtxt.addEventListener("click", () => {
			welcomeTxt.animate([
				{ right: "0%", width: "20%", borderTopLeftRadius: "100px", borderBottomLeftRadius: "100px", zIndex: "6" },
				{ right: "0%", width: "100%", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", zIndex: "6" },
				{ right: "80%", width: "20%", borderTopRightRadius: "100px", borderBottomRightRadius: "100px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", zIndex: "6" },
			], { duration: 1000, fill: "forwards" });
			setTimeout(() => (welcomeTxt.style.display = "inlineBlock"), 1000);

			Wtxt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 500, fill: "forwards" });
			setTimeout(() => (Wtxt.style.display = "none"), 500);
			Rtxt.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000, fill: "forwards" });
			setTimeout(() => (Rtxt.style.display = "flex"), 500);

			rawsonHome.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 1100, fill: "forwards" });
			setTimeout(() => (rawsonHome.style.display = "none"), 500);
			welcomeHome.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1100, fill: "forwards" });
			setTimeout(() => (welcomeHome.style.display = "flex"), 500);
			welcomeHome.animate([{ left: "0%" }, { left: "20%" }], { duration: 1000, fill: "forwards" });
		});

		Rtxt.addEventListener("click", () => {
			welcomeTxt.animate([
				{ left: "0%", width: "20%", borderTopRightRadius: "100px", borderBottomRightRadius: "100px", zIndex: "6" },
				{ left: "0%", width: "100%", borderTopLeftRadius: "100px", borderBottomLeftRadius: "100px", zIndex: "6" },
				{ left: "80%", width: "20%", borderTopLeftRadius: "100px", borderBottomLeftRadius: "100px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px", zIndex: "6" },
			], { duration: 1000, fill: "forwards" });
			setTimeout(() => (welcomeTxt.style.display = "flex"), 1000);

			Rtxt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 500, fill: "forwards" });
			setTimeout(() => (Rtxt.style.display = "none"), 500);
			Wtxt1.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000, fill: "forwards" });
			setTimeout(() => (Wtxt1.style.display = "flex"), 500);

			welcomeHome.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 1100, fill: "forwards" });
			setTimeout(() => (welcomeHome.style.display = "none"), 500);
			rawsonHome.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1100, fill: "forwards" });
			setTimeout(() => (rawsonHome.style.display = "flex"), 500);
			rawsonHome.animate([{ opacity: "0", left: "20%" }, { opacity: "1", left: "0%" }], { duration: 1000, fill: "forwards" });
		});

		Wtxt1.addEventListener("click", () => location.reload());
	}

	const aiBtn = byId("ai_btn");
	const aiBtn1 = byId("ai_btn1");
	if (aiBtn && aiBtn1 && rawsonHome && welcomeHome) {
		aiBtn.addEventListener("click", () => {
			rawsonHome.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 1100, fill: "forwards" });
			setTimeout(() => (rawsonHome.style.display = "none"), 500);
			aiBtn.style.display = "none";

			welcomeHome.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1100, fill: "forwards" });
			setTimeout(() => {
				welcomeHome.style.display = "flex";
				aiBtn1.style.display = "flex";
			}, 500);
		});

		aiBtn1.addEventListener("click", () => {
			welcomeHome.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 1100, fill: "forwards" });
			setTimeout(() => (welcomeHome.style.display = "none"), 500);
			aiBtn1.style.display = "none";

			rawsonHome.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1100, fill: "forwards" });
			setTimeout(() => {
				rawsonHome.style.display = "flex";
				aiBtn.style.display = "flex";
			}, 500);
		});
	}

	const smoothBtn = byId("smoothbtn");
	const standardBtn = byId("standardbtn");
	const ultraBtn = byId("ultrabtn");
	const smoothBtn1 = byId("smoothbtn1");
	const standardBtn1 = byId("standardbtn1");
	const ultraBtn1 = byId("ultrabtn1");

	if (smoothBtn && standardBtn && ultraBtn && smoothBtn1 && standardBtn1 && ultraBtn1) {
		const body = document.body;
		const toggleContainer = qs(".toggle-container1");

		const createLightTrail = (event) => {
			const trail = document.createElement("div");
			trail.className = "light-trail";
			trail.style.left = `${event.pageX}px`;
			trail.style.top = `${event.pageY}px`;
			document.body.appendChild(trail);
			setTimeout(() => trail.remove(), 500);
		};

		const setMode = (mode) => {
			[smoothBtn, standardBtn, ultraBtn, smoothBtn1, standardBtn1, ultraBtn1].forEach((btn) => btn.classList.remove("selected"));
			if (mode === "ultra") {
				ultraBtn.classList.add("selected");
				ultraBtn1.classList.add("selected");
				body.classList.remove("no-animation", "black-white");
				resetColors();
				document.addEventListener("mousemove", createLightTrail);
				toggleSwitch(2);
			} else if (mode === "smooth") {
				smoothBtn.classList.add("selected");
				smoothBtn1.classList.add("selected");
				body.classList.add("no-animation");
				document.removeEventListener("mousemove", createLightTrail);
				applySmoothModeColors();
				toggleSwitch(0);
			} else {
				standardBtn.classList.add("selected");
				standardBtn1.classList.add("selected");
				body.classList.add("no-animation");
				body.classList.remove("black-white");
				document.removeEventListener("mousemove", createLightTrail);
				resetColors();
				toggleSwitch(1);
			}
			if (toggleContainer) toggleContainer.style.transition = "transform 0.4s ease-in-out, opacity 0.4s ease-in-out";
			localStorage.setItem("selectedMode", mode);
		};

		setMode(getDefaultMode());
		smoothBtn.addEventListener("click", () => setMode("smooth"));
		smoothBtn1.addEventListener("click", () => setMode("smooth"));
		standardBtn.addEventListener("click", () => setMode("standard"));
		standardBtn1.addEventListener("click", () => setMode("standard"));
		ultraBtn.addEventListener("click", () => setMode("ultra"));
		ultraBtn1.addEventListener("click", () => setMode("ultra"));
	}

	const feedbackInput = byId("fdbtn");
	const feedbackIcon = byId("fdcbtn");
	if (feedbackInput && feedbackIcon) {
		let isFocused = false;
		let hoverTimeout;
		const collapse = () => {
			feedbackInput.style.width = "20px";
			feedbackInput.style.opacity = "0.3";
			feedbackInput.style.padding = "9px";
			feedbackInput.style.background = "linear-gradient(45deg, rgb(50, 132, 231), rgb(0, 0, 255))";
			feedbackInput.style.transition = "width 0.5s, opacity 0.5s, background .5s, padding .5s";
			feedbackIcon.style.display = "none";
			feedbackIcon.classList.remove("show");
		};
		const expand = () => {
			feedbackInput.style.width = "169px";
			feedbackInput.style.opacity = "0.8";
			feedbackInput.style.paddingLeft = "13px";
			feedbackInput.style.paddingRight = "38px";
			feedbackInput.style.background = "rgb(230, 230, 230)";
			feedbackInput.style.transition = "width 0.5s, opacity 0.5s, padding .5s";
			feedbackIcon.style.display = "inline";
			feedbackIcon.classList.add("show");
		};

		feedbackInput.addEventListener("mouseover", () => {
			if (isFocused) return;
			expand();
			clearTimeout(hoverTimeout);
			hoverTimeout = setTimeout(() => !isFocused && collapse(), 2000);
		});
		feedbackInput.addEventListener("mouseout", () => {
			if (isFocused) return;
			clearTimeout(hoverTimeout);
			hoverTimeout = setTimeout(() => !isFocused && collapse(), 2000);
		});
		feedbackInput.addEventListener("focus", () => {
			isFocused = true;
			expand();
		});
		feedbackInput.addEventListener("blur", () => {
			if (!isFocused) collapse();
		});
		feedbackIcon.addEventListener("click", (event) => event.stopPropagation());
		document.addEventListener("click", (event) => {
			if (!feedbackInput.contains(event.target) && event.target !== feedbackIcon) {
				isFocused = false;
				collapse();
			}
		});
		window.addEventListener("scroll", () => {
			isFocused = false;
			collapse();
		});

		feedbackIcon.addEventListener("click", async () => {
			const feedback = feedbackInput.value.trim();
			if (!feedback) {
				alert("Please enter feedback");
				return;
			}
			feedbackIcon.style.opacity = "0.5";
			try {
				const response = await fetch("https://programmer-bd-backend.onrender.com/api/feedback", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ feedback }),
				});
				const result = await response.json();
				if (response.ok) {
					alert("Feedback sent successfully!");
					feedbackInput.value = "";
					collapse();
				} else {
					alert(`Failed to send feedback: ${result.error}`);
				}
			} catch (error) {
				console.error("Error:", error);
				alert("An error occurred.");
			} finally {
				feedbackIcon.style.opacity = "1";
			}
		});
	}

	const contactForm = byId("contact-form");
	if (contactForm) {
		contactForm.addEventListener("submit", async (event) => {
			event.preventDefault();
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
				const response = await fetch("https://programmer-bd-backend.onrender.com/api/contact", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data),
				});
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

	const tabButtons = qsa(".tab-btn");
	const programming = byId("programming");
	const others = byId("others");
	const developer = byId("developer");
	const youtuber = byId("youtuber");
	if (tabButtons.length && programming && others) {
		const animateProgress = (scope = ".progress") => {
			qsa(scope).forEach((circle) => {
				const observer = new IntersectionObserver((entries, obs) => {
					entries.forEach((entry) => {
						if (!entry.isIntersecting) return;
						const percent = Number(circle.getAttribute("data-fill") || 0);
						const circumference = 314;
						circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
						if (!document.body.classList.contains("no-animation")) {
							circle.style.setProperty("--fill", percent);
							circle.classList.add("animate");
						}
						obs.unobserve(circle);
					});
				}, { threshold: 0.1, rootMargin: "50px" });
				observer.observe(circle);
			});
		};

		const setSkillTab = (tab) => {
			const isProgramming = tab === "programming";
			programming.style.display = isProgramming ? "flex" : "none";
			others.style.display = isProgramming ? "none" : "flex";
			if (developer) developer.style.display = isProgramming ? "block" : "none";
			if (youtuber) youtuber.style.display = isProgramming ? "none" : "block";
			tabButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === tab));
			qsa(".tab-content").forEach((content) => content.classList.toggle("active", content.id === tab));
			animateProgress(`#${tab} .progress`);
		};

		tabButtons.forEach((btn) => btn.addEventListener("click", () => setSkillTab(btn.dataset.tab)));
		setSkillTab("programming");
	}

	fetch("https://programmer-bd-backend.onrender.com/ping").catch(() => {});
});
