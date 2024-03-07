import React from "react";
import { Link } from "react-router-dom";

export const Testimonials = (props) => {
  return (
    <div id="courses">
      <div className="container">
        <div className="section-title text-center">
          <h2>Faça parte da faculdade que ira mudar sua carreira!</h2>
        </div>

        <div id="course-container">
          {props.data
            ? props.data.map((d, i) => (
              <div className="col-md-4">
                <Link id={`link-${d.id}`} to={`checkout`} state={{ id: d.id, name: d.text }}>
                  <div className="course-link">
                    <label for={`link-${d.id}`}>
                      <div className="testimonial-image">
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>
                    </label>
                    <div className="testimonial-content">
                      <h1>{d.text}</h1>
                      <div className="testimonial-meta"> {d.name} </div>
                    </div>
                    <Link id={`link-${d.id}`} to={`checkout`} state={{ id: d.id, name: d.text }}>Quero Já!</Link>
                  </div>
                </Link>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
