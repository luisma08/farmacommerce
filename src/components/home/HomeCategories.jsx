import { Link } from 'react-router-dom';
import { A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { peruvianCurrencyFormat } from '../../utils/utils';

const HomeCategories = ({ bestSellersProducts }) => {
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
      {bestSellersProducts.map((element) => {
        const { title, slug, image } = element.attributes;
        return (
          <SwiperSlide
            key={element.id}
            tag='section'
            className='hero d-flex a-items-center min-h-500'
            style={{
              backgroundImage: `url(${image.data.attributes.url})`
            }}
          >
            <div className="container container--5xl w-100">
              <div className="card card--hero">
                <div className="card__body card__body--hero">
                  <h2 className="card__title card__title--2xl color-dark-primary">{title}</h2>
                  <h3 className="card__title card__title--lg color-dark-primary">Farmalab</h3>
                  <h3 className="card__highlighted card__highlighted--xl">{peruvianCurrencyFormat(price)}</h3>
                  <Link to={`/productos/${slug}`} className="button button--primary">Ver más</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeCategories;