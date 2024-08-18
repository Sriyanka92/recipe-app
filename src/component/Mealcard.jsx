import React from 'react'
import { NavLink } from 'react-router-dom';
function Mealcard({detail}) {
    console.log(detail);
  return (
   <div className='meals'>
    {!detail ? "": detail.map((e) =>{
        return(
           <div className='mealImg'>
            <img src={e.strMealThumb} alt="" />
        
            <p>{e.strMeal}</p>
           <NavLink to={`/${e.idMeal}`}><button>Recipe</button></NavLink>
           
           </div> 
        )
    })
     }
   </div>
  )
}

export default Mealcard