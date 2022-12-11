import { useState } from "react";

const CustomButton = ({ texto, counter, setCounter }) => {
  const sumar = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <button onClick={sumar}>{texto}</button>
    </>
  );
};

export default CustomButton;
