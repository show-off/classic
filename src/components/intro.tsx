import React from "react"
import "./intro.css"

export const Intro = () => (
  <section id="intro">
    <p id="intro-text" className="text-center">
      App Developer. Open Source Contributor.
      <br />
      Architect of beautiful UIs.
    </p>
    <button className="outline icon-button">
      Who are you?<span className="material-icons">arrow_drop_down</span>
    </button>
  </section>
)
