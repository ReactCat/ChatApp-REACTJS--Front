import React, { useState, useEffect } from 'react'
import ScrollToBottom from "react-scroll-to-bottom";
import { 
  Chattop, 
  ChatWindow,
   ChatMain, 
   Title, 
   MessageMeta, 
   ChatFooter, 
   ChatFooterInput, 
   MessageContainer
   
  } from './elementstyled/ChatStyles';

function Chat({socket, username, room }) {

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
      if (currentMessage !== "") {
        const messageData = {
          room: room,
          author: username,
          message: currentMessage,
          time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        };
  
        await socket.emit("send_message", messageData);
        setMessageList((list) => [...list, messageData]);
        setCurrentMessage("");

    
      }
    };

    useEffect(() => {
      socket.on("receive_message", (data) => {
        setMessageList((list) => [...list, data]);
      });
    }, [socket]);





  return (
    <ChatWindow>
    <Chattop>
        <Title>Live Chat</Title>
        </Chattop>

        <ChatMain>
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <MessageMeta>
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </MessageMeta>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </ChatMain>
    <ChatFooter>
    <ChatFooterInput 
    type="text"
    value={currentMessage}
    placeholder="Hey..."
    onChange={(event) => {
      setCurrentMessage(event.target.value);
    }}
    onKeyPress={(event) => {
      event.key === "Enter" && sendMessage();
    }}
    
    />
   
   
   
   
    
    <button onClick={sendMessage}>&#9658;</button>
    </ChatFooter>

    </ChatWindow>
  )
};



export default Chat;