import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoadersModal from "../components/common/loaders/LoadersModal";
//import ContactMeans from "../components/contact/ContactMeans";
import HomeHero from "../components/home/HomeHero";
import useHome from "../hooks/useHome";
import { fetchReadBestSellersProducts, fetchReadHeroProducts } from "../redux/thunks/homeThunk";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, heroProducts } = useHome();

  useEffect(() => {
    dispatch(fetchReadHeroProducts());
    dispatch(fetchReadBestSellersProducts());
  }, []);

  return (
    <>
      {loading && <LoadersModal />}
      <HomeHero heroProducts={heroProducts} />
      {/* <HomeBestSellers /> */}
    </>
  );
};

export default HomePage;