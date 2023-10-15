"use client"
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { BiSolidSend } from 'react-icons/bi';
import YoutubeDescriptionGenrator from './toolsdata'

const ChatWidget = () => {

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef(null);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };
  function convertMarkdownToHTML(text) {
    // Replace **text** with <strong>text</strong>
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }
  
  const handleSubmit =async (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      // Add the user message
      setMessages((prevMessages) => [...prevMessages, { text: newMessage, user: 'You' }]);
      // Simulate a bot response (replace with actual bot logic)
      const botResponse = { text: 'Bot response', user: 'Bot' };
      const altered_response= await YoutubeDescriptionGenrator(newMessage)
      // Add the bot response
      handle_palm_response(altered_response)
      console.log('last message ',messages[-1])
      // Clear the input
      setNewMessage('');
    }
  };
  
  const handle_palm_response=(newMessage)=>{
    const url = 'https://universalapi.bora.pk/api/generativepalmai/'; // Replace with your API endpoint URL

// Define the data to be sent in the request body
const data = {
  prompt: newMessage,
};

// Make a POST request to the API
axios.post(url, data)
  .then((response) => {
    if (response.status === 200) {
      const palmrespones=response.data.response
      console.log(palmrespones)
      if (palmrespones!==null){
      const botResponse = { text:convertMarkdownToHTML(palmrespones), user: 'Bot' };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      }
      else{
      
      console.log('Response:', palmrespones);
      const botResponse = { text: `Sorry But I Don't Know Thiis.If you need anyother help i would gladly be helpful for you. `, user: 'Bot' };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
      }

    } else {
      console.error(`Request failed with status code ${response.status}: ${response.data}`);
    }
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  }); 


  }
  useEffect(() => {
    // Scroll to the latest message when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
    <div className=" mt-4 bottom-28 fixed w-full">
      <div
        ref={chatContainerRef}
        className=" mt-12 rounded-lg overflow-y-scroll overflow-x-hidden  "
        style={{ maxHeight: '600px', scrollBehavior: 'smooth' }} // Adjust the maximum height as needed
      >
        <div className=" p-4  ">
          {messages.map((message, index) => (
            <div
            key={index}
            id={`message-${index}`} // Add an id to each message div
            className={`mb-4 ${message.user === 'You' ? 'text-right' : 'text-left'}`}
          >
           <div
            className={`rounded-md px-4 py-2 inline-block text-lg ${
            message.user === 'You' ? 'bg-blue-500 bg-white/10 text-white ' : 'bg-neutral-700'
            }`}
            style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}
          >
            {message.user === 'You' ?(
              <p>{message.text}</p>):(
            <p dangerouslySetInnerHTML={{ __html: message.text }} />)}


      </div>


          </div>
          
          
          
          ))}
        </div>
      </div>
     
    </div>
     <div className="p-4 bottom-6 fixed w-full">
     <form className="flex flex-row "onSubmit={handleSubmit}>
     <div className="px-2   relative inline-flex  group  w-full focus:scale-105 ">
        <div
            className={`absolute transitiona-all duration-1000 opacity-10 -inset-px bg-white/20 rounded-xl blur-xl ${newMessage ? 'opacity-100  duration-1000 animate-tilt':''}`}>
        </div>
        <input
          type="text"
          value={newMessage}
          className="focus:outline-none relative inline-flex transition-all duration-1000 rounded-xl shadow-xl w-full p-4 h-12 poppins-regular text-lg   bg-white/30 z-50"
          onChange={handleInputChange}
        />
    </div>
       <div className="ml-2 relative inline-flex  group">
        <div
            className={`absolute transitiona-all duration-1000 opacity-10 -inset-px bg-blue-500  rounded-lg blur-xl ${newMessage ? 'opacity-100  duration-1000 animate-tilt':''}`}>
        </div>
        <button
            className={`relative  inline-flex items-center justify-center px-3 py-2 text-lg  text-white transition-all duration-1000 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-xl  ${newMessage ? 'opacity-100  ':'opacity-10'}`}
        >Send
              <BiSolidSend size={22} />
        </button>
    </div>
     </form>
   </div>
   </>
  );
};

export default ChatWidget;
