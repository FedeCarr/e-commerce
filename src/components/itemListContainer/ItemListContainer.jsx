import { products } from "../../productsMock";
import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const ItemListContainer = () => {
  const { id } = useParams();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const productosFiltered = products.filter(
      (productos) => productos.category === id
    );
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id ? productosFiltered : products);
      }, 500);
    });
    task
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log("ERROR");
      });
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [id]);
  return (
    <div>
      {isLoading ? (
        <RiseLoader
          color={"blue"}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        items.map((element) => {
          return <ItemList element={element} />;
        })
      )}
    </div>
  );
};
export default ItemListContainer;
