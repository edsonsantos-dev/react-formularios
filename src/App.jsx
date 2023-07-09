import React from "react";
import InputText from "./Form/InputText";
import useForm from "./Form/useForm";

const App = () => {
  const cep = useForm("cep");
  const email= useForm("email")
  const nome = useForm();

  const [endereco, setEndereco] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!cep.validate()) {
      console.log("Não enviou!");
      setEndereco(null);
    } else {
      const resp = await fetch(
        `https://www.cepcerto.com/ws/json/${cep.value.replace("-", "")}`
      );
      const respJson = await resp.json();
      setEndereco(respJson);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputText
          enableLabel={true}
          nameLabel={"CEP"}
          id={"cep"}
          placeholder={"00000-000"}
          {...cep}
        />
        <InputText
          enableLabel={true}
          nameLabel={"E-mail"}
          id={"email"}
          placeholder={"email@email.com"}
          {...email}
        />
        <InputText
          enableLabel={true}
          nameLabel={"Nome"}
          id={"nome"}
          {...nome}
        />
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
