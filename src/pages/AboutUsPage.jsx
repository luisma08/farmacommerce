import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AboutUsData from "../components/about-us/AboutUsData";
import AboutUsHero from "../components/about-us/AboutUsHero";
import LoadersModal from "../components/common/loaders/LoadersModal";
import ContactMeans from "../components/contact/ContactMeans";
import useAboutUs from "../hooks/useAboutUs";
import { fetchReadAboutUsData } from "../redux/thunks/aboutUsThunk";

const AboutUsPage = () => {
  const dispatch = useDispatch();
  const { loading, aboutUsData } = useAboutUs();

  useEffect(() => {
    document.title = '¡Sobre Nosotros!';
    Object.keys(aboutUsData).length === 0 && dispatch(fetchReadAboutUsData());
  }, []);

  return (
    <>
      {loading && <LoadersModal />}
      <AboutUsHero aboutUsData={aboutUsData} />
      <AboutUsData aboutUsData={aboutUsData} />
    </>
  );
};
export default AboutUsPage;