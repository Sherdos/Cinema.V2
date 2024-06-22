import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  let year = new Date();

  return (
    <footer className="footer">
      <Link to={"/"}>Главная</Link>
      <Link to={"/movies"}>все фильмы</Link>
      <p>{year.getFullYear()}</p>
      <Link to={"/"}>Создатели</Link>
    </footer>
  );
};

export default Footer;
