import React from 'react'
import Navbar from '../components/layout/Navbar'
import Homepage from './Homepage'

const Layout = () => {
  return (
    <div className='border '>
        <div className=''><Navbar /></div>
        
        <Homepage/>
    </div>
  )
}

export default Layout