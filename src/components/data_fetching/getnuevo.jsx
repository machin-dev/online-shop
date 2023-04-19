import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Contacto from '../contacto';
import { Values } from '../../default/default_values';

const GetNuevo = () => {
    const [list,setList]=useState();

    useEffect(()=>{
        axios.get(Values.url+'getnuevos.php')
        .then((res)=>{return res.data})
        .then((response)=>{setList(response)})
    },[])
  return (
        list ?
     list.data.map((l)=>(
        <div className="card m-2 card-border shadow" key={l.id} style={{width:('300px'), height:('520px')}}>
        <div className='w-100 bg-dark ' style={{height:('40%')}}>
         <img className="card-img-top" src={`img/art_img/${l.url_0}.jpg`} alt="Title" 
         onError={(e)=> e.currentTarget.src='img/art_img/default.jpg'}/>
        </div>
        <div className="card-body">
            <h5 className="card-title">
                {l.nombre}
                <small className='text-secondary'>-{l.precio}</small>
            </h5>
            <p className="card-text text-secondary border p-2 overflow-auto" style={{height:('100px')}}>{l.descripcion}</p>
            <div className="row border p-1">
              <div className='col-6'>
                  <p className="card-text text-secondary text-start">
                   <small>
                    <i className='bi bi-server'/>
                       Disponibles: {l.cantidad}
                    </small>
                 </p> 
             </div>
             <div className='col-6'>
                     <p className="card-text text-secondary text-end ">
                     {l.de_uso==0 ? <b>Nuevo</b>:<i>De uso</i>}</p>
             </div>
            </div>    
        </div>
        <div className='card-footer m-0'>
         <Contacto />
        </div>   
    </div>
     ))
     :<p className='text-danger'>'Sorry,we have some trouble to get de informacion, try it later'</p>

  )
}

export default GetNuevo
