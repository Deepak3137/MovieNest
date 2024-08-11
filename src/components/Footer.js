import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center bg-neutral-600 text-neutral-400 bg-opacity-30 py-2'>
      <div className='flex justify-center items-center gap-4 text-xl p-2'>
        <Link className='hover:text-white' to={'/'}>About</Link>
        <Link className='hover:text-white' to={'/'}>Contact</Link>
      </div>
      <div className='text-lg'>
        Designed and Developed by Deepak Kumar. © 2024 All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer