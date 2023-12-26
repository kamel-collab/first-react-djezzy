import React from 'react'
import Produits from './pages/Produits'
import AddCategorie from './pages/AddCategorie'
import DetailProduit from './pages/DetailProduit'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Produits</Link></li>
        <li><Link to="/detail-produit">Detail Produit</Link></li>
        <li><Link to="/categories/create">Add categorie</Link></li>
      </ul>

      <Routes>
        <Route path='/' element={<Produits/>} />
        <Route path='/detail-produit' element={<DetailProduit/>} />
        <Route path='/categories/create' element={<AddCategorie/>} />
      </Routes>
    </div>
  )
}

export default App