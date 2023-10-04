import React,{useState} from 'react'
import './Home.css'
import data from './data.json'



function Home1() {
  const [searchTerm,setSearchTerm]=useState("")
  return (
    
   <div className='card' >

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


       {

        data&&data.filter((data)=>{
          if(searchTerm==""){
            return data;
          }else if(data.caption.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return data;
          }
        })


        .map(data=>{
          return(<>
          
          <div className='cards' key={data.id}>
            <div className='car'>
            <img className='car' alt='car' src={data.img}></img>
        </div>
        <div className='text'>
          <div className='details'>
           <p className='para'><h4>{data.caption}</h4>
           {data.people}<br/>
           {data.milage}<br/><br/>
           {data.rent}
           </p>
           <div className='para'>
            <p><br/><br/><br/><br/>{data.engine}<br/>
            {data.type}
            </p>
            <button className='btn'>rent now</button>
           </div>
          </div>
            </div>
            </div>
            
          </>)
        })
        
       }
     </div>
     
   
    
    
    )
}

export default Home1