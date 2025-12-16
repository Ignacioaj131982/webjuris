function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>
          Abogados en Rosario<br />
          Santos & Arévalo
        </h1>

        <p>
          Asesoramiento legal claro y personalizado para personas y empresas.
          Te ayudamos en despidos y accidentes de trabajo, accidentes de tránsito,
          sucesiones e incumplimientos contractuales.
        </p>

        <div className="hero-actions">
  <a
    href="https://wa.me/5493416943513?text=Hola%20quisiera%20realizar%20una%20consulta%20jur%C3%ADdica."
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-cta"
  >
    Consultar por WhatsApp
  </a>

  <a href="#contacto" className="hero-button">
    Ver contacto
  </a>
</div>

      </div>
    </section>
  );
}

export default Hero;
