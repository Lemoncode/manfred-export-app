import React from "react";


export interface UserChoiceContextModel {
  userChoice : string;
  setUserChoice: (userChoice:string)=>void
}

export const UserChoiceContext = React.createContext<UserChoiceContextModel>({userChoice:"", setUserChoice: (userChoice:string)=>{}
});
