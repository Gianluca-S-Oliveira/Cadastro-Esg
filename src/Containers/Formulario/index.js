import React, { useState } from "react";

const FormularioAtividade = () => {
  const [tipoAtividade, setTipoAtividade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [categorias, setCategorias] = useState({
    eventoSustentavel: false,
    impactoSocial: false,
    governanca: false,
  });

  const handleTipoAtividadeChange = (event) => {
    setTipoAtividade(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const handleLocalizacaoChange = (event) => {
    setLocalizacao(event.target.value);
  };

  const handleCategoriaChange = (categoria) => {
    setCategorias({
      ...categorias,
      [categoria]: !categorias[categoria],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Cria um objeto com os dados do formulário
    const novaAtividade = {
      tipoAtividade,
      descricao,
      localizacao,
      categorias,
    };

    // Recupera as atividades já existentes no localStorage
    const atividadesExist =
      JSON.parse(localStorage.getItem("atividades")) || [];

    // Adiciona a nova atividade à lista
    const novasAtividades = [...atividadesExist, novaAtividade];

    // Atualiza o localStorage com a lista atualizada de atividades
    localStorage.setItem("atividades", JSON.stringify(novasAtividades));

    // Limpa o formulário
    setTipoAtividade("");
    setDescricao("");
    setLocalizacao("");
    setCategorias({
      eventoSustentavel: false,
      impactoSocial: false,
      governanca: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tipo de Atividade</label>
        <select value={tipoAtividade} onChange={handleTipoAtividadeChange}>
          <option value="">Selecione o tipo de atividade</option>
          <option value="reciclagem">Reciclagem (5 pontos)</option>
          <option value="eventoSustentavel">
            Evento Sustentável (15 pontos)
          </option>
          <option value="economiaEnergia">
            Economia de Energia (10 pontos)
          </option>
          <option value="plantioArvore">Plantio de Árvore (20 pontos)</option>
        </select>
      </div>

      <div>
        <label>Descrição da Atividade</label>
        <input type="text" value={descricao} onChange={handleDescricaoChange} />
      </div>

      <div>
        <label>Localização</label>
        <input
          type="text"
          value={localizacao}
          onChange={handleLocalizacaoChange}
        />
      </div>

      <div>
        <label>Categoria</label>
        <div>
          <label>
            <input
              type="checkbox"
              checked={categorias.eventoSustentavel}
              onChange={() => handleCategoriaChange("eventoSustentavel")}
            />
            Evento Sustentável
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={categorias.impactoSocial}
              onChange={() => handleCategoriaChange("impactoSocial")}
            />
            Impacto Social
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={categorias.governanca}
              onChange={() => handleCategoriaChange("governanca")}
            />
            Governança
          </label>
        </div>
      </div>

      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FormularioAtividade;
