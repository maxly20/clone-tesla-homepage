const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav__burger');
  const navLinks = document.querySelectorAll('.nav__burger li');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
};

navSlide();

// ADDING GSAP

gsap.from('#section_0 .content h1', {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  y: 20,
});
gsap.from('#section_0 .content p', {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 10,
});
gsap.from('#section_0 .buttons .options', {
  opacity: 0,
  duration: 1,
  delay: 1.5,
  x: 200,
});
gsap.from('.navigator', { opacity: 0, duration: 1, delay: 2, y: -50 });
