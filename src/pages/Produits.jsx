import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/produits/productsAction';

function Produits() {
    const dispatch = useDispatch()
    const productsData = useSelector(state => state.products)
    useEffect(() => {
        dispatch(fetchProducts())



    }, [])


    console.log(productsData);
    //
    return (
        <div className="container mt-3">

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>price</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                     {productsData.products.map((p, i) => (<tr key={i}>
                        <td> <img src={p.images[0].src} width={50} height={50} alt="" /></td>
                        <td>{p.name}</td>
                        <td>{p.price} DA</td>
                    </tr>))} 
                </tbody>
            </table>
            { productsData.loading ? <p>chargement</p> : null}
             {productsData.error ? <p className='text-danger' >{productsData.error}</p>:null}
        </div>
    )
}

export default Produits