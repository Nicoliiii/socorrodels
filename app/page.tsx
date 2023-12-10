import { useEffect, useState } from 'react';
import Cadastro from '../components/Cadastro'; // Ajuste o caminho conforme necessário

export default function Home() {
  const [livros, setLivros] = useState([]);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  const handleSalvarLivro = (livro) => {
    setLivros([...livros, livro]);
    setMostrarCadastro(false);
  };

  const handleCancelarCadastro = () => {
    setMostrarCadastro(false);
  };

  useEffect(() => {
    // Aqui você pode adicionar código que é executado apenas no lado do cliente,
    // como realizar operações de inicialização ou buscar dados do servidor.
  }, []); // O array vazio [] significa que este efeito será executado apenas uma vez, sem dependências.

  return (
    <div>
      <h1>Lista de Livros</h1>
      <ul>
        {livros.map((livro, index) => (
          <li key={index}>
            {livro.nome} - {livro.numPaginas} páginas
          </li>
        ))}
      </ul>

      <button onClick={() => setMostrarCadastro(true)}>Cadastro</button>

      {mostrarCadastro && (
        <Cadastro
          onSalvar={handleSalvarLivro}
          onCancel={handleCancelarCadastro}
        />
      )}
    </div>
  );
}
