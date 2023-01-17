import React from "react";
import "./ItemDetail.css";
const ItemDetail = ({ product }) => {
  return (
    <div>
      <div>
        <img src={product.img} className="imagen" alt="" />
      </div>

      <div>
        <h2>
          <span>Nombre:</span> {product.name}
        </h2>
        <h2>
          <span>Descripcion:</span> {product.description}
        </h2>
        <h2>
          <span>Precio:</span> ${product.price}.-
        </h2>
      </div>
    </div>
  );
};

export default ItemDetail;
