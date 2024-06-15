import './App.css'
import { GiLuchador } from "react-icons/gi";
import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import { useState } from 'react';
function App() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  
  const menuClick = () =>{
    setOpenMobileMenu(!openMobileMenu)
  }

  return (
    <>
      <div className={`shadow-md w-full top-0 left-0  ${openMobileMenu ? "" : ""} `}>
        <div className="bg-blue-400 py-4 px-4 md:items-center md:justify-between md:flex">
          <div className="flex items-center justify-between font-bold cursor-pointer">
            <span className="text-3xl text-gray-600 mr-1">
              <GiLuchador />
            </span>
            <div className='text-2xl'>Lucha Madness</div>
            <div className='text:3xl cursor-pointer md:hidden mx-2'  onClick={(e)=>{menuClick()}}>
              {openMobileMenu == false ? <FiAlignJustify /> : <IoClose/>}
            </div>
          </div>
          
          <ul className={`md:flex md:items-center ${openMobileMenu ? " mt-5  w-full" : "max-sm:hidden sm:hidden"}`}>
            <li className="md:m-1 font-bold text-white hover:text-black duration-200 p-2">
              <a href="#">Home</a>
            </li>  
            <li className="md:m-1 font-bold text-white hover:text-black duration-200 p-2">
              <a href="#">About</a>
            </li>  
            <li className="md:m-1 font-bold text-white hover:text-black duration-200 p-2">
              <a href="#">Shop</a>
            </li>
            <li className="md:m-1 font-bold text-white hover:text-black duration-200 p-2">
              <a href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='grid gap-8 px-5 md:grid-cols-2 md:item-center md:text-left mt-5'>
        <div>
          <img src="https://images.unsplash.com/photo-1509819764927-981313469906?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="header1" 
            className='w-full rounded-lg'
          />
        </div>
        <div>
          <h1 className="mb-2 text-4xl">Headline</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
      </div>
      <div className="flex items-center justify-between bg-green-200 mt-10 px-10">
        <div className="p-10 bg-green-200 font-bold ">
          <span className=''><GiLuchador/></span>
          Testing1
        </div>
        <div className="p-10 bg-green-200 font-bold ">
          <span className=''><GiLuchador/></span>
          Testing2
        </div>
        <div className="p-10 bg-green-200 font-bold ">
          <span className=''><GiLuchador/></span>
          Testing3
        </div>
      </div>
    </>
  )
}

export default App
