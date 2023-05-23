// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the second typewriter element
    const secondTypewriter = document.getElementById("second-typewriter");
  
    // Hide the second typewriter initially
    secondTypewriter.style.display = "none";
  
    // Wait for the first typewriter animation to complete
    const firstTypewriter = document.querySelector(".typewriter");
    const firstTypewriterText = firstTypewriter.querySelector("h1");
    const firstTypewriterAnimationDuration = parseFloat(window.getComputedStyle(firstTypewriterText).animationDuration);
    const secondTypewriterDelay = firstTypewriterAnimationDuration * 1000;
  
    // Show the second typewriter after the delay
    setTimeout(function() {
      secondTypewriter.style.display = "block";
    }, secondTypewriterDelay);
  });
  


  