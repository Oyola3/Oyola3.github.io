import { useEffect, useState } from "react";
import {
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaDownload,
  FaExternalLinkAlt,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import { SiVite, SiBootstrap, SiExpress, SiReactrouter } from "react-icons/si";

import "./App.css";

const techIcons = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  Python: FaPython,
  React: FaReact,
  Vite: SiVite,
  Bootstrap: SiBootstrap,
  "Node.js": FaNodeJs,
  Express: SiExpress,
  "React Router": SiReactrouter,
  Git: FaGitAlt,
  GitHub: FaGithub,
  SQL: FaDatabase,
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappNumber = "5492612112232";

  const whatsappMessage = encodeURIComponent(
    "Hola Adriano, vi tu portfolio y me gustaría ponerme en contacto contigo."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const linkedinUrl = "https://www.linkedin.com/in/adriano-oyola-b5794926a/";

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const projects = [
    {
      title: "Pichi-Gamez",
      image: "/projects/pichi-gamez.jpg",
      description:
        "Tienda de videojuegos desarrollada como proyecto Full Stack. Cuenta con catálogo de productos, carrito de compras, autenticación, checkout y funcionalidades de administración.",
      technologies: [
        "React",
        "Vite",
        "React Router",
        "Bootstrap",
        "Node.js",
        "Express",
      ],
      github: "https://github.com/Oyola3/Tienda_videojuegos",
    },
    {
      title: "Vuelos y Estadías - Mundial 2026",
      image: "/projects/mundial-2026.jpg",
      description:
        "Aplicación web desarrollada en equipo para visualizar información sobre vuelos y alojamientos de las selecciones participantes del Mundial 2026.",
      technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      github: "https://github.com/Oyola3/vuelos_estadias_mundial",
    },
    {
      title: "Blood Project",
      image: "/projects/blood-project.jpg",
      description:
        "Proyecto desarrollado con Python aplicando programación orientada a objetos, manejo de datos y organización modular del código.",
      technologies: ["Python", "POO", "SQL"],
      github: "https://github.com/Oyola3/Blood_proyect",
    },
  ];

  const scrollToSection = (section) => {
    setMenuOpen(false);

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <button
            className="logo"
            onClick={() => scrollToSection("inicio")}
            aria-label="Ir al inicio"
          >
            AO
          </button>

          <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <button onClick={() => scrollToSection("inicio")}>
              Inicio
            </button>

            <button onClick={() => scrollToSection("sobre-mi")}>
              Sobre mí
            </button>

            <button onClick={() => scrollToSection("proyectos")}>
              Proyectos
            </button>

            <button onClick={() => scrollToSection("contacto")}>
              Contacto
            </button>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Cambiar tema"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="hero section">
          <div className="container hero-container">
            <div className="hero-image-container">
              <div className="image-decoration"></div>

              <img
                src="/foto-perfil.jpg"
                alt="Adriano Oyola"
                className="profile-image"
              />
            </div>

            <div className="hero-content">
              <span className="hero-small-title">
                Hola, soy
              </span>

              <h1>
                Adriano <span>Oyola</span>
              </h1>

              <h2>Desarrollador Front End</h2>

              <p>
                Técnico en Desarrollo de Software. Me
                interesa especialmente el desarrollo Front End, la
                creación de interfaces y la construcción de aplicaciones
                web.
              </p>

              <div className="hero-buttons">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <FaWhatsapp />
                  Contactarme por WhatsApp
                </a>

                <a
                  href="https://github.com/Oyola3"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <FaGithub />
                  Ver GitHub
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <FaLinkedin />
                  Ver LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE MI */}
        <section id="sobre-mi" className="section about-section">
          <div className="container">
            <div className="section-header">
              <span>Conoceme</span>
              <h2>Sobre mí</h2>
            </div>

            <div className="about-grid">
              <div className="about-card">
                <h3>Perfil profesional</h3>

                <p>
                  Me adapto a nuevos desafíos y disfruto
                  trabajar en equipo. Me interesa seguir creciendo en el
                  área del desarrollo de software.
                </p>

                <p>
                  Actualmente estoy enfocado en mejorar mis conocimientos
                  de desarrollo web, especialmente en Front End, sin
                  dejar de ampliar mis conocimientos de Backend y bases
                  de datos.
                </p>
              </div>

              <div className="about-card">
                <h3>Actualmente</h3>

                <div className="timeline-item">
                  <span className="timeline-dot"></span>

                  <div>
                    <strong>
                      Tecnicatura Superior en Desarrollo de Software
                    </strong>

                    <p>
                      IES 9-023 · 2025 - En curso
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <span className="timeline-dot"></span>

                  <div>
                    <strong>
                      Curso Experto en Ciberseguridad
                    </strong>

                    <p>
                      FESAT · 2026 - En curso
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <span className="timeline-dot"></span>

                  <div>
                    <strong>
                      Bootcamp Full Stack Engineer
                    </strong>

                    <p>
                      EducaciónIT & Manhattan University · 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="section projects-section">
          <div className="container">
            <div className="section-header">
              <span>Mi trabajo</span>
              <h2>Proyectos</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <div className="project-overlay">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Ver ${project.title} en GitHub`}
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-technologies">
                      {project.technologies.map((technology) => {
                        const Icon = techIcons[technology];

                        return (
                          <span key={technology}>
                            {Icon && <Icon />}
                            {technology}
                          </span>
                        );
                      })}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Ver proyecto
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact-section">
          <div className="container">
            <div className="section-header">
              <span>Hablemos</span>
              <h2>Contacto</h2>
            </div>

            <div className="contact-container">
              <div className="contact-text">
                <h3>¿Tenés un proyecto en mente?</h3>

                <p>
                  Estoy abierto a oportunidades, proyectos y propuestas
                  relacionadas con el desarrollo de software.
                </p>

                <p>
                  Podés comunicarte conmigo directamente por WhatsApp,
                  correo electrónico o visitar mi perfil de GitHub o
                  LinkedIn.
                </p>
              </div>

              <div className="contact-links">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item whatsapp"
                >
                  <div className="contact-icon">
                    <FaWhatsapp />
                  </div>

                  <div>
                    <span>WhatsApp</span>
                    <strong>Escribirme directamente</strong>
                  </div>
                </a>

                <a
                  href="mailto:oyolaadriano13@gmail.com"
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>Escribirme un correo</strong>
                  </div>
                </a>

                <a
                  href="https://github.com/Oyola3"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <FaGithub />
                  </div>

                  <div>
                    <span>GitHub</span>
                    <strong>Ver mi perfil</strong>
                  </div>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <FaLinkedin />
                  </div>

                  <div>
                    <span>LinkedIn</span>
                    <strong>Ver mi perfil</strong>
                  </div>
                </a>
              </div>
            </div>

            {/* CV */}
            <div className="cv-box">
              <div>
                <span>¿Querés conocer más sobre mi perfil?</span>
                <h3>Descargá mi CV</h3>
              </div>

              <a
                href="/cv-oyola.pdf"
                download="CV-Adriano-Oyola.pdf"
                className="btn btn-primary"
              >
                <FaDownload />
                Descargar CV
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-container">
          <div>
            <h3>Adriano Oyola</h3>

            <p>
              Desarrollador Front End | Técnico en Desarrollo de Software
            </p>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/Oyola3"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:oyolaadriano13@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Adriano Oyola. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;