import React from "react";
import CircularIndeterminate from "./Loading";
import Error from "./Error";
import { useProContext } from "../context/contex";
import { Link } from "@mui/material";

const Project = () => {
  const { data, loadingData, errorData } = useProContext();
  let projekti = data.projects;

  return (
    <div className="projects">
      {projekti?.map((projekt) => {
        const { id, name, description, technologies, img, url } = projekt;

        return (
          <div className="portfolio-box" key={id}>
            <img className="portfolio-img" src={img} alt={name} />
            <div className="portfolio-info">
              <h4>{name}</h4>
              <p>{technologies}</p>
              <p>{description}</p>

              <a target="_blank" className="links-social-projects" href={url}>
                Pogledajte kod
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Project;
