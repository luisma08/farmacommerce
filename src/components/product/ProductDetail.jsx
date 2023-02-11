import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useContact from "../../hooks/useContact";
import useProducts from "../../hooks/useProducts";
import { resetProducts } from "../../redux/slices/productsSlice";
import { peruvianCurrencyFormat } from "../../utils/utils";
import ContainersImage from "../common/containers/ContainersImage";
import LoadersModal from "../common/loaders/LoadersModal";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { loading, product } = useProducts();
  const { contactData } = useContact();

  const { attributes } = product;

  useEffect(() => {
    return (() => {
      dispatch(resetProducts());
    });
  }, []);

  return (
    <article className="section">
      <div className="container d-flex f-direction-column gap-xl">
        <div className="f-elements">
          <Link to='/productos' className="card__subtitle card__subtitle--lg text-decoration-none">
          Productos /  
          </Link>
          <div className="card__subtitle card__subtitle--lg">{attributes?.slug}</div>
        </div>
        {loading && <LoadersModal />}
        <div className="card g-elements g-elements--responsive-2 gap-md">
          <ContainersImage
            src={attributes?.image.data[0].attributes.url}
            alt={attributes?.title}
            className="section__img--product"
          />
          <div className="card__body">
            <h4 className="card__subtitle card__subtitle--lg">Farmalab</h4>
            <h2 className="card__highlighted card__highlighted--lg">{attributes?.title}</h2>
            <h4 className="card__subtitle">Precio</h4>
            <h3 className="card__highlighted card__highlighted--xl">{attributes?.price && peruvianCurrencyFormat(attributes?.price)}</h3>
            <p className="card__text card__text--sm">STOCK ± {attributes?.stock || 0} unidades disponibles</p>
            {/* <button className="button button--outline-primary mt-auto">Agregar a carrito</button> */}
            <a
              href={`https://api.whatsapp.com/send?phone=51949495862&text=Deseo cotizar el producto ${attributes?.title}, marca: Farmalab`}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary mt-auto"
            >
              Comprar por Whatsapp
            </a>
          </div>
        </div>
        <div className="d-flex f-direction-column gap-sm">
          <h3 className="section__title section__title--sm">Especificaciones</h3>
          <table className="table">
                <tr>
                  <td>Descripcion de producto</td>
                  <td>{attributes?.description}</td>
                </tr>
          </table>
        </div>
      </div>
    </article>
  );
};

export default ProductDetail;