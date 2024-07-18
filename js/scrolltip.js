document.addEventListener('DOMContentLoaded', () => {
    const scrollDown = document.querySelector('.scroll-down');
    const scrollLine = document.querySelector('.scroll-line');
    const scrollText = document.querySelector('.scroll-text');
    let hasScrolled = false;
    let growStart = false;
    let growFinish = false;

    function hideScrollDown() {
        scrollDown.classList.add('hidden');
    }

    function shrinkScrollLine() {
        scrollLine.classList.add('shrink');
    }

    function fadeOutScrollText() {
        scrollText.classList.add('fade-out');
    }

    function showScrollDown() {
        scrollDown.classList.remove('hidden');
    }

    //If the user is at the start of the screen when the page is loaded then display the animation else do not.
    function checkInitialScroll() {
        if (window.scrollY > 0) {
            hasScrolled = true;
            hideScrollDown();
        } else {
            showScrollDown();
            setTimeout(() => {
                growStart = true;
            }, 2500);

            setTimeout(() => {
                growFinish = true;
            }, 4500);
        }
    }

    // Fade out text after line shrinks
    scrollLine.addEventListener('animationend', (event) => {
        if (event.animationName === 'shrinkLine') {
            fadeOutScrollText();
        }
    });

    checkInitialScroll();

    /* If the user scrolled before the scroll animation starts then don't show it. If the user scrolled while the animation is taking place then 
    finish the animation and shrink it. If the animation finished then the user scrolled then shrink it. */
    window.addEventListener('scroll', () => {
        if (!hasScrolled && !growStart) {
            hasScrolled = true;
            hideScrollDown();
        } else if (!hasScrolled && growStart && !growFinish) {
            showScrollDown();
            setTimeout(() => {
                shrinkScrollLine();
            }, 2000);
        } else if (!hasScrolled && growStart && growFinish) {
            shrinkScrollLine();
        }
    });
});