import React from "react";

const Image = ({ type }) => {
  return (
    <div className={`${type}-img`}>
      <img
        className="img-profail"
        src="./image/slika_cleanup.jpg"
        alt="profilna slika"
      />
    </div>
  );
};

export default Image;
