import React from 'react'

const Card = ({nombre, url}) => {
  return (
    <div class="card m-5 position-relative" style={{width:('300px'), height:('350px')}}>
        <img class="card-img-top" src={`img/art_img/${url}.jpg`} alt="Title" />
        <div class="card-body position-absolute start-0 top-50 bg-dark bg-opacity-50 w-100 h-50 text-light align-bottom">
            <h4 class="card-title">{nombre}</h4>
            <p class="card-text">Text</p>
        </div>
    </div>
  )
}

export default Card