function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contacto</h2>

        <p>
          Si necesitás asesoramiento legal o querés realizar una consulta,
          podés comunicarte con nuestro estudio a través de los siguientes
          medios:
        </p>

        <div className="contact-info">
          <p>
            <strong>WhatsApp:</strong> +54 9 11 1234-5678
          </p>
          <p>
            <strong>Email:</strong> contacto@estudiojuridico.com
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Nombre y apellido" />
          <input type="email" placeholder="Correo electrónico" />
          <textarea placeholder="Escriba su consulta"></textarea>
          <button type="submit">Enviar consulta</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
