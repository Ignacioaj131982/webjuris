function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>
          Estudio Jurídico<br />
          Santos & Arévalo
        </h1>

        <p>
          Asesoramiento legal integral, serio y personalizado.
          Acompañamos a nuestros clientes con compromiso, ética
          y experiencia profesional.
        </p>

        <div className="hero-actions">
          <a href="#contacto" className="hero-button">
            Solicitar consulta
          </a>

          <a
            href="https://wa.me/5493416943513?text=Hola%20quisiera%20realizar%20una%20consulta%20jur%C3%ADdica."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;


