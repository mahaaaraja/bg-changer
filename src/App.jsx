import { useState } from 'react';

import './App.css'
import ButtonComponent from './assets/Components/ButtonComponent'
import InputComponent from './assets/Components/InputComponent';

function App() {

  const [backgroundColor, setBackgroundColor] = useState("white");

   const changeBackground = (color) => {
     setBackgroundColor(color);
   };

  return (
    <div
      className="vh-100 vw-100 d-flex flex-column justify-content-between"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className='ps-2'>
        <span className='logo first'>Background</span>
        <br/> 
        <span className='logo second'>Changer</span>
      </div>
      <div
        className="w-95 py-3 m-2 border border-primary d-flex flex-wrap gap-3 justify-content-center rounded-pill"
        style={{ backgroundColor: "white" }}
      >
        <ButtonComponent
          text="Red"
          buttonColor="red"
          textColor="white"
          onClick={changeBackground}
        />
        <ButtonComponent
          text="Green"
          buttonColor="green"
          textColor="white"
          onClick={changeBackground}
        />
        <ButtonComponent
          text="Blue"
          buttonColor="blue"
          textColor="white"
          onClick={changeBackground}
        />
        <ButtonComponent
          text="Olive"
          buttonColor="olive"
          textColor="white"
          onClick={changeBackground}
        />
        {/* <ButtonComponent text="Gray" buttonColor="gray" textColor="white" /> */}
        <ButtonComponent
          text="Random"
          buttonColor="white"
          textColor="black"
          className="random"
          onClick={changeBackground}
        />
        <InputComponent text="#HEX" onkeyup={changeBackground} />
        {/* <ButtonComponent text="Lavender" buttonColor="lavender" textColor="black" /> */}
        <ButtonComponent
          text="Yellow"
          buttonColor="yellow"
          textColor="black"
          onClick={changeBackground}
        />
        <ButtonComponent
          text="Pink"
          buttonColor="pink"
          textColor="black"
          onClick={changeBackground}
        />
        <ButtonComponent
          text="Purple"
          buttonColor="purple"
          textColor="white"
          onClick={changeBackground}
        />
        <ButtonComponent
          text="Black"
          buttonColor="black"
          textColor="white"
          onClick={changeBackground}
        />
        <ButtonComponent
          text="White"
          buttonColor="white"
          textColor="black"
          onClick={changeBackground}
        />
      </div>
    </div>
  );
};

export default App
