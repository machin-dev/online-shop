
import React, { useEffect, useState } from 'react'
import Contacto from '../contacto';
import { useFetch } from '../../useFetch';
import { ToastContainer } from 'react-toastify';
import Card from '../card';

const GetUso = () => {
    const {list,loading,error}=useFetch('getdeuso.php');
    error && toast.error(error.message)
  return (
    <>
    <ToastContainer />
    { 
            loading && <div className="spinner-border text-primary" role="status">
                         <span className="visually-hidden">Loading...</span>
                     </div>
         }
    {
    list ?.data.map((l)=>(
        <Card articulo={l} key={l.id}/>
     ))
    }
     </>
  )
}

export default GetUso