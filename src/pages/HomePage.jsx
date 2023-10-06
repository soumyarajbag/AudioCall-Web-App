import React, { useContext, useEffect } from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import QRCode from "react-qr-code";
import UserTable from "../components/UserTable";

const HomePage = ({ name, setName }) => {
  const { currentUser } = useContext(AuthContext);

  const [roomId, setRoomId] = useState("");

  const navigate = useNavigate();
  console.log(currentUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomId}`);
  };

  return (
    <>
      <div>
        {currentUser && (
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={currentUser.name}
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
            <QRCode
              size={256}
              value={currentUser.phone}
              className="w-[200px] h-[200px]"
            />
            <UserTable />
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
