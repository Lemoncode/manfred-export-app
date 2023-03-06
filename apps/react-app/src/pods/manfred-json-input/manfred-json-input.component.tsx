import React, {useState} from 'react';


export const ManfredJsonInput: React.FC = () => {
  const [textval, setTextVal] = useState("");
  
  function handleClick(){
    if(textval.length>0){
      alert("here will go the export to the word");
    } else{
      alert("No content");
    }
  }
  return (
    <>
  <h1>Hello from ManfredJsonInputComponent</h1>
  <textarea value={textval} onChange={(e) => setTextVal(e.target.value)}></textarea>
  <br /><br />
  <button onClick={handleClick}>Click me</button>
  </>
  )
};
