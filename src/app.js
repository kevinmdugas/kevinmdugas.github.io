const renderNav = (title) => {
  const body = document.querySelector("body");

  const navContainer = document.createElement("flex-container");
  const navRow = document.createElement("div");
  navRow.className = "row py-2 px-3";

  const iconLink = document.createElement("a");
  iconLink.className = "col-auto mt-1";
  iconLink.href = "index.html";

  const icon = document.createElement("img");
  icon.src = "assets/coffee.svg";
  icon.style.maxWidth = "100%";

  const name = document.createElement("a");
  name.className =
    "col-auto px-0 fs-3 fw-bold text-decoration-none text-primary";
  name.textContent = "Kevin Dugas";
  name.href = "index.html";

  const navbar = document.createElement("ul");
  navbar.className = "col nav nav-pills justify-content-end navbar-light";

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

  iconLink.append(icon);

  aboutNav.append(aboutLink);
  resumeNav.append(resumeLink);
  projectsNav.append(projectsLink);
  contactNav.append(contactLink);

  navbar.append(aboutNav);
  navbar.append(resumeNav);
  navbar.append(projectsNav);
  navbar.append(contactNav);

  navRow.append(iconLink);
  navRow.append(name);
  navRow.append(navbar);

  navContainer.append(navRow);

  body.append(navContainer);
};
