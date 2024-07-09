import { Link } from 'react-router-dom'
import '../CSS/Footer.css'
import logo from '../../assets/images/logo.png'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import { MdKeyboardArrowRight } from "react-icons/md";


const socialLinks = [
  {
    path: "https://www.linkedin.com/in/shyama-agrawal162/",
    icon: <RiLinkedinFill className="group-hover:text-white w-5 h-5" />
  },
  {
    path: "https://github.com/ShyamaAgrawal",
    icon: <AiFillGithub className="group-hover:text-white w-5 h-5" />
  },
  {
    path: "https://www.linkedin.com/in/shyama-agrawal162/",
    icon: <RiLinkedinFill className="group-hover:text-white w-5 h-5" />
  },
]


const quickLinks01 = [
  {
    path: '/home',
    display: "Home"
  },
  {
    path: '/',
    display: "About Us"
  },
  {
    path: '/services',
    display: "Services"
  },
  {
    path: '/',
    display: "Blog"
  }
]

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor"
  },
  {
    path: "/",
    display: "Request an Appointment"
  },
  {
    path: "/",
    display: "Find a Location"
  },
  {
    path: "/",
    display: "Get a Opinion"
  },
]

const quickLinks03 = [
  {
    path: "/",
    display: "Donate"
  },
  {
    path: "/contact",
    display: "Contact Us"
  },
]

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10 " style={{ backgroundColor:'#FBF9F4'}}>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px] w-full lg:w-[85%] mx-auto">

          {/* social links  */}

          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">Copyright @ {year} developed by Shyama Agrawal all rights reserved.
            </p>
            <div className="flex gap-3 mt-4 items-center">
              {socialLinks.map((link, index) => (
                <Link key={index} to={link.path} className="icon-link">{link.icon}</Link>
              ))}
            </div>
          </div>

          {/* links - 1  */}

          <div>
            <h2 className="text-[20px] font-[700] leading-[30px] mb-6 text-headingColor">Quick Links</h2>
            <ul>
              {quickLinks01.map((link, index) => (
                <li key={index} className="mb-4 flex items-center gap-1">
                  <MdKeyboardArrowRight/>
                  <Link to={link.path} className="text-link">{link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* links - 2  */}

          <div>
            <h2 className="text-[20px] font-[700] leading-[30px] mb-6 text-headingColor">I want to:</h2>
            <ul>
              {quickLinks02.map((link, index) => (
                <li key={index} className="mb-4 flex items-center gap-1">
                  <MdKeyboardArrowRight/>
                  <Link to={link.path} className="text-link">{link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* links-3  */}

          <div>
            <h2 className="text-[20px] font-[700] leading-[30px] mb-6 text-headingColor">Support</h2>
            <ul>
              {quickLinks03.map((link, index) => (
                <li key={index} className="mb-4 flex items-center gap-1">
                  <MdKeyboardArrowRight/>
                  <Link to={link.path} className="text-link">{link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer