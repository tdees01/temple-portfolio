import React from 'react'
import { HashLink } from 'react-router-hash-link'

const NavBar = () => {
  return (
    <div>
       <div className="bg-white rounded-full w-96 mt-6 h-16 gap-16 fixed left-1/2 transform -translate-x-1/2 flex items-center justify-center opacity-50 drop-shadow-xl">
            <div>
                <HashLink smooth to="/#about" className="text-black text-lg font-semibold">About</HashLink>
            </div>
            <div>
                <HashLink smooth to="/#projects" className="text-black text-lg font-semibold">Projects</HashLink>
            </div>
            <div>
                <HashLink smooth to="/#contact" className="text-black text-lg font-semibold">Contact</HashLink>
            </div>
        </div>  
    </div> 
  )
}

export default NavBar