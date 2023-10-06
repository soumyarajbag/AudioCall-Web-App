import { collection, getDocs, query } from "firebase/firestore";
import React, { useContext, useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import { ZIM } from "zego-zim-web";
import { AuthContext } from "../contexts/AuthContext";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

import QrModal from "./QrModal";
// import { CallContext } from "../contexts/CallContext";

const UserTable = () => {
  const { all, currentUser } = useContext(AuthContext);
  // const { invite, zp } = useContext(CallContext);
  const [modal, setModal] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const phoneRef = useRef(null);
  const nameRef = useRef(null);
  const handleModal = (number) => {
    setSelectedNumber(number);
    setModal(true);
  };

  console.log(all);

  return (
    <div className="text-white   py-20 gap-8    flex justify-center items-center flex-col">
      <h1 className="bg-violet-500 w-[300px] xl:w-[700px] border-white  border-2  rounded-xl text-center text-2xl font-semibold py-2 ">
        Contacts
      </h1>
      <ul className="flex flex-col w-[300px] xl:w-[700px] items-center gap-5">
        {all &&
          all.map((user, index) => {
            return (
              <div
                key={index}
                className="flex flex-row flex-wrap justify-evenly gap-10 border-b pb-5 xl:border-0 xl:gap-20 text-xl font-semibold tracking-wider  "
              >
                <h1 ref={nameRef}>{user.name}</h1>
                <h1 ref={phoneRef}>{user.phone}</h1>

                <button
                  onClick={
                    () => handleModal(user.phone)
                    // invite(
                    //   nameRef.current.innerText,
                    //   phoneRef.current.innerText
                    // )
                  }
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
