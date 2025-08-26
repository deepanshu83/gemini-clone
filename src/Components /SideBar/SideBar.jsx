import React, { useState } from 'react'
import './SideBar.css'

const SideBar = () => {
  const [extended, setExtended] = useState(false)

  return (
    <div
      className={`sidebar py-5 px-3 min-h-screen bg-[#ecf1f7] flex flex-col justify-between transition-all duration-300
      ${extended ? 'w-48' : 'w-24'} 
      sm:${extended ? 'w-46' : 'w-20'}`}
    >
      {/* Top */}
      <div className="top">
        {/* Menu Toggle */}
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu block ml-1.5 cursor-pointer w-6 sm:w-7"
          src="assets/menu_icon.png"
          alt="menu"
        />

        {/* New Chat */}
        <div className="new-chat mt-8 flex items-center gap-2 py-2 px-3 bg-[#e6e8ec] hover:bg-[#cfd2d8] rounded-full text-xs text-gray-500 cursor-pointer">
          <img className="lg:w-4 md:w-3 w-2 " src="assets/plus_icon.png" alt="plus" />
          {extended ? <p className="text-[10px] sm:text-[12px] lg:text-[15px] md:text-[14px]">New Chat</p> : null}
        </div>

        {/* Recent */}
        {extended ? (
          <div className="recent flex flex-col">
            <p className="mt-6 mb-4 text-xs sm:text-sm text-gray-500">Recent</p>
            <div className="recententry lg:w-40 md:w-40 flex items-center gap-2 p-2 text-sm sm:text-base rounded-full text-[#282828] cursor-pointer hover:bg-[#dce0e6]">
              <img className="lg:w-4 md:w-3 w-2 " src="assets/message_icon.png" alt="message" />
              <p className='ext-[10px] sm:text-[12px] lg:text-[15px] md:text-[14px]'>What is React...</p>
            </div>
          </div>
        ) : null}
      </div>

      {/* Bottom */}
      <div className="bottom flex flex-col gap-2">
        <div className="recententry flex items-center gap-2.5 p-2.5 rounded-full text-[#282828] cursor-pointer hover:bg-[#dce0e6]">
          <img className="w-4 sm:w-5" src="assets/question_icon.png" alt="help" />
          {extended ? <p className="text-sm sm:text-base">Help!</p> : null}
        </div>
        <div className="recententry flex items-center gap-2.5 p-2.5 rounded-full text-[#282828] cursor-pointer hover:bg-[#dce0e6]">
          <img className="w-4 sm:w-5" src="assets/history_icon.png" alt="history" />
          {extended ? <p className="text-sm sm:text-base">Activity</p> : null}
        </div>
        <div className="recententry flex items-center gap-2.5 p-2.5 rounded-full text-[#282828] cursor-pointer hover:bg-[#dce0e6]">
          <img className="w-4 sm:w-5" src="assets/setting_icon.png" alt="settings" />
          {extended ? <p className="text-sm sm:text-base">Settings</p> : null}
        </div>
      </div>
    </div>
  )
}

export default SideBar
