import React from "react";


export interface MacContextModel {
  macData: string;
  setMacData: (macData:string)=>void
}

export const MacContext = React.createContext<MacContextModel>({macData:"", setMacData: (macData:string)=>{}
});
