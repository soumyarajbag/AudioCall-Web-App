import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";
import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<HomePage name={name} setName={setName} />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/room/:roomId" element={<RoomPage name={name} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
