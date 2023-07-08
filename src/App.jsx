import React from "react";
import InputText from "./Form/InputText";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
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
      <button>Enviar</button>
    </form>
  );
};

export default App;
