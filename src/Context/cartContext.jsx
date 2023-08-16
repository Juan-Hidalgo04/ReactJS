import { createContext, useState } from "react";

export const cartContext= createContext({ cart: [] });

export function CartContextProvider ({children}){
  const [cart, setCart] = useState([]);

  function addToCart(product, count) {
    console.log(product, count);
    const newCart = cart.map((item) => item);
    const newItemInCart = { count, ...product};
    newCart.push(newItemInCart);
    setCart(newCart);
  }
  
  function removeItem(idDelete){
    setCart(cart.filter((item) => item.id !== idDelete));
  }
  
  function clearCart(){
  setCart([]);
}

  function getTotalItemsInCart(){
  let total= 0;
  cart.forEach((item) => { 
    total += item.count;
  }); 
  return total;
}

function getTotalPriceInCart(){
  let total= 0;
  cart.forEach((item) => { 
    total += item.count *item.price;
  }); 
  return total;
}

  return(
    <cartContext.Provider 
    value={{cart, addToCart, removeItem, clearCart, getTotalItemsInCart, getTotalPriceInCart }}>
      {children}
    </cartContext.Provider>
  )
}
