import React, { useState } from 'react'
import Mealcard from './Mealcard';
function Mainpage() {
const [data , setData] =useState();
const [search , setSearch] =useState();

    const inputHandel = (event)=>{
        setSearch(event.target.value)
    }

    const myFun = async ()=>{
        if(search == ""){
            setMsg("Please Enter Something")
        } 
        else
        {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
            console.log(jsonData.meals);
            setData(jsonData.meals);
        }
        
    }
    console.log(data);
    
  return (
    <div className='container'>
        <div className='searchBar'>
            <input type="text" placeholder='Search Dishes' onChange={inputHandel}/>
            <button onClick={myFun}>Search</button>
        </div>
        <div>
        <Mealcard detail={data}/>
        </div>
    </div>
    
  )
}

export default Mainpage