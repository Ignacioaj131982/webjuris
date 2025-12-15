function Contact() {
  return (
    <section id="contacto" className="contact fade-in">
      <div className="contact-container">
        <h2>Contacto</h2>

        <p>
          Si necesitás asesoramiento legal o querés realizar una consulta,
          podés comunicarte con nuestro estudio a través de los siguientes
          medios:
        </p>

        <div className="contact-info">
          <p>
    <strong>WhatsApp:</strong>
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

        {/* BOTÓN WHATSAPP */}
        <a
          href="https://wa.me/5493416943513?text=Hola,%20quisiera%20realizar%20una%20consulta%20jur%C3%ADdica%20y%20coordinar%20una%20entrevista.%20Muchas%20gracias."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          Contacto vía WhatsApp
        </a>

        <form
  action="https://formspree.io/f/meoyddrj"
  method="POST"
  className="contact-form"
>
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
    placeholder="Escriba su consulta"
    required
  ></textarea>

  <button type="submit">Enviar consulta</button>
</form>

      </div>
    </section>
  );
}

export default Contact;
