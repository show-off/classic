import React, { Fragment } from "react"
import "../styles/global.css"
import { Navbar } from "../components/navbar"
import { Intro } from "../components/intro"

const IndexPage = () => (
  <Fragment>
    <Navbar />
    <Intro />
  </Fragment>
)

export default IndexPage
