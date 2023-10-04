import React,{useState} from 'react'
import './Header.css'



function Header() {
  const [searchTerm,setSearchTerm]=useState("")
  return (
    <div className='header'>
    <div className='search'>
    <form>
    <input id='searchInput'  type='text' placeholder='search...' onChange={(event)=>{
      setSearchTerm(event.target.value)
    }}></input>
    
    </form>
    <button className='searchicon'><img className='img' alt='icon' src='https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png'></img> </button>
    </div>
    </div>
  )
}

export default Header