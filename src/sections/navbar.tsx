import React from "react"
import "./navbar.css"

export const Navbar = ({ currentSection }: { currentSection: string }) => {
  const menuOptions = [
    { name: "Home", url: "#intro" },
    { name: "About Me", url: "#about" },
    { name: "Technologies", url: "#technologies" },
    { name: "Experience", url: "#experience" },
    { name: "Awards", url: "#awards" },
    { name: "Volunteering", url: "#volunteering" },
    { name: "Resume", url: "#resume" },
  ]
  return (
    <nav id="navbar">
      <div className="navbar-left">
        <a href="#intro">John Smith</a>
      </div>
      <div className="navbar-right">
        <ul>
          {menuOptions.map(menuOption => {
            return (
              <li>
                <a
                  className={menuOption.name === currentSection ? "active" : ""}
                  href={menuOption.url}
                >
                  {menuOption.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
