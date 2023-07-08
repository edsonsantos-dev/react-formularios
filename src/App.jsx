import React from "react";
import InputText from "./Form/InputText";
import Select from "./Form/Select";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  return (
    <form>
      <InputText
        enableLabel={true}
        nameLabel={"Nome"}
        id={"nome"}
        value={nome}
        setValue={setNome}
        required={true}
      />
      <InputText
        enableLabel={true}
        nameLabel={"Email"}
        id={"email"}
        value={email}
        setValue={setEmail}
      />
      <Select
        options={["Notebook", "Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <br />
      <button style={{ marginTop: "1rem" }}>Enviar</button>
    </form>
  );
};

export default App;
