import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Showreel from "../components/Showreel";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About/>
      <Showreel/>
      <Team/>
    </>
  );
}
