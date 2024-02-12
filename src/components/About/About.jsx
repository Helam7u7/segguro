import './About.css'

const About = () => {
  return (
    <div className="about">
      <section className="about-main about-section">
        <div className="main-txt">
          <h2>NOSOTROS</h2>
          <p>Somos una empresa líder en el mercado de consultorías en soluciones integrales de mejora continua en la industria minera, energía y construcción.</p>
        </div>
        <div className="main-img">
          <img src="/about.png" alt="" />
        </div>
      </section>
      <section className='section-lego about-section'>
        <h2>LEGO® SERIOUS PLAY®</h2>
        <p>Es un método sistemático que usa pieza de Lego® para resolver problemas, explorar ideas y lograr objetivos. Es un proceso estructurado donde los participantes piensan, construyen, cuentan historias, reflexionan y perfeccionan la comprensión de un tema. En un modo participativo de aprendizaje, entrenamiento y capacitación para la excelencia operacional.</p>
        <div className='grid-lego'>
          <div className='lego-item'><img src="/lego/yellow.png" alt="" /></div>
          <div className='lego-item'><img src="/lego/red.png" alt="" /></div>
          <div className='lego-item'><img src="/lego/green.png" alt="" /></div>
          <div className='lego-item'><img src="/lego/blue.png" alt="" /></div>
        </div>
      </section>
      <section className='section-lego-info about-section'>
        <h2>More Lego</h2>
      </section>
    </div>
  )
}

export default About