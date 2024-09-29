import React from "react";
import SocialMedia from "../components/SocialMedia";
import Button from "../components/Button";
import Portfolio from "./Portfolio";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useProContext } from "../context/contex";

const Home = () => {
  return (
    <section className="wrapper">
      <div className="home-content">
        <h3>Zdravo, zovem se</h3>
        <h1>Aleksandar Ilisić</h1>
        <h3>
          Ja sam{" "}
          <span>
            <Typewriter
              options={{
                strings: ["Frontend Developer,", "Diplomirani Politikolog"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>
        <p className="text_info">
          Višegodišnje radno iskustvo na nekoliko pozicija, sposoban za
          samostalno analiziranje problema i osmišljavanje rješenja. Izuzetno
          razvijene komunikaciske vještine, pažljiv i metodičan pritup radnim
          zadatcima, fleksibilan pristup promjenjivim situacija. Spreman da
          svakodnevno učim i usavršavam već stečena znanja i vještine.{" "}
        </p>
        <SocialMedia />
        <Link to={"/portfolio"} className="protfolio-btn">
          <Button info={"Portfolio"} type={"button"} />
        </Link>
      </div>

      <Image type={"home"} />
    </section>
  );
};

export default Home;
