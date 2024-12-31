// Toggle icon for the navbar (hamburger to X and vice versa)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle the mobile menu on click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');   // Change hamburger to 'X' icon
    navbar.classList.toggle('active');   // Show or hide the navbar
}

// Scroll-based interaction for sections and navigation links
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Loop through each section
    sections.forEach(sec => {
        let top = window.scrollY;  // Current scroll position
        let offset = sec.offsetTop - 100;  // Section's offset from the top, adjusted for 100px margin
        let height = sec.offsetHeight;  // Height of the section
        let id = sec.getAttribute('id');  // ID of the section (used for matching with links)

        // Check if the section is in the viewport
        if (top >= offset && top < offset + height) {
            // Highlight the corresponding nav link
            navlinks.forEach(links => {
                links.classList.remove('active');  // Remove 'active' class from all links
                // Add 'active' class to the link that corresponds to the current section
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // Add animation class to the section when it enters the viewport
            sec.classList.add('show-animate');
        } else {
            // Remove animation class when the section is out of view
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header functionality
    let header = document.querySelector('header');
    // Toggle 'sticky' class when the scroll position is more than 100px
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove the toggle icon and navbar when clicking on a navbar link (closes the menu)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Footer animation when reaching the bottom of the page
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};
