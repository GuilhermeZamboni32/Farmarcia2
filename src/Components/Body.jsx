import React from 'react';
import { BiPlusMedical } from "react-icons/bi";
import Contato from './Contato'; 

function Home({ fila, gerarSenha, atender }) {
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
            <button onClick={gerarSenha}>Gerar Senha Normal</button>
            <button onClick={atender}>Atender</button>

            <h3>Fila de Espera:</h3>
            {fila.length > 0 ? (
              fila.map((senha) => (
                <div key={senha.numero}>
                  <p>SENHA: {senha.numero}</p>
                  <p>Tipo: {senha.tipo}</p>
                </div>
              ))
            ) : (
              <p>Nenhuma senha na fila.</p>
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
  )
}

export default Home;
