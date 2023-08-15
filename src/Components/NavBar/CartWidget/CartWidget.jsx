import { Link } from 'react-router-dom';
import { cartContext} from '../../../Context/cartContext';
import cart from './cart.svg'
import { useContext } from 'react';

function CartWidget () {
    const context = useContext(cartContext);

    return (
        <Link to="/cart">
        <div>
        <img src={cart} className="App-logo" alt="shoppingCart" /> 
        <span> {context.getTotalItemsInCart()} </span> 
        </div>
        </Link>
    )
}

export default CartWidget;