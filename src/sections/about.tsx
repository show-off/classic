import React from "react"
import "./about.css"
import { Heading } from "../components/heading"
import { Button } from "../components/button"

export const About = () => (
  <section id="about" className="flex-container direction-row">
    <img
      id="person-photo"
      src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />

    <div id="about-content" className="flex-container direction-column">
      <Heading>About Me</Heading>
      <p id="person-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
        reiciendis ullam doloribus? Veritatis nemo architecto et corporis magni
        ipsam itaque, tempora sequi reiciendis similique porro ullam fugiat
        facilis impedit. Consectetur perspiciatis, ullam autem doloremque rerum
        recusandae consequuntur quam ea ipsum labore repudiandae, eum laboriosam
        fugit molestias qui praesentium neque odio, similique cum!
        <br />
        <br />
        Quae incidunt neque quia atque enim animi veniam aliquid ratione,
        blanditiis doloremque nulla iure quibusdam officiis culpa laboriosam
        repellat, labore beatae, vitae ea. Magnam neque exercitationem laborum,
        vero natus doloremque labore ea voluptatum officiis illo. Voluptatem
        voluptas ab iure, doloremque deserunt quidem dolore! Inventore iure
        dolore quae ullam!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        doloribus commodi iure repellat enim obcaecati odio eius ratione vitae
        quia accusantium error soluta sed ipsam iusto eveniet, dignissimos
        explicabo quos cupiditate animi laborum aspernatur nisi assumenda.
        Aspernatur quae non ullam excepturi, adipisci, deserunt, ab quos fuga
        ipsum dolorum cupiditate a.
      </p>
      <Button className="outline-button icon-button" href="#technologies">
        Technologies<span className="material-icons">arrow_drop_down</span>
      </Button>
    </div>
  </section>
)
