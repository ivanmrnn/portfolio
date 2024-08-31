# Key Features

This section highlights the key features that include a bit of complexity.

**Summary**

| **Feature**                       | **Description**                                                                                                                  |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| [Greetings](#greetings)           | The greeting "*Hi! I'm Ivan*" is presented with a typewriting animation effect.                                                  |
| [Profile Border](#profile-border) | Box Shadow of the profile image goes through each of the color in the color pallette except white when it is clicked or hovered. |
| [Social Links](#social-links)      | The social links when hovered changes color and displays its name.                                                               |
| [Scroll Tip](#scroll-tip)         | Display the animation that indicate to the user that they should scroll down.                                                    |


## Greetings

**HTML**

    <div class="greetings-container">
        <span class="greetings text-large bold">Hi! I'm Ivan</span>
    </div>

**CSS**

    .greetings-container{
        display: inline-block;
        width: fit-content;
    }

    .greetings {
        display: inline-block;
        line-height: 1.2;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        padding-right: 10px;
        border-right: 8px solid var(--black);
        animation: typing 1.3s steps(13), cursor .6s step-end infinite alternate;
    }

    @keyframes cursor {
        50% { border-color: transparent}
    }

    @keyframes typing {
        from { width: 0}    
    }

The typing effect is created by gradually increasing the width of the text container in 13 steps all in the duration of 1.3 seconds, making the text appear as if it's being typed. 

The blinking cursor effect is achieved by alternating the visibility of the right border, simulating the appearance of a blinking cursor at the end of the text.

## Profile Border

**HTML**

    div class="profile flex justify-center align-center">
        <img class="profile-image" src="/images/portfolio/profile.jpg" alt="profile" animation="fade-in-down">
    </div>

**CSS**

    .profile-image {
        height: 300px;
        box-shadow: -1rem 1rem 0px var(--black);
        border: 1px solid var(--black);
        transition: box-shadow 0.3s ease-in-out; 
    }

    .profile-image:hover, .profile-image:active {
        box-shadow: unset;
    }

**JavaScript**

    const profileImage = document.querySelector('.profile-image');
    const colors = ['black', 'pink', 'green'];
    let currentColorIndex = 0;

    //Change color of border everytime it is hovered and unhovered.
    function changeColor() {
        if (window.innerWidth > 496) {
            profileImage.style.boxShadow = `-1rem 1rem 0px var(--${colors[currentColorIndex]})`;
        } else {
            profileImage.style.boxShadow = `-10px 10px 0px var(--${colors[currentColorIndex]})`;
        }
        profileImage.style.borderColor = `var(--${colors[currentColorIndex]})`;
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }


    profileImage.addEventListener('mouseenter', () => {
        profileImage.style.boxShadow = 'unset';
    });

    profileImage.addEventListener('mouseleave', changeColor);

    profileImage.addEventListener('click', () => {
        profileImage.style.boxShadow = 'unset';
        changeColor();
    });

    changeColor();

| **Key Variables** | **Description**                                      |
|-------------------|------------------------------------------------------| 
| profileImage      | Refers to the profile image element.                 |
| colors            | An array containing the colors (black, pink, green). |
| currentColorIndex | Tracks the current color in the color cycle.         |

| **Functions** | **Description**                                                                         |
|---------------|-----------------------------------------------------------------------------------------| 
| changeColor() | Updates the border and box-shadow colors and adjusts the size based on the screen width |

The profile image starts with a black box shadow and border.

When hovered over or clicked, the shadow is temporarily removed.

Upon leaving the image area or after clicking, the shadow and border colors cycle between black, pink, and green.

The box shadow gets smaller in smaller screen sizes

## Social Links

**HTML** 

    <section class="social-links flex column big-gap">
        <a href="https://www.facebook.com/ivan.maranan.9/" target="_blank">
            <button class="social-media flex justify-center align-center facebook pointer" data-tooltip="Facebook" aria-label="Facebook Profile Link">
                <svg></svg>
            </button>
        </a>
    </section>

**CSS** 

    .social-links {
        position: fixed;
        left: 4rem;
        bottom: 12rem;
        width: 50px;
    }

    .social-media {
        position: relative;
        z-index: 0;
        height: 72px;
        width: 72px;
        border-radius: 50px;
        border: none;
        background: white;
        transition: 0.1s;
        overflow: visible;
    }

    .social-media svg path {
        transition: fill 0.5s ease;
        fill: var(--black);
    }

    .social-media:hover svg path {
        fill: white;
    }

    .social-media:active {
        transform: scale(0.85);
    }

    /* Sets the social media button effect to 0px and positioned behind the button */
    .social-media::before {
        content: "";
        position: absolute;
        width: 0px;
        height: 0px;
        background-color: #1877f2;
        border-radius: 50px;
        z-index: -1;
        border: 0px solid rgba(255, 255, 255, 0.411);
        transition: 0.4s;
    }

    .social-media.facebook::before {
        background: #1877f2;
    }

    /* Expands the circle around the social media button */
    .social-media:hover::before {
        width: 70px;
        height: 70px;
    }

The pseudo-element `.social-media::before:` is a 0px circle positioned behind the button. 

Once hovered, the circle expands to 70px by 70px.

    /* Displays the tooltip sliding from behind to the right of the button */
    .social-media::after {
        content: attr(data-tooltip);
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        color: #1877f2;
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 20px;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s, transform 0.5s;
    }

    .social-media.facebook::after {
        color: #1877f2;
    }

    @keyframes slideFromBehind {
        0% {
            opacity: 0;
            transform: translateY(-50%) translateX(-20px);
        }
        100% {
            opacity: 1;
            transform: translateY(-50%) translateX(10px);
        }
    }

    .social-media:hover::after {
        animation: slideFromBehind 0.5s forwards ease;  
    }

The pseudo-element `.social-media::after:` creates the tooltip that slides from behind to the right of the social media button.


## Scroll Tip



**HTML**

    <div class="scroll-down flex column justify-center align-center gap">
        <div class="scroll-line"></div>
        <div class="scroll-text">
            <span>Scroll</span>
        </div>
    </div>

**CSS**

    .scroll-down {
        position: fixed;
        bottom: 10rem;
        right: 4rem;
        width: fit-content;
        height: 380px;
        overflow: hidden;
    }

    .scroll-line {
        height: 100%;
        width: 1px;
        background-color: #616162;
        transform: translateY(-100%);
        animation: growLine 2s ease-out forwards;
        animation-delay: 2.5s;
    }

    .scroll-text {
        opacity: 0;
        animation: fadeIn 1s ease-in forwards;
        animation-delay: 4.5s; 
    }

    .scroll-text {
        color: #616162;
    }

    @keyframes growLine {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes shrinkLine {
        0% {
            transform: scaleY(1); /* Full height */
            transform-origin: bottom; /* Scale from the top */
        }
        100% {
            transform: scaleY(0); /* Shrink to zero height */
            transform-origin: bottom; /* Scale from the top */
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    .scroll-down.hidden {
        display: none;
    }


    .scroll-line.shrink {
        animation: shrinkLine 1.4s forwards;
        transform-origin: top;
    }

    .scroll-text.fade-out {
        animation: fadeOut 0.4s ease-in forwards;
    }

**JavaScript**

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

| **Key Variables** | **Description**                                                   |
|-------------------|-------------------------------------------------------------------| 
| scrollDown        | Refers to the scroll-down indicator element.                      |
| scrollLine        | Refers to the line element inside the scrollDown element.         |
| scrollText        | Refers to the text that appears at the bottom of the scroll line. |
| hasScrolled       | Tracks if the user has scrolled the page.                         |
| growStart         | Tracks if the scroll line's grow animation has started.           |
| growFinish        | Tracks if the scroll line's grow animation has finished.          |

| **Functions**        | **Description**                                                 |
|----------------------|-----------------------------------------------------------------|
| hideScrollDown()     | Hides the scroll-down indicator.                                |
| shrinkScrollLine()   | Triggers the shrinking animation for the scroll line.           |
| fadeOutScrollText()  | Triggers the fading-out animation for the scroll text.          |
| showScrollDown()     | Displays the scroll-down indicator.                             |
| checkInitialScroll() | Displays the scroll-down indicator if the user has not scrolled |

**Scroll Event Handling**

If the user scrolls before the animation starts, the scroll-down indicator is hidden.

If the user scrolls while the animation is in progress, it completes the animation and then hides the scroll-down indicator.

If the user scrolls after the animation has finished, the scroll line shrinks.
