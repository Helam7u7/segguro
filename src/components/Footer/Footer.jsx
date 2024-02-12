import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div><img src="/svg/logoSegguro.svg" alt="" /></div>
        <div className='grid-contacto'>
          <div className='contacto-item'>
            <div className='contacto-item-img'><img src="/svg/phone.svg" alt="" /></div>
            <div className='contacto-item-txt'>
              <h2>Teléfono</h2>
              <p>(+51) 4951192 </p>
              <p>(+51) 967710904</p>
            </div>
          </div>
          <div className='contacto-item'>
            <div className='contacto-item-img'><img src="/svg/mail.svg" alt="" /></div>
            <div className='contacto-item-txt'>
              <h2>Email</h2>
              <p>gramon@segguro.com</p>
            </div>
          </div>
          <div className='contacto-item'>
            <div className='contacto-item-img'><img src="/svg/map.svg" alt="" /></div>
            <div className='contacto-item-txt'>
              <h2>Ubicación</h2>
              <p>Pje Almería 159 Urb Portada del Sol La Molina, Lima, Perú</p>
            </div>
          </div>
          <div className='contacto-item'>
            <div className='contacto-item-img'><img src="/svg/facebookIcon.svg" alt="" /></div>
            <div className='contacto-item-img'><img src="/svg/instagramIcon.svg" alt="" /></div>
            <div className='contacto-item-img'><img src="/svg/linkedinIcon.svg" alt="" /></div>
            <div className='contacto-item-img'><img src="/svg/twitterIcon.svg" alt="" /></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer