const jobData = {
    "onecodeContent": {
        "role": "Full-stack-, App dev & AI integrator",
        "company": "OneCode",
        "dates": "Jan. 2024 - Aug. 2024",
        "tasks": [
            "Developed and maintained WordPress websites, ensuring optimal functionality and user experince.",
            "Integrated AI technologies into web applications, enhancing user engagement and automating tasks.",
            "Created custom web and mobile applications using full-stack development approach, employing modern technologies.",
            "Collaborated with cross-functional teams to understand project requirements and deliver high-quality solutions within deadlines."
        ]
    },
    "awsContent": {
        "role": "Linux Admin",
        "company": "Amazon Web Services (AWS)",
        "dates": "Sep. 2019 - Jul. 2022",
        "tasks": [
            "Provision and configure Linux instances on AWS, ensuring security and optimization.",
            "Implement security measures, apply updates, and maintain servers.",
            "Automate tasks using scripts and AWS services, and manage scalability of the infrastructure.",
            "Monitor performance, troubleshoot issues, and ensure high availability of the AWS environments."
        ]
    },
    "attContent": {
        "role": "IT-Supporter",
        "company": "Attech Computer ApS",
        "dates": "Jul. 2019 - Aug. 2019",
        "tasks": [
            "Customer support and troubleshooting through phone, walk-in, and on-site.",
            "Setup, repair, and upgrade of laptops, desktops, tablets, printers, and software.",
            "Setup of security and backup software and hardware.",
            "Other cases like converting 14k+ images from one extension to another."
        ]
    },
    "lakudaContent": {
        "role": "IT-Supporter",
        "company": "LAKUDA ApS",
        "dates": "Sep. 2017 - Feb. 2019",
        "tasks": [
            "On-site, walk-in, phone, and mail support.",
            "Setup and maintenance of computers, phones, printers, NAS, and Windows servers.",
            "Frontend web development and design.",
            "Create a solution for a scan and package table system, with optimized workflow and easier access to package material."
        ]
    }
};

// Education data stores in a JSON-like object
const educationData = [
    {
        "degree": "Multimedia / Webdeveloper",
        "school": "IBA Erhvervsakademi Kolding",
        "dates": "Aug. 2022 - Jun. 2024"
    },
    {
        "degree": "IT-Supporter",
        "school": "Syddansk Erhvervsskole",
        "dates": "2016 - 2019"
    }
];

// Inject job data into corresponding content area
function displayJobContent(jobKey) {
    const contentArea = document.getElementById(jobKey);
    const data = jobData[jobKey];

    // Clear content area and insert new data dynamically
    contentArea.innerHTML = `
        <div class="flex gap-2 text-[1.3rem] font-bold max-[560px]:flex-col">
            <h3>${data.role}</h3>
            <p class="text-[#d300ff]">@ ${data.company}</p>
        </div>
        <p>${data.dates}</p>
        <ul class="mt-4 flex flex-col gap-3">
            ${data.tasks.map(task => `<li class="before:content-['\\00BB'] before:text-base before:text-[#d300ff] before:mr-2">${task}</li>`).join('')}
        </ul>
    `;
}

// Initialize by displaying the first job content (Onecode)
displayJobContent('onecodeContent');

// Tab switching logic
const tabs = document.querySelectorAll('.toggle-job');
const contents = document.querySelectorAll('.job-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active state from all tabs and hide all content areas
        tabs.forEach(t => t.classList.remove('active-job'));
        contents.forEach(content => content.classList.add('hidden'));

        // Set the clicked tab as active and show corresponding content
        tab.classList.add('active-job');
        const target = tab.getAttribute('data-target');
        document.getElementById(target).classList.remove('hidden');
        document.getElementById(target).classList.add('active');

        // Load content dynamically for the selected tab
        displayJobContent(target);
    });
});

// function to dynamically load education data
function loadEducation() {
    const educationContent = document.getElementById('educationContent');
    educationContent.innerHTML = educationData.map(edu => `
        <div class="mb-8">
            <h5 class="text-[#d300ff] text-[1.1rem] font-bold">${edu.degree}</h5>
            <p class="text-base">${edu.school}</p>
            <p class="text-base">${edu.dates}</p>
        </div>
    `).join('');
}

// Initialize education content
loadEducation();
