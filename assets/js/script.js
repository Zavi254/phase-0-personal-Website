// Navigation button for the mobile toggler

const buttonToggler = document.getElementById('buttonToggler');
const closeButton = document.getElementById('closeButton');
const mobileHiddenLinks = document.getElementById('desktopNavbarSection');

buttonToggler.addEventListener("click", function(){
    closeButton.style.display = "block";
    buttonToggler.style.display = "none";
    mobileHiddenLinks.style.display = "block"
});

closeButton.addEventListener("click", function(){
    buttonToggler.style.display  ="block";
    closeButton.style.display = "none";
    mobileHiddenLinks.style.display = "none";
});

// Animation for the cards

const firstCard = document.getElementById('firstCard');
const secondCard = document.getElementById('secondCard');
const thirdCard = document.getElementById('thirdCard');


firstCard.addEventListener("click", function(){
    firstCard.style.animationName = 'rotate';
    firstCard.style.animationDuration = '3s';
});

secondCard.addEventListener("click", function(){
    secondCard.style.animationName = 'rotate';
    secondCard.style.animationDuration = '3s';
});

thirdCard.addEventListener("click", function(){
    thirdCard.style.animationName = 'rotate';
    thirdCard.style.animationDuration = '3s';
})

const thankYou = () => {
    alert("Kindly wait for a response!")
}