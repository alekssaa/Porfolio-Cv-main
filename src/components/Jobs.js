import React from "react";
import Button from "./Button";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useProContext } from "../context/contex";
import CircularIndeterminate from "./Loading";
import Error from "./Error";
//pozvati akciju sa dispecom i vidjeti kako se to stima u shopu
const Jobs = () => {
  const { data, loadingData, errorData } = useProContext();
  let posao = data.companies;

  return loadingData ? (
    <CircularIndeterminate />
  ) : errorData ? (
    <Error />
  ) : (
    <div className="previus-job">
      <div className="job-container">
        {posao.map((p) => {
          const { id, name, logo, position, period } = p;
          return (
            <div key={id} className="job-box">
              <img className="company-img" src={logo} alt={name} />
              <h3>{name}</h3>
              <p>{period}</p>
              <p>{position}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
