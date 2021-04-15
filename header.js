const hamburger = document.querySelector('.hamburger');
const times = document.querySelector('.times');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener("click", () => {
  mobileNav.classList.remove('no-show');
})

times.addEventListener("click", () => {
  mobileNav.classList.add('no-show');
})