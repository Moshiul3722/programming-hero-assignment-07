"use client";

import { createContext, useState } from "react";

export const CallButtonContext = createContext();
const CallButtonContextProvider = ({ children }) => {
  const [callFriends, setCallFriends] = useState([]);

  const data = {
    callFriends,
    setCallFriends,
  };

  return (
    <CallButtonContext.Provider value={data}>
      {children}
    </CallButtonContext.Provider>
  );
};

export default CallButtonContextProvider;
