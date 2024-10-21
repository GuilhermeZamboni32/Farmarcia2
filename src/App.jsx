import { useState } from 'react';
import './App.css';
import Header from './components/Header'; 
import Body from './Components/Body';
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
      setFila(fila.slice(1))
    } else {
      alert('Não tem ninguém na fila, finge que tá fazendo alguma coisa e vai descansar')
    }
  }
 

  return (
    <>
    
      <Header />
      <Body />
    </>
  );
}

export default App;
