import { services } from '../../assets/data/services'
import ServiceCard from './ServiceCard'
import '../CSS/Service.css'
const ServiceList = () => {
    // console.log(services)
    return (
        <div className="service-list">
            {services.map((item, index) => {
                return <ServiceCard item={item} index={index} key={index}/>
            })}
        </div>
    )
}

export default ServiceList