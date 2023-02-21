import './teamteacher.css';
import Box from 'components/box/Box';
import Button from '../../components/button/Button';
import { FaInstagram ,FaFacebookSquare,FaTwitterSquare} from "react-icons/fa";
import img4 from '../../asset/image/28.jpg';
import img5 from '../../asset/image/29.jpg';


const Teamteacher = () => {
  return (
    <div className='teamteacher'>
      <section className="row g-0 py-5 text-center">
            <Box>
              <h1>Meet Our Teachers </h1>
              <p className="teacher">Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem is simply lorem is simply.</p>
            </Box> 
        <div className="col-lg-3 col-sm-6 team-member">
          <div className="team-member-img">
            <img src={img5} alt="" />
            <div className="social-icons">
              <a href="#"><FaFacebookSquare /></a>
              <a href="#"><FaTwitterSquare /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
          <div className="p-4">
            <h5 className="title-sm mt-3 mb-0 text-white">Harry</h5>
            <div className="hline"></div>
            <small className="text-white">Art Teacher</small>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 team-member even">
          <div className="team-member-img">
            <img src={img4} alt="" />
            <div className="social-icons">
            <a href="#"><FaFacebookSquare /></a>
            <a href="#"><FaTwitterSquare /></a>
            <a href="#"><FaInstagram /></a>
            </div>
          </div>
          <div className="p-4">
            <h5 className="title-sm mt-3 mb-0 text-white">Jone</h5>
            <div className="hline"></div>
            <small className="text-white">Music Teacher</small>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 team-member">
          <div className="team-member-img">
            <img src={img5} alt="" />
            <div className="social-icons">
            <a href="#"><FaFacebookSquare /></a>
            <a href="#"><FaTwitterSquare /></a>
            <a href="#"><FaInstagram /></a>
            </div>
          </div>
          <div className="p-4">
            <h5 className="title-sm mt-3 mb-0 text-white">Harry</h5>
            <div className="hline"></div>
            <small className="text-white">Art Teacher</small>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 team-member even">
          <div className="team-member-img">
            <img src={img4} alt="" />
            <div className="social-icons">
            <a href="#"><FaFacebookSquare /></a>
            <a href="#"><FaTwitterSquare /></a>
            <a href="#"><FaInstagram /></a>
            </div>
          </div>
          <div className="p-4">
            <h5 className="title-sm mt-3 mb-0 text-white">Jone</h5>
            <div className="hline"></div>
            <small className="text-white">Music Teacher</small>
          </div>
        </div>
        <span className="mb-5"></span>
        <Button>
           View more
        </Button>
      </section>
    </div>
  );
}

export default Teamteacher;
