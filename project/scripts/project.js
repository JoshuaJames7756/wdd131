// Programming Tips Array

const tips = [
    "Practice coding every day, even for 15 minutes.",
    "Build small projects to improve your skills.",
    "Read documentation regularly.",
    "Debug your code step by step.",
    "Learn HTML before CSS and JavaScript.",
    "Use version control with Git and GitHub."
];

// Resource Objects Array

const resources = [
    {
        title: "MDN Web Docs",
        category: "HTML",
        description: "Official documentation for web technologies."
    },
    {
        title: "W3Schools",
        category: "CSS",
        description: "Interactive tutorials and examples."
    },
    {
        title: "freeCodeCamp",
        category: "JavaScript",
        description: "Free coding lessons and certifications."
    },
    {
        title: "BYU Pathway",
        category: "HTML",
        description: "Online learning resources and courses."
    },
    {
        title: "CSS Tricks",
        category: "CSS",
        description: "Helpful CSS articles and guides."
    },
    {
        title: "JavaScript Info",
        category: "JavaScript",
        description: "Detailed JavaScript learning guide."
    }
];

// Random Tip Function

function displayTip() {

    const randomIndex = Math.floor(Math.random() * tips.length);

    const tipElement = document.querySelector("#tip");

    if (tipElement) {
        tipElement.textContent = tips[randomIndex];
    }
}

// Visit Counter Function

function displayVisits() {

    const visitElement = document.querySelector("#visitMessage");

    if (!visitElement) {
        return;
    }

    let visits = Number(localStorage.getItem("visits")) || 0;

    visits++;

    localStorage.setItem("visits", visits);

    if (visits === 1) {

        visitElement.textContent =
            "Welcome! This is your first visit.";

    } else {

        visitElement.textContent =
            `You have visited this website ${visits} times.`;

    }
}

// Resource Card Function

function displayResources(filteredResources) {

    const container =
        document.querySelector("#resourceContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    filteredResources.forEach(resource => {

        container.innerHTML += `
            <div class="resource-card">
                <h3>${resource.title}</h3>
                <p><strong>Category:</strong> ${resource.category}</p>
                <p>${resource.description}</p>
            </div>
        `;

    });
}

// Filter Functions

function setupFilters() {

    const allBtn = document.querySelector("#allBtn");
    const htmlBtn = document.querySelector("#htmlBtn");
    const cssBtn = document.querySelector("#cssBtn");
    const jsBtn = document.querySelector("#jsBtn");

    if (!allBtn) {
        return;
    }

    displayResources(resources);

    allBtn.addEventListener("click", () => {
        displayResources(resources);
    });

    htmlBtn.addEventListener("click", () => {

        const htmlResources =
            resources.filter(
                resource => resource.category === "HTML"
            );

        displayResources(htmlResources);

    });

    cssBtn.addEventListener("click", () => {

        const cssResources =
            resources.filter(
                resource => resource.category === "CSS"
            );

        displayResources(cssResources);

    });

    jsBtn.addEventListener("click", () => {

        const jsResources =
            resources.filter(
                resource => resource.category === "JavaScript"
            );

        displayResources(jsResources);

    });
}

// Contact Form Function

function setupForm() {

    const form =
        document.querySelector("#contactForm");

    const message =
        document.querySelector("#formMessage");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.querySelector("#fullname").value;

        const email =
            document.querySelector("#email").value;

        const experience =
            document.querySelector("#experience").value;

        const technology =
            document.querySelector(
                'input[name="technology"]:checked'
            ).value;

        localStorage.setItem("studentName", name);
        localStorage.setItem("studentEmail", email);
        localStorage.setItem("experience", experience);
        localStorage.setItem("technology", technology);

        message.textContent =
            `Thank you ${name}! Your information has been saved.`;

        form.reset();

    });
}

// Tip Button Event

const newTipButton =
    document.querySelector("#newTipBtn");

if (newTipButton) {

    newTipButton.addEventListener("click", displayTip);

}

// Initialize Functions

displayTip();
displayVisits();
setupFilters();
setupForm();