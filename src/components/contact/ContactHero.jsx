import HeroBanner from "../common/hero/HeroBanner";
import HeroInformation from "../common/hero/HeroInformation";

const ContactHero = ({ contactData }) => {
  const { attributes } = contactData;

  return (
    <>
      <HeroBanner
        image={attributes?.hero.banner.data.attributes.formats.large.url}
        title={attributes?.hero.titulo}
      />
      <HeroInformation
        subtitle={attributes?.hero.subtitulo}
        text={attributes?.hero.descripcion}
        image={attributes?.imagen.data[0].attributes.url}
      />
    </>
  );
};

export default ContactHero;