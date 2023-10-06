import { collection, getDocs, query } from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../contexts/AuthContext";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { zp } from "../pages/RoomPage";
import QrModal from "./QrModal";

const UserTable = () => {
  const { all } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const phoneRef = useRef(null);
  const nameRef = useRef(null);
  const handleModal = (number) => {
    setSelectedNumber(number);
    setModal(true);
  };

  console.log(all);
  // const invite = () => {
  //   const targetUser = {
  //     userID: nameRef.current.textContent,
  //     userName: phoneRef.current.textContent,
  //   };
  //   const appID = 1770755684;
  //   const serverSecret = "12cc57bcd9dd900b5b3b7e4068994c10";
  //   const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
  //     appID,
  //     serverSecret,
  //     roomId,
  //     currentUser.phone,
  //     currentUser.name
  //   );
  //   zp = ZegoUIKitPrebuilt.create(kitToken);
  //   if (zp) {
  //     zp.sendCallInvitation({
  //       callees: [targetUser],
  //       callType: ZegoUIKitPrebuilt.InvitationTypeVoiceCall,
  //       timeout: 60, // Timeout duration (second). 60s by default, range from [1-600s].
  //     })
  //       .then((res) => {
  //         console.warn(res);
  //       })
  //       .catch((err) => {
  //         console.warn(err);
  //       });
  //   } else {
  //     console.log("zp is null");
  //   }
  // };

  return (
    <div className="text-white   py-20 gap-8    flex justify-center items-center flex-col">
      <h1 className="bg-violet-500 w-[700px] border-white  border-2  rounded-xl text-center text-2xl font-semibold py-2 ">
        Contacts
      </h1>
      <ul className="flex flex-col items-center gap-5">
        {all &&
          all.map((user, index) => {
            return (
              <div
                key={index}
                className="flex flex-row  justify-evenly gap-20 text-xl font-semibold tracking-wider  "
              >
                <h1 ref={nameRef}>{user.name}</h1>
                <h1 ref={phoneRef}>{user.phone}</h1>

                <button
                  onClick={() => handleModal(user.phone)}
                  className="bg-red-700 rounded-lg px-3 py-2 text-white hover:bg-red-600 transition-colors duration-500"
                >
                  Call Now
                </button>
              </div>
            );
          })}
      </ul>
      {modal && selectedNumber ? <QrModal number={selectedNumber} /> : null}
    </div>
  );
};

export default UserTable;
{
  /* <ul>
        {all &&
          all.map((user, index) => {
            return (
              <div
                key={index}
                className="flex flex-row items-center justify-center gap-20 text-black"
              >
                <h1 ref={nameRef}>{user.name}</h1>
                <h1 ref={phoneRef}>{user.phone}</h1>
                <button>Call Now</button>
              </div>
            );
          })}
      </ul> */
}
