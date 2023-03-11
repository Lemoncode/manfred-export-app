import React, { SetStateAction } from "react";

export interface UserChoiceModel {
  manfredJsonContent: string;
}

export interface UserChoiceContextModel {
  // userChoice : UserChoiceModel; //ChatGPT me dice que aquí debería ser SetStateAction<<UserChoiceModel> y tiene razón, ¿por qué?
  userChoice : SetStateAction<UserChoiceModel>;
  setUserChoice : (userChoice: UserChoiceModel) => void;
}

export const UserChoiceContext = React.createContext<UserChoiceContextModel>({userChoice:{manfredJsonContent:""}, setUserChoice: (userChoice)=>{}
});
