'use client'
import React, { useRef, useState } from 'react'

const Buscador = ({setBuscar}) => {
   const buscar_ref=useRef();
  return (
    <div className='m-3 input-group bg-light rounded-4 shadow border border-dark  w-100 buscador' >
        <label htmlFor="formFile" className="form-label m-2  ps-2 pe-2 text-dark">Buscar: </label>
        <input 
            className="form-control border-0" 
            type="search"
            id="formFile"            
            placeholder='¿que busca?'
             ref={buscar_ref}
             onChange={(e)=>(setBuscar(e.target.value))}
           />
        <i className='bi bi-search m-2'/>
    </div>
  )
}
export default Buscador
