import React from "react";
import { UserChoiceContext } from "./user-choice.context";

interface Props {
  children: React.ReactNode;
}

export const UserChoiceProvider: React.FC<Props> = ({ children }) => {
  const [userChoice, setUserChoice] = React.useState("");

  return (
    <UserChoiceContext.Provider
      value={{
        userChoice,
        setUserChoice,
      }}
    >
      {children}
    </UserChoiceContext.Provider>
  );
};
