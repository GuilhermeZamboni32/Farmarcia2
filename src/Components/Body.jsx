import React, { useState } from 'react';
import { BiPlusMedical } from "react-icons/bi";
import Contato from './Contato'; 

function Body() {
  const [filaNormal, setFilaNormal] = useState([]);
  const [filaPreferencial, setFilaPreferencial] = useState([])
  const [contadorNormal, setContadorNormal] = useState(1)
  const [contadorPreferencial, setContadorPreferencial] = useState(1)


  const gerarSenhaNormal = () => {
    const novaSenha = { numero: contadorNormal, tipo: 'Normal' }
    setFilaNormal([...filaNormal, novaSenha])
    setContadorNormal(contadorNormal + 1)
  };

  
  const gerarSenhaPreferencial = () => {
    const novaSenha = { numero: contadorPreferencial, tipo: 'Preferencial' }
    setFilaPreferencial([...filaPreferencial, novaSenha])
    setContadorPreferencial(contadorPreferencial + 1)
  };

 
  const atender = () => {
    if (filaPreferencial.length > 0) {
      const novaFilaPreferencial = filaPreferencial.slice(1)
      setFilaPreferencial(novaFilaPreferencial)
    } else if (filaNormal.length > 0) {
      const novaFilaNormal = filaNormal.slice(1)
      setFilaNormal(novaFilaNormal)
    }
  };

  return (
    <main className="body-content">
      <div className="sections-container">
        <div className="section-group">
          <div className="intro">
            <h2>Bem-vindo à Farmácia!</h2>
            <p>Agora sob nova direção.</p>
            <BiPlusMedical />
          </div>

          <div className="inauguracao">
            <h2>Inauguração</h2>
            <p>Participe da inauguração dia 10 de Setembro.</p>
          </div>
        </div>

        <div className="section-group">
          <div className="benefits">
            <h2>Temos</h2>
            <p>Atendimento personalizado.</p>
            <p>Descontos especiais para clientes regulares.</p>
            <p>Medicamentos com preços acessíveis.</p>

            <h2>Nossos Cartões</h2>
            <p>Crédito e débito</p>
            <img src="/img/farmarcia-cartoes.webp" alt="Formas de pagamento" />
          </div>

          <div className="senha">
            <h2>Gestão de Senhas</h2>
            <button onClick={gerarSenhaNormal}>Gerar Senha Normal</button>
            <button onClick={gerarSenhaPreferencial}>Gerar Senha Preferencial</button>
            <button onClick={atender}>Atender</button>

            <h3>Fila de Espera Preferencial:</h3>
            {filaPreferencial.length > 0 ? (
              filaPreferencial.map((senha, index) => (
                <div key={index}>
                  <p>SENHA PREFERENCIAL: {senha.numero}</p>
                  <p>Tipo: {senha.tipo}</p>
                </div>
              ))
            ) : (
              <p>Nenhuma senha preferencial na fila.</p>
            )}

            <h3>Fila de Espera Normal:</h3>
            {filaNormal.length > 0 ? (
              filaNormal.map((senha, index) => (
                <div key={index}>
                  <p>SENHA: {senha.numero}</p>
                  <p>Tipo: {senha.tipo}</p>
                </div>
              ))
            ) : (
              <p>Nenhuma senha normal na fila.</p>
            )}
          </div>

          <div className="diferencial">
            <h2>Nosso diferencial</h2>
            <p>A cada 15 compras você ganha 1 produto grátis.</p>
            <p>Se comparecer à nossa inauguração, você ganhará uma de nossas camisetas.</p>
            <img src="/img/farmarcia-camisetas.jpg" alt="Camiseta da farmácia" className="imagem" />
          </div>
        </div>

        <Contato /> 
      </div>
    </main>
  );
}

export default Body;
