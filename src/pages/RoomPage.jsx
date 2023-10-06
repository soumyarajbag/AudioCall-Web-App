import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { useParams } from "react-router-dom";

const RoomPage = ({ name }) => {
  const { roomId } = useParams();
  const meeting = async (element) => {
    const appID = 1770755684;
    const serverSecret = "12cc57bcd9dd900b5b3b7e4068994c10";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      name
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
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
