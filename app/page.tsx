// page.tsx
import { useClient } from 'next/data-client';
import Cadastro from './cadastro';

export default function Home() {
  const { data: livros } = useClient().useState([]); // Use useClient here

  const [mostrarCadastro, setMostrarCadastro] = livros.useState(false);

  const handleSalvarLivro = (livro) => {
    livros.setState([...livros(), livro]);
    setMostrarCadastro(false);
  };

  const handleCancelarCadastro = () => {
    setMostrarCadastro(false);
  };

  return (
    <div>
      <h1>Lista de Livros</h1>
      <ul>
        {livros().map((livro, index) => (
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
