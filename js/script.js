

  const translations = {
    en: {
        "nav-home-title": "Home",
        "nav-about-title": "About",
        "nav-skills-title": "Skills",
        "nav-projects-title": "Projects",
        "nav-contact-title": "Contact",
        "hero-title": "Frontend Developer",
      "about-title": "About Me",
      "about-text": "I am a frontend developer with a passion for creating beautiful and functional websites. I have experience in HTML, CSS, and JavaScript, and I am always looking to learn more. I am currently looking for new opportunities to work on exciting projects with a great team.",
      "skills-title": "Skills",
        "projects-title": "Projects",
        "project-title-1": "Datu+ Innovation Project (TUAS)",
        "project-subtitle-1": "Frontend Developer",
        "project-description-1": "Description for project 1",
        "project-title-2": "Vertti Translation Project (theFIRMA)",
        "project-subtitle-2": "Frontend Developer",
        "project-description-2": "Description for project 2",
        "project-title-3": "TUAS New Website User Testing Project (theFIRMA)",
        "project-subtitle-3": "Project manager",
        "project-description-3": "Description for project 3",
        "project-title-4": "ARPA/SafeSea Project (TUAS)",
        "project-subtitle-4": "Developer (internship)",
        "project-description-4": "Description for project 4",
        "project-title-5": "Quality assurance & testing team (theFIRMA)",
        "project-subtitle-5": "Tester/auditor",
        "project-description-5": "Description for project 5",
        "project-title-6": "ISMO project (TUAS)",
        "project-subtitle-6": "Developer (internship)",
        "project-description-6": "Description for project 6",
        "cv-link": "files/CV_IlonaKauppila_ENG.pdf"
    }
  };

  const originalText = {};
  document.querySelectorAll('[data-lang]').forEach(element => {
      const key = element.getAttribute('data-lang');
      originalText[key] = element.textContent;
  });
  
  document.querySelectorAll('.language-button').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.textContent.toLowerCase();
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (key !== 'cv-link') {
                element.textContent = lang === 'fi' ? originalText[key] : translations[lang][key];
            }

            if (key === 'cv-link') {
                const cvFilePath = lang === 'fi' ? 'files/CV_IlonaKauppila_FIN.pdf' : 'files/CV_IlonaKauppila_ENG.pdf';
                element.setAttribute('href', cvFilePath);
            }
        });
    });
});

