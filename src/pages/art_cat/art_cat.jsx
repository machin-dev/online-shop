import React, { useEffect, useState } from 'react'
import Contacto from '../../components/contacto';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../useFetch';
import { useFetch2 } from '../../useFecth2';
import { ToastContainer } from 'react-toastify';
import Card from '../../components/card';

const ArtCat = () => {
    const cat=useParams();
    const {list,loading,error}=useFetch('getofertas.php?id='+cat.id);
    const {categ}=useFetch2('getCategories.php?id='+cat.id);
    

    error && toast.error(error.message);
  return (
    <div className='container'>  
       <ToastContainer
       position="top-center"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme="dark" />          
       {       
         categ && 
             <h4 className='bg-primary p-2 m-2 rounded-2 text-center'>
              {categ.data[0].nombre}
              <span className='badge text-light border ms-2'>
                 {categ.data[0].count} articulos
              </span>
             </h4>        
        } 
       <div className='container-fluid d-flex flex-row flex-wrap justify-content-center align-items-center'>
        { loading && <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                    </div>
        }
        {
          list?.data.map((l)=>(
            <Card articulo={l} key={l.id}/>
            )
          )
        }
       </div>
    </div>
  )
}
export default ArtCat