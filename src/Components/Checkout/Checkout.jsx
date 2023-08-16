import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../Context/cartContext';
import { createOrder } from '../../services/firebase';
import { useContext, useState } from 'react';
 
 
 function Checkout() {
    const [buyer, setBuyer] = useState({
      firstname: "",
      lastname: "",
      age: "",
    });

    const navigate = useNavigate();
    const { cart, getTotalPriceInCart } = useContext(cartContext);
  
  async function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
      items: cart,
      buyer: buyer,
      date: new Date(),
      total: getTotalPriceInCart(),
    };

    try {
      const idOrder = await createOrder(orderData);
      console.log(`Thanks for your purchase. Your order number is ${idOrder}`);
      
      navigate(`/order-confirmation/${idOrder}`);
    } catch (error) {
      alert(`Purchase could not be completed ${error.message}`);
    }
  } 
  
  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    //buyer["firstname"] -> buyer.firstname
    const newState = {...buyer}
    newState[field] = value;
    setBuyer(newState);
  }

  function resetForm(e){
    e.preventDefault();
    setBuyer({
      firstname: "",
      lastname: "",
      age: "",
    })
  }

  return (
    <form>
    <h2>Complete the details for the order🛍</h2>

    <div style={{ display: 'flex', marginBottom: 8 }}>
      <label htmlFor="firstname" style={{ width: '100px', marginRight: 4 }}>First Name</label>
      <input value={buyer.firstnamename} name="firstname" type="text" onChange={onInputChange} />
    </div>

    <div style={{ display: 'flex', marginBottom: 8 }}>
      <label htmlFor="lastname" style={{ width: '100px', marginRight: 4 }}>Last Name</label>
      <input value={buyer.lastname} name="lastname" type="text" onChange={onInputChange} />
    </div>

    <div style={{ display: 'flex', marginBottom: 8 }}>
      <label style={{ width: '100px', marginRight: 4 }}>Age</label>
      <input value={buyer.age}  name="age" type="number" onChange={onInputChange} />
    </div>
            
      <button
        disabled={!(buyer.firstname !== '' && buyer.lastname !== '' && buyer.age !== '')}
        onClick={handleCheckout}
      >
        Confirm Order
      </button>
      <button onClick={resetForm}>Cancel</button>
    </form>)
 }
    
 export default  Checkout;