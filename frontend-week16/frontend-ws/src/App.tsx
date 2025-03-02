import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage() {
    if(!socket){
      return;
    }
    const message = inputRef.current.value;
    socket.send(message); 
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (event) => {
      alert(event.data);
    };
    // ws.onerror = () => {};
    // ws.close = () => {};
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Message..."></input>
      <button onClick={sendMessage}></button>
    </div>
  );
}

export default App;
