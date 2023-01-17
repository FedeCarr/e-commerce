import { Link } from "react-router-dom";
import "./ItemList.css";
const ItemList = ({ element }) => {
  return (
    <div key={element.id} className="container-cards">
      <h2>{element.name}</h2>
      <img src={element.img} alt="" className="img-cards" />
      <h3>${element.price}€</h3>
      <Link to={`/item/${element.id}`}>Ver detalle</Link>
    </div>
  );
};

export default ItemList;
