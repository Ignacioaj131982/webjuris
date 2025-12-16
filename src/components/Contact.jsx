function Contact() {
  return (
    <section id="contacto" className="contact fade-in">
      <div className="contact-container">
        <h2>Contacto</h2>

        <p>
          ¿Tenés una consulta legal? Comunicate con nuestro estudio y
          recibí asesoramiento profesional y personalizado en Rosario.
        </p>

        {/* CTA PRINCIPAL */}
        <a
          href="https://wa.me/5493416943513?text=Hola,%20quisiera%20realizar%20una%20consulta%20jur%C3%ADdica%20y%20coordinar%20una%20entrevista.%20Muchas%20gracias."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-cta"
        >
          Consultar por WhatsApp
        </a>

        {/* INFO DE CONTACTO */}
        <div className="contact-info">
          <p>
            <strong>Atención directa:</strong>
          </p>

          <p>
            Dr. Ignacio Jorge Arévalo<br />
            <a
              href="https://wa.me/5493416943513"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 341 694 3513
            </a>
          </p>

          <p>
            Dr. Diego Fernando Santos<br />
            <a
              href="https://wa.me/5493416470542"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 341 647 0542
            </a>
          </p>

          <p>
            <strong>Email:</strong><br />
            santosyarevalo@gmail.com
          </p>
        </div>

        {/* FORMULARIO SECUNDARIO */}
        <form
          action="https://formspree.io/f/meoyddrj"
          method="POST"
          className="contact-form"
        >
          <h3>O dejá tu consulta por escrito</h3>

          <input
            type="text"
            name="name"
            placeholder="Nombre y apellido"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
          />

          <textarea
            name="message"
            placeholder="Describa brevemente su consulta"
            required
          ></textarea>

          <button type="submit">Enviar consulta</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
