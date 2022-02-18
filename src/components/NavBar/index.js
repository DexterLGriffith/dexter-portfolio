import React from "react";

import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Resume from "../Resume";

function Nav(props) {
  const {currentPage, setCurrentPage} = props;
  const pages = [
    {
      name: "About",
      component: <About />,
    },
    {
      name: "Projects",
      component: <Projects />,
    },
    {
      name: "Contact",
      component: <Contact />,
    },
    {
      name: "Resume",
      component: <Resume />,
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h1 className="navbar-brand">Dexter Griffith</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto right">
            {pages.map((page) => (
              <li
                className={`nav-link ${
                  currentPage === page.name ? "active" : ""
                }`}
                key={page.name}
                
                onClick={() => setCurrentPage(page.name)}
              >
                {page.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
