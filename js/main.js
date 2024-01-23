//Open and close btn for mobile menu
const menuBtn = document.getElementById('menu-btn');
const bars = document.querySelectorAll('.bar');
const mobileMenu = document.getElementById('menu');

menuBtn.addEventListener("click", () => {
    bars[0].classList.toggle("opened");
    bars[1].classList.toggle("opened");
    mobileMenu.classList.toggle('force-menu');
    mobileMenu.classList.toggle('fly-in-from-right');
    mobileMenu.classList.toggle('fly-out-to-right');
});


//Section control
document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.querySelector('ul');
    const sections = document.querySelectorAll('.section-display');
    const homeLogoLink = document.querySelectorAll('home-logo');


    navContainer.addEventListener('click', function(event) {
        let targetElement = event.target;

        if (targetElement.tagName === 'svg' || targetElement.closest('svg')) {
            const anchorElement = targetElement.closest('.nav-link');

            if (anchorElement) {
                anchorElement.click();
            }
        } else if (targetElement.classList.contains('nav-link')) {
            handleSectionTransition(event);
        }
    });

    // Add separate event listener for explore btn
    const newLink = document.getElementById('new-link');
    if (newLink) {
        newLink.addEventListener('click', event => {
            event.preventDefault();
            showProjectsSection();
        });
        const spanElement = newLink.querySelector('span');
        if (spanElement) {
            spanElement.addEventListener('click', () => {
                newLink.click();
            });
        }
    }
    function showProjectsSection() {
        sections.forEach(section => {
            section.classList.remove('intro', 'outro', 'flex-display');
        });
        const homeSection = document.getElementById('projects');
        if (homeSection) {
            homeSection.classList.add('intro', 'flex-display');
        }
    }


    // Add seperate event listener for home logo btn
    homeLogoLink.forEach(homeLogoLink => {
        homeLogoLink.addEventListener('click', event => {
            event.preventDefault();
            showHomeSection();
        });
    });


    // Function to show the Home section and hide other sections
    function showHomeSection() {
        sections.forEach(section => {
            section.classList.remove('intro', 'outro', 'flex-display');
        });
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.classList.add('intro', 'flex-display');
        }
    }

    function handleSectionTransition(event) {
        event.preventDefault();

        const targetSectionId = event.target.getAttribute('data-section');
        const currentSection = document.querySelector('.section-display:not(.outro');
        const targetSection = document.getElementById(targetSectionId);

        sections.forEach(section => {
            section.classList.remove('intro', 'outro', 'flex-display');
        });

        currentSection.classList.add('outro');

        setTimeout(() => {
            currentSection.classList.remove('outro', 'flex-display');
            targetSection.classList.add('intro', 'flex-display');
        }, 1000);
    }
});

//Read more
const readMoreBtn = document.querySelectorAll('.read-more');
const projectContainer = document.getElementById('dec-container');
const closeDescBtn = document.getElementById('close-dec');
let currentProject = null; // To keep track of the currently open project description

// Function to close the currently open project description
function closeCurrentProject() {
    if (currentProject) {
        currentProject.classList.add('hidden');
    }
}

closeDescBtn.addEventListener('click', () => {
    // Close the currently open project description
    closeCurrentProject();
    projectContainer.classList.remove('flex');
    projectContainer.classList.add('hidden');
});

readMoreBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const projectIdentifier = button.getAttribute('data-project');
        const projectContent = document.getElementById(`${projectIdentifier}-dec`);

        // Close the currently open project description
        closeCurrentProject();

        projectContainer.classList.remove('hidden');
        projectContainer.classList.add('flex');
        
        if (projectContent) {
            projectContent.classList.remove('hidden');
            currentProject = projectContent; // Set the current project to the newly opened one
        }
    });
});



//Job toggle buttons
const toggleButtons = document.querySelectorAll('.toggle-job');
let currentContent = document.getElementById('awsContent');
    
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);

      // Remove the active class from all buttons
      toggleButtons.forEach(btn => {
        btn.classList.remove('active-job');
      });

      // Add the active class to the clicked button
      button.classList.add('active-job');

      // Hide the previously shown content
      currentContent.classList.add('hidden');

      // Show the target content element
      targetContent.classList.remove('hidden');
      currentContent = targetContent;
    });
});


//Card and ul scaling
document.addEventListener("DOMContentLoaded", function () {
    const ulElement = document.getElementById("card-ul");
    const liElements = ulElement.querySelectorAll("li");

    // Function to scale a specific card and scale down others
    function scaleCard(li) {
        liElements.forEach((otherLi) => {
            if (otherLi !== li && otherLi.classList.contains("scaled")) {
                otherLi.classList.remove("scaled");
            }
        });
        li.classList.toggle("scaled");

        // Update the ulElement height based on whether any card is scaled
        const isAnyCardScaled = Array.from(liElements).some((li) =>
            li.classList.contains("scaled")
        );
        ulElement.style.height = isAnyCardScaled ? "480px" : "180px";

        document.getElementById("about").scrollTop = document.getElementById("about").scrollHeight;
    }

    // Click event handler for ul element (event delegation)
    function ulClickHandler(event) {
        const clickedLi = event.target.closest("li");

        if (clickedLi) {
            event.stopPropagation(); // Prevent click from propagating to document
            scaleCard(clickedLi);
        }
    }

    // Click event listener for the document (to scale down when clicking outside)
    function documentClickHandler(event) {
        liElements.forEach((li) => {
            if (!li.contains(event.target)) {
                li.classList.remove("scaled");
            }
        });
        ulElement.style.height = "180px"; // Set the ulElement height back to its initial value
    }

    // Check the window width and add/remove event listeners accordingly
    function checkWindowWidth() {
        if (window.innerWidth >= 769) {
            ulElement.addEventListener("click", ulClickHandler);
            document.addEventListener("click", documentClickHandler);
            ulElement.style.height = "180px"; // Reset the ulElement height
        } else {
            ulElement.removeEventListener("click", ulClickHandler);
            document.removeEventListener("click", documentClickHandler);
            ulElement.style.height = "100%"; // Set the ulElement height to 100%
        }
    }

    // Check for window width
    checkWindowWidth();

    // Listen for window resize events and adjust event listeners accordingly
    window.addEventListener("resize", checkWindowWidth);
});

// Easter egg on my about me image
function addEasterEggEvent() {
    const hoverImage = document.getElementById("hover-img");
  
    function handleHover() {
        hoverImage.style.opacity = 1;
        setTimeout(() => {
            hoverImage.style.opacity = 0;
        }, 1000);
    }

    hoverImage.addEventListener("click", handleHover);
}
  // Call the function to set up the event listeners
  addEasterEggEvent();
