import HeroBanner from "../common/hero/HeroBanner";

const AboutUsHero = ({ aboutUsData }) => {
  const { attributes } = aboutUsData;
  return (
    <>
      <HeroBanner
        image={attributes?.image.data.attributes.url}
        title="Nosotros"
      />
    </>
  );
};

export default AboutUsHero;