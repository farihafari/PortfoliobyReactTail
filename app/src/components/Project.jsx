import React from 'react'
import { useNavigate } from 'react-router'
import Header from './Header'
const Project = () => {

   const navigate = useNavigate();
  return (
    <>
    <Header/>
    <div className='mt-20'>
    <h1 className='text-center py-2 text-amber-800 capitalize'>Projects</h1>
    <button onClick={()=> navigate(-1)} className="hover:text-gray-300  bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700 capitalize font-bold cursor-pointer text-white">Go Back</button>
   </div>
    </>
  )
}

export default Project
