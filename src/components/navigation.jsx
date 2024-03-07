import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand page-scroll" to="/" href="#page-top">
            <img className="navbar-logo" src="img\logo_side.png" />
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Áreas do Conhecimento
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Proposta de Cursos
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Formações
              </a>
            </li>
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Galeria
              </a>
            </li> */}
            <li>
              <a href="#courses" className="page-scroll">
                Quero - Já
              </a>
            </li>
            {/* <li>
              <a href="#team" className="page-scroll">
                Equipe
              </a>
            </li> */}
            <li>
              <a href="#contact" className="page-scroll">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
