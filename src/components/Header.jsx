import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
      <h2 className='text-2xl'>
        Pratham's Router
      </h2>
      <div className='flex gap-10 text-lg'>
        {/* <a className='text-xl cursor-pointer' href="/">Home</a>
        <a className='text-xl cursor-pointer' href="/about">About</a>
        <a className='text-xl cursor-pointer' href="/contact">Contact</a>
        <a className='text-xl cursor-pointer' href="/product">Product</a> 
        BY A TAG WE WERE FACING THE RELODING SO TO SOLVE THIS PROBLEM
        WE USE LINK TAG
        */}
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
        
      </div>
    </div>
  )
}

export default Header
