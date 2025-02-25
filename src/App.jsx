// src/App.jsx
import React from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Layout>
      <Home />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  );
}
