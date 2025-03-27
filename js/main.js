// JS scripts placed here
const trigger = document.querySelector('.fade-element');
const menu = document.getElementById('offcanvas-menu');
document.body.addEventListener('click', () => {
    console.log('clicked');
//   const expanded = trigger.getAttribute('aria-expanded') === 'true' || false;
//   trigger.setAttribute('aria-expanded',!expanded);
  trigger.classList.toggle('visible');
});