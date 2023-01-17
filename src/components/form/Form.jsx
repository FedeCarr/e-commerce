import React from "react";
import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({ name: "", lastName: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su Nombre"
          name="name"
          onChange={(event) =>
            setUserData({ ...userData, name: event.target.value })
          }
          value={userData.name}
        />
        <input
          type="text"
          placeholder="Ingrese su Apellido"
          name="lastName"
          onChange={(event) =>
            setUserData({ ...userData, lastName: event.target.value })
          }
          value={userData.lastName}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
