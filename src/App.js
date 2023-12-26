import React from 'react'
import Produits from './pages/Produits'
import AddCategorie from './pages/AddCategorie'
import DetailProduit from './pages/DetailProduit'
import { Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className='nav-link' to="/">Produits</Link>
              </li>
         
              <li className="nav-item">
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


/**
 * url base : https://www.bahmedkamel.com
 * 
 * products: https://www.bahmedkamel.com/wp-json/wc/v3/products
 * 
 * login : https://www.bahmedkamel.com/?rest_route=/simple-jwt-login/v1/auth&username=admin&password=pass@pass
 * 
 * jwt : eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDM1ODcyMjYsImV4cCI6MTcwMzU5MDgyNiwiZW1haWwiOiJhZG1pbkBiYWhtZWRrYW1lbC5jb20iLCJpZCI6IjEiLCJzaXRlIjoiaHR0cHM6XC9cL3d3dy5iYWhtZWRrYW1lbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iYWhtZWRrYW1lbC5jb20ifQ.j6HAG32DZ0GJn6P_yxpncEbwQJ4NPYGR4Dh_7wH5aW4
 */

/**
 * 
 * learn about "json-server" to create fast api  (checkout doc for more !)
 */