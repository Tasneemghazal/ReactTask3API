import React from 'react'
import { useState ,useEffect } from 'react'
import '../dishes.css'
import {Link} from 'react-router-dom'
export default function Pizza() {
    let[pizza,setPizza]=useState([]);
    const getPizza = async()=>{
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        let data =await response.json();
        setPizza(data.recipes);
        console.log(data.recipes)
    }
    useEffect( ()=>{
        getPizza();
    },[]);
      return (
    <div className="container">
    <div className='row'>
        {pizza.map((dish)=>{

            return <div className='dish col-md-4 my-5'>
                <div className='dish'>
                <img src={dish.image_url} className='w-100' />
                <h2 className='py-2'>{dish.title}</h2>
                <Link to={dish.source_url}>recipe</Link>
                </div>
            </div>
            
        })}

    </div>
    </div>
  )
}