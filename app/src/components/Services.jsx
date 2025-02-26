import React from 'react'
import Header from './Header'
import { Link ,Outlet} from 'react-router'
const Services = () => {
  return (
    <>
    <Header/>
    <div className='mt-20'>
    <h1 className='text-center py-2 text-amber-800 capitalize'>Our Services</h1>
    <nav>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white  rounded-lg p-4">
            <Link to='development' className="text-lg font-bold text-gray-800">Developments</Link>
        </div>
        
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div className="bg-white  rounded-lg p-4">
  <Link to='hosting' className="text-lg font-bold text-gray-800">Hosting</Link>
</div>
        
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div className="bg-white  rounded-lg p-4">
  <Link className="text-lg font-bold text-gray-800">web Optimization</Link>
</div>
        
    </div>
    </nav>
    <Outlet />
   </div>
   </>
  )

}

export default Services
