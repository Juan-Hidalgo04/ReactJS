import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../Context/cartContext';


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
          <div>
            Subtotal: $999
          </div>
          <button> Proceed to checkout </button>
    </div>
  );
}

export default CartContainer;