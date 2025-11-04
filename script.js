function enterLibrary() {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = "library.html";
  }, 1000);
}

// Fade transition animation
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add('fade-in');
});
