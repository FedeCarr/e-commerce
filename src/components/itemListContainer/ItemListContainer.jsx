import { products } from "../../productsMock";
import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const { id } = useParams();
  console.log(id);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const productosFiltered = products.filter(
      (productos) => productos.category === id
    );
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id ? productosFiltered : products);
      }, 1000);
    });
    task
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log("ERROR");
      });
  }, [id]);
  return (
    <div>
      {/* <h2>{greeting}</h2>
      <Counter stock={0} initial={1} onAdd={onAdd} /> */}
      {items.map((element) => {
        return <ItemList element={element} />;
      })}
      ;
    </div>
  );
};
export default ItemListContainer;
