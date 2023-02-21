import './foote.css';
import { FaInstagram ,FaFacebookSquare,FaTwitterSquare,FaEnvelope,FaMapMarkerAlt,FaPhoneAlt,FaAngleRight} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
          <footer className='bg-dark'>
        <div className="footer-top ">
          <div className="container">
            <div className="row justify-content-center">
              
              <div className="col-md-2">
                <h5 className="title-sm">Quik Link</h5>
                <div className="footer-links">
                  <a href="#"><FaAngleRight/> Events</a>
                  <a href="#"><FaAngleRight/> Testimonials</a>
                  <a href="#"><FaAngleRight/> Attendance</a>
                  <a href="#"><FaAngleRight/> Parent info</a>
                </div>
              </div>
              <div className="col-md-3">
              <h5 className="title-sm">More</h5>
                <div className="footer-links">
                  <a href="#"><FaAngleRight/> Communication</a>
                  <a href="#"><FaAngleRight/> Sending complaints</a>
                  <a href="#"><FaAngleRight/> Timetable</a>
                  <a href="#"><FaAngleRight/> About Us</a>
                </div>
              </div>
              <div className="col-md-3">
                <h5 className="title-sm">Contact Us</h5>
                <div className="footer-links">
                  <p className="mb"><FaEnvelope/> Babydaycare@gmail.com</p>
                  <p className="mb"><FaPhoneAlt/> 01246255854</p>
                  <p className="mb"><FaMapMarkerAlt/>  Online Kindergarden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row justify-content-between gy-3">
              <div className="col-md-6">
                <p className="mb-0">© Agency2023. All rights reserved</p>
              </div>
              <div className="col-auto">
                <div className="social-icons">
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaFacebookSquare /></a>
                    <a href="#"><FaTwitterSquare /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
