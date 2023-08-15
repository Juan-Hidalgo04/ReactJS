import React from "react";
import Item from "../Item/item";

function ItemList(props) {
   const {products} = props;
   
   return (
    <div className="main"> 
        {props.greeting}
        <br/>
        We are <b> Juan & Emi </b> from <strong> Water in the Shoes. </strong>
        <br/>
        We live by the motto <strong> “Adventure is for Everyone” </strong> because we 
        believe that you do not have to be an uber-athlete, adrenaline junkie, or a part of the ultra-rich to be an adventurer!
        All you need is the desire to achieve something <i> more!</i> 
    
    <div>
        <h1>Products</h1>
        <div className="main" >
            {products.map((item) => {
            return <Item key={item.id} {...item} />;
            })}
        </div>
    </div>
    </div>
    )
}

export default ItemList;