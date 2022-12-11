import { useEffect, useState } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import Counter from "../counter/Counter";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const productSelected = products.find((producto) => producto.id === +id);
    setProduct(productSelected);
  }, [id]);
  return (
    <div>
      <h2>{product.name}</h2>
      <h2>{product.price}</h2>
      <h2>{product.description}</h2>
      <Counter stock={product.stock} initial={0} />
    </div>
  );
};

export default ItemDetailContainer;
