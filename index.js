const hamburger = document.querySelector('.hamburger');
const times = document.querySelector('.times');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener("click", () => {
  mobileNav.classList.remove('no-show');
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
})

times.addEventListener("click", () => {
  mobileNav.classList.add('no-show');
})

const aboutMob = document.getElementById('about-mobile');
const projectMob = document.getElementById('projects-mobile');
const contactMob = document.getElementById('contact-mobile');

aboutMob.addEventListener("click", () => {
  mobileNav.classList.add('no-show');
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
})
projectMob.addEventListener("click", () => {
  mobileNav.classList.add('no-show');
  window.scrollTo({ top: projects.offsetTop - 60, left: 0, behavior: 'smooth' })
})
contactMob.addEventListener("click", () => {
  mobileNav.classList.add('no-show');
  window.scrollTo({ top: contact.offsetTop - 60, left: 0, behavior: 'smooth' })
})

const aboutLi = document.querySelector('.about-li');
const projectsLi = document.querySelector('.projects-li');
const contactLi = document.querySelector('.contact-li');

const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');

aboutLi.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
})
projectsLi.addEventListener("click", () => {
  window.scrollTo({ top: projects.offsetTop - 60, left: 0, behavior: 'smooth' })
})
contactLi.addEventListener("click", () => {
  window.scrollTo({ top: contact.offsetTop - 60, left: 0, behavior: 'smooth' })
})