import { useState, useEffect } from "react";
import { getData, getCategoryData } from "../../services/firebase";
import { useParams } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders';
import ItemList from "./ItemList";


function ItemListContainer (props) {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
    
  const {categoryId} = useParams();
    
  useEffect(() => {
    setIsLoading(true);
    async function requestProducts(){
      let response = categoryId
        ? await getCategoryData(categoryId) 
        : await getData();
      setProducts(response);
      setIsLoading(false);
    }

      requestProducts();
    }, [categoryId]);

    if(isLoading){
        return  <DotSpinner size={80} speed={0.9} color="black" />
    }
    else {
        return (products.length === 0)
        ? <p>There are not available products for that request.</p>
        : <ItemList products={products} />
    }
}

export default ItemListContainer;
