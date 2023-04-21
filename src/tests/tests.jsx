import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useFetch } from '../useFetch'
import Card from '../components/card'
import { toast } from 'react-toastify'

const Tests = () => {
    const {list,loading,error}=useFetch('getofertas.php')

    error && toast.error(error.message)
   
  return (
    <div className='container-fluid d-flex flex-wrap'>
         { loading && <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                 </div>
    }
        {
            list ?.data.map((l)=>(
                <Card articulo={l} />
            ))
        }
    </div>
  )
}

export default Tests