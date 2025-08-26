import React, { useState } from 'react'
import { URL } from '../../api'
import NavBar from './NavBar'
import Cards from './Cards'

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
      <div className="results overflow-scroll max-h-[73vh] md:max-h-[68vh] lg:max-h-[60vh] w-full mx-auto  my-3 py-3 rounded-2xl scrollbar-hide text-black 
      text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px] ">
        {result.map((item, index) => (
          <p key={index} className="mb-2">{item}</p>
        ))} 
      </div>
    )
  } else {
    content = (
      // cards component 
      <Cards/>
    )
  }

  return (
    <div className="main flex flex-col pb-[15vh] relative min-h-screen w-full">

      {/* nav component */}
         <NavBar/>



      {/* main container */}
      <div className="main-container max-w-[1100px] mx-auto px-3 sm:px-5">
        {/* Greeting */}
        <div className="greet my-2  text-[#c4c7c5] font-medium">
          <p>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl
            text-transparent bg-clip-text bg-gradient-to-r from-[#4b90ff] to-[#ff5546]">
              Hello, Dev.
            </span>
          </p>
          <p className='text-xs sm:text-xl md:text-2xl lg:text-[28px]'>How can I help you today?</p>
        </div>

        {/* 👇 yaha cards ya result dikhayenge */}
        {content}

      </div>

      


{/* bottom start here  */}
      <div className=" absolute w-full  lg:max-w-[900px] mx-auto  bottom-0 left-0 right-0 px-3 sm:px-5">

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
{/* bottom ends here  */}

    </div>
  )
}

export default Main

