// Cadastro.tsx
import { useState } from 'react';

export default function cadastro({
  onSalvar,
  onCancel,
}: {
  onSalvar: (livro: { nome: string; numPaginas: number }) => void;
  onCancel: () => void;
}) {
  const [nome, setNome] = useState('');
  const [numPaginas, setNumPaginas] = useState('');

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
