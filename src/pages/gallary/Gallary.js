import { Link } from 'react-router-dom';
import './gallary.css';
import img1 from '../../asset/image/6.jpg';
import img2 from '../../asset/image/7.jpg';
import img3 from '../../asset/image/8.jpg';
import img4 from '../../asset/image/10.jpg';
import img5 from '../../asset/image/11.jpg';
import img6 from '../../asset/image/21.jpg';
import Boxgallary from 'components/boxgallary/Boxgallary';


const Gallary = () => {

  const eventdata=[
    { id:"1",image:img3 },
    { id:"2",image:img2 },
    { id:"3",image:img4 },
    { id:"4",image:img1 },
    { id:"5",image:img2 },
    { id:"6",image:img5 },
    { id:"7",image:img6 },
    { id:"8",image:img4 },
    { id:"1",image:img3 },
    { id:"2",image:img2 },
    { id:"3",image:img4 },
    { id:"4",image:img1 },
    { id:"5",image:img2 },
    { id:"6",image:img5 },
    { id:"7",image:img6 },
    { id:"8",image:img2 },
  ];

  const gallarydata= eventdata.map(card => 
     <Boxgallary key={card.id} image={card.image} />
    )

  return (
    <div className='gallary'>
      <section className="top">
        <div>
          <h1> Gallary</h1>
          <Link to="/">Home &gt;</Link>
          <span> gallary </span>
        </div>
      </section>
      <section className='body'>
         <h1>Baby Daycare Gallery</h1>
         <p>We aim to capture the many smiles we see every day, show the many experiences the children have every day and provide you as the families a visual experience</p>
         <div className="row py-5">
          {gallarydata}      
          </div>
      </section>
    </div>
  );
}

export default Gallary;
