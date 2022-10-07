import React from "react";
import { useState } from "react";

const DuckieContext = React.createContext({
  eyes: "",
  eyeOptions: [],
  eyeChangeHandler: (userInput) => {},
  head: "",
  headOptions: [],
  headChangeHandler: (userInput) => {},
  glasses: "",
});

export const DuckieContextProvider = (props) => {
  const [eyes, setEyes] = useState("duckie_bits/Eyes/EyesClosed.png");
  const [head, setHead] = useState("");
  const [glasses, setGlasses] = useState("");

  const eyeOptions = [
    "duckie_bits/Eyes/EyesClosed.png",
    "duckie_bits/Eyes/EyesOpen.png",
    "duckie_bits/Eyes/EyesAngry.png",
  ];

  const headOptions = [
    "duckie_bits/Head/CowboyHat.png",
    "duckie_bits/Head/CurlieCue.png",
    "duckie_bits/Head/Horns.png",
    "duckie_bits/Head/PirateHat.png",
    "duckie_bits/Head/WitchHat.png",
    "duckie_bits/Head/Crown.png",
    "duckie_bits/Head/Halo.png",
    "duckie_bits/Head/PartyHat.png",
    "duckie_bits/Head/TopHat.png",
  ];

  const eyeChangeHandler = (userInput) => {
    setEyes(userInput);
  };

  const headChangeHandler = (userInput) => {
    setHead(userInput);
  };

  return (
    <DuckieContext.Provider
      value={{
        eyes: eyes,
        head: head,
        glasses: glasses,
        eyeChangeHandler,
        headChangeHandler,
        eyeOptions: eyeOptions,
        headOptions: headOptions,
      }}
    >
      {props.children}
    </DuckieContext.Provider>
  );
};

export default DuckieContext;
