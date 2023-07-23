import { useState, useEffect} from "react";
import { getProductData } from "../../services/asyncMock";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    async function requestProduct() {
        const response = await getProductData(id);
        setProduct(response);
    }

    useEffect(() => {
        requestProduct()
    }, []);

    return (
        <div className="main">
        <div>
            <img width={300} src={product.img} alt="image"></img>
        </div>
        <div>
            <h2>{product.title} </h2>
        </div>
        <div>
            <h4>$ {product.price}</h4>
        </div>
        <div>
            <small> {product.description} </small>
        </div>
        <div>
            <h4> {product.category}</h4>
        </div>
        </div>
    );
}


export default ItemDetailContainer;