import React from "react";

import { createDefaultUserChoiceModel } from "@/pods/manfred-json-input/manfred-json-input.vm";
import { UserChoiceContext} from "./user-choice.context";

interface Props {
  children: React.ReactNode;
}

export const UserChoiceProvider: React.FC<Props> = ({ children }) => {
  const [userChoice, setUserChoice] = React.useState(createDefaultUserChoiceModel());

  return (
    <UserChoiceContext.Provider
      value={{
        userChoice,
        setUserChoice
      }}
    >
      {children}
    </UserChoiceContext.Provider>
  );
};
