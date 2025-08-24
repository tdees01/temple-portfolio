import React from 'react'

const NavBar = () => {
  return (
    <div className="flex justify-center top-8 left-1/2 -translate-x-1/2 pt-8 fixed z-50">
       <div className="bg-white rounded-full w-96 h-16 gap-16 flex items-center justify-center opacity-70 drop-shadow-xl outline-2 border-black content-center scroll-smooth">
            <div>
                <a href="#about" className="text-black text-lg font-semibold scroll-smooth snap-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">About</a>
            </div>
            <div>
                <a href="#projects" className="text-black text-lg font-semibold bg-sky-700:hover scroll-smooth snap-center">Projects</a>
            </div>
            <div>
                <a href="#contact" className="text-black text-lg font-semibold bg-sky-700:hover scroll-smooth snap-center">Contact</a>
            </div>
        </div>  
    </div> 
  )
}

export default NavBar