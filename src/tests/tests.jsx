import axios from 'axios'
import React, { Suspense, useEffect, useState } from 'react'
import { useFetch } from '../useFetch'
import Card from '../components/card'
import { toast } from 'react-toastify'
import { fectchData } from '../fetchData'


const apiData=fectchData('getofertas.php');

const Tests = () => {
    const list= apiData.read(); 
   

    list && console.log(list.data);
  return (
    <div className='container-fluid d-flex flex-wrap'>
        
        {
            <Suspense fallback={<div className="spinner-border text-primary" role="status">
                                 <span className="visually-hidden">Loading...</span>
                                 </div>}
            >
              {
                list?.data.map((l)=>(
                    <Card articulo={l} key={l.id}/>
                ))
              }
            </Suspense>
        }
    </div>
  )
}

export default Tests