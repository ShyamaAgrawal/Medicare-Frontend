import '../CSS/Doctors.css'
import starIcon from '../../assets/images/Star (1).png'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const DoctorCard = ({ doctor }) => {
    const { name, specialization, avgRating, totalRating, photo, totalPatients, hospital } = doctor;
    return (
        <div className="doctor-card p-3 lg:p-5">
            <div>
                <img src={photo} className="w-full" alt="" />
            </div>

            <h2 className="text-[18px] leading-[30px] lg:text-[26px]
            lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">{name}</h2>

            <div className="flex items-center justify-between mt-2 lg:mt-4">
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6  texr-[12px] lg:text-[16px] leading-4 lg:leading-7 font-semibold rounded">{specialization}
                </span>

                <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] lg:text-[16px] leading-6 lg:leading-7 font-semibold text-headingColor">
                        <img src={starIcon} alt="" /> {avgRating}
                    </span>

                    <span className="text-[14px] lg:text-[16px] leading-6 lg:leading-7 font-[400] text-textColor">
                        {totalRating}
                    </span>
                </div>

            </div>

            <div className="mt-[20px] flex items-center justify-between">
                <div>
                    <h3 className="text-[16px] lg:text-[18px] leading-3 lg:leading-[30px] text-headingColor font-semibold">
                       + {totalPatients} 
                    </h3>
                    <p className='text-[14px] leading-6 font-[400] text-textColor'a>{hospital}</p>
                </div>

                <div className="doctor-arrow">
                    <Link to='/doctors'>
                        <BsArrowRight /></Link>
                </div>
            </div>

        </div>
    )
}

export default DoctorCard