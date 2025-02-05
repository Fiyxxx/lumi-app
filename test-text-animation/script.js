// script.js
const texts = [
    "Ace that Chemistry test.",
    "Top your Biology class.",
    "Unleash your Potential."
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
    const speed = isDeleting ? 30: 50; // Typing speed: 100ms, Deleting: 50ms
    setTimeout(typeEffect, speed);
}

// Start the animation on page load
document.addEventListener("DOMContentLoaded", typeEffect);
