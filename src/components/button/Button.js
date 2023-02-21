import './button.css'
const Button = (props) => {
  return (
    <div className='button'>
       <button className="btn">{props.children}</button>
    </div>
  );
}

export default Button;
