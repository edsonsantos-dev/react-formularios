import React from "react";

const InputText = ({
  enableLabel,
  nameLabel,
  id,
  setValue,
  ...props
}) => {
  return (
    <>
      {enableLabel && <label htmlFor={id}>{nameLabel}</label>}
      <input
        type="text"
        id={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default InputText;
