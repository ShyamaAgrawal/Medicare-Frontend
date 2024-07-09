import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
    const { name, desc, bgColor, textColor } = item;
    // console.log(item)
    return (
        <div className="service-card">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700]">{name}</h2>
            <p className="text__para leading-7 font-[400] text-gray-600">{desc}</p>

            <div className="service-card-bottom">
                <div className="service-link">
                    <Link to='/doctors'>
                        <BsArrowRight />
                    </Link>
                </div>
                <span className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]" style={{
                    background: `${bgColor}`,
                    color: `${textColor}`,
                    borderRadius: "6px 0px 0px 6px",
                }}>
                    {index+1}
                </span>
            </div>

        </div>
    )
}

export default ServiceCard