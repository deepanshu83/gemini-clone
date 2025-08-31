import React from 'react'

const Cards = () => {
  return (

    <div className="cards py-14 gap-4 hidden justify-items-center sm:grid md:grid lg:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
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

export default Cards