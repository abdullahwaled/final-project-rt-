import './book.css';
import { VscFilePdf } from "react-icons/vsc";

const Book = (props) => {
  return (
    <div className='books col-lg-6 col-sm-12 m-auto my-5 w-50'>
      <div className='book'>
              <div className="image"><img src={props.image} alt="" /></div>
              <h4>{props.name}</h4>
              <div className="buttons">
                <button>View a book</button>
                <button>Downlaod <span><VscFilePdf/></span></button>
              </div>
      </div>
    </div>
  );
}

export default Book;
