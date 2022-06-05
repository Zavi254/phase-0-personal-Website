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