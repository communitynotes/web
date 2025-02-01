import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const signIn = async () => {
    const deviceCode = await fetch("https://github.com/login/device/code", {
      method: "POST",
      body: JSON.stringify({ client_id: "Ov23ligyxToMO0dd0mdK" }),
    }).then((r) => r.json());
    console.log(deviceCode);
  };

  return (
    <>
      <button onClick={signIn}>Sign In</button>
    </>
  );
}

export default App;
