import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";
import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import UserTable from "./components/UserTable";

function App() {
  const [name1, setName] = useState("");
  return (
    <div className="App text-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage name={name1} setName={setName} />}
          />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/contacts" element={<UserTable />} />
          <Route path="/room/:roomId" element={<RoomPage name={name1} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
