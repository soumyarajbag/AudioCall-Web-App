import React, { useContext } from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import QRCode from "react-qr-code";

const HomePage = ({ name1, setName }) => {
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
      <div className="  flex gap-10 py-5 justify-center items-center flex-col">
        <h1 className="font-semibold text-2xl  tracking-widest ">
          Join Any Call Now
        </h1>

        {currentUser && (
          <div className="border-2 rounded-xl w-[700px] flex items-center justify-center gap-20 py-10">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-10"
            >
              <div className="flex flex-col ">
                <label htmlFor="" className="text-lg font-semibold">
                  UserName
                </label>
                <input
                  type="text"
                  value={currentUser.name}
                  placeholder="Enter your name"
                  className="text-white bg-transparent  border-2 rounded-lg border-blue-400   placeholder:text-white pl-10 pr-2 font-semibold 2xl:h-14 2xl:w-[35vh] 2xl:text-xl min-[360px]:h-10 min-[360px]:w-[35vh] min-[390px]:w-[30vh] min-[400px]:w-[32vh] min-[500px]:w-[43vh] min-[600px]:w-[27vh] min-[600px]:pl-12 min-[700px]:h-16 min-[700px]:w-[30vh] min-[800px]:w-[36vh] min-[800px]:text-2xl min-[900px]:pl-14 min-[900px]:w-[38vh] lg:h-8 lg:text-lg  min-[1080px]:text-2xl min-[1080px]:w-[26vh]  min-[1080px]:h-16 xl:w-[40vh]"
                />
              </div>

              <div className="flex flex-col ">
                <label htmlFor="" className="text-lg font-semibold">
                  Room ID
                </label>
                <input
                  type="text"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  placeholder="Enter Room ID"
                  className="text-white bg-transparent  border-2 rounded-lg border-blue-400   placeholder:text-white pl-10 pr-2 font-semibold 2xl:h-14 2xl:w-[35vh] 2xl:text-xl min-[360px]:h-10 min-[360px]:w-[35vh] min-[390px]:w-[30vh] min-[400px]:w-[32vh] min-[500px]:w-[43vh] min-[600px]:w-[27vh] min-[600px]:pl-12 min-[700px]:h-16 min-[700px]:w-[30vh] min-[800px]:w-[36vh] min-[800px]:text-2xl min-[900px]:pl-14 min-[900px]:w-[38vh] lg:h-8 lg:text-lg  min-[1080px]:text-2xl min-[1080px]:w-[26vh]  min-[1080px]:h-16 xl:w-[40vh]"
                />
              </div>

              <button
                type="submit"
                className="bg-red-700 font-bold tracking-widest rounded-lg px-3 py-2 text-white hover:bg-red-600 transition-colors duration-500"
              >
                Join Now
              </button>
            </form>
            <div className="flex flex-col items-center gap-8">
              <QRCode
                size={256}
                value={currentUser.phone}
                className="w-[200px] h-[200px]"
              />
              <h1 className="font-semibold text-xl">{currentUser.phone}</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;

// currentUser &&
//   <div>

//
//     <QRCode
//       size={256}
//       value={currentUser.phone}
//       className="w-[200px] h-[200px]"
//     />
//   </div>
// )}
