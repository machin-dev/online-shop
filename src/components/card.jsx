import React from 'react'
import Contacto from './contacto'

const Card = ({articulo}) => {
  return (
    <div className="card m-2 card-border shadow" key={articulo.id} style={{width:('300px'), height:('520px')}}>
            <div className='w-100 bg-dark position-relative' style={{height:('40%')}}>  
             <span className='badge text-bg-primary position-absolute top-0 end-0'>{articulo.precio}</span>
             <img className="card-img-top rounded-0 " src={`img/art_img/${articulo.url_0}.jpg`} alt="Title"
             onError={(e)=> e.currentTarget.src='img/art_img/default.jpg'} />
          
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {articulo.nombre}                    
                </h5>
                <p className="card-text text-secondary border p-2 overflow-auto" style={{height:('100px')}}>
                    {articulo.descripcion}
                </p>
                <div className="row border p-1">
                  <div className='col-6'>
                      <p className="card-text text-secondary text-start">
                       <small>
                        <i className='bi bi-server'/>
                           Disponibles: {articulo.cantidad}
                        </small>
                     </p> 
                 </div>
                 <div className='col-6'>
                         <p className="card-text text-secondary text-end ">
                         {articulo.de_uso==0 ? <b>Nuevo</b>:<i>De uso</i>}</p>
                 </div>
                </div>    
            </div>
            <div className='card-footer m-0'>
             <Contacto />
            </div>   
           </div>
  )
}

export default Card