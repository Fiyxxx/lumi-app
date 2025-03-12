const texts = [
    "Ace that Chemistry Test.",
    "Top your Biology Class.",
    "Unleash your Potential.",
    "Become the Academic MVP."
]; // 🔹 List of texts to cycle through

let textIndex = 0; // Tracks current text in rotation
let charIndex = 0; // Tracks current character in text
let isDeleting = false; // Controls typing vs deleting mode

const container = document.getElementById("typing-text");

function typeEffect() {
    const currentText = texts[textIndex]; // Get current text to type

    if (!isDeleting) {
        // Typing: Add one letter at a time
        container.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        // If full text is typed, wait before deleting
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // Pause for 2s before deleting
            return;
        }
    } else {
        // Deleting: Remove one letter at a time
        container.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        // If text is fully deleted, move to next text
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // Cycle to next text
        }
    }

    // Adjust typing/deleting speed
    const speed = isDeleting ? 30: 50; // Typing speed: 50ms, Deleting: 30ms
    setTimeout(typeEffect, speed);
}

// Start the animation on page load
document.addEventListener("DOMContentLoaded", typeEffect);

document.addEventListener("DOMContentLoaded", function () {
    const texts = document.querySelectorAll(".animated-text");

    gsap.fromTo(
        texts,
        { opacity: 0, filter: "blur(10px)", y: 10 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 2, ease: "power2.out", stagger: 0.2 }
    );
});

//replace get started button with profile pic when logged in
document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = false; // Change this to true when user is logged in
    const getStartedBtn = document.getElementById("get-started-btn");
    const profileContainer = document.getElementById("profile-container");

    if (isLoggedIn) {
        getStartedBtn.classList.add("hidden"); // Hide the Get Started button
        profileContainer.classList.remove("hidden"); // Show the Profile Picture
    } else {
        getStartedBtn.classList.remove("hidden"); // Show Get Started button
        profileContainer.classList.add("hidden"); // Hide Profile Picture
    }
});

// To toggle between the log in and sign up in sign up page
function showContent(sectionId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    const activeContent = document.getElementById(sectionId);
    if (activeContent) {
            activeContent.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");
    if (section) {
        showContent(section);
        document.getElementById("login-page").checked = true;
        document.getElementById("sign-up-page").checked = false;
    }
});

const toggleIcons = document.querySelectorAll(".toggle-icon");

toggleIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
        const passwordField = icon.previousElementSibling;

        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
          } else {
            passwordField.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
          }
        });
      });

