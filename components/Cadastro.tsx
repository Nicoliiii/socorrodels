import { useEffect, useState } from 'react';

export default function Cadastro({
  onSalvar,
  onCancel,
}: {
  onSalvar: (livro: { nome: string; numPaginas: number }) => void;
  onCancel: () => void;
}) {
  const [nome, setNome] = useState('');
  const [numPaginas, setNumPaginas] = useState('');

  useEffect(() => {
    // Garante que o código dentro deste bloco seja executado no lado do cliente
    setNome(''); // Exemplo de uso, você pode ajustar conforme necessário
    setNumPaginas(''); // Exemplo de uso, você pode ajustar conforme necessário
  }, []); // O array vazio [] garante que o useEffect seja executado apenas uma vez, sem dependências

  const handleSalvar = () => {
    onSalvar({ nome, numPaginas: parseInt(numPaginas, 10) });
    setNome('');
    setNumPaginas('');
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <label htmlFor="nomeLivro">Nome do Livro:</label>
      <input
        type="text"
        id="nomeLivro"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label htmlFor="numPaginas">Número de Páginas:</label>
      <input
        type="number"
        id="numPaginas"
        value={numPaginas}
        onChange={(e) => setNumPaginas(e.target.value)}
      />

      <button onClick={handleSalvar}>Salvar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
}
