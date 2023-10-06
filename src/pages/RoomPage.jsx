import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React, { useContext, useEffect, useRef } from "react";
import { ZIM } from "zego-zim-web";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

let zp = null; // Define zp variable outside the component

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
    zp.addPlugins({ ZIM });
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

  return (
    <div>
      <div ref={meeting} className="video" />
    </div>
  );
};

export default RoomPage;

export { zp }; // Export zp variable
