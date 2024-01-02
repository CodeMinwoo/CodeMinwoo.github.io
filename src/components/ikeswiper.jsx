// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
<>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=' w-1/3 hidden md:block m-auto h-[3%]'
      >
        <SwiperSlide className='bg-cover'>
          <img src={process.env.PUBLIC_URL + '/three.png'}  alt=""  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/tshirt.png'}  alt=""  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/decals.png'}  alt=""  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={process.env.PUBLIC_URL + '/screenshot.png'}  alt=""  />
        </SwiperSlide>

      </Swiper>
    </>
  );
};