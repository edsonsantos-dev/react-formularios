import React from "react";

const InputText = ({
  enableLabel,
  nameLabel,
  id,
  onChange,
  value,
  onBlur,
  placeholder,
  error,
  style,
}) => {
  return (
    <>
      {enableLabel && <label htmlFor={id}>{nameLabel}</label>}
      <input
        type="text"
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
      />
      {error && (
        <p
          style={{
            color: "red",
          }}
        >
          {error}
        </p>
      )}
    </>
  );
};

export default InputText;
