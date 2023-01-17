import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    const itemCollection = collection(db, "products");
    if (categoryName) {
      const q = query(itemCollection, where("category", "==", categoryName));
      getDocs(q)
        .then((res) => {
          const products = res.docs.map((product) => {
            return { ...product.data(), id: product.id };
          });
          setItems(products);
        })
        .catch((err) => console.log(err));
    } else {
      getDocs(itemCollection)
        .then((res) => {
          const products = res.docs.map((product) => {
            return { ...product.data(), id: product.id };
          });
          setItems(products);
        })
        .catch((err) => console.log(err));
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [categoryName]);
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
