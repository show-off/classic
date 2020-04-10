import React from "react"
import "./intro.css"
import { Button } from "../components/button"

export const Intro = () => (
  <section id="intro">
    <p id="intro-text" className="text-center">
      App Developer. Open Source Contributor.
      <br />
      Architect of beautiful UIs.
    </p>
    <Button className="icon-button" href="#about">
      Who are you?<span className="material-icons">arrow_drop_down</span>
    </Button>
  </section>
)
