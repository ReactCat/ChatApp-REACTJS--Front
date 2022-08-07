
import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
import Chat from './components/Chat';
import {Container} from './components/elementstyled/AppStyles'
import { Chattit } from './components/elementstyled/AppStyles';
import { Input } from './components/elementstyled/AppStyles';
import { Button } from './components/elementstyled/AppStyles';

//Establish Connection outside of components
//Require socket.io-client to make connection to socket.io server
const socket = io.connect("http://localhost:3001/")


function App() {

  const [username, setUsername] =useState("");
  const [room, setRoom] =useState("");
  const [showChat, setShowChat] = useState(false);

  
  const joinRoom = () => {
    if (username !== "" && room !== ""){
        socket.emit("join_room", room )
        setShowChat(true);
    }
  }

  return (
    <div className='App'>
      {!showChat ? (
      <Container>
        
      <Chattit>Chat APP</Chattit>
      <Input
       type='text'
       placeholder='Yuki...' 
       onChange={(event) => {setUsername(event.target.value);
       }}
       />
      
      
      
      <Input 
      type='text' 
      placeholder='Room ID...'
      onChange={(event) => {setRoom(event.target.value);
      }}
      />


      <Button onClick={joinRoom}>Join A Room</Button>
      </Container>
      )

      :(



        <Chat socket={socket} username={username} room={room} />

      )}
    
    </div>
  );
}

export default App;
