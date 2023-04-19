import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Values } from '../../default/default_values';



const GetCategorias =   () => {
    const [list,setList]= useState();
   
    useEffect(()=>{
     
       axios.get('https://ts-conectate.000webhostapp.com/bd_request/get/getCategories.php') 
       .then((res)=>{return res.data})
       .then((response)=>{setList(response)})        
    },[])
  return (
    <>
    
        {list ?
           list.data.map((l)=>(
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
         :
         <p className='text-danger'>'Sorry,we have some trouble to get de informacion, try it later'</p>
    
                }     </>
  )
}

export default GetCategorias