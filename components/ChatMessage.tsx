import React from 'react';

interface ChatMessageProps {
  text: string;
  sender: 'bot' | 'user';
  link: string | undefined;
  url: string | undefined;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ text, sender, link, url }) => {
  return (
    <div className={`flex ${sender === 'bot' ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-lg p-3 rounded-lg ${sender === 'bot' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'}`}>
        {text}
        {link && url && (
          <a
            href={url}
            className="text-orange-200 hover:underline ms-2 underline"
          >
            {link}
          </a>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
