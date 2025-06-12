// Show project description dynamically
function showProject(description) {
  const descBox = document.getElementById("project-description");
  descBox.textContent = description;
}

// Handle contact form submission
function handleSubmit(event) {
  event.preventDefault();
  const messageBox = document.getElementById("message");
  messageBox.textContent = "Thanks for reaching out! I will get back to you soon.";
  messageBox.style.color = "green";

  // Optionally reset the form
  event.target.reset();
}

// Optional: Smooth scroll for internal links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: "smooth"
    });
  });
});
