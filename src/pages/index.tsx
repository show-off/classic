import React, { Fragment } from "react"
import "../styles/global.css"
import { Navbar } from "../sections/navbar"
import { Intro } from "../sections/intro"
import { About } from "../sections/about"

const IndexPage = () => (
  <Fragment>
    <Navbar currentSection="Home" />
    <Intro />
    <About />
  </Fragment>
)

export default IndexPage
