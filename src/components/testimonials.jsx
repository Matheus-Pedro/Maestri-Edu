import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Faça parte da faculdade que ira mudar sua carreira!</h2>
        </div>
        {props.data
            ? props.data.map((d, i) => (
            <div className={`row${d.name}-${i} col-md-4`}>
                <div>
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                    <a className="testimonialsLink" href={`http://checkout/${d.id}`}>Quero Já</a>
                </div>
            </div>
              ))
        : "loading"}
      </div>
    </div>
  );
};
