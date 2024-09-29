import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const About = () => {
  return (
    <section className="about-section">
      <Image type={"about"} />
      <div className="about-content">
        <h2 className="heading">
          O <span>meni</span>
        </h2>
        <h3>Frontend Developer</h3>
        <p className="info_text">
          {" "}
          Diplomirani Politikolog i Frontend Developer sa višegodišnjim radnm
          iskustvom na više pozicija, sposoban za samostalno analiziranje
          problema i osmišljavanje rješenja. Izuzetno razvijene komunikaciske
          vještine, pažljiv i metodičan pritup radnim zadatcima, fleksibilan
          pristup promjenjivim situacija. Spreman da svakodnevno učim i
          usavršavam već stečena znanja i vještine. Trenutno sam upoznat sa
          radom u nekoliko frejmworkova neki od njih su:
          <br /> <span> TailwindCSS, GSAP, Three.js, Bootstrap...</span>
          <br /> Svakodnevno se trudim da steknem nova znanja i vještine iz
          oblasti sa kojima radim kao i da naučim nove stvari.
        </p>

        <a
          className="cv-btn"
          href="../image/Aleksandar Ilisić CV.pdf"
          download="Resume"
        >
          <Button info={"Preuzmi CV"} />
        </a>
        <Link to={"/portfolio"} className="protfolio-btn">
          <Button info={"Portfolio"} type={"button"} />
        </Link>
      </div>
    </section>
  );
};

export default About;
