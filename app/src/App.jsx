import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Routes, Route } from "react-router";
import Header from './components/Header'
import About from './components/About'
import Profile from './components/Profile';
import Project from './components/Project';
import Services from './components/Services';
import Development from './components/Development';
import Hosting from './components/Hosting';
import DevelopmentDetail from './components/DevelopmentDetail';
import Register from './components/Register';
import HeaderCom from './HeadComp/HeaderCom';
import ReactDOM from 'react-dom/client'
function App() {

  return (
    <>
 <Routes>
<Route path='/' element={<Header/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/project' element={<Project/>}/>
<Route path='/services' element={<Services/>}>
<Route path='development' element={<Development/>}>
<Route path=':developmentDetail' element={<DevelopmentDetail/>}/>
</Route>
<Route path='hosting' element={<Hosting/>}/>

</Route>
<Route path='/register' element={<Register/>}/>


 </Routes>
<HeaderCom/>
    </>
  )
}

export default App
