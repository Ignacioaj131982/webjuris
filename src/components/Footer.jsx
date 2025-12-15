function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Estudio Jurídico Santos & Arévalo</h3>
          <p>
            Asesoramiento legal integral con compromiso, ética
            y profesionalismo.
          </p>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>📍 Rosario, Santa Fe</p>
          <p>
            📞 WhatsApp:{" "}
            <a
              href="https://wa.me/5493416943513"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 341 694-3513
            </a>
          </p>
          <p>
            ✉ Email:{" "}
            <a href="mailto:santosyarevalo@gmail.com">
              santosyarevalo@gmail.com
            </a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Estudio Jurídico Santos & Arévalo.
          Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
