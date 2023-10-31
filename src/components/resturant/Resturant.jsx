import React from 'react'
import Pizza from '../pizza/Pizza.jsx'
import Salad from '../salad/Salad.jsx'
import Onion from '../onion/Onion.jsx'
export default function Resturant() {
  return (
    <>
    <div className='my-5 text-center '>
        <h1>Pizza</h1>
        <Pizza/>
    </div>
   
    <div className='my-5 text-center bg-body-tertiary'>
        <h1>Salad</h1>
        <Salad/>
    </div>
    <div className='my-5 text-center'>
        <h1>Onion</h1>
        <Onion/>
    </div>
    </>
  )
}

