import React from 'react';

const Contacto = () => {
  return (
    <div className='row m-1 mb-2 text-center'>
        <h4 className='fs-6 mb-3'>Contactar por:</h4>
        <div className='col-4 '>
            <a className='text-start text-light bg-success  rounded-4 p-2 contacto'
             href='https://wa.me/+5353967771'
             title='Whatsapp'>
            <i className='bi bi-whatsapp m-2'/>           
            </a>
        </div>
        <div className='col-4 '>
        <a className='text-end text-light bg-primary  rounded-4 p-2 contacto' 
             href='https://telegram.me/LonelyWolf1988'
             title='Telegram'>           
            <i className='bi bi-telegram m-2' />            
            </a>
        </div>
        <div className='col-4 '>
        <a className='text-end text-light  rounded-4 p-2 contacto' style={{backgroundColor:('blueviolet')}}
             href='https://m.me/michel.machin.79'
             title='Messenger'>           
            <i className='bi bi-messenger m-2' />            
            </a>
        </div>
    </div>
  )
}

export default Contacto