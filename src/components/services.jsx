import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nossas Formações</h2>
          <p>
          Na Maestri.edu, não apenas proporcionamos uma educação de alta qualidade, mas também nos esforçamos para oferecer uma experiência completa e enriquecedora. Estamos comprometidos em superar as expectativas dos nossos alunos, proporcionando serviços excepcionais que impulsionam o sucesso acadêmico e profissional.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
