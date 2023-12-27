//liste des actions
//pour chaque action je dois retourner un type
//chaque action est une function

import axios from "axios"
import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./productsType"

const productsRequest = () => {
    return {
        type: PRODUCT_REQUEST
    }
}

const productsSuccess = (products) => {
    return {
        type: PRODUCT_SUCCESS,
        payload: products
    }
}
const productsFailure = (errorMsg) => {
    return {
        type: PRODUCT_FAILURE,
        payload: errorMsg
    }
}

export function fetchProducts() {
    return  (dispatch) => {
        dispatch(productsRequest())
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDM2ODU1NzgsImV4cCI6MTcwMzY4OTE3OCwiZW1haWwiOiJhZG1pbkBiYWhtZWRrYW1lbC5jb20iLCJpZCI6IjEiLCJzaXRlIjoiaHR0cHM6XC9cL3d3dy5iYWhtZWRrYW1lbC5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwiaXNzIjoiaHR0cHM6XC9cL3d3dy5iYWhtZWRrYW1lbC5jb20ifQ.NRt0--L0E08JMxz66dnhmoGoip7EsUkt7CvW7xbcNLw"
        const config = {
            headers: { Authorization: 'Bearer ' + token }
        };
        axios.get('https://www.bahmedkamel.com/wp-json/wc/v3/products', config)
            .then(response => {
                dispatch(productsSuccess(response.data))
               
            })
            .catch((error) => {
               
                dispatch(productsFailure("veulliez vous connectez"))
              
            })
    }
}