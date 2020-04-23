import React from 'react';
import Photo from '../../../assets/img/Photo.jpg'

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <img src={Photo} height="300"alt=""/>
      <h1>Ahmad Muhammad Satria Adiputra</h1>
      <h2>Full Stack Javascript Developer</h2>
      <h2 style={{ fontSize: "2.5rem", marginTop: "1rem" }}>
        <a
          href="https://hire.hacktiv8.com/verify/fsjs/AhmadMuhammadSatriaAdiputra-20200328"
          target="_blank"
          rel="noopener noreferrer"
          style={{ position: "relative", color: "white", textDecoration: "none" }}
        >
          Graduated
        </a> from Hacktiv8's Fullstack Javascript Immersive
      </h2>
    </div>
  );
}

export default Jumbotron;
