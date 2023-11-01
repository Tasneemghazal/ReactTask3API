import React from 'react'
import { useState ,useEffect } from 'react'
import './products.css'
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
    <div className='row row-gap-4'>
        {products.map((product)=>{

            return <div className='product col-md-4'>
                <div className='pro '>
                <img src={product.image} />
                <h2 className='py-5 text-center my-3'>{product.title}</h2>
                </div>
            </div>
            
        })}

    </div>
    </div>
  )
}
