import { Link } from 'react-router-dom';
import './testimonials.css';
import img1 from '../../asset/image/37.png';
import img2 from '../../asset/image/woman.png';
import img3 from '../../asset/image/woman1.png';
import Comment from 'components/comment/Comment';


const Testimonials = () => {

  const commentdata=[
    { id:"1",image:img1 , name:"Harry Wendy" , date:"10 May 2023" , comment:"“ My daughter has attended 3 preschools all which were good but Daycare excelled them all. Her teacher Maria is excellent my daughter thrives well and continues to learn more every day ”."},
    { id:"2",image:img2 , name:"Marry Wendy" , date:"15 May 2023" , comment:"“ My daughter has attended 3 preschools all which were good but Daycare excelled them all. Her teacher Maria is excellent my daughter thrives well and continues to learn more every day ”."},
    { id:"3",image:img3 , name:"Marry Wendy" , date:"17 May 2023" , comment:"“ My daughter has attended 3 preschools all which were good but Daycare excelled them all. Her teacher Maria is excellent my daughter thrives well and continues to learn more every day ”."},
    { id:"4",image:img1 , name:"Harry Wendy" , date:"13 May 2023" , comment:"“ My daughter has attended 3 preschools all which were good but Daycare excelled them all. Her teacher Maria is excellent my daughter thrives well and continues to learn more every day ”."},
    { id:"5",image:img2 , name:"Marry Wendy" , date:"29 May 2023" , comment:"“ My daughter has attended 3 preschools all which were good but Daycare excelled them all. Her teacher Maria is excellent my daughter thrives well and continues to learn more every day ”."},
    { id:"6",image:img3 , name:"Marry Wendy" , date:"26 May 2023" , comment:"“ My daughter has attended 3 preschools all which were good but Daycare excelled them all. Her teacher Maria is excellent my daughter thrives well and continues to learn more every day ”."},
    
  ];

  const comments= commentdata.map(msg => 
     <Comment key={msg.id} image={msg.image} name={msg.name} date={msg.date} comment={msg.comment}/>
    )

  return (
    <div className='testimonials'>
        <section className="top">
          <div>
            <h1> Testimonials</h1>
            <Link to="/">Home &gt;</Link>
            <span> testimonials </span>
          </div>
         </section>
      <section className='coment w-100 m-auto'>
        <div className="container">
          <h5>We love to hear from our parents!</h5>
          <h1>Comments From Parents</h1>
          <p>If you have feedback or words of praise that you would like to share, please submit your review at the bottom of this page.</p>
          
          <div className='d-sm-flex d-md-flex flex-wrap py-5 w-100 m-auto'>
                {comments}
          </div>
        </div>
      </section>

      <section className='feedback'>
          <div className="container">




          </div>
      </section>


    </div>
  );
}

export default Testimonials;
