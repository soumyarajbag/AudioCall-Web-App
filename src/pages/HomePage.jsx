import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const HomePage = ({ name, setName }) => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomId}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Enter your Room"
        />
        <button type="submit">Join Now</button>
      </form>
    </div>
  );
};

export default HomePage;
