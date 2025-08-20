import React from 'react'
import './SideBar.css'

const SideBar = () => {
  return (
    <div className="sidebar py-[25px] px-[15px]  min-h-screen bg-[#f0f4f9] inline-flex flex-col justify-between ">

        <div className="top">
        <img className='menu block ml-2.5 cursor-pointer' src="assets/menu_icon.png" alt="" />
        <div className="new-chat">
          <img src="assets/plus_icon.png" alt="" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p>Recent</p>
          <div className="recententry">
            <img src="assets/message_icon.png" alt="" />
            <p>What is React....</p>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div>
            <img src="assets/question_icon.png" alt="" />
            <p>Help!</p>
          </div>
          <div>
            <img src="assets/history_icon.png" alt="" />
            <p>Activity</p>
          </div>
          <div>
            <img src="assets/setting_icon.png" alt="" />
            <p>Settings</p>
          </div>
        </div>

        </div>
  )
}

export default SideBar