import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import '../CSS/About.css'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="aboutus lg:w-[85%] lg:mx-auto">

                    {/* aboy images   */}
                    <div className="about-img">
                        <img src={aboutImg} alt="" />
                        <div className="img-card">
                            <img src={aboutCardImg} alt="" />
                        </div>
                    </div>

                    {/* about content  */}
                    <div className="about-content">
                        <h2 className="heading" style={{textAlign:'center'}}>Proud to be one of the nations best</h2>
                        <p className="text__para">For 30 years in a row, India's news and world report has recognized us as one of the best public hospitals in the nation. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto perferendis molestias dolorem</p>

                        <p className="text__para">Our best is something we strive for each day, caring for our patients not looking back ar what we accomplished but towards what we can do tomorrow. Providing the best. Lorem ipsum dolor sit amet.</p>

                        <Link to='/'><button className="btn">Learn More</button></Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About