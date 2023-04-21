import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBAr from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import VerTodo from './pages/vertodo';
import DeUsoPage from './pages/deuso';
import Nuevo from './pages/nuevo';
import './style/mystyle.css';
import ArtCat from './pages/art_cat/art_cat';
import ContactoPage from './pages/contacto';
import Tests from './tests/tests';
import { Toast } from 'bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (    
    <Router basename="/ecommerce/">
      <div className="container-fluid  d-flex flex-row flex-wrap justify-content-center">
      <NavBAr /> 
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<ArtCat /> }/>  
        <Route path="/vertodo" element={<VerTodo />} />
        <Route path="/deuso" element={<DeUsoPage />} />
        <Route path="/nuevo" element={<Nuevo />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/tests" element={<Tests />} />
      </Routes>    
    </div>
    </Router>    
  )
}

export default App
