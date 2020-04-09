import React, { Fragment } from "react"
import "../styles/global.css"
import { Navbar } from "../components/navbar"
import { Intro } from "../components/intro"

const IndexPage = () => (
  <Fragment>
    <Navbar currentSection="Home" />
    <Intro />
  </Fragment>
)

export default IndexPage
