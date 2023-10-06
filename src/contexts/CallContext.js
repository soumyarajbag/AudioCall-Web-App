// import { ZIM } from "zego-zim-web";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// import { useContext } from "react";
// import { AuthContext } from "./AuthContext";
// import { useState } from "react";
// import { createContext } from "react";

// export const CallContext = createContext();

// export const CallContextProvider = ({ children }) => {
//   const { currentUser } = useContext(AuthContext);
//   const [zp, setZp] = useState(null);

//   const invite = (userID, userName) => {
//     if (zp) {
//       zp.sendCallInvitation({
//         callees: [{ userID, userName }],
//         callType: ZegoUIKitPrebuilt.InvitationTypeVoiceCall,
//         timeout: 60, // Timeout duration (second). 60s by default, range from [1-600s].
//       })
//         .then((res) => {
//           console.warn(res);
//         })
//         .catch((err) => {
//           console.warn(err);
//         });
//     } else {
//       console.log("zp is null");
//     }
//   };
//   return (
//     <CallContext.Provider value={{ zp, setZp, invite }}>
//       {children}
//     </CallContext.Provider>
//   );
// };
