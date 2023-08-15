import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function Item(props){
    
    const {id, title, img, price, description, category} = props;
    
    return (<div>
        <div>
            <img width="300" src={img} alt="image"></img>
        </div>
        <div>
            <h2>{title} </h2>
        </div>
        <div>
            <h4>$ {price}</h4>
        </div>
        <div>
            <small> {description} </small>
        </div>
        <div>
            <small> {category}</small>
        </div>
        <Link to={`/product/${id}`}>
            <ButtonComponent>See Product</ButtonComponent>
        </Link>
    </div>
    );
}



export default Item;
