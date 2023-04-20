import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useFetch } from '../useFetch'
import Card from '../components/card'

const Tests = () => {
    const {list}=useFetch('getofertas.php')
   
  return (
    <div>
        {
            list ?.data.map((l)=>(
                <Card nombre={l.nombre} url={l.url_0} key={l.id} />
            ))
        }
    </div>
  )
}

export default Tests