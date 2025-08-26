import React, { useState } from 'react'
import { URL } from '../../api'

const Main = () => {
  const [question, setquestion] = useState('')
  const [result, setresult] = useState(undefined)

  const payload = {
    "contents": [
      {
        "parts": [
          {
            "text": question
          }
        ]
      }
    ]
  }

  const ask = async () => {
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload)
    })

    response = await response.json();
    let datastring = response.candidates[0].content.parts[0].text;
    datastring = datastring.split("*")
    datastring = datastring.map((item) => item.trim())
    setresult(datastring);
  }

  // 👇 conditional render banaya
  let content;
  if (result) {
    content = (
      <div className="results overflow-scroll w-4/5 mx-auto mt-6 p-7 rounded-2xl bg-white text-black">
        {result.map((item, index) => (
          <p key={index} className="mb-2">{item}</p>
        ))}
      </div>
    )
  } else {
    content = (
      <div className="cards gap-3 hidden justify-items-center sm:grid md:grid lg:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        <div className="card hover:bg-slate-300 cursor-pointer bg-slate-200 p-3.5 w-full sm:w-44 rounded-2xl flex flex-col justify-between">
          <p className="text-sm sm:text-base leading-snug">
            Suggest beautiful places to see on an upcoming road trip
          </p>
          <img className="w-5 sm:w-6 md:w-8 mt-2 self-end" src="assets/compass_icon.png" alt="compass" />
        </div>
        <div className="card hover:bg-slate-300 cursor-pointer bg-slate-200 p-3.5 w-full sm:w-44 rounded-2xl flex flex-col justify-between">
          <p className="text-sm sm:text-base leading-snug">
            Briefly summarize this concept: urban planning
          </p>
          <img className="w-5 sm:w-6 md:w-8 mt-2 self-end" src="assets/bulb_icon.png" alt="bulb" />
        </div>
        <div className="card hover:bg-slate-300 cursor-pointer bg-slate-200 p-3.5 w-full sm:w-44 rounded-2xl flex flex-col justify-between">
          <p className="text-sm sm:text-base leading-snug">
            Brainstorm team bonding activities for our work retreat
          </p>
          <img className="w-5 sm:w-6 md:w-8 mt-2 self-end" src="assets/message_icon.png" alt="message" />
        </div>
        <div className="card hover:bg-slate-300 cursor-pointer bg-slate-200 p-3.5 w-full sm:w-44 rounded-2xl flex flex-col justify-between">
          <p className="text-sm sm:text-base leading-snug">
            Improve the readability of the following code
          </p>
          <img className="w-5 sm:w-6 md:w-8 mt-2 self-end" src="assets/code_icon.png" alt="code" />
        </div>
      </div>
    )
  }

  return (
    <div className="main flex flex-col pb-[15vh] relative min-h-screen w-full">
      {/* nav */}
      <div className="nav mt-3 text-base sm:text-lg md:text-xl lg:text-2xl text-[#585858] flex justify-between items-center w-full px-3 sm:px-6">
        <p className="font-medium">Gemini</p>
        <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" src="assets/user_icon.png" alt="user" />
      </div>

      {/* main container */}
      <div className="main-container max-w-[900px] mx-auto px-3 sm:px-5">
        {/* Greeting */}
        <div className="greet my-6 sm:my-10 md:my-12 text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[#c4c7c5] font-medium">
          <p>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b90ff] to-[#ff5546]">
              Hello, Chiku.
            </span>
          </p>
          <p>How can I help you today?</p>
        </div>

        {/* 👇 yaha cards ya result dikhayenge */}
        {content}
      </div>

      {/* bottom */}
      <div className="w-full lg:max-w-[900px] mx-auto absolute bottom-0 left-0 right-0 px-3 sm:px-5">
        <div className="search-box rounded-2xl py-2 px-3 sm:px-4 bg-slate-200 flex justify-between items-center">
          <input
            value={question}
            onChange={(event) => setquestion(event.target.value)}
            className="outline-none border-0 text-black text-sm sm:text-base md:text-lg flex-1 rounded-3xl bg-transparent px-1 py-1 cursor-pointer"
            type="text"
            placeholder="Write your Prompt here ...."
          />
          <div className="img gap-2 cursor-pointer flex items-center">
            <img className="w-5 sm:w-6" src="assets/gallery_icon.png" alt="gallery" />
            <img className="w-5 sm:w-6" src="assets/mic_icon.png" alt="mic" />
            <img onClick={ask} className="w-5 sm:w-6" src="assets/send_icon.png" alt="send" />
          </div>
        </div>
        <div className="bottom-info flex justify-center text-center mt-2 text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-500">
          Gemini may display inaccurate info, including about people, so double-check its responses.
        </div>
      </div>
    </div>
  )
}

export default Main

