import { useState, useEffect, useContext} from "react";
import { getProductData } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../Context/cartContext";
import { DotSpinner } from '@uiball/loaders';
import ButtonComponent from "../ButtonComponent/ButtonComponent";


function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { id } = useParams();

  const { addToCart } = useContext(cartContext);

  useEffect(() => {
    async function requestProduct() {
        const response = await getProductData(id);
        setProduct(response);
        setIsLoading(false);
        }

    requestProduct()
    }, [id]);

    if(isLoading){
        return  <DotSpinner size={80} speed={0.9} color="black" />
    }

    function handleAddToCart(count) {
        addToCart(product, count);
        alert(`You add ${count} units of ${product.title} to the cart`);
        setIsAddedToCart(true);
    }

    return (
        <div className="main">
            <div>
                <img width={300} src={product.img} alt="image"></img>
            </div>
            <div>
                <h2>{product.title} </h2>
            </div>
            <div>
                <h4>$ {product.price}</h4>
                <small> {product.description} </small>
            </div>
            <div>
                <small> {product.category}</small>
            </div>
            
            {
                product.stock > 0 ?
                    isAddedToCart 
                    ? (<Link to="/cart">
                    <button>Go to cart</button>
                    </Link>)
                    : (<ItemCount onAddToCart={handleAddToCart} stock={product.stock} />)
                :
                <p>Product is out of stock</p>
            } 
           
            <Link to="/">
                <ButtonComponent>Back to Home</ButtonComponent>
            </Link>
         </div>
        );
}


export default ItemDetailContainer;