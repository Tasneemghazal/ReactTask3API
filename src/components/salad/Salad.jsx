import React from 'react'
import { useState ,useEffect } from 'react'

export default function Salad() {
    let[salad,setSalad]=useState([]);
    const getSalad = async()=>{
        let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=salad");
        let data =await response.json();
        setSalad(data.recipes);
        console.log(data.recipes)
    }
    useEffect( ()=>{
        getSalad();
    },[]);
      return (
    <div className="container">
    <div className='row'>
        {salad.map((dish)=>{

            return <div className='dish col-md-4 my-5'>
                <div className='dish'>
                <h2 className='py-2'>{dish.title}</h2>
                <img src={dish.image_url} className='w-100' />
                </div>
            </div>
            
        })}

    </div>
    </div>
  )
}