// Typing Effect
const texts = ["A Passionate Programmer", "A Web Developer", "A Creative Thinker"];
let count = 0, index = 0, typingInterval;

function type() {
  const currentText = texts[count];
  document.querySelector(".typing").textContent = currentText.slice(0, ++index);
  if (index === currentText.length) {
    count = (count + 1) % texts.length;
    index = 0;
    typingInterval = setTimeout(type, 1500);
  } else {
    typingInterval = setTimeout(type, 100);
  }
}

function startTypingEffect() { if (!typingInterval) type(); }
function stopTypingEffect() { clearTimeout(typingInterval); typingInterval = null; }

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => entry.isIntersecting ? startTypingEffect() : stopTypingEffect());
  }, { threshold: 0.1 });
  observer.observe(document.getElementById("HomePage"));
});

// Mobile menu toggle
document.getElementById("bars1").addEventListener("click", () => {
  const toggleContainer = document.getElementById("toggleContainer1");
  toggleContainer.style.display = toggleContainer.style.display === "flex" ? "none" : "flex";
  toggleContainer.style.transform = toggleContainer.style.transform === "scaleX(1)" ? "scaleX(0)" : "scaleX(1)";
  toggleContainer.style.opacity = toggleContainer.style.opacity === "1" ? "0" : "1";
  document.getElementById("bars1").classList.toggle("active");
});

// Mode Switch (Smooth, Standard, Ultra)
function toggleSwitch(index) {
  const buttons = document.querySelectorAll(".option");
  buttons.forEach((btn, i) => btn.classList.toggle("selected", i === index));
}

document.querySelectorAll(".option").forEach((btn, index) => {
  btn.addEventListener("click", () => toggleSwitch(index));
});

// Feedback Form
document.getElementById("fdcbtn").addEventListener("click", async () => {
  const feedback = document.getElementById("fdbtn").value.trim();
  if (!feedback) return alert("Please enter feedback");
  try {
    const res = await fetch("https://programmer-bd-backend.onrender.com/api/feedback", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ feedback })
    });
    const result = await res.json();
    res.ok ? alert("Feedback sent successfully!") : alert(`Failed to send feedback: ${result.error}`);
  } catch (error) { alert("Error occurred while sending feedback"); }
});

// Contact Form
document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const submitBtn = e.target.querySelector("button");
  submitBtn.disabled = true;
  submitBtn.innerText = "Sending...";

  const data = new FormData(e.target);
  try {
    const res = await fetch("https://programmer-bd-backend.onrender.com/api/contact", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        message: data.get("message")
      })
    });
    const result = await res.json();
    res.ok ? alert("Message sent successfully!") : alert(`Failed to send message: ${result.error}`);
  } catch (error) {
    alert("An error occurred. Please try again later.");
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerText = "Send";
  }
});

// Animation for toggle buttons
function animateToggle(element, targetPosition) {
  let startPosition = parseInt(element.style.left) || 0, distance = targetPosition - startPosition;
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

// Quality box toggle
const qualityBox = document.getElementById("quality_box");
document.getElementById("toggle-btn").addEventListener("click", () => {
  qualityBox.style.transform = qualityBox.style.transform === "scaleX(1)" ? "scaleX(0)" : "scaleX(1)";
  qualityBox.style.opacity = qualityBox.style.opacity === "1" ? "0" : "1";
});
