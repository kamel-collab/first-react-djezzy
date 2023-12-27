// il faut creer un un state initial 
//il faut retourne un state tout en manipulant le state initial ou le prev state
//par defaut on retiurn on retourne l'etat initial
//bien en creant une  fct reducer

import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./productsType"

const initialState = {
    loading: false,
    products: [],
    error: '',
   
}


const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PRODUCT_SUCCESS:
            return {
                error: '',
                loading: false,
                products: action.payload
            }
            case PRODUCT_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    loading: false,
                    
                }


        default:
            return state
    }
}
export default productsReducer;
