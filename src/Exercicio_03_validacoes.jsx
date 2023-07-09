import React from "react";
import InputText from "./Form/InputText";

const App = () => {
  const regex = /^[0-9]{5}-?[0-9]{3}$/;
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);
  const [endereco, setEndereco] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    }

    if (!regex.test(value) || value === "00000-000" || value === "00000000") {
      setError("Preencha um CEP válido!");
      return false;
    }

    setError(null);
    return true;
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validateCep(cep)) {
      console.log("Não enviou!");
      setEndereco(null);
    } else {
      const resp = await fetch(
        `https://www.cepcerto.com/ws/json/${cep.replace("-", "")}`
      );
      const respJson = await resp.json();
      setEndereco(respJson);
      console.log(respJson);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputText
          enableLabel={true}
          nameLabel={"CEP"}
          id={"cep"}
          value={cep}
          onChange={handleChange}
          placeholder={"00000-000"}
          onBlur={handleBlur}
        />
        {error && <p style={{ color: "red" }}>*{error}</p>}
        <button>Enviar</button>
      </form>
      {endereco && (
        <div
          style={{ marginTop: "1rem", border: "1px solid", padding: "0 1rem" }}
        >
          <p>Rua: {endereco.logradouro}</p>
          <p>Bairro: {endereco.bairro}</p>
          <p>Cidade: {endereco.localidade}</p>
          <p>Estado: {endereco.uf}</p>
        </div>
      )}
    </>
  );
};

export default App;
