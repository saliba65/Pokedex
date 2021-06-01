import React from "react";
import { InputStyled } from "./InputStyle";

const Input = ({ id, name, type, onChange, value, showError }) => {
  return (
    <div>
      <InputStyled
        id={id}
        name={name}
        type={type}
        onChange={(event) => {
          onChange(event);
        }}
        value={value}
      />
    </div>
  );
};

export default Input;
