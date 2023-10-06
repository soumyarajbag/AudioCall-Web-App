import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React, { useContext, useEffect, useRef } from "react";
import { ZIM } from "zego-zim-web";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useState } from "react";

// Define zp variable outside the component
let zp = null;
const RoomPage = ({ name }) => {
  const { currentUser } = useContext(AuthContext);
  const { roomId } = useParams();

  const phone = currentUser.phone;
  const meeting = (element) => {
    const appID = 1770755684;
    const serverSecret = "12cc57bcd9dd900b5b3b7e4068994c10";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      phone,
      currentUser.name
    );
    zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      turnOnCameraWhenJoining: false,
      showMyCameraToggleButton: false,
      showAudioVideoSettingsButton: false,
      showScreenSharingButton: false,
      showPreJoinView: false,
    });
  };

  // const invite = (userID, userName) => {
  //   if (zp) {
  //     zp.sendCallInvitation({
  //       callees: [{ userID, userName }],
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
    <div className="">
      <div ref={meeting} className="video mt-10" />
    </div>
  );
};

export default RoomPage;
