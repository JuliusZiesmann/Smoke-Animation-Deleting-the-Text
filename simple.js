const container = document.querySelector('.hole'); // Container for the black hole effect
    const blackHole = document.getElementById('black-hole'); // The black hole element
    const texts = container.querySelectorAll('.text'); // Text elements within the container

    // Function to create smoke particles
    function createSmoke() {
        const smoke = document.createElement('div');
        smoke.classList.add('smoke'); // Assigns the smoke class for styling

        // Random delay and position for dynamic effect
        smoke.style.animationDelay = `${Math.random() * 2}s`;
        smoke.style.left = `${Math.random() * 30 - 15}px`; // Random horizontal offset
        smoke.style.top = `${Math.random() * 30 - 15}px`; // Random vertical offset

        blackHole.appendChild(smoke); // Adds smoke to the black hole element

        // Removes smoke after animation ends
        setTimeout(() => smoke.remove(), 3000);
    }

    // Tracks mouse movement within the container
    container.addEventListener('mousemove', (event) => {
        blackHole.style.display = 'block'; // Displays the black hole

        // Updates the position of the black hole
        blackHole.style.left = `${event.pageX}px`;
        blackHole.style.top = `${event.pageY}px`;

        createSmoke(); // Creates smoke particles
    });

    // Hides the black hole when the mouse leaves the container
    container.addEventListener('mouseleave', () => {
        blackHole.style.display = 'none';
    });

    // Animates text when hovering over individual letters
    texts.forEach(text => {
        if (text) {
            // Wraps each letter in a <span>
            text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

            // Adds hover event to each letter
            text.addEventListener('mouseover', function (event) {
                if (event.target.tagName !== 'SPAN') return; // Ensures only spans are targeted
                event.target.classList.add('activeZ'); // Triggers animation
            });
        } else {
            console.error('One of the elements not found.'); // Logs missing elements
        }
    });
