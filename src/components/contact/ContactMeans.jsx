import { BsClock, BsEnvelope, BsGeoAlt, BsWhatsapp } from "react-icons/bs";
import useContact from "../../hooks/useContact";

const ContactMeans = () => {
  const { contactData } = useContact();
  const { attributes } = contactData;

  return (
    <section className="section">
      <div className="container g-elements g-elements--responsive-2 gap-lg">
        <div className="d-flex f-direction-column gap-sm">
          <h3 className="section__title section__title-sm">{attributes?.title}</h3>
          <ul className="list d-flex f-direction-column gap-xs">
            <li>
              <h4 className="section__subtitle section__subtitle--xs"><BsGeoAlt /> Dirección</h4>
              <ul className="list">
                <li className="section__text section__text--sm">
                  {attributes?.direction}
                </li>
              </ul>
            </li>
            <li>
              <h4 className="section__subtitle section__subtitle--xs"><BsClock /> Horario de atención</h4>
              <ul className="list">
                <li className="section__text section__text--sm">
                  L-D, {attributes?.time_ini}, {attributes?.time_fin}
                </li>
              </ul>
            </li>
            <li>
              <h4 className="section__subtitle section__subtitle--xs"><BsEnvelope /> Correos</h4>
              <ul className="list">
                <li className="section__text section__text--sm">
                  <a href={`mailto:${attributes?.mail}`} className="list__link">
                    Ventas: {attributes?.mail}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h4 className="section__subtitle section__subtitle--xs"><BsWhatsapp /> Celular</h4>
              <ul className="list">
                <li className="section__text section__text--sm">
                  <a
                    href={`https://api.whatsapp.com/send?phone=${attributes?.phone}&text=Deseo información`}
                    className="list__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {attributes?.phone}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="d-flex f-direction-column gap-sm">
          <h3 className="section__title section__title--sm">Contactanos</h3>
          <p className="section__text">Nos comunicaremos contigo a la brevedad</p>
          <form className="d-flex f-direction-column gap-xs">
            <div className="g-elements g-elements--responsive-2 gap-xs">
              <input type="text" name="name" placeholder="Nombre" className="input" required />
              <input type="email" name="email" placeholder="Correo" className="input" required />
            </div>
            <div className="g-elements g-elements--responsive-2 gap-xs">
              <input type="tel" name="phone" placeholder="Celular" className="input" required />
              <input type="text" name="subject" placeholder="Asunto" className="input" required />
            </div>
            <textarea name="message" placeholder="Mensaje" className="input" required></textarea>
            <button className="button-lg button button--primary">Contactar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMeans;