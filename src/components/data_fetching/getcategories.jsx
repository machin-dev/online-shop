
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useFetch } from '../../useFetch';
import { ToastContainer, toast } from 'react-toastify';



const GetCategorias =   () => {
  const {list,loading,error}=useFetch('getcategories.php');

  error && toast.error(error.message)
  return ( 
    <>
        <ToastContainer />
        { loading && <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                 </div>
    }
        {
           list?.data.map((l)=>(
            <Link to={`/${l.id}`} className="btn"  key={l.id}>
            <div className="card m-2 p-1  card-border shadow"  style={{width:('200px'), height:('300px')}}>
                <img className="card-img-top" src={`img/cat_img/${l.nombre}.jpg`} alt={l.nombre}
                onError={(e)=> e.currentTarget.src='img/art_img/default.jpg'} />
                <div className="card-body">
                    <h4 className="card-title">{l.nombre}</h4>
                    <p className="card-text text-start text-secondary border p-2">
                    <i className='bi bi-server me-2' />
                    {l.count} articulos
                </p>
                </div>
            </div>
            </Link>
           ))
        }
    </> 
  )
  
}

export default GetCategorias