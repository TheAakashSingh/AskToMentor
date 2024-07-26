import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import { GiCancel } from "react-icons/gi";
import { IoIosRefreshCircle } from "react-icons/io";
import { GrRefresh } from "react-icons/gr";
import { BsRobot } from 'react-icons/bs';

function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentTag, setCurrentTag] = useState("start_conversation");
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatOpen(true);
      startConversation();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const toggleChatbox = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      startConversation();
    }
  };

  const resetChat = () => {
    setMessages([]);
    setOptions([]);
    setCurrentTag("start_conversation");
    setUserData({});
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    startConversation();
  };

  const addMessage = (message, className, callback = null) => {
    setMessages(prevMessages => [...prevMessages, { text: message, className }]);
    if (callback) {
      setTimeout(callback, 100);
    }
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  const handleOptionClick = (optionValue, optionText) => {
    setOptions([]);
    addMessage(optionText, 'user-message');

    if (optionValue === "close_chat") {
      setIsChatOpen(false);
    } else if (optionValue === "ask_more_questions") {
      addMessage("Ask me anything!", 'bot-message');
      setCurrentTag("open_questions");
    } else {
      processUserInput(optionValue, false);
    }
  };

  const sendMessage = () => {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
      addMessage(userInput, 'user-message');
      document.getElementById('user-input').value = '';
      processUserInput(userInput, true);
    }
  };

  const processUserInput = async (userInput, isManual) => {
    setIsLoading(true);
    const payload = {
      message: userInput,
      current_tag: currentTag,
      ...userData,
      is_manual: isManual
    };

    try {
      const response = await fetch("http://localhost:4000/get_response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.error) {
        addMessage(data.error, 'bot-message');
      } else {
        displayMessages(data.response, data.options, data.tag);
      }
    } catch (error) {
      console.error("Error:", error);
      addMessage("An error occurred. Please try again later.", 'bot-message');
    } finally {
      setIsLoading(false);
    }
  };

  const displayMessages = (messages, newOptions, newTag) => {
    messages.forEach((msg, index) => {
      setTimeout(() => addMessage(msg, 'bot-message'), index * 500);
    });
    setTimeout(() => {
      setOptions(newOptions || []);
      setCurrentTag(newTag);
      if (newTag === "end_conversation" && (!newOptions || newOptions.length === 0)) {
        setOptions([
          { text: "Close Chat", value: "close_chat" },
          { text: "Ask More Questions", value: "ask_more_questions" }
        ]);
      }
    }, messages.length * 500);
  };

  const startConversation = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:4000/start_conversation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: "", current_tag: "start_conversation" })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.error) {
        addMessage(data.error, 'bot-message');
      } else {
        displayMessages(data.response, data.options, data.tag);
      }
    } catch (error) {
      console.error("Error:", error);
      addMessage("An error occurred. Please try again later.", 'bot-message');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isChatOpen && (
        <div className="chat-icon" onClick={toggleChatbox}>💬</div>
      )}
      {isChatOpen && (
        
        <div className="phone-container">
          <div className="phone-header">
            <img src="../../../../src/assets/logo.png" alt="Bot Avatar" className="bot-avatar" />
            <span className="header-title">AskToBot</span>
            <span className="header-icons">
              <span className="reset-icon" onClick={resetChat}><GrRefresh /></span>
              <span className="close-icon" onClick={() => setIsChatOpen(false)}><GiCancel /></span>
            </span>
          </div>
          <div className="chat-container">
            <div className="chat-box" ref={chatBoxRef}>
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message-container ${msg.className}-container`}>
                  {msg.className === 'bot-message' && <span className="emoji"><BsRobot /></span>}
                  <div className={`chat-message ${msg.className}`}>{msg.text}</div>
                  {msg.className === 'user-message' && <span className="emoji">👤</span>}
                </div>
              ))}
              {isLoading && <div className="loading">Loading...</div>}
            </div>
            <div className="input-container">
              <input
                type="text"
                id="user-input"
                placeholder="Type your message here..."
                className="input-box"
                onKeyPress={(e) => { if (e.key === 'Enter') sendMessage(); }}
                disabled={options.length > 0 || isLoading}
              />
              <button 
                className="send-button" 
                onClick={sendMessage}
                disabled={options.length > 0 || isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            {options.length > 0 && (
              <div className="options-container">
                {options.map((option, index) => (
                  <button key={index} className="option-button" onClick={() => handleOptionClick(option.value, option.text)}>
                    {option.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;