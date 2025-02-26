import React from 'react'
import Header from './Header'
import { useParams } from 'react-router'
// import { Link ,Outlet} from 'react-router'
const DevelopmentDetail = () => {
    const { developmentDetail } = useParams();
  return (
    <>
    <Header/>
    <div className='mt-20'>
     <h1 className='text-center py-2 text-amber-800 capitalize'>Detail  page {developmentDetail}</h1>
     
    </div>
    </>
  )
}

export default DevelopmentDetail
