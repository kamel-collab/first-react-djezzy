/**
 * creation du rootReducer qui a pour bute d'anglober tout 
 les reducer de mon application sachant qun reducer retourne 
 un objet, ou l'objet represente un state
 *  */

import { combineReducers } from "redux";
import productsReducer from "./produits/productsReducer";

 const rootReducer=combineReducers({
    products:productsReducer,
    
 })
 export default rootReducer