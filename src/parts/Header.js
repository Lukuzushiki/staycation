import React from "react";
import { useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import BrandIcon from "parts/iconText";

export default function Header({ isCentered }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (isCentered) {
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="/" type="link">
                Stay<span className="text-gray-900">cation.</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );
  }

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${isHomePage ? " active" : ""}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className="nav-item">
                  <Button
                    className="nav-link"
                    type="link"
                    isExternal
                    href="#most-picked"
                  >
                    Featured Stays
                  </Button>
                </li>
                <li className="nav-item">
                  <Button
                    className="nav-link"
                    type="link"
                    isExternal
                    href="#collections"
                  >
                    Collections
                  </Button>
                </li>
                <li className="nav-item">
                  <Button
                    className="nav-link"
                    type="link"
                    isExternal
                    href="#reviews"
                  >
                    Reviews
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
