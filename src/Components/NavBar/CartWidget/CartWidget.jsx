import cart from './cart.svg'

function CartWidget () {
    return (
        <div>
        <img src={cart} className="App-logo" alt="shoppingCart" /> 
        <sup>2</sup> 
        </div>
       
    )
}

export default CartWidget;