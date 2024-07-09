import { doctors } from '../../assets/data/doctor.js'
import DoctorCard from './DoctorCard'
import '../CSS/Doctors.css'

const DoctorList = () => {
    return (
        <div className="doctor-list">
            {doctors.map((doctor)=> <DoctorCard key={doctor.id} doctor={doctor}/>)}
        </div>
    )
}

export default DoctorList