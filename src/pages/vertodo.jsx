import React, { Suspense, useState } from 'react'
import GetAll from '../components/data_fetching/getall'
import Buscador from '../components/buscador';

const VerTodo = () => {
    const [buscar, setBuscar]=useState('');
  return (
    <div className='container d-flex flex-column flex-wrap justify-content-center align-items-center'>
        <Buscador setBuscar={setBuscar} />
        <div className='container-fluid d-flex flex-row flex-wrap justify-content-center align-items-center'>
        <Suspense fallback={<i className="bi bi-arrow-clockwise text-dark">cargando...</i>} >
          <GetAll buscar={buscar}/>
         </Suspense>
        </div>
    </div>
  )
}

export default VerTodo