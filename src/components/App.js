import React from 'react'
import '../styles/App.css';
const App = () => {
  return (
    <div id="main">
      <h1 id="marco-polo">Marco</h1>
      <button id="marco-polo-toggler" onClick={tog}>
        Polo
      </button>
    </div>
  );
};

const tog = () => {
  let name = document.getElementById("marco-polo").innerText;
  name === "Marco" ? (name = "Polo") : (name = "Marco");
 // alert(name);
  let btn = document.getElementById("marco-polo-toggler").innerText;
  btn === "Marco" ? (btn = "Polo") : (btn = "Marco");
//   alert(btn);
};

export default App;
