import React from 'react';
import { NavLink } from 'react-router-dom';

const links= Array(    
    {
    "name":"Inicio",
    "value":'/',
    "icon":"<i className='bi bi-house-fill me-2' />"
    },
    {
    "name":"Ver Todo",
     "value":'/vertodo',
     "icon":"bi bi-server me-2"
    },
    {
    "name":"De Uso",
    "value":'/deuso',
    "icon":"bi bi-recycle me-2"
    },
    {
    "name":"Nuevo",
    "value":'/nuevo',
    "icon":"bi bi-box-fill me-2"
    },
    {
    "name":"Publicar",
    "value":'/contacto',
    "icon":"bi bi-arrow-up"
    },
);

const NavBAr = () => {
   
  return (
    <ul className="nav bg-dark justify-content-center w-100 mb-3 shadow sticky-top">
      {
        links.map((l)=>(
            <li className="nav-item" key={l.name}>
                <NavLink 
                 to={l.value} 
                 className={({isActive})=>isActive ? "nav-link text-danger text-decoration-underline":"nav-link text-light"} 
                 aria-current="page"  >
                <i className={`me-2 ${l.icon}`} />
                {l.name}
                </NavLink>
          </li>
        ))
      }     
    </ul>
  )
}

export default NavBAr