import './Home.css'

function Home() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <h1>Creación de Patrones Digitales</h1>
          <p>Transforma tus ideas en patrones únicos con nuestra herramienta avanzada.</p>
          <button className="cta-button">Empeza Ahora</button>
        </div>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Diseño Personalizado</h2>
          <p>Crea patrones que se adapten a tus necesidades específicas.</p>
        </div>
        <div className="feature">
          <h2>Interfaz Intuitiva</h2>
          <p>Una interfaz fácil de usar que hace el diseño sencillo y divertido.</p>
        </div>
        <div className="feature">
          <h2>Exportación Rápida</h2>
          <p>Exporta tus patrones en múltiples formatos en cuestión de segundos.</p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Creación de Patrones Digitales. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default Home