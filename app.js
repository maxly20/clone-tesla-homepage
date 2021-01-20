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
