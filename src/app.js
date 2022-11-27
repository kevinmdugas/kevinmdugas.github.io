const renderNav = (title) => {
  const body = document.querySelector("body");

  const nav = document.createElement("ul");
  nav.className = "nav nav-pills";

  const aboutNav = document.createElement("li");
  aboutNav.className = "nav-item";
  const aboutLink = document.createElement("a");
  aboutLink.className = "nav-link";
  aboutLink.href = "index.html";
  aboutLink.textContent = "About";

  const resumeNav = document.createElement("li");
  resumeNav.className = "nav-item";
  const resumeLink = document.createElement("a");
  resumeLink.className = "nav-link";
  resumeLink.href = "resume.html";
  resumeLink.textContent = "Resume";

  const projectsNav = document.createElement("li");
  projectsNav.className = "nav-item";
  const projectsLink = document.createElement("a");
  projectsLink.className = "nav-link";
  projectsLink.href = "projects.html";
  projectsLink.textContent = "Projects";

  const contactNav = document.createElement("li");
  contactNav.className = "nav-item";
  const contactLink = document.createElement("a");
  contactLink.className = "nav-link";
  contactLink.href = "contact.html";
  contactLink.textContent = "Contact";

  switch (title) {
    case "about":
      aboutLink.className += " active";
      break;
    case "resume":
      resumeLink.className += " active";
      break;
    case "projects":
      projectsLink.className += " active";
      break;
    case "contact":
      contactLink.className += " active";
      break;
  }

  aboutNav.append(aboutLink);
  resumeNav.append(resumeLink);
  projectsNav.append(projectsLink);
  contactNav.append(contactLink);

  nav.append(aboutNav);
  nav.append(resumeNav);
  nav.append(projectsNav);
  nav.append(contactNav);

  body.append(nav);
};
