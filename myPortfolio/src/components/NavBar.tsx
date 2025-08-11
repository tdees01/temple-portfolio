import React from 'react'

const NavBar = () => {
  return (
    <div className="flex justify-center pt-8 fixed top-8 left-150 z-50">
       <div className="bg-white rounded-full w-96 h-16 gap-16 flex items-center justify-center opacity-70 drop-shadow-xl outline-2 border-black content-center">
            <div>
                <a href="#about" className="text-black text-lg font-semibold bg-sky-700:hover">About</a>
            </div>
            <div>
                <a href="#projects" className="text-black text-lg font-semibold bg-sky-700:hover">Projects</a>
            </div>
            <div>
                <a href="#contact" className="text-black text-lg font-semibold bg-sky-700:hover">Contact</a>
            </div>
        </div>  
    </div> 
  )
}

export default NavBar