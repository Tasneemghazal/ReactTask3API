import React from 'react'
import { useState ,useEffect } from 'react'
import '../dishes.css'
export default function Onion() {
    let[onion,setOnion]=useState([]);
    const getOnion = async()=>{
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
        let data =await response.json();
        setOnion(data.recipes);
        console.log(data.recipes)
    }
    useEffect( ()=>{
        getOnion();
    },[]);
      return (
    <div className="container">
    <div className='row'>
        {onion.map((dish)=>{

            return <div className='dish col-md-4 my-5'>
                <div className='dish '>
                <img src={dish.image_url} className='w-100' />
                <h2 className='py-2'>{dish.title}</h2>
                </div>
            </div>
            
        })}

    </div>
    </div>
  )
}