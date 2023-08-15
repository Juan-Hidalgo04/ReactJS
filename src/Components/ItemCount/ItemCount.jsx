import React, { useState } from "react";

function ItemCount({stock, onAddToCart}) {
    const [clickCount, setClickCount] = useState(1);
  
    function handleClickAdd() {
      if (clickCount === stock) {}
      else{
     setClickCount(clickCount + 1);
      }
    }
  
    function handleClickSub() {
      if (clickCount > 1) {
        setClickCount(clickCount - 1);
      }
    }
  
    return (
      <div className="mt-3 px-2 py-2">
        <button className="btn btn-outline-secondary" onClick={handleClickSub}> - </button>
        <h2 className="">{clickCount}</h2>
        <button className="btn btn-outline-success" onClick={handleClickAdd}> + </button>
        <div>
        <button onClick={ () => onAddToCart(clickCount) } className="">
          <h4>Add to cart</h4>
        </button>
        </div>
      </div>
    );
  }
  
   
  
  export default ItemCount;