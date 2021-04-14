const hamburger = document.querySelector('.hamburger');
const times = document.querySelector('.times');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener("click", () => {
  mobileNav.classList.remove('no-show');
})

times.addEventListener("click", () => {
  mobileNav.classList.add('no-show');
})

const aboutLi = document.querySelector('.about-li');
const projectsLi = document.querySelector('.projects-li');
const contactLi = document.querySelector('.contact-li');

const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');

aboutLi.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
})
projectsLi.addEventListener("click", () => {
  window.scrollTo({ top: projects.offsetTop - 60, left: 0, behavior: 'auto' })
})
contactLi.addEventListener("click", () => {
  window.scrollTo({ top: contact.offsetTop, left: 0, behavior: 'auto' })
})