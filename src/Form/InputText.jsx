import React from "react";

const InputText = ({
  enableLabel,
  nameLabel,
  id,
  onChange,
  ...props
}) => {
  return (
    <>
      {enableLabel && <label htmlFor={id}>{nameLabel}</label>}
      <input
        type="text"
        id={id}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default InputText;
