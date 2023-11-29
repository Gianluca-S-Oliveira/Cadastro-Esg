import React, { useState } from "react";
import helloIgh from "../../images/hello.jpg";
import "./home.scss";
const Home = () => {
  return (
    <div id="#" className="containerHome">
      <h1>
        <span>Olá!</span> Já praticou sua atividade sustentável hoje?
      </h1>
      <div className="conntainerImg">
        {" "}
        <img src={helloIgh} />
      </div>
      <div className="submit">
        <h2>Não?? Então vamos lá!</h2>
        <a href="/form">Registrar Atividade </a>
      </div>
    </div>
  );
};

export default Home;
