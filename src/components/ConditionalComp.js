import { useState } from "react";
import Counter from "./Counter";
import FCounter from "./FCounter";

export default function ConditionalComp() {
  const [display,setDisplay] = useState(false);
  const see = ()=>{
    setDisplay(true);
  }
  const unSee = ()=>{
    setDisplay(false);
  }
  let output;
  if(display){
    output = <div>
    <p>This is a conditional component</p>
    <FCounter/>
    <button onClick={()=>unSee()}>Unsee</button>
    
  </div>
  }
  else{
   output = <div>
   <Counter/>
   <button onClick={()=>see()}>See</button>
 </div>
  }
  return output;
}
