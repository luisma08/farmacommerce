import { useSelector } from "react-redux";

const useAboutUs = () => {
  return (useSelector(state => state.aboutUs));
};

export default useAboutUs;