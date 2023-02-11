import { useSelector } from "react-redux";

const useContact = () => {
  return (useSelector(state => state.contact));
};

export default useContact;