const menu = document.querySelector('.menu')
const navLinks = document.querySelector('.nav-links')

menu.addEventListener('click', () => {
  navLinks.classList.contains('show')
    ? navLinks.classList.toggle('show')
    : navLinks.classList.add('show')
})