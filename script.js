//select fa hamburger
//listen for a click on the hamburger
//remove mobile hidden class from the menu

const hamburger = document.querySelector('.fa-hamburger');
const hiddenul = document.querySelector('ul');

hamburger.addEventListener("click", function() {
hiddenul.classList.toggle('is-hidden--mobile');
});
