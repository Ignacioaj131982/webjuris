function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Estudio Jurídico Santos & Arévalo</h2>

        <ul className="nav-links">
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        {/* CTA NAVBAR */}
        <a
          href="https://wa.me/5493416943513?text=Hola%20quisiera%20realizar%20una%20consulta%20jur%C3%ADdica."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-cta navbar-cta"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

