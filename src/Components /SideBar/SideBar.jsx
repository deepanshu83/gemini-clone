import React from 'react'
import './SideBar.css'

const SideBar = () => {
  return (
    <div className="sidebar py-[25px] px-[15px]  min-h-screen bg-[#f0f4f9] inline-flex flex-col justify-between ">

        <div className="top">
        <img className='menu block ml-2.5 cursor-pointer' src="assets/menu_icon.png" alt="" />
        <div className="new-chat m-2.5 inline-flex items-center gap-2.5 py-2.5 px-3.5 bg-[#e6eaf1] rounded-[50px] text-xs text-gray-500 cursor-pointer">
          <img src="assets/plus_icon.png" alt="" />
          <p>New Chat</p>
        </div>
        <div className="recent flex flex-col ">
          <p className='mt-7 mb-5'>Recent</p>
          <div className="recententry flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer ">
            <img src="assets/message_icon.png" alt="" />
            <p>What is React....</p>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div className=' recententry flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer '>
            <img src="assets/question_icon.png" alt="" />
            <p>Help!</p>
          </div>
          <div className=' recententry flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer '>
            <img src="assets/history_icon.png" alt="" />
            <p>Activity</p>
          </div>
          <div className=' recententry flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer '>
            <img src="assets/setting_icon.png" alt="" />
            <p>Settings</p>
          </div>
        </div>

        </div>
  )
}

export default SideBar