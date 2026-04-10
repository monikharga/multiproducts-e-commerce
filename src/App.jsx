import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Axioss from './FetchDataCard/axios'
import Nav from './Pages/Nav/Nav'
import SignUp from './Pages/signUp/Sign'
import Service from './Pages/ServiceProvider/ServiceProvider'
import Admin from './Pages/Admin/Admin'
import Details from './Pages/Details/Details'
function App() {

  function Landing() {
    return (
      <>
        <Nav />
        <Axioss />
      </>
    )
  }
   function Provider() {
    return (
      <>
        {/* <Nav /> */}
        <Service />
      </>
    )
  }
     function AdminPage() {
    return (
      <>
        {/* <Nav /> */}
        <Admin/>
      </>
    )
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Provider' element={<Provider/>}/>
        <Route path='/Admin' element={<AdminPage/>}/>
        <Route path='/Details/:id' element={<Details/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
