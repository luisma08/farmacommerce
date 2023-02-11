import { useSelector } from "react-redux";

const useServices = () => {
    return ( useSelector(state => state.service) );
}
 
export default useServices;