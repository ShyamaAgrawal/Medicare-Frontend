import '../Components/CSS/Home.css'
import heroImg1 from '../assets/images/hero-img01.png'
import heroImg2 from '../assets/images/hero-img02.png'
import heroImg3 from '../assets/images/hero-img03.png'
import icon1 from '../assets/images/icon01.png'
import icon2 from '../assets/images/icon02.png'
import icon3 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import faqIcon from '../assets/images/faq-img.png'

import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../Components/About/About'
import ServiceList from '../Components/Services/ServiceList'
import DoctorList from '../Components/Doctors/DoctorList'
import FaqList from '../Components/FAQs/FaqList'
import Testimonial from '../Components/Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      {/* Landing page  */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-page lg:w-[85%] lg:mx-auto">
            <div className="hero-left">
              <div className="hero-left-top">
                <h1 className="hero-heading">We help patients <br /> live a healthy, <br /> longer life</h1>
                <p className="text__para" style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quos qui cumque iste atque obcaecati. Minus totam sapiente similique exercitationem sed quae animi voluptates adipisci harum sint? Soluta, facere labore!</p>
                <button className="btn">Request an Appointment</button>
              </div>
              <div className="hero-left-bottom">
                <div className="counters">

                  <div className="counter">
                    <h2 className="counter-heading">30+</h2>
                    <div style={{ backgroundColor: '#FEB60D' }} className="counter-underline"></div>
                    <p className="text__para">Years of Experience</p>
                  </div>

                  <div className="counter">
                    <h2 className="counter-heading">15+</h2>
                    <div style={{ backgroundColor: '#9771FF' }} className="counter-underline"></div>
                    <p className="text__para">Clinic Locations</p>
                  </div>

                  <div className="counter">
                    <h2 className="counter-heading">100%</h2>
                    <div style={{ backgroundColor: '#01B5C5' }} className="counter-underline"></div>
                    <p className="text__para">Patient Satisfaction</p>
                  </div>

                </div>
              </div>
            </div>

            <div className="hero-right">

              <div style={{ marginRight: '10px', }}>
                <img className="hero-img" src={heroImg1} alt="" />
              </div>

              <div style={{ marginTop: "30px", }} >
                <img className="hero-img" src={heroImg2} style={{ marginBottom: "30px", }} alt="" />
                <img className="hero-img" src={heroImg3} alt="" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* // How it works section */}
      <section>
        <div className="container">
          <div className="lg:w-[85%] lg:mx-auto">
            <div className="works-section-top">
              <h2 className="heading text-center">Providing the best medical services</h2>
              <p className="text__para text-center" style={{ color: 'gray' }}>World-class care for everyone. Our health system offers unmatched, expert health care.
              </p>
            </div>

            <div className="work-section-bottom">
              <div className="box">
                <img src={icon1} alt="" />
                <div className="box-text" style={{ marginTop: '20px', }}>
                  <h2 style={{ fontSize: '20px', fontWeight: '500' }}>Find a Doctor</h2>
                  <p className="text__para" style={{ color: 'gray' }}>World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.</p>

                  <div className="arrow">
                    <Link to='/doctors'>
                      <BsArrowRight /></Link>
                  </div>

                </div>
              </div>

              <div className="box">
                <img src={icon2} alt="" />
                <div className="box-text" style={{ marginTop: '20px', }}>
                  <h2 style={{ fontSize: '20px', fontWeight: '500' }}>Find a Location</h2>
                  <p className="text__para" style={{ color: 'gray' }}>World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.</p>

                  <div className="arrow">
                    <Link to='/doctors'>
                      <BsArrowRight /></Link>
                  </div>


                </div>
              </div>

              <div className="box">
                <img src={icon3} alt="" />
                <div className="box-text" style={{ marginTop: '20px', }}>
                  <h2 style={{ fontSize: '20px', fontWeight: '500' }}>Book Appointment</h2>
                  <p className="text__para" style={{ color: 'gray' }}>World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.</p>

                  <div className="arrow">
                    <Link to='/doctors'>
                      <BsArrowRight /></Link>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* About us  */}
      <About />

      {/* Services Section  */}
      <section>
        <div className="container">
          <div className="services lg:w-[85%] lg:mx-auto">
            <div className="services-top">
              <h2 className="heading text-center">Our medical services</h2>
              <p className="text__para text-center" style={{ color: ' gray' }}>World-class care for everyone. Our health system offers unmatched,
                expert health care.</p>
            </div>

            <ServiceList />

          </div>
        </div>
      </section>

      {/* Feature Section  */}
      <section>
        <div className="container">
          <div className="features lg:w-[85%] lg:mx-auto">
            <div className="feature-content xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>

              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to='/'><button className="btn">Learn More</button></Link>
            </div>

            <div className="feature-img">
              <img src={featureImg} alt="" />

              <div className="feature-img-card ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[60px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">Tue, 24</p>

                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">10:00 A.M.</p>

                  </div>

                  <span className="video">
                    <img src={videoIcon} alt="" />
                  </span>

                </div>

                <div className="consult">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">Wayne Collins</h4>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Doctors Section  */}
      <section>
        <div className="container">

          <div className="lg:w-[85%] lg:mx-auto">
            <div className="doctors-top">
              <h2 className="heading text-center">Our great doctors</h2>
              <p className="text__para text-center" style={{ color: ' gray' }}>World-class care for everyone. Our health system offers unmatched,
                expert health care.</p>
            </div>

            <DoctorList />
          </div>

        </div>
      </section>

      {/* Faqs section */}

      <section>
        <div className="container">
          <div className="faqs lg:w-[85%] lg:mx-auto">
            <div className="w-1/3 hidden md:block">
              <img src={faqIcon} alt="" />
            </div>
            <div className="w-full md:w-1/2" >
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* testimonial section  */}
      
      <section>
        <div className="container">
          <div className="testimonial lg:w-[85%] lg:mx-auto">
            <div className="testimonial-top">
              <h2 className="heading text-center">Our great doctors</h2>
              <p className="text__para text-center" style={{ color: ' gray' }}>World-class care for everyone. Our health system offers unmatched,
                expert health care.</p>
            </div>

            <Testimonial/>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Home