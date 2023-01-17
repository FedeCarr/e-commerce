import "./Orders.css";
const Orders = ({ order }) => {
  return (
    <div>
      <h2>{order?.buyer?.name}</h2>
      {/* {order.items.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt="" className="imagen" />
          <h3>Producto: {item.name}</h3>
          <h3>Unidades: {item.quantity}</h3>
          <h3>Subtotal: {item.quantity * item.price}$</h3>
        </div>
      ))} */}
      <h2>El precio Total es: {order?.total}</h2>
    </div>
  );
};

export default Orders;
