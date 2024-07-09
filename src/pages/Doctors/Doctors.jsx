import { doctors } from '../../assets/data/doctor.js'
import DoctorCard from '../../Components/Doctors/DoctorCard'
import Testimonial from '../../Components/Testimonial/Testimonial.jsx'
import '../PagesCSS.css'

const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="find-doc">
            <input type="search" className="inp" placeholder='Search Doctor' />
            <button className='btn mt-0 rounded-[0px] rounded-r-[8px]'>Search</button>
          </div>
        </div>
      </section>

      <section>
        <div className="container w-full lg:w-[85%] mx-auto">
          <div className="doctor-list" style={{ marginTop: 0}}>
            {doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="testimonial lg:w-[85%] lg:mx-auto">
            <div className="testimonial-top">
              <h2 className="heading text-center">Our great doctors</h2>
              <p className="text__para text-center" style={{ color: ' gray' }}>World-class care for everyone. Our health system offers unmatched,
                expert health care.</p>
            </div>

            <Testimonial />

          </div>
        </div>
      </section>
    </>
  )
}

export default Doctors