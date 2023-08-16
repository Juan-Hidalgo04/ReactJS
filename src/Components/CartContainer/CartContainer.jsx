import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../Context/cartContext';
import { Link } from 'react-router-dom';


function CartContainer() {
  const { cart, removeItem } = useContext(cartContext);
 


  return (
    <div>
        <h1>Shopping Cart</h1>
        {
          cart.map((item) => (
            <div>
              <h2>{item.title}</h2>
              <p>Cost: ${item.price} </p>
              <p>Qty: {item.count} </p>
              <p>Total price: ${item.count * item.price} </p>
              <button onClick={ () => removeItem(item.id)}>Detele</button>
            </div>
          ))}
          <br />
          <Link to="/checkout">Proceed to checkout</Link>
    </div>
  );
}

export default CartContainer;