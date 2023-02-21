import './header.css';

import logo from '../../asset/image/logo.jpg';
import { Link, Outlet } from "react-router-dom";
import Footer from '../../sections/footer/Footer';



const Header = () => {

  return (
    <>
       <div className="navbar navbar-expand-md text-danger">
        <div className="container">
          <Link to="/" className='navbar-brand'>
            <div className='logo'><img src={logo} alt="logo" /></div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item na" ><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item na"><Link to="/about" className="nav-link">About Us</Link></li>
              <li className="nav-item dropdown ">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Features</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/testimonials" className="dropdown-item">Testimonials</Link></li>
                  <li><Link to="/teacher" className="dropdown-item">Teacher</Link></li>
                  <li><Link to="/event" className="dropdown-item">Events</Link></li>
                  <li><Link to="/gallary" className="dropdown-item">Gallery</Link></li>
                  <li><Link to="/contantupload" className="dropdown-item">Content uploding</Link></li>
                </ul>
              </li>
              <li className="nav-item na"><Link to="/timetable" className="nav-link">Timetable</Link></li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Parent</a>
                <ul className="dropdown-menu">
                  <li><a href="#" className="dropdown-item">Attendance</a></li>
                  <li><a href="#" className="dropdown-item">Sending complaints</a></li>
                  <li><a href="#" className="dropdown-item">Make a payment</a></li>
                  <li><a href="#" className="dropdown-item">Parent info</a></li>
                  <li><a href="#" className="dropdown-item">Communication</a></li>
                </ul>
              </li>
              <li className="nav-item na"><a href="#" className="nav-link">Contact</a></li>
            </ul>
            <ul className="login ">
                  <li><a href="#">Login</a></li>
                  <li className="log"><a href="#">Owner</a></li>
                  <li className="log"><a href="#">Parent</a></li>
                  <li className="log"><a href="#">Staff</a></li>
            </ul>
            
          </div>
          
        </div>
        
      </div>
      
      <Outlet />

      <Footer/>
    </>
  );
};

export default Header;
