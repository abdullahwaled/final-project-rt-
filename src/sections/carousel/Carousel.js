import img1 from '../../asset/image/1.jpg';
import img2 from '../../asset/image/2.jpg';
import img3 from '../../asset/image/3.jpg';
import './carousel.css'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='carimg'><img src={img1} className="d-block w-100" alt="..." /></div>
            <div className="carousel-caption d-none d-md-block">
              <h3>Baby Daycare & Kindergarden</h3>
              <h1>You will be with your<br/> kid all the time</h1>
            </div>
          </div>
          <div className="carousel-item">
          <div className='carimg'><img src={img2} className="d-block w-100" alt="..." /></div>
            <div className="carousel-caption d-none d-md-block">
              <h3>Baby Daycare & Kindergarden</h3>
              <h1>You will be with your<br/> kid all the time</h1>
            </div>
          </div>
          <div className="carousel-item">
          <div className='carimg'><img src={img3} className="d-block w-100" alt="..." /></div>
            <div className="carousel-caption d-none d-md-block">
              <h3>Baby Daycare & Kindergarden</h3>
              <h1>You will be with your<br/> kid all the time</h1>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
