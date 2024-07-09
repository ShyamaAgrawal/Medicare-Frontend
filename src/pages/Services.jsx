import { services } from "../assets/data/services"
import ServiceCard from "../Components/Services/ServiceCard"

const Services = () => {
  return (
    <section>
      <div className="container ">
        <div className="service-list w-full lg:w-[85%] mx-auto" style={{marginTop: 0,}}>
          {services.map((item, index) => {
            return <ServiceCard item={item} index={index} key={index} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Services