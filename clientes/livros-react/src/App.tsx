import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Catalogo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/novo">Novo</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/novo" element={<LivroDados />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;