const Services = ({ servicesData }) => {

    return ( 
        <section className="py-2">
            <div className="container f-elements f-elements--responsive gap-md">
                {servicesData.map((element) => {
                    const { title, description, image } = element.attributes;
                    return(
                        <div className="card card--hero">
                            <div className="f-elements f-direction-column f-elements--center gap-xs t-align-center">
                                <img width="48" height="48" src={image.data.attributes.url} alt=""
                                style={{backgroundColor:"white", padding: 30, borderRadius:20}} 
                                />
                                <h3 className="card__title card__title--lg color-dark-primary">{title}</h3>
                                <p className="card__title color-dark-primary">{description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
     );
}
 
export default Services;