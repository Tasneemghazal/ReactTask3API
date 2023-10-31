import React from 'react'
import { useState ,useEffect } from 'react'
export default function Products() {
    let[products,setProducts]=useState([]);
    const getProducts = async()=>{
        let response = await fetch("https://fakestoreapi.com/products");
        let data =await response.json();
        setProducts(data);
    }
    useEffect( ()=>{
        getProducts();
    },[]);
      return (
    <div className="container">
    <div className='row'>
        {products.map((product)=>{

            return <div className='col-md-4 '>
                <div className='pro'>
                <h2>{product.title}</h2>
                <img src={product.image} className='w-50'/>
                </div>
            </div>
            
        })}

    </div>
    </div>
  )
}
