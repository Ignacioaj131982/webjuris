function Services() {
  return (
    <section id="servicios" className="services fade-in">
      <h2>Servicios Legales</h2>

      <div className="services-grid">
        <div className="service-card">
          <span className="service-icon">⚖️</span>
          <h3>Derecho Civil</h3>
          <p>
            Asesoramiento y representación en contratos, daños y perjuicios,
            sucesiones y conflictos civiles en general.
          </p>
        </div>

        <div className="service-card">
          <span className="service-icon">🏛️</span>
          <h3>Derecho Penal</h3>
          <p>
            Defensa penal integral en todas las etapas del proceso, con
            compromiso y confidencialidad.
          </p>
        </div>

        <div className="service-card">
          <span className="service-icon">👥</span>
          <h3>Derecho Laboral</h3>
          <p>
            Asistencia legal a trabajadores y empleadores en despidos,
            indemnizaciones, accidentes de trabajo y conflictos laborales.
          </p>
        </div>

        <div className="service-card">
          <span className="service-icon">📄</span>
          <h3>Asesoramiento Empresarial</h3>
          <p>
            Consultoría jurídica para empresas y emprendedores, prevención de
            riesgos legales y cumplimiento normativo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
