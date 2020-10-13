import React from "react";
import Hero from "../components/Hero.component";
import Cards from "../components/ReactAnimation/Cards.component";

export default function Projects() {
  return (
    <>
      <Hero content="My Projects" backgroundSrc="/images/hero-projects.jpg" />
      <Cards />
    </>
  );
}
