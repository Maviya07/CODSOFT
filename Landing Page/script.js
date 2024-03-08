document.addEventListener('DOMContentLoaded', function() {
    const toggleNavButton = document.getElementById('toggleNav');
    const navMenu = document.getElementById('navMenu');
    
    toggleNavButton.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  });