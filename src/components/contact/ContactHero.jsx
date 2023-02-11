import HeroBanner from "../common/hero/HeroBanner";
import HeroInformation from "../common/hero/HeroInformation";

const ContactHero = ({ contactData }) => {
  const { attributes } = contactData;

  return (
    <>
      <HeroBanner
        image={attributes?.image.data.attributes.url}
        title={attributes?.title}
      />
      <HeroInformation
        subtitle={attributes?.hero.subtitulo}
        text={attributes?.hero.descripcion}
        image={attributes?.image.data.attributes.url}
      />
    </>
  );
};

export default ContactHero;