import React from 'react'
import GetNuevo from '../components/data_fetching/getnuevo'

const Nuevo = () => {
  return (
    <div className='container d-flex flex-row flex-wrap justify-content-center align-items-center'>
        <GetNuevo />
    </div>
  )
}

export default Nuevo