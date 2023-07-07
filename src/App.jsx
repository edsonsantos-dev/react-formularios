import React from "react";

function App() {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleClick() {
    setForm({
      nome: "",
      email: "",
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
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
