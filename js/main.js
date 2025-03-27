// JS scripts placed here
const trigger = document.querySelector('.fade-element');
const menu = document.getElementById('offcanvas-menu');
document.body.addEventListener('click', () => {
    console.log('clicked');

  trigger.classList.toggle('visible');
});