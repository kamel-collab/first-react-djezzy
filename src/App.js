import React from 'react'
import Produits from './pages/Produits'
import AddCategorie from './pages/AddCategorie'
import DetailProduit from './pages/DetailProduit'
import { Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className='nav-link' to="/">Produits</Link>
              </li>
         
              <li class="nav-item">
                <Link className='nav-link' to="/categories/create">Add categorie</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>


      <Routes>
        <Route path='/' element={<Produits />} />
        <Route path='/detail-produit' element={<DetailProduit />} />
        <Route path='/categories/create' element={<AddCategorie />} />
      </Routes>
    </div>
  )
}

export default App