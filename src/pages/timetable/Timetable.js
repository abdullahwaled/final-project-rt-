import Table from 'components/table/Table';
import { Link } from 'react-router-dom';
import './timetable.css';

function Choostable() {
  var numberIndex = document.querySelector(this).index();

  if (!document.querySelector(this).matches('active')) {
    document.querySelector('.naccs .menu div').classList.remove('active');
    document.querySelector('.naccs ul li').classList.remove('active');

    document.querySelector(this).classList.add('active');
    document.querySelector('.naccs ul').classList.add('active');

  }
}

const Timetable = () => {

  return (
    <div className='timetable'>
        <section className="top">
          <div>
            <h1> Timetable</h1>
            <Link to="/">Home &gt;</Link>
            <span> timetable </span>
          </div>
        </section>
        <section className='time my-5 py-5 w-100'>
          <div className="container">
              <div className="btn-group mb-5">
                <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Levels &nbsp;
                </button>
                <ul className="dropdown-menu nav nav-pills">
                  <li className="dropdown-item activ">Action</li>
                  <li className="dropdown-item">Another action</li>
                  <li className="dropdown-item">Something else here</li>
                  <li className="dropdown-item">Separated link</li>
                </ul>
              </div>

              <div className="tables">

                <div className="table active">
                   <Table/>
                </div>
              </div>

                      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
                        </li>
                      </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}><Table/></div>
                      <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}><Table/></div>
                      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}><Table/></div>
                      <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex={0}><Table/></div>
                    </div>    

          </div>       
        </section>
      
    </div>
  );
}

export default Timetable;
