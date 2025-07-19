// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  
  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  if (themeToggle) {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  // Legacy typewriter code (if needed for other pages)
  const secondTypewriter = document.getElementById("second-typewriter");
  if (secondTypewriter) {
    // Hide the second typewriter initially
    secondTypewriter.style.display = "none";

    // Wait for the first typewriter animation to complete
    const firstTypewriter = document.querySelector(".typewriter");
    if (firstTypewriter) {
      const firstTypewriterText = firstTypewriter.querySelector("h1");
      if (firstTypewriterText) {
        const firstTypewriterAnimationDuration = parseFloat(window.getComputedStyle(firstTypewriterText).animationDuration);
        const secondTypewriterDelay = firstTypewriterAnimationDuration * 1000;

        // Show the second typewriter after the delay
        setTimeout(function() {
          secondTypewriter.style.display = "block";
        }, secondTypewriterDelay);
      }
    }
  }
});
