import logo from './logo.svg';
import './App.css';
import JatekTer from './components/Jatekter';
import { useState } from 'react';

function App() {
  const lista =[true, false, true,false, true,false, true, false]
  const id=0
  function katt(adat){
    console.log("app-ban",adat)
  
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>LightOn</h1>
      </header>
      <article>
        <div className='jatekter'>
          <JatekTer lista={lista} katt={katt}/>
        </div>
      </article>
      <footer>Lajkó Gergő</footer>
    </div>
  );
}

export default App;
