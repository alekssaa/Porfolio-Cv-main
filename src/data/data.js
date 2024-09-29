import { Component } from "react";
import { Link } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import SocialMedia from "../components/SocialMedia";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPhoneFlip } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Početna",
    component: <Home />,
  },
  {
    id: 2,
    url: "/about",
    text: "O meni",
    component: <About />,
  },
  {
    id: 3,
    url: "/services",
    text: "Radno iskustvo",
    component: <Services />,
  },

  {
    id: 4,
    url: "/portfolio",
    text: "Portfolio",
    component: <Portfolio />,
  },
  {
    id: 5,
    url: "/contact",
    text: "Kontakt",
    component: <Contact />,
  },
];
export const contacts = [
  {
    id: 6,
    url: "https://github.com/alekssaa",
    icon: <BsGithub />,
  },

  {
    id: 7,
    url: "https://www.facebook.com/aleksandar.ilisic",
    icon: <FaFacebook />,
  },
  {
    id: 8,
    url: "https://www.linkedin.com/in/aleksandar-ilisic-59663b2b7/",
    icon: <FaLinkedinIn />,
  },
];
