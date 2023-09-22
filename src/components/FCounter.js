import { useState } from "react";


function FCounter(){
  const[counter,setCounter] = useState(0);
  const increment = ()=>{
    setCounter(
      counter + 1
    )};
  const decrement = ()=>{
    setCounter(
      counter - 1
    )};
return (<div><p>You tapped {counter} times</p><button onClick={()=>increment()}>Tap</button> <button onClick={()=>decrement()}>Untap</button></div>)
}
export default FCounter;