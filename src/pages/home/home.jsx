import React from "react";
import Profile from "../../assets/dp .png";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
const Home = () => {
  return (
    <section className="home grid">
      <img src={Profile} alt=" " className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Aman Kasaudhan .</span>
            Web Designer{" "}
          </h1>
          <p className="home__descrip">
            I am currently pursuing a B.Tech. in Mechanical Engineering at
            Indian Institute of Technology (ISM) , Dhanbad, having secured admission
            through the JEE Advanced 2022. Outside of my academic pursuits, I am
            passionate about playing cricket, and in my leisure time, I enjoy
            creating technical tutorials.
          </p>
          <div className="link link__home">
            <a
              href="https://www.linkedin.com/in/aman-kasaudhan-005b0a251/"
              target="_blank"
              className="site"
            >
              <FaLinkedin className="iconl" />
            </a>
            <a
              href="https://github.com/dashboard"
              target="_blank"
              className="site"
            >
              <FaGithub className="iconl" />
            </a>
            <a
              href="https://www.instagram.com/amanak_07/?hl=en"
              target="_blank"
              className="site"
            >
              <FaInstagram className="iconl" />
            </a>
          </div>
          <Link to={"/about"} className="button home__btn">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
