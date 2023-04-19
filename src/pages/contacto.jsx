import React from 'react'

const ContactoPage = () => {
  return (
    <div>
        <h4>COMO INSERTAR UN ANUNCIO:</h4>
        <p>Si usted quiere publicar un anuncio siga los siguientes pasos:</p>
        <ul>
            <li> 1: envie a este 
            <a className='text-start text-light bg-success border  border-success rounded-4 p-2 m-2 contacto' style={{fontSize:('0.8em')}}
             href='https://wa.me/+5353967771'>
            <i className='bi bi-whatsapp me-1'/>
            Whatsapp
            </a>
            o a este
            <a className='text-end text-light bg-primary border border-primary rounded-4 p-2 m-2 contacto' style={{fontSize:('0.8em')}}
             href='https://telegram.me/LonelyWolf1988'>           
            <i className='bi bi-telegram me-1' />
            Telegram
            </a>
         su solicitud
        </li>
        <li>2: Incluya en el mensaje toda las discripcion del producto que desea vender</li>
        <li>3: Incluya en el mensaje de 1 a 3 imagenes por producto</li>
        <li>4: Incluya en el mensaje el precio de los productos(<strong>obligatorio</strong>)</li>
        <li>5: Incluya en el mensaje la cantidad de ariticulos disponibles por producto(<strong>opcional</strong>)</li>
        </ul>
        <p>El numero de Whatsapp o usuario de Telegram que use para enviar la solicitud sera usado como contacto para que los
          interesados puedan dirigirse a usted directamente sin intermediarios        
        </p>
        <p>EL proceso de publicar anuncios es totalmente gratis</p>
    </div>
  )
}

export default ContactoPage