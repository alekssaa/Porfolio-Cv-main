import React from "react";
import { contacts } from "../data/data";
import { Link } from "react-router-dom";
import { FaPhoneFlip } from "react-icons/fa6";
import Swal from "sweetalert2";
const SocialMedia = () => {
  const phoneNumber = () => {
    Swal.fire({
      title: "Moj kontakt telefon: 066/141-526",
      text: "Hvala na interesovanju. Kliknite OK da biste izašli.",
      icon: "info",
    });
  };
  return (
    <div className="social-media">
      {contacts.map((contact) => {
        const { id, url, icon } = contact;
        return (
          <Link className="links-social-media" to={url} key={id}>
            {icon}
          </Link>
        );
      })}
      <span className="links-social-media" onClick={phoneNumber}>
        <FaPhoneFlip />
      </span>
    </div>
  );
};

export default SocialMedia;
