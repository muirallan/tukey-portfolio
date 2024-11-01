// JavaScript to toggle dark mode
document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Dark Mode";
  toggleButton.style.margin = "20px";
  toggleButton.style.padding = "10px";
  document.body.prepend(toggleButton);

  toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
});

// Add CSS for dark mode
const style = document.createElement("style");
style.textContent = `
  .dark-mode {
    background-color: #000000; /* Black background */
    color: #ffffff; /* White text */
  }
  .dark-mode .resume-container {
    background-color: #333; /* Dark grey */
  }
  .dark-mode .skill-box {
    background-color: #444; /* Darker grey */
  }
`;
document.head.append(style);
