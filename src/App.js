import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import linkedin from '../src/images/linkedin.svg'
import github from '../src/images/github.svg'
import mailto from '../src/images/mail.png'
import instagram from '../src/images/instagram.svg'


function App() {
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark color-nav">
  <a className="navbar-brand" href="#">Atharva</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="https://www.linkedin.com/in/atharva-joshi-76756916a/">LinkedIn<span className="sr-only">(current)</span></a> 
      </li>
      <li className="nav-item">
        <a className="nav-link" href="mailto:Atharwajoshi@gmail.com">Email</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.instagram.com/a3harva/">Instagram</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://github.com/a3harva">Github</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default App;
