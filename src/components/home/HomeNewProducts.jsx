import { Link } from 'react-router-dom';
import { A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { peruvianCurrencyFormat } from '../../utils/utils';
import ContainersImage from '../common/containers/ContainersImage';

const HomeNewProducts = ({ bestSellersProducts }) => {
  return (
    <div className='container'>
        <div className='container py-2'>
            <h2 className='section__title section__title--lg'>Nuevos productos</h2>
        </div>
        <Swiper
        tag='section'
        wrapperTag='div'
        className='min-h-500'
        modules={[A11y, Autoplay, Pagination]}
        speed={500}
        autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={4}
        pagination={{ clickable: true }}
        preloadImages={false}
        >
        {bestSellersProducts.map((element) => {
            const { title, slug, image, price } = element.attributes;
            return (
            <SwiperSlide
                key={element.id}
                tag='section'
                className='hero d-flex a-items-center'
            >
                <div className="container container--5xl w-100">
                <div className="card card--hero">
                    <div className="card__body card__body--hero">
                        <Link to={`/productos/${slug}`}>
                            <ContainersImage
                                src={image.data[0].attributes.formats.thumbnail.url}
                                alt={title}
                                className="card__header-img card__header-img--products border-radius-sm"
                            />
                        </Link>
                        <h2 className="card__title card__title color-dark-primary">{title}</h2>
                        <h3 className="card__title card__title--sm color-dark-primary">Farmalab</h3>
                        <h3 className="card__highlighted card__highlighted--xl">{peruvianCurrencyFormat(price)}</h3>
                        <Link to={`/productos/${slug}`} className="button button--primary">Ver más</Link>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            );
        })}
        </Swiper>
    </div>
  );
};

export default HomeNewProducts;