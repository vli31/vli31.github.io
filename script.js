// Sample project data
const projects = [
    {
        title: "AI-Powered Chess Tutor",
        description: "An intelligent chess tutor that uses machine learning to analyze games and provide personalized feedback.",
        image: "chess-tutor.jpg",
        category: "ai",
        github: "https://github.com/janesmith/chess-tutor",
        demo: "https://chess-tutor-demo.com"
    },
    {
        title: "Eco-Friendly Route Planner",
        description: "A web application that helps users plan their routes with a focus on minimizing carbon footprint.",
        image: "eco-route-planner.jpg",
        category: "web",
        github: "https://github.com/janesmith/eco-route-planner",
        demo: "https://eco-route-planner.com"
    },
    {
        title: "Study Buddy Mobile App",
        description: "A mobile application that helps students organize their study schedules and connect with study partners.",
        image: "study-buddy-app.jpg",
        category: "mobile",
        github: "https://github.com/janesmith/study-buddy-app",
        demo: "https://study-buddy-app.com"
    }
    // Add more projects as needed
];

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project-card" data-category="${project.category}">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
            </div>
        </div>
    `;
}

// Function to filter projects
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to handle smooth scrolling
function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth'
    });
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Populate projects
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        projectsGrid.innerHTML += createProjectCard(project);
    });

    // Add event listeners for project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.filter;
            filterProjects(category);
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Add event listeners for smooth scrolling
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScroll(target);
        });
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.elements.name.value;
        const email = contactForm.elements.email.value;
        const message = contactForm.elements.message.value;

        if (name && email && message) {
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});

// Sticky navigation
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 100) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});