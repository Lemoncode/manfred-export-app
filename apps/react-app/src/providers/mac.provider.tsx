import React from "react";
import { MacContext } from "./mac.context";

interface Props {
  children: React.ReactNode;
}

export const MacProvider: React.FC<Props> = ({ children }) => {
  const [macData, setMacData] = React.useState("");

  return (
    <MacContext.Provider
      value={{
        macData,
        setMacData,
      }}
    >
      {children}
    </MacContext.Provider>
  );
};
