import { FaInstagram ,FaFacebookSquare,FaTwitterSquare} from "react-icons/fa";

import Box from 'components/box/Box';
import Button from '../../components/button/Button';
import Carousel from 'sections/carousel/Carousel';
import './home.css';
import img1 from '../../asset/image/30.jpg';
import img2 from '../../asset/image/23.jpg';
import img3 from '../../asset/image/22.jpg';
import img6 from '../../asset/image/32.jpg';
import img7 from '../../asset/image/33.jpg';
import img11 from '../../asset/image/18.jpg';
import img12 from '../../asset/image/6.jpg';
import img22 from '../../asset/image/7.jpg';
import img33 from '../../asset/image/8.jpg';
import img44 from '../../asset/image/10.jpg';
import img55 from '../../asset/image/11.jpg';
import img66 from '../../asset/image/21.jpg';

import Eventcard from 'components/eventcard/Eventcard';
import Teamteacher from "components/teamteacher/Teamteacher";
import Boxgallary from 'components/boxgallary/Boxgallary';

export default function Home() {

  const eventdata=[
    { id:"1",image:img33 },
    { id:"2",image:img22 },
    { id:"3",image:img44 },
    { id:"4",image:img12 },
    { id:"5",image:img22 },
    { id:"6",image:img55 },
    { id:"7",image:img66 },
    { id:"8",image:img11 },
    
  ];

  const gallarysdata= eventdata.map(card => 
     <Boxgallary key={card.id} image={card.image} />
    )
  return (
    <div className='home'>
      <Carousel />
      <div className='line'></div>
      <section className="box bg-light text-center text-sm-start py-5 mt-5">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-center">
          <img className="d-none d-sm-block" src={img1} alt="" />
            <Box>
              <h1>Welcome To Baby<br/> Daycare </h1>
              <p>Lorem Ipsum is simply dummy text<br/>
                 of the printing and typesetting<br/> industry.
                 Lorem Ipsum has been<br/>
                 the industry's standard dummy text <br/>
                 ever since the 1500s.</p>
                <Button>
                Join Us
                </Button>
            </Box>  
          </div>
        </div>
      </section>
      <section className="box bg-light text-center text-sm-start mb-5">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-center">
            <Box>
              <h1>Why Baby Daycare<br/> is The Best? </h1>
              <p>Lorem Ipsum is simply dummy text<br/>
                 of the printing and typesetting<br/> industry.
                 Lorem Ipsum has been<br/>
                 the industry's standard dummy text <br/>
                 ever since the 1500s.</p>
                <Button>
                 View our staff
                </Button>  
            </Box>      
            <img className="d-none d-sm-block" src={img2} alt="" />
          </div>
        </div>
      </section>
      
      <section className='event py-5 text-center my-5'>
           
          <h6 className='tilte'>Up Coming Events</h6>
          <h1 className='tilte pb-5'>Join Our Events</h1>
          
          <div  className='d-xs-flex d-sm-flex d-md-flex align-items-center justify-content-center flex-wrap pb-5 px-5 pt-5 mt-5 row'>
            <Eventcard img={img3} date="5 May 2023" name="Gardening" time="08:00-12:00"/>
            <Eventcard img={img2} date="7 May 2023" name="Math Lessons" time="08:00-12:00"/>
            <Eventcard img={img2} date="23 May 2023" name="Gardening" time="08:00-12:00"/>
            <Eventcard img={img3} date="20 May 2023" name="Music lessons" time="08:00-12:00"/>
          </div>
          <div className="btn">
            <Button>
            View All Programs
            </Button>
          </div>
          
      </section>
      
      <Teamteacher />

      <div className='line my-5'></div>
      
      <section className="text-center pt-2 parent row w-100 m-auto">
        
          <h2>What Parents Say</h2>
          <div className="col-sm-2 col-md-2"></div>
          <div className="col-sm-5 col-md-5">
            <div className="msg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.          
            </div>
            <div className="info">
              <span><img src={img6} alt="" /></span>
              <span className="pt-3"><span className="ti">Ali amr</span><br />
                <span>Father</span>
              </span>
            </div>
          </div>          
          <div className="col-sm-5 col-md-5">
            <div className="msg2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.          
            </div>
            <div className="info">
              <span><img src={img7} alt="" /></span>
              <span className="pt-3"><span className="ti">Mara</span><br />
                <span>Mothor</span>
              </span>
            </div>
          </div>
      </section>

      <section className="gallary text-center">
                <h1>Gallary</h1>
              <div className="row py-5">
                {gallarysdata}
              </div>
              <Button>
                 View more
              </Button>
      </section>
    </div>
  )
}
