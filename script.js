const toggleBtn = document.getElementById('menu-toggle');
const menuIcon = document.getElementById('menu-icon');

toggleBtn.addEventListener('click', () => {
    if (menuIcon.classList.contains('fa-bars')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-xmark'); // switch to X icon
    } else {
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars'); // switch back to hamburger
    }
});