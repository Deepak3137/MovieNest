import React from 'react'
import { mobileNavigation } from '../constants/Navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <div className='lg:hidden h-14 bg-black bg-opacity-70 fixed backdrop-blur-2xl bottom-0 w-full z-40'>
      <div className='flex items-center justify-between h-full text-neutral-400 '>
        {
          mobileNavigation.map((nav, index) => {
              return (
                <NavLink key={nav.label + "mobile"} to={nav.href} className={({isActive}) => `px-3 h-full flex justify-center items-center flex-col ${isActive && 'text-white'}` }>
                  <div className='text-2xl'>
                    {nav.icon}
                  </div>
                  <p className='text-sm'>{nav.label}</p>
                </NavLink>
              )
          })
        }
      </div>
    </div>
  )
}

export default MobileNavigation