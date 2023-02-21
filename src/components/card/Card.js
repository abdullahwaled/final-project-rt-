import './card.css'
import { FaInstagram ,FaFacebookF,FaTwitter} from "react-icons/fa";

const Card = (props) => {
  return (
    <div className='parca'>
      
        <div className="teacher-card">
                  <div className="header">
                    <div className="teacher-header" style={{background: `url(${props.image})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
                    </div>
                    <div className="teacher-hover">
                                      <p>
                                          <strong>Name:</strong>
                                          {props.name}
                                      </p>

                                      <p>
                                          <strong>Birthdate:</strong>
                                          August 16, 1958
                                      </p>

                                      <p>
                                          <strong>job:</strong>
                                          {props.job}
                                      </p>

                                      <hr/>

                                      <p className="mb-0">
                                          <strong>Social media Channel:</strong>
                                          <div className="social-icons mt-3">
                                                <a href="#"><FaFacebookF /></a>
                                                <a href="#"><FaTwitter /></a>
                                                <a href="#"><FaInstagram /></a>
                                          </div>
                                      </p>
                        </div>
                    </div>
                <div className="teacher-content">
                    
                    <div className="teacher-info">
                        <h5 className="mt-3 mb-0">{props.name}</h5>
                        <div className="hline"></div>
                        <small>{props.job}</small>
                    </div>
                  
                </div>
              </div>
            
    </div>
  );
}

export default Card;
