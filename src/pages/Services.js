import React from "react";
import Jobs from "../components/Jobs";
const Services = () => {
  return (
    <section className="services ">
      <h2 className="heading">
        {" "}
        Prethodni <span>poslovi:</span>{" "}
      </h2>
      <div className="jobs-container">
        <Jobs />
      </div>
    </section>
  );
};

export default Services;
