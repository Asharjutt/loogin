// JavaScript for toggling the mobile menu
document.querySelector('.hamburger').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show');
  });
