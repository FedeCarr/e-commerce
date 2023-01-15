import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "../counter/Counter";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);

    getDoc(ref).then((res) => {
      setProduct({
        id: res.id,
        ...res.data(),
      });
    });
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
