import './App.css';
import io from "socket.io-client"
import { useState, useEffect } from "react"
import Chat from './Chat';
import { db } from './firebase';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { AuthContextProvider } from "./context/UserContext";
import CreateNavbar from './components/CreateNavbar/Navbar';
import {Routes, Route, Router} from "react-router-dom"
import Signup from './pages/auth/signup/Signup';
import Login from './pages/auth/login/Login';
import Home from './pages/home/Home';

const socket = io.connect("http://localhost:3001")

function App() {
  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")
  const [chat, setChat] = useState([])
  const chatRef = collection(db, "chat")

  const getChat = async () => {
    const data = await getDocs(chatRef)
    setChat(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room)
      addDoc(chatRef, {roomCreated: room, nameCreated: username})
      getChat()
    }
  }

  return (
    <div className="App">
      <h3>Join a chat</h3>
      <input type="text" placeholder="Join" onChange={(e) => setUsername(e.target.value)}/>
      <input type="text" placeholder="Room ID" onChange={(e) => setRoom(e.target.value)}/>
      <button onClick={joinRoom}>Send Message</button>

      <Chat socket={socket} username={username} room={room}/>
      {chat.map((chats) => {
        return(
          <div key={chats.id}>
            <p>Name: {chats.nameCreated}</p>
            <p>Room: {chats.roomCreated}</p>
          </div>
        )
      })}
      <Router>
      <CreateNavbar />
        <Routes>
            <Route path="/auth/signup" element={<Signup />}></Route>
            <Route path="/auth/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
