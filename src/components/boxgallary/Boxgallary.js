import './boxgallary.css';


const Boxgallary = (props) => {
  return (
              
                <div className="boxgallary col-lg-3 col-sm-6">
                    <div className="item">
                        <img src={props.image} alt="" />
                    </div>
                </div>
      
  );
}

export default Boxgallary;
