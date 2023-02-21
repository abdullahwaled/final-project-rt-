import './eventcard.css';

const Eventcard = (props) => {
  return (
    <div className='eventcard w-50 m-auto'>
      <div className="card bg-light mb-5 col-sm-12 col-md-6" style={{width: '80%',height: '50%',margin: 'auto',}}>
        <div className="row g-0">
          <div className="col-sm-6 col-md-6">
            <img src={props.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="card-body">
              <h3 className="card-title">{props.date}</h3>
              <h1 className="card-title text-info">{props.name}</h1>
              <p className="card-text">Time : <small> {props.time}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventcard;
