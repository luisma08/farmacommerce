import LoadersModal from "../common/loaders/LoadersModal";

const ProductsWrapper = ({ loading, title, children }) => {
  return (
    <section className="section">
      <div className="container d-flex f-direction-column gap-lg">
        {loading && <LoadersModal />}
        <h1 className="section__title section__title--lg">{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default ProductsWrapper;