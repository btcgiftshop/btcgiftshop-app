"use client";

import React, { useEffect, useState } from 'react';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';

interface Message {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  link: string | undefined;
  url: string | undefined;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // useEffect(() => {
  //   // Fetch initial data from the JSON file
  //   fetch('/data/data.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMessages(data.initialMessages);
  //     });
  // }, []);

  useEffect(() => {
    // Fetch initial data from the JSON file
    fetch('/data/data.json')
      .then((response) => response.json())
      .then((data) => {
        // Loop through the conversation and simulate typing
        let prevMessages: Message[] = [];
        data.conversation.forEach((msg: Message, index: number) => {
          setTimeout(() => {
            // setMessages((prevMessages) => [...prevMessages, msg]);
            prevMessages = [...prevMessages, msg];
            setMessages(prevMessages);

            if (msg.text === "typing...") {
              setIsTyping(true);
            } else {
              setIsTyping(false);
            }
          }, index * (msg.sender === 'user' ? 2500 : 2000)); // Adjust the timing as needed
        });
      });
  }, []);



  const handleSend = (message: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: message,
      link: undefined,
      url: undefined,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[550px] max-h-full">
      <div className="flex-1 overflow-y-auto w-full max-w-[1200px] p-10">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} text={msg.text} sender={msg.sender} link={msg.link} url={msg.url} />
        ))}
      </div>
      <div className='w-full p-10'>
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatPage;
