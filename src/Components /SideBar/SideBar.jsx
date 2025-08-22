import React, { useState } from 'react'
import './SideBar.css'

const SideBar = () => {

  const [extended, setextended] = useState(false)

  return (
    <div className="sidebar py-[25px] px-[15px]  min-h-screen bg-[#ecf1f7] inline-flex flex-col justify-between ">

        <div className="top">
        <img onClick={()=>setextended(prev=>!prev)} className='menu block ml-2.5 cursor-pointer' src="assets/menu_icon.png" alt="" />
        <div className="new-chat m-2.5 mt-10 inline-flex items-center gap-2.5 py-2.5 px-3.5 bg-[#e6eaf1] rounded-[50px] text-xs text-gray-500 cursor-pointer">
          <img src="assets/plus_icon.png" alt="" />
          {extended? <p>New Chat</p> : null}
        </div>

      { extended ?
        <div className="recent flex flex-col ">
          <p className='mt-7 mb-5'>Recent</p>
          <div className="recententry flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer ">
            <img src="assets/message_icon.png" alt="" />
            <p>What is React....</p>
          </div>
        </div>
        : null
}

        </div>
        <div className="bottom">
          <div className=' recententry flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer '>
            <img src="assets/question_icon.png" alt="" />
            {extended? <p>Help!</p> : null}
          </div>
          <div className=' recententry flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer '>
            <img src="assets/history_icon.png" alt="" />
            {extended? <p>Activity</p> : null}
          </div>
          <div className=' recententry flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer '>
            <img src="assets/setting_icon.png" alt="" />
            {extended? <p>Settings</p> : null}
          </div>
        </div>

        </div>
  )
}

export default SideBar