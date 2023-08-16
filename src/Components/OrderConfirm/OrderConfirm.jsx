import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../services/firebase';


function OrderConfirm() {
    const [orderData, setOrderData] = useState(null);
    
    const { id } = useParams()
  
    useEffect(() => {
       getOrder(id).then ((order) => { 
        setOrderData(order);
    });
    }, []);
  
    return (
        <div>
        <h1>Thanks for your purchase</h1>
        {orderData ? (
            <div>
                <p>
                    Detail of your purchase: {" "}
                    {orderData.items.map((item) => {
                        return <small> 
                            {item.title} - {item.count} units
                        </small>;
                })}
            </p>
        </div>
        ) : (
            <p>Loadinng...</p>
        )}
        </div>
    );
}

export default OrderConfirm;