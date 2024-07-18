const profileImage = document.querySelector('.profile-image');
const colors = ['black', 'pink', 'green'];
let currentColorIndex = 0;

//Change color of border everytime it is hovered and unhovered.
function changeColor() {
    profileImage.style.boxShadow = `-1rem 1rem 0px var(--${colors[currentColorIndex]})`;
    profileImage.style.borderColor = `var(--${colors[currentColorIndex]})`;
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

profileImage.addEventListener('mouseenter', () => {
    profileImage.style.boxShadow = 'unset';
});

profileImage.addEventListener('mouseleave', changeColor);

changeColor();