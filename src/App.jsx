import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Carrusel from './components/Carrusel/Carrusel'
import Layout from './components/Layout/Layout'
import Home from './Pages/Home/Home'
import PageAbout from './Pages/PageAbout/PageAbout'
import PageServices from './Pages/PageServices/PageServices'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/nosotros' element={<PageAbout/>}/>
          <Route path='/servicios' element={<PageServices/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
