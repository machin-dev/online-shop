import React, { Suspense } from 'react'
import GetCategorias from '../components/data_fetching/getcategories'

const Home = () => {
  return (
    <div className='container text-center'>
        <h1 className='text-primary m-4 fw-bold title'>
            TECNO  
            <i className='bi bi-bag-check text-light m-3 bg-danger p-3 rounded-4' />
            SHOP 
        </h1>
        
        <p className='  text-light bg-primary p-4 text-center bg-opacity-75 rounded-4 shadow'>
          ¡Bienvenido a nuestra tienda online de accesorios tecnológicos! En nuestra tienda encontrarás una amplia selección 
          de productos de calidad para satisfacer todas tus necesidades tecnológicas. Desde memorias USB hasta
          cargadores portátiles y fundas para teléfonos móviles.
          ¡Explora nuestra tienda hoy mismo y descubre todo lo que tenemos para ofrecer!”
        </p>
      
        <div className='container d-flex flex-row flex-wrap justify-content-center'>
            <Suspense fallback={<i className="bi bi-arrow-clockwise text-dark">cargando...</i>}>
                 <GetCategorias />
            </Suspense>
      </div>
    </div>
  )
}

export default Home