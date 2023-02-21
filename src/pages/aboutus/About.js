import Box from "components/box/Box";
import Button from "components/button/Button";
import { Link } from "react-router-dom";
import "./about.css";
import img1 from "../../asset/image/30.jpg";
import img2 from "../../asset/image/24.jpg";
import img3 from "../../asset/image/34.png";
import img4 from "../../asset/image/student.png";
import img5 from "../../asset/image/teacher.png";
import Teamteacher from "components/teamteacher/Teamteacher";

const About = () => {
  return (
    <div className="about">
      <section className="top">
        <div>
          <h1> About Us</h1>
          <Link to="/">Home &gt;</Link>
          <span> about </span>
        </div>
      </section>

      <section className="box">
        <div className="row">
          <img
            className="d-none d-sm-block col-sm-6 col-md-6"
            src={img1}
            alt=""
          />

          <div className="col-sm-6 col-md-6 pt-5">
            <Box>
              <h1 className="pt-5">
                Welcome To Baby
                <br /> Daycare{" "}
              </h1>
              <p>
                Lorem Ipsum is simply dummy text
                <br />
                of the printing and typesetting
                <br /> industry. Lorem Ipsum has been
                <br />
                the industry's standard dummy text <br />
                ever since the 1500s.
              </p>
              <Button>Join Us</Button>
            </Box>
          </div>
        </div>
        <div className="line d-none d-sm-block mb-5"></div>        
      </section>
      <Teamteacher />
      <section className="box text-center">
        <div className="row bot">
          

          <div className="col-sm-6 col-md-6 pt-5">
            <Box>
              <h1 className="pt-5">
                Welcome To Baby
                <br /> Daycare{" "}
              </h1>
              <p>
                Lorem Ipsum is simply dummy text
                <br />
                of the printing and typesetting
                <br /> industry. Lorem Ipsum has been
                <br />
                the industry's standard dummy text <br />
                ever since the 1500s.
              </p>
            </Box>
          </div>
          <img
            className="d-none d-sm-block col-sm-6 col-md-6 bott"
            src={img2}
            alt=""
          />
        </div>
             
      </section>
      <section className="bottom d-sm-flex d-md-flex justify-content-center">

        <div className="text-center text-white"> 
          <img src={img4} alt="" />
          <p>500</p>
          <h6>CHILDREN A YEAR</h6>
        </div>
        <div className="text-center text-white"> 
          <img src={img5} alt="" />
          <p>70</p>
          <h6>TEACHERS</h6>
        </div>
        <div className="text-center text-white"> 
          <img src={img3} alt="" />
          <p>350</p>
          <h6>ACTIVITIES</h6>
        </div>
        
      </section>

    </div>
  );
};

export default About;
