import React, { useContext } from 'react'
import { Hamouda } from '../App'

function Bc() {
    const {data,setData}=useContext(Hamouda)
  return (
    <div>Bc  {data} 
    
    <button onClick={()=>setData('new tex')} >click</button></div>
  )
}

export default Bc