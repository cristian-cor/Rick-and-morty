import React from 'react'
import Cards from "./components/Cards.jsx";
import Header from "./components/Header.jsx";
import './style/global.css'

function App() {

 
  return (
    <React.StrictMode>
          <div className="containerApp">
    <Header/>
    <Cards/>
    </div>
    </React.StrictMode>

  );
}

export default App;
