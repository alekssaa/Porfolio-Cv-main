import React from "react";
import Project from "../components/Project";
import { Button } from "@mui/material";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="heading">
        Projekti na kojima sam<span> radio:</span>{" "}
      </h2>
      <div className="portfolio-container">
        <Project />
      </div>
    </section>
  );
};

export default Portfolio;
