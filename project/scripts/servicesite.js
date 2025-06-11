// Sample project data
const projects = [
    { id: 1, name: "Community Clean-Up", date: "2025-07-01", category: "Environment", description: "Join us to clean up local parks and rivers." },
    { id: 2, name: "Food Drive", date: "2025-07-15", category: "Social", description: "Help collect and distribute food to families in need." },
    { id: 3, name: "Tree Planting", date: "2025-08-05", category: "Environment", description: "Plant trees in our local community forest." },
    { id: 4, name: "Literacy Program", date: "2025-08-20", category: "Education", description: "Support children's reading and writing skills." },
    { id: 5, name: "Senior Center Visits", date: "2025-09-10", category: "Social", description: "Visit with seniors and provide companionship." },
    { id: 6, name: "Community Garden", date: "2025-09-25", category: "Environment", description: "Help build and maintain a community garden." },
    { id: 7, name: "STEM Tutoring", date: "2025-10-05", category: "Education", description: "Provide math and science tutoring to local students." },
    { id: 8, name: "Blood Donation Drive", date: "2025-10-20", category: "Social", description: "Donate blood to support our local hospitals and patients." },
    { id: 9, name: "Beach Cleanup", date: "2025-11-01", category: "Environment", description: "Help remove litter and debris from the local beach." },
    { id: 10, name: "Career Fair Workshop", date: "2025-11-15", category: "Education", description: "Assist high school students in building resumes and practicing interviews." },
    { id: 11, name: "Animal Shelter Support", date: "2025-12-01", category: "Social", description: "Assist with pet adoption events and animal care." },
    { id: 12, name: "Recycling Awareness Campaign", date: "2025-12-10", category: "Environment", description: "Educate the community on reducing waste and recycling." },
    { id: 13, name: "After-School Tutoring", date: "2026-01-05", category: "Education", description: "Help students with homework and learning activities." },
    { id: 14, name: "Neighborhood Watch Meeting", date: "2026-01-20", category: "Social", description: "Strengthen community safety and awareness." },
    { id: 15, name: "Habitat Restoration", date: "2026-02-01", category: "Environment", description: "Restore and protect local habitats and wildlife areas." },
    { id: 16, name: "English Conversation Club", date: "2026-02-15", category: "Education", description: "Help non-native speakers practice English conversation." },
    { id: 17, name: "Soup Kitchen Volunteer", date: "2026-03-05", category: "Social", description: "Serve meals and support those in need." },
    { id: 18, name: "School Supply Drive", date: "2026-03-20", category: "Education", description: "Collect and distribute school supplies for children." },
    { id: 19, name: "Community Composting", date: "2026-04-01", category: "Environment", description: "Teach composting and reduce food waste." },
    { id: 20, name: "Youth Leadership Workshop", date: "2026-04-15", category: "Education", description: "Empower young people with leadership skills." }
];

// Function to render projects to the Projects page
function renderProjects(filterCategory = "") {
    const projectList = document.getElementById("project-list");
    if (!projectList) return;

    projectList.innerHTML = "";

    let filteredProjects = projects;
    if (filterCategory) {
        filteredProjects = projects.filter(proj => proj.category === filterCategory);
    }

    filteredProjects.sort((a, b) => new Date(a.date) - new Date(b.date));

    filteredProjects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p><strong>Date:</strong> ${project.date}</p>
            <p><strong>Category:</strong> ${project.category}</p>
            <p>${project.description}</p>
            <a href="volunteer.html?project=${encodeURIComponent(project.name)}" class="cta-button">Volunteer</a>
        `;
        projectList.appendChild(projectCard);
    });

    if (filteredProjects.length === 0) {
        projectList.innerHTML = "<p>No projects found for the selected category.</p>";
    }
}

// Function to render the next two upcoming projects on the homepage
function renderNextProjects() {
    const nextProjectsSection = document.getElementById("next-projects");
    if (!nextProjectsSection) return;

    const upcoming = [...projects].sort((a, b) => new Date(a.date) - new Date(b.date));
    const nextTwo = upcoming.slice(0, 2);

    nextProjectsSection.innerHTML = "";

    nextTwo.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p><strong>Date:</strong> ${project.date}</p>
            <p><strong>Category:</strong> ${project.category}</p>
            <p>${project.description}</p>
            <a href="volunteer.html?project=${encodeURIComponent(project.name)}" class="cta-button">Volunteer</a>
        `;
        nextProjectsSection.appendChild(projectCard);
    });
}

// Function to handle contact form submission
function handleFormSubmission() {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            const submission = { name, email, message, date: new Date().toISOString() };

            let submissions = JSON.parse(localStorage.getItem("contactSubmissions")) || [];
            submissions.push(submission);
            localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

            alert("Thank you for contacting us! We will get back to you soon.");
            contactForm.reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
}

// Function to handle volunteer form
function handleVolunteerForm() {
    const projectInput = document.getElementById("projectName");
    if (!projectInput) return; // Exit if not on the volunteer page

    // Prefill project name from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectName = urlParams.get("project");
    if (projectName) {
        projectInput.value = decodeURIComponent(projectName);
    }

    // Handle form submission
    const volunteerForm = document.getElementById("volunteerForm");
    volunteerForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const project = projectInput.value;

        if (name && email && project) {
            const submission = {
                project,
                name,
                email,
                message,
                date: new Date().toISOString()
            };

            let volunteers = JSON.parse(localStorage.getItem("volunteerSignUps")) || [];
            volunteers.push(submission);
            localStorage.setItem("volunteerSignUps", JSON.stringify(volunteers));

            alert("Thank you for signing up to volunteer!");
            volunteerForm.reset();
        } else {
            alert("Please fill out all required fields.");
        }
    });
}

// Function to initialize the page
function init() {
    renderProjects();
    handleFormSubmission();
    renderNextProjects();
    handleVolunteerForm();

    const categoryFilter = document.getElementById("categoryFilter");
    if (categoryFilter) {
        categoryFilter.addEventListener("change", function () {
            const selectedCategory = this.value;
            renderProjects(selectedCategory);
        });
    }
}

document.addEventListener("DOMContentLoaded", init);
