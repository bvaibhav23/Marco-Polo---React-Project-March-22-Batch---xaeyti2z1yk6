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
  let name = document.getElementById("marco-polo");
  name.innerText === "Marco" ? (name.innerText = "Polo") : (name.innerText = "Marco");
 // alert(name);
  let btn = document.getElementById("marco-polo-toggler");
  btn.innerText === "Marco" ? (btn.innerText = "Polo") : (btn.innerText = "Marco");
//   alert(btn);
};

export default App;
