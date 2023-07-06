import React from "react";

function App() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleClick(){
    setEmail("");
    setNome("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button>Enviar</button>
      <button
      onClick={handleClick}
        style={{ backgroundColor: "Red", color: "white", marginLeft: "1rem" }}
      >
        Excluir
      </button>
    </form>
  );
}

export default App;
