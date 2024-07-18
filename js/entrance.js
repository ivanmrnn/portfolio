document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('[animation]');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    //Set the entrance animation depending on what animation was specified in the html
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationClass = entry.target.getAttribute('animation');
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});