import { Link } from 'react-router-dom';
import { VscFilePdf } from "react-icons/vsc";
import './contentuoload.css';
import img1 from '../../asset/image/eng.png';
import img2 from '../../asset/image/book.png';
import img3 from '../../asset/image/notebook.png';

import Book from 'components/book/Book';

const Contentupload = () => {
  const eventdata=[
    { id:"1",image:img1 ,name:"English Book"},
    { id:"2",image:img2 ,name:"Arabic Book"},
    { id:"3",image:img2 ,name:"Math Book"},
    { id:"4",image:img3 ,name:"Phonics"},
    { id:"5",image:img2 ,name:"Math2 Book"},
    { id:"6",image:img2 ,name:"Arabic2 Book"},
  ];

  const booksdata= eventdata.map(card => 
     <Book key={card.id} image={card.image} name={card.name} />
    )

  return (

    <div className='contentupload'>
        <section className="top">
          <div>
            <h1> Contant uploading</h1>
            <Link to="/">Home &gt;</Link>
            <span> contant uploading </span>
          </div>
         </section>
         <section className='books my-5 py-5 px-5 w-100 m-auto row'>

          {booksdata}
          
         </section>
    </div>

  );
}

export default Contentupload;
