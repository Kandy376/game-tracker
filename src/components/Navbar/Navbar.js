import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <>
        <div className='flex p-4 bg-gray-700'>
            <FontAwesomeIcon icon={faBars} size="lg" color="white"/>
            <h3 className='text-xl italic bold mx-auto text-white'>Warrior Track</h3>
        </div>
    </>
  )
}

export default Navbar