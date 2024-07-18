document.addEventListener('DOMContentLoaded', () => {
    const scrollDown = document.querySelector('.scroll-down');
    const scrollLine = document.querySelector('.scroll-line');
    const scrollText = document.querySelector('.scroll-text');
    let hasScrolled = false;
    let growStart = false;
    let growFinish = false;

    // Function to hide the scroll-down element
    function hideScrollDown() {
        scrollDown.classList.add('hidden');
    }

    // Function to shrink the scroll-line element
    function shrinkScrollLine() {
        scrollLine.classList.add('shrink');
    }

    // Function to fade out the scroll-text element
    function fadeOutScrollText() {
        scrollText.classList.add('fade-out');
    }

    // Function to show the scroll-down element
    function showScrollDown() {
        scrollDown.classList.remove('hidden');
    }

    // Function to handle the initial scroll position check
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

    // Handle animation end event to fade out text after line shrinks
    scrollLine.addEventListener('animationend', (event) => {
        if (event.animationName === 'shrinkLine') {
            fadeOutScrollText();
        }
    });

    checkInitialScroll();

    // Listen for scroll events
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