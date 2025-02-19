import React, { useState } from "react";
import chatbot from '../../../assets/StyleImages/chatbot.webp'


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "0",
          zIndex: 1000, // Ensures it's above other elements
        }}
      >
        <img
          src={chatbot} // Replace with your chatbot icon path
          alt="Chatbot"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transition: "width 0.3s, height 0.3s",
          }}
          className="chatbot-icon"
        />
      </button>

      {/* Chatbot Iframe */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "350px",
            height: "500px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            overflow: "hidden",
            zIndex: 999, // Ensures it stays on top
          }}
          className="chatbot-popup"
        >
          <iframe
            src="https://copilotstudio.microsoft.com/environments/Default-b840b537-3a4c-43e1-8f92-1a2e4e4246e7/bots/cr56d_jntugvCoPilot/webchat?_version_=2"
            frameBorder="0"
            width="100%"
            height="100%"
            title="JNTUGV Chatbot"
          ></iframe>
        </div>
      )}

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .chatbot-icon {
              width: 45px !important;
              height: 45px !important;
            }
            .chatbot-popup {
              width: 90% !important;
              max-width: 320px;
              height: 450px !important;
              bottom: 70px !important;
              right: 5% !important;
            }
          }
          
          @media (max-width: 480px) {
            .chatbot-icon {
              width: 40px !important;
              height: 40px !important;
            }
            .chatbot-popup {
              width: 95% !important;
              height: 400px !important;
              bottom: 60px !important;
              right: 2.5% !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;
