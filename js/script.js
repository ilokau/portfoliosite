
// Translation script
  const translations = {
    en: {
        "nav-home-title": "Home",
    "nav-about-title": "About",
    "nav-skills-title": "Skills",
    "nav-projects-title": "Projects",
    "nav-contact-title": "Contact me",
    "hero-title": "Frontend Developer",
    "about-title": "About Me",
    "about-text": "I am a software developer starting my career, originally from South Ostrobothnia and currently living in Turku with my cat. My interest in all kinds of computer-related things has been a part of my life since childhood through my hobbies. After trying other fields along the way and through twists and turns, ending up studying for a Bachelor of Business Administration in Information Technology degree at Turku University of Applied Sciences, I've finally found the passion and certainty that this is what I want to do for a living! <br> <br>Throughout my studies, I've gained valuable experience in various technologies, as well as project management and project work. I've worked in student projects as a project manager, frontend developer and QA tester, and in planning and organizing website user testing, among other things. Frontend development is currently my strongest skill and the field that interests me the most, but I'm motivated to learn about other areas of software development and the ICT industry in general and develop into a fullstack developer. <br> <br>Calm and patient by nature, I get along well with different kinds of people both at work and in my free time. My hobbies include video games, digital drawing, and handicrafts.",
    "skills-title": "Skills",
    "projects-title": "Projects",
    "project-title-1": "Datu+ Innovation Project",
    "project-subtitle-1": "Developer/documentation",
    "project-description-1": "In Fall 2024, I worked on the Datu+ project at Turku University of Applied Sciences as part of the Innovation Project course. The purpose of the project was to improve an existing database and create visualizations of the data using Elasticsearch and Kibana. I was a developer in the project and in charge of the project documentation.",
    "project-title-2": "Vertti",
    "project-subtitle-2": "Frontend Developer",
    "project-description-2": "I was part of TUAS's theFIRMA's Vertti project as a frontend developer. My tasks included adding translation functionality to the web application's user interface and ensuring its compatibility with the application's backend.",
    "project-title-3": "TUAS User Testing",
    "project-subtitle-3": "Project manager",
    "project-description-3": "In Fall 2024, I was a project manager in TUAS's theFIRMA's project which aimed to plan and carry out user testing for TUAS's new website. In addition to my duties as a project manager, my tasks included organizing (recruiting testers, scheduling) and implementing (testing planning, instructing testers) user testing as part of the project team.",
    "project-title-4": "ARPA/SafeSea Project",
    "project-subtitle-4": "Developer (internship)",
    "project-description-4": "I was a part of the Wireless Communications and Cybersecurity research group at Turku University of Applied Sciences as an intern developing the data platform for the ARPA and SafeSea projects. My tasks included programming web servers/interfaces and system data management tools, as well as developing the system's user interface among others.",
    "project-title-5": "QA Team",
    "project-subtitle-5": "Tester/auditor",
    "project-description-5": "I was part of the QA team at TUAS's theFIRMA in the fall of 2023. My duties included testing and auditing other projects.",
    "project-title-6": "ISMO project",
    "project-subtitle-6": "Developer (internship)",
    "project-description-6": "In Summer 2023, I was part of the TUAS Wireless Communications and Cybersecurity research group as an intern developing microservices related to data reception, processing and storage for the data platform of the TUAS ISMO (Intelligent and Sustainable Stormwater Management) project.",
    "cv-link": "files/CV_IlonaKauppila_ENG.pdf",
    "project-detail-title": "Key Tools:",
    "project-1-moreinfo": "Project ➤",
    "project-4-moreinfo": "Research group ➤",
    "project-6-moreinfo": "Project ➤",
    "contact-title": "Contact me",
    "contact-name": "Name",
    "contact-email": "Email",
    "contact-message": "Message",
    "contact-send": "Send",
    "top-button": "Back to top ▲"
    }
  };

  const originalText = {};
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    originalText[key] = element.innerHTML; // Store the original HTML content
  });
  
  document.querySelectorAll('.language-button').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.textContent.toLowerCase();
      document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (key === 'cv-link') {
          const cvFilePath = lang === 'fi' ? 'files/CV_IlonaKauppila_FIN.pdf' : 'files/CV_IlonaKauppila_ENG.pdf';
          element.setAttribute('href', cvFilePath);
        } else if (key === 'about-text') {
          element.innerHTML = lang === 'fi' ? originalText[key] : translations[lang][key];
        } else {
          element.textContent = lang === 'fi' ? originalText[key] : translations[lang][key];
        }
      });
    });
  });

//Contact form script


window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault();
      
      emailjs
        .sendForm('service_4wi39jv', 'contact_form', this)
        .then(
          function () {
            alert('Your message has been sent successfully!');
          },
          function (error) {
            alert('Failed to send your message. Please try again.');
            console.error('EmailJS Error:', error);
          }
        );
    });
  };

//Back to top button script
let topbutton = document.getElementById("top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  