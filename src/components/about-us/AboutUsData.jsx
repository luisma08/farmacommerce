import { BsBullseye, BsGraphUp } from "react-icons/bs";
import HeroInformation from "../common/hero/HeroInformation";

const AboutUsData = ({ aboutUsData }) => {
  const { attributes } = aboutUsData;
  return (
    <section className="section">
      <div className="container f-elements f-elements--responsive">
        <HeroInformation
          subtitle={attributes?.name}
          text={attributes?.info}
          text2={attributes?.info_2}
          text3={attributes?.info_3}
          image={attributes?.info_img.data.attributes.url}
          imageClasses={'card card--informative'}
        />
        <div className="container d-flex f-direction-column gap-sm">
          <h3 className="section__title section__title--xs">Tu aliado en salud</h3>
          <p className="section__text">La mejor decision para tu salud</p>
          <div className="g-elements gap-md">
            <div className="card card--informative">
              <div className="card__body">
                <h2 className="section__title section__title--xs"><BsBullseye /> Misión</h2>
                <p className="section__text">{attributes?.mision}</p>
              </div>
            </div>
            <div className="card card--informative">
              <div className="card__body">
                <h2 className="section__title section__title--xs"><BsGraphUp /> Visión</h2>
                <p className="section__text">{attributes?.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsData;