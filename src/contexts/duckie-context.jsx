import React from "react";
import { useState } from "react";

const DuckieContext = React.createContext({
  eyes: "",
  eyeOptions: [],
  eyeChangeHandler: (userInput) => {},
  hat: "",
  glasses: "",
});

export const DuckieContextProvider = (props) => {
  const [eyes, setEyes] = useState("duckie_bits/Eyes/EyesClosed.png");
  const [hat, setHat] = useState("");
  const [glasses, setGlasses] = useState("");

  const eyeOptions = ["duckie_bits/Eyes/EyesClosed.png", "duckie_bits/Eyes/EyesOpen.png"]

  const eyeChangeHandler = (userInput) => {
    setEyes(userInput);
  };

  return (
    <DuckieContext.Provider
      value={{ eyes: eyes, hat: hat, glasses: glasses, eyeChangeHandler, eyeOptions: eyeOptions }}
    >
      {props.children}
    </DuckieContext.Provider>
  );
};

export default DuckieContext;
