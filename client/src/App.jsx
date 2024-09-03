import { useState } from 'react';
import Signup from './assets/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Route , Routes} from 'react-router-dom'
import Login from './assets/Login';
function App() {


  return (
   <div>
  <BrowserRouter>
  <Routes>
    <Route path="/register" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    </Routes></BrowserRouter>
   </div>
  )
}

export default App
