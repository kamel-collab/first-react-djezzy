import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Produits() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDM1ODcyMjYsImV4cCI6MTcwMzU5MDgyNiwiZW1haWwiOiJhZG1pbkBiYWhtZWRrYW1lbC5jb20iLCJpZCI6IjEiLCJzaXRlIjoiaHR0cHM6XC9cL3d3dy5iYWhtZWRrYW1lbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iYWhtZWRrYW1lbC5jb20ifQ.j6HAG32DZ0GJn6P_yxpncEbwQJ4NPYGR4Dh_7wH5aW4"
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
                        <td>{p.price}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default Produits