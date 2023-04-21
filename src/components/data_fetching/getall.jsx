
import React, { useEffect, useState } from 'react';
import Contacto from '../contacto';

import { useFetch } from '../../useFetch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../card';

const GetAll = ({buscar}) => {
   const {list,loading,error}=useFetch('getofertas.php');

   error && toast.error(error.message);
  return (  
    <> 
    <ToastContainer />
    { 
    loading && <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                 </div>
    }{
    list ?.data.filter((e)=>(e.descripcion.toString().toLowerCase().includes(buscar.toLowerCase()))).map((l)=>(
         <Card articulo={l} key={l.id}/>
        )
    )
    }
    </>
  )
}

export default GetAll