
import React,{useState,useEffect} from "react";
import './../styles/App.css';

const App = () => {
  const [sec,setSec] = useState(0);

  useEffect(()=>{
   let timerInterval =  setInterval(()=>{
      setSec(prev=>prev+1);
      console.log();
    },1000)

    return ()=>clearInterval(timerInterval);
  },[])
  return (
    <div>
        {/* Do not remove the main div */}
   
        <p>You've been on this page for {sec} seconds.</p>
    </div>
  )
}

export default App
