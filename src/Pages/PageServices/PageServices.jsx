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
        <div className='services-grid-item item-blue'>
          <div className='services-item-head'>
            <div className='services-item-img'><div className='img-service'></div></div>
            <h2>Consultorías en Seguridad y Salud Ocupacional</h2>
          </div>
          <ul className='services-item-ul'>
            <li>Elaboración de Planes Estratégicos de Seguridad y Salud Ocupacional, basado en la Visión empresarial.</li>
            <li>Elaboración, evaluación y entrenamiento de estándares y procedimientos operativos.</li>
            <li>Gestión de riesgos críticos y planes de emergencias.</li>
            <li>Implementación del Programa Total Worker Health</li>
          </ul>
        </div>
        <div className='services-grid-item item-yellow'>
          <div className='services-item-head'>
            <div className='services-item-img'><div className='img-service'></div></div>
            <h2>Implementación del Programa Lean Mining</h2>
          </div>
          <ul className='services-item-ul'>
            <li>Eficiencia y productividad en los procesos mineros primarios.</li>
            <li>Planificación y estrategia para el riesgo operacional.</li>
            <li>Gestión de alianzas estratégicas con empresas contratistas.
            </li>
            <li>Prevención de eventos mayores, fatales y graves.</li>
          </ul>
        </div>
        <div className='services-grid-item item-blue'>
          <div className='services-item-head'>
            <div className='services-item-img'><div className='img-service'></div></div>
            <h2>Cultura y Liderazgo en Seguridad</h2>
          </div>
          <ul className='services-item-ul'>
            <li>Diagnóstico de la línea de base organizacional.</li>
            <li>
Implementación y desarrollo de una Cultura de Seguridad de una empresa.</li>
            <li>Medición de la evolución y madurez del clima y cultura de Seguridad.</li>
            <li>Auditorias integrales del Sistema de Gestión y Cultura de Seguridad.</li>
          </ul>
        </div>
        <div className='services-grid-item item-yellow'>
          <div className='services-item-head'>
            <div className='services-item-img'><div className='img-service'></div></div>
            <h2>Entrenamiento y Certificación</h2>
          </div>
          <ul className='services-item-ul'>
            <li>Programas de aprendizaje y entrenamiento para lideres mineros.</li>
            <li>Programas de certificación en riesgos críticos.</li>
            <li>Talleres de Liderazgo Visible de Seguridad.
            </li>
            <li>Programas de entrenamiento de seguridad e higiene industrial</li>
          </ul>
        </div>
        <div className='services-grid-item item-blue'>
          <div className='services-item-head'>
            <div className='services-item-img'><div className='img-service'></div></div>
            <h2>Factores Humanos y Organizativos de la Seguridad</h2>
          </div>
          <ul className='services-item-ul'>
            <li>Programas de Seguridad Basado en el Comportamiento de las Organizaciones.</li>
            <li>Programa de Conductas seguras.</li>
            <li>Ingeniería de la Resiliencia en la Investigación de Accidentes.</li>
            <li>Seguridad de procesos</li>
          </ul>
        </div>
        <div className='services-grid-item item-yellow'>
          <div className='services-item-head'>
            <div className='services-item-img'><div className='img-service'></div></div>
            <h2>Estándares ESG</h2>
          </div>
          <ul className='services-item-ul'>
            <li>Marco de madurez de los estándares ESG.</li>
            <li>Regulaciones y normas internacionales del ESG.</li>
            <li>Integración del ESG a la excelencia Operacional.
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default PageServices