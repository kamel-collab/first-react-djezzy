/**
 * importer le rootReducer
 *  */

/**
 * creer le store en envoyant le root reducer 
 * tout en assurant d'appliquer le middleware "thunk" 
 * Redux Thunk est un middleware qui permet à vos actions Redux 
 * de retourner des fonctions au lieu d'objets d'action. 
 * Cela est utile pour gérer des actions asynchrones.
 */

/**
 * exporter le store
 */

import { applyMiddleware, createStore } from "redux";

import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;