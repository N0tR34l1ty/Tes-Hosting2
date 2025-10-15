// ==== Typing Animation ====
const typingElement = document.getElementById("typing");
const words = ["Web Developer", "Cyber Security Enthusiast", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 80 : 120);
}
document.addEventListener("DOMContentLoaded", typeEffect);

// ==== Animate skill bars ====
const skillBars = document.querySelectorAll(".progress-bar");
window.addEventListener("scroll", () => {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = bar.getAttribute("data-value") + "%";
    }
  });
});

// ==== Modal for Projects ====
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");

function openModal(title) {
  modal.style.display = "block";
  modalTitle.textContent = title;
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target === modal) {
    closeModal();
  }
}

// ==== Contact Form Validation ====
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Harap isi semua field!");
    return;
  }
  if (!email.includes("@")) {
    alert("Email tidak valid!");
    return;
  }
  alert("Pesan berhasil dikirim!");
  this.reset();
});