import React from 'react';

import { createDefaultUserChoiceModel } from '@/pods/home/home.vm';
import { UserChoiceContext, UserChoiceContextModel } from './user-choice.context';

interface Props {
  children: React.ReactNode;
}

export const UserChoiceProvider: React.FC<Props> = ({ children }) => {
  const [userChoice, setUserChoice] = React.useState(createDefaultUserChoiceModel());

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

export const useUserChoiceContext = (): UserChoiceContextModel => React.useContext(UserChoiceContext);
