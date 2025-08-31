import React, { useState } from 'react';
import { URL } from '../../api'; // Make sure to import your API URL correctly
import NavBar from './NavBar';
import Cards from './Cards';

const Main = () => {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    if (!question.trim()) return; // Avoid sending empty queries
    setLoading(true);

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
    };

    try {
      let response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      response = await response.json();
      let rawText = response.candidates[0].content.parts[0].text;

      // Process the raw text into readable chunks
      let formattedText = formatResponseText(rawText);

      // Update chat history
      setChatHistory(prev => [
        ...prev,
        { question, answer: formattedText }
      ]);
      setQuestion('');
    } catch (error) {
      console.error("Error fetching response:", error);
    }

    setLoading(false);
  };

  // Function to split the response text into readable chunks
  const formatResponseText = (text) => {
    // Split by periods or newline characters to make it more readable
    let formatted = text.split('.').map(item => item.trim()).filter(item => item !== '');

    // Create paragraphs from the response
    return formatted.map((sentence, index) => (
      <p key={index} className="mb-3">{sentence}.</p>
    ));
  };

  return (
    <div className="main flex flex-col pb-[15vh] relative min-h-screen w-full bg-[#f5f5f5]">
      {/* NavBar */}
      <NavBar />

      <div className="main-container max-w-[1100px] mx-auto px-3 sm:px-5">
        {/* Greeting */}
        <div className="greet my-2 text-[#c4c7c5] font-medium">
          <p>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#4b90ff] to-[#ff5546]">
              Hello, Dev.
            </span>
          </p>
          <p className="text-xs sm:text-xl md:text-2xl lg:text-[28px]">How can I help you today?</p>
        </div>

        {/* Display either Cards or Chat History */}
        {chatHistory.length === 0 ? (
          <Cards />
        ) : (
          <div className="results overflow-auto max-h-[73vh] md:max-h-[68vh] lg:max-h-[60vh] w-full mx-auto my-3 py-3 rounded-2xl text-black [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden text-[10px] sm:text-[11px] md:text-[13px] lg:text-[15px]">
            {chatHistory.map((chat, index) => (
              <div key={index} className="chat-item mb-5">
                {/* User Message (Right) */}
                <div className="flex justify-end">
                  <div className="bg-[#f0f0f0] max-w-[80%] text-right rounded-xl p-3 text-black shadow-md">
                    <p className="text-xs text-blue-600 font-semibold mb-2">You</p>
                    <p>{chat.question}</p>
                  </div>
                </div>

                {/* Gemini Response (Left) */}
                <div className="flex justify-start mt-4">
                  <div className="bg-[#e8e8e8] max-w-[80%] rounded-xl p-3 text-black shadow-md">
                    <p className="text-xs text-green-700 font-semibold mb-2">Gemini</p>
                    {chat.answer}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start mt-2">
                <div className="bg-[#e8e8e8] max-w-[80%] rounded-xl p-3 text-black shadow-md">
                  <p className="text-xs text-green-700 font-semibold mb-1">Gemini</p>
                  <div className="typing-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Search Bar */}
      <div className="absolute w-full lg:max-w-[900px] mx-auto bottom-0 left-0 right-0 px-3 sm:px-5">
        <div className="search-box rounded-2xl py-2 px-3 sm:px-4 bg-slate-200 flex justify-between items-center">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
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

      {/* CSS for animation and layout */}
      <style jsx="true">{`
        .typing-loader {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .typing-loader span {
          display: block;
          width: 10px;
          height: 10px;
          margin: 2px;
          border-radius: 50%;
          background-color: #4b90ff;
          animation: blink 1s infinite;
        }

        .typing-loader span:nth-child(1) {
          animation-delay: 0s;
        }

        .typing-loader span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-loader span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes blink {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .main {
          font-family: 'Arial', sans-serif;
        }

        .greet {
          margin-top: 2rem;
        }

        .greet p {
          font-size: 1.5rem;
        }

        .chat-item {
          margin-bottom: 20px;
        }

        .search-box {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          background-color: #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .search-box input {
          flex-grow: 1;
          padding: 0.5rem;
          border-radius: 50px;
          background: #fff;
          border: 1px solid #d1d5db;
        }

        .img {
          display: flex;
          gap: 10px;
          cursor: pointer;
        }

        .img img {
          width: 25px;
        }
      `}</style>
    </div>
  );
};

export default Main;
