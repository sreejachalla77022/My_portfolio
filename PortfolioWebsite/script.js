console.log("JavaScript Connected Successfully");

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const darkModeBtn = document.getElementById("darkModeBtn");
const changeTextBtn = document.getElementById("changeTextBtn");
const welcomeText = document.getElementById("welcomeText");

const showSkillsBtn = document.getElementById("showSkillsBtn");

// Form Validation

function showError(message) {
    formMessage.style.color = "red";
    formMessage.textContent = message;
}

function showSuccess(message) {
    formMessage.style.color = "green";
    formMessage.textContent = message;
}

function validateForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        showError("Name cannot be empty");
        return;
    }

    if (!email.includes("@")) {
        showError("Please enter a valid email address");
        return;
    }

    if (message.length < 10) {
        showError("Message must be at least 10 characters");
        return;
    }

    showSuccess("Message sent successfully!");
    form.reset();
}

// Dark Mode

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️";
    } else {
        darkModeBtn.textContent = "🌙";
    }

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );
}

// Welcome Message

function showWelcome() {

    const messages = [
        "Welcome to my Portfolio Website!",
        "Thank you for visiting my portfolio.",
        "I am passionate about Web Development.",
        "Let's connect and grow together!"
    ];

    const randomIndex =
        Math.floor(Math.random() * messages.length);

    welcomeText.textContent =
        messages[randomIndex];
}

// Skill Animation

function animateSkills() {

    animateBar("htmlBar", 90);
    animateBar("cssBar", 85);
    animateBar("jsBar", 70);
}

function animateBar(id, target) {

    const bar = document.getElementById(id);

    let width = 0;

    const interval = setInterval(() => {

        if (width >= target) {
            clearInterval(interval);
        } else {
            width++;

            bar.style.width = width + "%";
            bar.textContent = width + "%";
        }

    }, 20);
}

// Event Listeners

form.addEventListener("submit", validateForm);

darkModeBtn.addEventListener(
    "click",
    toggleDarkMode
);

changeTextBtn.addEventListener(
    "click",
    showWelcome
);

showSkillsBtn.addEventListener(
    "click",
    animateSkills
);

// Load Saved Theme

if (localStorage.getItem("darkMode") === "true") {

    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️";
}