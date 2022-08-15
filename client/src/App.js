import './App.css';
import io from "socket.io-client"
import { useState } from "react"
import Chat from './Chat';

const socket = io.connect("http://localhost:3001")

function App() {
  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room)
    }
  }

  return (
    <div className="App">
      <h3>Join a chat</h3>
      <input type="text" placeholder="Join" onChange={(e) => setUsername(e.target.value)}/>
      <input type="text" placeholder="Room ID" onChange={(e) => setRoom(e.target.value)}/>
      <button onClick={joinRoom}>Send Message</button>

      <Chat socket={socket} username={username} room={room}/>
    </div>
  );
}

export default App;
