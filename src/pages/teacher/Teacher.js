import './teacher.css';
import img1 from '../../asset/image/29.jpg'
import img2 from '../../asset/image/35.jpg'
import img3 from '../../asset/image/28.jpg'
import img4 from '../../asset/image/36.jpg'
import img5 from '../../asset/image/28.jpg'
import img6 from '../../asset/image/35.jpg'
import img7 from '../../asset/image/28.jpg'
import img8 from '../../asset/image/35.jpg'
import img9 from '../../asset/image/36.jpg'

import Card from 'components/card/Card';
import { Link } from 'react-router-dom';


const Teacher = () => {

  const teachdata=[
    { id:"1",image:img1 , name:"Amr Kamal" , job:"Music Teacher"},
    { id:"2",image:img2 , name:"Ali Hamed" , job:"Art Teacher"},
    { id:"3",image:img3 , name:"Alaa mohamed" , job:"Arabic Teacher"},
    { id:"4",image:img4 , name:"Hussin ahmed" , job:"Math Teacher"},
    { id:"5",image:img5 , name:"Omar ali" , job:"Art Teacher"},
    { id:"6",image:img6 , name:"Ali Hamed" , job:"Music Teacher"},
    { id:"7",image:img7 , name:"Abdullah hassan" , job:"English Teacher"},
    { id:"8",image:img8 , name:"Amr kamel" , job:"Arabic Teacher"},
    { id:"9",image:img9 , name:"Ali mohamed" , job:"Art Teacher"},
  ];

  const card= teachdata.map(card => 
     <Card key={card.id} image={card.image} name={card.name} job="Art Teacher"/>
    )

  return (
    <div className='teacher w-100 m-auto'>

          <section className="top">
                  <div>
                    <h1> Teacher </h1>
                    <Link to="/">Home &gt;</Link>
                    <span> teacher </span>
                  </div>
          </section>


         <section className='d-sm-flex d-md-flex d-lg-flex align-items-center justify-content-evenly flex-wrap mx-5'>
        
          {card}
        
         </section>

    </div>
  );
}

export default Teacher;
