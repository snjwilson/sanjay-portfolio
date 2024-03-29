import React from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Technologies } from "./components/Technologies";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Work } from "./components/Work";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Technologies />
      <Experience />
      <Work />
      <Footer />
    </>
  );
}
