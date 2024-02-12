// import './Carrusel.css'

// const Carrusel = () => {
//   return (
//     <main className='carrusel-container'>
//       <div className='carrusel-img'>
//         <img src="public/carrusel/carrusel1.png" alt="" />
//       </div>
//     </main>
//   )
// }

// export default Carrusel

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carrusel.css';
import { Pagination, Navigation } from 'swiper/modules';

const Carrusel = () => {
  return (
    <main className='carrusel'>
      <Swiper
        slidesPerView={1}
        // spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='carrusel-slide'>
            <div className='slide-img'><img src="/carrusel/carrusel2.png" alt="" /></div>
            <p className='slide-p'>CONSULTORES ASOCIADOS EN LEAN MINING, CULTURA DE SEGURIDAD & ESG</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carrusel-slide'>
            <div className='slide-img'><img src="/carrusel/carrusel1.png" alt="" /></div>
            <p className='slide-p'>CONSULTORES ASOCIADOS EN LEAN MINING, CULTURA DE SEGURIDAD & ESG</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='carrusel-slide'>
            <div className='slide-img'><img src="/carrusel/carrusel3.png" alt="" /></div>
            <p className='slide-p'>CONSULTORES ASOCIADOS EN LEAN MINING, CULTURA DE SEGURIDAD & ESG</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  )
}

export default Carrusel