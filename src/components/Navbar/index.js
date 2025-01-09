import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";

import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";
import { useLocation } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const location = useLocation();

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Render Navbar based on the route
  const renderNavLinks = () => {
    if (location.pathname === "/products") {
      // For the "/products" route
      return (
        <NavItems>
          <NavLink href="/">Home</NavLink>
        </NavItems>
      );
    } else {
      // Default Navbar
      return (
        <NavItems>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#products">Study-Material</NavLink>
        </NavItems>
      );
    }
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "#39FF14",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <Span>Srinjoy Das</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>

        {/* Render Nav Links based on the route */}
        {renderNavLinks()}

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github
          </GitHubButton>
          <GitHubButton href={Bio.call} target="_blank">
            Schedule Call
          </GitHubButton>
          {/* Slide Toggle Button */}
          <div
            style={{
              width: "50px",
              height: "25px",
              background: darkMode ? theme.primary : "#ccc",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              padding: "5px",
              marginLeft: "8px",
              cursor: "pointer",
            }}
            onClick={handleToggleTheme}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                background: "white",
                borderRadius: "50%",
                transition: "0.3s ease",
                transform: darkMode ? "translateX(30px)" : "translateX(0)",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            {/* Mobile-specific links */}
            {location.pathname === "/products" ? (
              <MobileLink
                href="/"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Home
              </MobileLink>
            ) : (
              <>
                <MobileLink
                  href="#about"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  About
                </MobileLink>
                <MobileLink
                  href="#skills"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Skills
                </MobileLink>
                <MobileLink
                  href="#experience"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Experience
                </MobileLink>
                <MobileLink
                  href="#projects"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Projects
                </MobileLink>
                <MobileLink
                  href="#products"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Study-Material
                </MobileLink>
              </>
            )}
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
