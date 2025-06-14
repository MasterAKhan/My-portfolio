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

<<<<<<< Updated upstream
// Optional: Smooth scroll for internal links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
=======
sections.forEach((section, index) => {
  if (index < sections.length - 1) {
    // Smoother outgoing animation for current section
    gsap.fromTo(
      section,
      { 
        rotateY: '0deg',
        opacity: 1,
        z: 0
      },
      {
        rotateY: '-90deg',
        transformOrigin: 'right center',
        opacity: 0.3,
        z: -100,
        ease: "sine.inOut", // Smoother sine easing
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5, // Slightly higher value for smoother scrubbing
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: true,
        },
      }
    );
    
    // Smoother incoming animation for next section
    if (index < sections.length - 1) {
      const nextSection = sections[index + 1];
      gsap.fromTo(
        nextSection,
        { 
          rotateY: '90deg',
          opacity: 0.3,
          z: -100
        },
        {
          rotateY: '0deg',
          transformOrigin: 'left center',
          opacity: 1,
          z: 0,
          ease: "sine.inOut", // Smoother sine easing
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5, // Matched scrub value for consistency
            preventOverlaps: true,
          },
        }
      );
    }
  }
});

// Animate section entrances with fade/slide/3D effect
sections.forEach(section => {
  gsap.fromTo(section, {
    opacity: 0,
    y: 60,
    scale: 0.98,
    rotateY: 8
  }, {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    duration: 1.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleClass: 'visible',
      once: true
    }
  });
});

// Scroll to top button logic
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
>>>>>>> Stashed changes
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: "smooth"
    });
  });
});
<<<<<<< Updated upstream
=======

// Contact form feedback animation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = 'Sending...';
    gsap.to('.contact-btn', { scale: 0.95, duration: 0.2, yoyo: true, repeat: 1 });
    setTimeout(() => {
      status.textContent = 'Thank you! Your message has been sent.';
      gsap.to('.contact-btn', { scale: 1.1, backgroundColor: '#4CAF50', color: '#fff', duration: 0.4, yoyo: true, repeat: 1 });
      contactForm.reset();
    }, 1200);
  });
}

function showProject(description) {
  document.getElementById('project-description').textContent = description;
}
>>>>>>> Stashed changes
