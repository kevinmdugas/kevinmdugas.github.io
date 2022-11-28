const renderNav = (title) => {
  const container = document.querySelector("#nav-container");

  const mainNav = document.createElement("div");
  mainNav.className =
    "collapse navbar-collapse justify-content-end align-center";
  mainNav.id = "main-nav";

  const root = document.createElement("ul");
  root.className = "nav nav-pills";

  const aboutNav = document.createElement("li");
  aboutNav.className = "nav-item";
  const aboutLink = document.createElement("a");
  aboutLink.className = "nav-link";
  aboutLink.href = "index.html";
  aboutLink.textContent = "About";

  aboutNav.append(aboutLink);

  const resumeNav = document.createElement("li");
  resumeNav.className = "nav-item";
  const resumeLink = document.createElement("a");
  resumeLink.className = "nav-link";
  resumeLink.href = "resume.html";
  resumeLink.textContent = "Resume";

  resumeNav.append(resumeLink);

  const projectsNav = document.createElement("li");
  projectsNav.className = "nav-item";
  const projectsLink = document.createElement("a");
  projectsLink.className = "nav-link";
  projectsLink.href = "projects.html";
  projectsLink.textContent = "Projects";

  projectsNav.append(projectsLink);

  const contactNav = document.createElement("li");
  contactNav.className = "nav-item";
  const contactLink = document.createElement("a");
  contactLink.className = "nav-link";
  contactLink.href = "contact.html";
  contactLink.textContent = "Contact";

  contactNav.append(contactLink);

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

  root.append(aboutNav);
  root.append(resumeNav);
  root.append(projectsNav);
  root.append(contactNav);

  mainNav.append(root);
  container.append(mainNav);
};
