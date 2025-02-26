import React from 'react'
import { Link,Outlet } from 'react-router'
import { useParams } from 'react-router'
const Development = () => {
    const  {developmentDetail}  = useParams();
    // console.log(developmentDetail);
  return (
    <>
      <div className='mt-3'>
    <h1 className='text-center py-2 text-amber-800 capitalize'>Developments data</h1>
    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 flex flex-col">
    <Link to="1">
       website Designing
    </Link>
    <Link to="2">
       Web App development
    </Link>
    <Link to="3">
        mobile app development
    </Link>
</ul>
<Outlet/>
   </div>
    </>
  )
}

export default Development
