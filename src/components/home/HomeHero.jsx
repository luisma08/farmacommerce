import { Link } from 'react-router-dom';
import { A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
//import { peruvianCurrencyFormat } from '../../utils/utils';

const HomeHero = ({ heroProducts }) => {
  return (
    <Swiper
      tag='section'
      wrapperTag='div'
      className='min-h-500'
      modules={[A11y, Autoplay, Pagination]}
      loop
      pagination={{ clickable: true }}
      preloadImages={false}
    >
      {heroProducts.map((element) => {
        const { image } = element.attributes;
        return (
          <SwiperSlide
            key={element.id}
            tag='section'
            className='hero d-flex a-items-center min-h-500'
            style={{
              backgroundImage: `url(${image.data.attributes.url})`
            }}
          >
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeHero;