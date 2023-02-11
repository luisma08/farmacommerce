const Services = ({ servicesData }) => {

    return ( 
        <section className="py-2">
            <div className="container f-elements f-direction-column gap-lg f-elements--center">
                <h3 className="section__title section__title-sm">Nuestros Servicios</h3>
                <div className="f-elements f-elements--responsive gap-md">
                    {servicesData.map((element) => {
                        const { title, description, image } = element.attributes;
                        return(
                            <div className="card card--hero">
                                <div className="f-elements f-direction-column f-elements--center gap-xs t-align-center">
                                    <img width="48" height="48" src={image.data.attributes.url} alt=""
                                    style={{backgroundColor:"white", padding: 30, borderRadius:20}} 
                                    />
                                    <h3 className="card__title card__title--lg">{title}</h3>
                                    <p className="card__title card__title--sm">{description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
     );
}
 
export default Services;