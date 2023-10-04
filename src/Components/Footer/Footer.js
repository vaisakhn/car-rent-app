import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'> 
    <div>1 from 10</div> 
    <div className='btns' >
   <Link to={'/1'}> <button className='button'>1</button></Link>
   <Link to={'/2'}><button className='button'>2</button></Link>
   <Link to={'/3'}><button className='button'>3</button></Link>
   <Link to={'/4'}><button className='button'>4</button></Link>
   <Link to={'/5'}><button className='button'>5</button></Link>
   <Link to={'/6'}><button className='button'>6</button></Link>
   <Link to={'/7'}><button className='button'>7</button></Link>
   <Link to={'/8'}><button className='button'>8</button></Link>
   <Link to={'/9'}><button className='button'>9</button></Link>
   <Link to={'/10'}><button className='button'>10</button></Link>
    
    </div>
    </div>
  )
}

export default Footer