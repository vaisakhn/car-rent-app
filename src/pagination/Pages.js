import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'
import Home1 from '../Components/Home1/Home'
import Home2 from '../Components/Home2/Home'
import Home3 from '../Components/Home3/Home'
import Home4 from '../Components/Home4/Home'
import Home5 from '../Components/Home5/Home'
import Home6 from '../Components/Home6/Home'
import Home7 from '../Components/Home7/Home'
import Home8 from '../Components/Home8/Home'
import Home9 from '../Components/Home9/Home'

function Pages() {
  return (
   <>
   <Router>
    <Routes>
    
    <Route path='/1' element={<Home/>}></Route>
    <Route path='/car-rent-app' element={<Home/>}></Route>
        <Route path='/2' element={<Home1/>}></Route>
        <Route path='/3' element={<Home2/>}></Route>
        <Route path='/4' element={<Home3/>}></Route>
        <Route path='/5' element={<Home4/>}></Route>
        <Route path='/6' element={<Home5/>}></Route>
        <Route path='/7' element={<Home6/>}></Route>
        <Route path='/8' element={<Home7/>}></Route>
        <Route path='/9' element={<Home8/>}></Route>
        <Route path='/10' element={<Home9/>}></Route>

    </Routes>
    <Footer/>
   </Router>
   </>
  )
}

export default Pages