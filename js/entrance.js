// Wait for the DOM content to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {

    // Select all elements in the DOM that have the 'animation' attribute
    const elementsToAnimate = document.querySelectorAll('[animation]');

    // Define the callback function for the IntersectionObserver, which handles element visibility
    const observerCallback = (entries, observer) => {

        // Loop through each element that is being observed
        entries.forEach(entry => {

            // If the element is visible
            if (entry.isIntersecting) {

                // Get the value of the 'animation' attribute from the element
                const animationClass = entry.target.getAttribute('animation');

                // Add the animation class to the element
                entry.target.classList.add(animationClass);

                // Stop observing the element after the animation is triggered
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the observer that watches when elements become visible
    const observer = new IntersectionObserver(observerCallback);

    // Go through all elements with the 'animation' attribute
    elementsToAnimate.forEach(element => {

        // Observe each element to trigger animations when they appear
        observer.observe(element);
    });

    });