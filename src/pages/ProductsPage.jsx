import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductsGallery from "../components/products/gallery/ProductsGallery";
import ProductsWrapper from "../components/products/ProductsWrapper";
import useProducts from "../hooks/useProducts";
import { fetchReadProducts } from "../redux/thunks/productsThunk";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { loading, products, productsPage, productsPageSize } = useProducts();

  useEffect(() => {
    document.title = '¡Productos! I EAKON';
  }, []);

  useEffect(() => {
    dispatch(fetchReadProducts({ productsPage, productsPageSize }));
  }, [productsPage]);

  return (
    <ProductsWrapper
      loading={loading}
      title="Producto"
    >
      <ProductsGallery products={products} />
    </ProductsWrapper>
  );
};
export default ProductsPage;