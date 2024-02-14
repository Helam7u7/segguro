import './PageServices.css'

const PageServices = () => {
  return (
    <>
    <main className='main-services'>
      <div className='main-title section'>
        <h2>SERVICIOS</h2>
      </div>
    </main> 
    <section className='section-services section'>
      <div className='services-grid'>
        <div className='services-grid-item'>
          <div className='services-item-img'><img src="/servicios/license.png" alt="" /></div>
          <h2>Consultorías en Seguridad y Salud Ocupacional</h2>
          <ul className='services-item-ul'>
            <li>Elaboración de Planes Estratégicos de Seguridad y Salud Ocupacional, basado en la Visión empresarial.</li>
            <li>Elaboración, evaluación y entrenamiento de estándares y procedimientos operativos.</li>
            <li>Gestión de riesgos críticos y planes de emergencias.</li>
            <li>Implementación del Programa Total Worker Health</li>
          </ul>
        </div>
        <div className='services-grid-item'>
          <div className='services-item-img'><img src="/servicios/stadistics.png" alt="" /></div>
          <h2>Implementación del Programa Lean Mining</h2>
          <ul className='services-item-ul'>
            <li>Eficiencia y productividad en los procesos mineros primarios.</li>
            <li>Planificación y estrategia para el riesgo operacional.</li>
            <li>Gestión de alianzas estratégicas con empresas contratistas.
            </li>
            <li>Prevención de eventos mayores, fatales y graves.</li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default PageServices