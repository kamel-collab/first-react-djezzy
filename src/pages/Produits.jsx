import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Produits() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDM1OTE3MDUsImV4cCI6MTcwMzU5NTMwNSwiZW1haWwiOiJhZG1pbkBiYWhtZWRrYW1lbC5jb20iLCJpZCI6IjEiLCJzaXRlIjoiaHR0cHM6XC9cL3d3dy5iYWhtZWRrYW1lbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iYWhtZWRrYW1lbC5jb20ifQ.wrxAVVtMyzP0RVn-8RWgP4-c13fpTucvHw63PW2sClU"
        const config = {
            headers: { Authorization: 'Bearer ' + token }
        };
        axios.get('https://www.bahmedkamel.com/wp-json/wc/v3/products', config)
            .then(response => {
                console.log(response.data);
                setProducts(response.data)
            })
            .catch((error) => console.log(error))
    }, [])
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
                    {products.map((p,i)=>(<tr key={i}>
                        <td> <img src={p.images[0].src} width={50} height={50} alt="" /></td>
                        <td>{p.name}</td>
                        <td>{p.price} DA</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default Produits