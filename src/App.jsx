import { useState } from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Navigator from './components/Navigator'
import Uploader from './pages/Uploader'
import Home from './pages/Home'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import About from './pages/About'

import Organiser from './pages/Organiser'
import Shoptest from './pages/Shoptest'


function App() {

  return (



<BrowserRouter>
<Navigator/>

<Routes>
  <Route path='/' element={<Home/>} ></Route>
  <Route path='/login' element={<Shoptest/>} ></Route>
  <Route path='/shop' element={<Shop/>} ></Route>
  <Route path='/about' element={<About/>} ></Route>
  <Route path='/contact' element={<Organiser/>} ></Route>
  <Route path='/add' element={<Organiser/>} ></Route>
  <Route path='/edit/:id' element={<Organiser/>} ></Route>



  
</Routes>
<Footer/>
</BrowserRouter>

  )
}

export default App
