import { useState } from "react";
import "./App.css";
import S1 from "./Components/S1";
import S2 from "./Components/S2";
import S3 from "./Components/S3";

function App() {
  const [isOneClicked, setIsOneClicked] = useState(false);
  const [isThreeClicked, setIsThreeClicked] = useState(false);
  const onButtonClick = (buttonNum) => {
    console.log(buttonNum);
    if (buttonNum === 1) {
      setIsOneClicked((prev) => !prev);
    }
    if (buttonNum === 3) {
      setIsThreeClicked((prev) => !prev);
    }
  };
  return (
    <div className="App">
      <h1>App.js</h1>
      <S1 clicked={isOneClicked} />
      <S3 clicked={isThreeClicked} />
      <S2 handleClick={onButtonClick} />
    </div>
  );
}

export default App;
