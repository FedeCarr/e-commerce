import { useEffect, useState } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import Counter from "../counter/Counter";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const productSelected = products.find((producto) => producto.id === +id);
    setProduct(productSelected);
  }, [id]);
  const { addToCart, getQuantityById } = useContext(CartContext);
  const onAdd = (quantity) => {
    addToCart({ ...product, quantity });
  };
  const quantity = getQuantityById(product.id);
  return (
    <div>
      <h2>{product.name}</h2>
      <h2>{product.price}</h2>
      <h2>{product.description}</h2>
      <Counter onAdd={onAdd} stock={product.stock} initial={quantity} />
    </div>
  );
};

export default ItemDetailContainer;
