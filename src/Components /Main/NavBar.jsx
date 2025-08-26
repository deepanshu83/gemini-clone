import React from 'react'

const NavBar = () => {
  return (
        <div className="nav mt-2 text-base sm:text-lg md:text-xl lg:text-2xl text-[#585858] flex justify-between items-center w-full px-3 sm:px-6">
        <p className="font-normal text-[15px]">Gemini</p>
        <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" src="assets/user_icon.png" alt="user" />
      </div>
      
  )
}

export default NavBar