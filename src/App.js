import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage name={name} setName={setName} />} />
        <Route path="/room/:roomId" element={<RoomPage name={name} />} />
      </Routes>
    </div>
  );
}

export default App;
