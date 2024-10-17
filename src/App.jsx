import { useState } from 'react';
import './App.css';
import Header from './components/Header'; 
import Home from './components/Home'; 
import Footer from './components/Footer'; 
import 'react-icons/fa';

function App() {
  const [fila, setFila] = useState([])

  function gerarSenha() {
    let senha = {
      numero: Date.now(),
      tipo: 'normal',
    };
    setFila([...fila, senha])
  }

  function atender() {
    if (fila.length) {
      alert(`Atendendo senha: ${fila[0].numero}`)
      setFila(fila.slice(1));
    } else {
      alert('Não tem ninguém na fila, finge que tá fazendo alguma coisa e vai descansar')
    }
  }

  return (
    <>
      <Header />
      <Home fila={fila} gerarSenha={gerarSenha} atender={atender} />
      <Footer />
    </>
  );
}

export default App;
