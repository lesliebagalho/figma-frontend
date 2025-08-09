// src/components/CadastroGeral.jsx
//Estou fazendo o link no github
import React, { useState } from 'react';

const CadastroGeral = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email.includes('@') || senha.length < 6) {
      setMensagem('Todos os campos devem estar preenchidos');
      return;
    }

    setMensagem('Cadastro realizado com sucesso!');
    setNome('');
    setIdade('');
    setEmail('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            required
          />
        </div>

        <div>
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            required
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastroGeral