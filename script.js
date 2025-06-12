gsap.registerPlugin(ScrollTrigger);

// Set smooth scrolling
gsap.config({
  force3D: true
});

const sections = document.querySelectorAll('.section');

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

// Add smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

function showProject(description) {
  document.getElementById('project-description').textContent = description;
}
