// If you need JavaScript functionality, you can add it here
// For example, you can add smooth scrolling to the navigation links:

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
          behavior: 'smooth'
        });
      });
    });
  });
  