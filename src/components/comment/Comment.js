import './comment.css';


const Comment = (props) => {
  return (
    
        <div className="comments">

          <div className="comment my-5">
                <div className="info">
                    <div className='text-center'><img src={props.image} alt="" /></div>
                    <h4 className="text-center">{props.name}</h4>
                    <h5 className='text-center'>{props.date}</h5>   
                    <blockquote>{props.comment} </blockquote> 
                  </div>
          </div>

        </div>
  );
}

export default Comment;
