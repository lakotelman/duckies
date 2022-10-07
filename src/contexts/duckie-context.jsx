import React from "react";
import { useState } from "react";

const DuckieContext = React.createContext({
  eyes: "",
  eyeOptions: [],
  eyeChangeHandler: (userInput) => {},
  head: "",
  headOptions: [],
  headChangeHandler: (userInput) => {},
  face: "",
  faceOptions: [],
  faceChangeHandler: (userInput) => {},
  mouth: "",
  mouthOptions: [],
  mouthChangeHandler: () => {},
});

export const DuckieContextProvider = (props) => {
  const [eyes, setEyes] = useState("duckie_bits/Eyes/EyesClosed.png");
  const [head, setHead] = useState("");
  const [face, setFace] = useState("");
  const [mouth, setMouth] = useState("");

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

  const faceOptions = [
    "duckie_bits/FaceAccessories/EyePatch.png",
    "duckie_bits/FaceAccessories/HeartGlasses.png",
    "duckie_bits/FaceAccessories/Sunnies.png",
    "duckie_bits/FaceAccessories/Glasses.png",
    "duckie_bits/FaceAccessories/Monocle.png",
  ];

  const mouthOptions = [
    "duckie_bits/Mouth/Quack.png",
    "duckie_bits/Mouth/Relaxed.png",
  ];

  const mouthChangeHandler = (userInput) => {
    setMouth(userInput);
  };

  const eyeChangeHandler = (userInput) => {
    setEyes(userInput);
  };

  const headChangeHandler = (userInput) => {
    setHead(userInput);
  };

  const faceChangeHandler = (userInput) => {
    setFace(userInput);
  };

  return (
    <DuckieContext.Provider
      value={{
        eyes: eyes,
        head: head,
        face: face,
        mouth: mouth,
        eyeChangeHandler,
        headChangeHandler,
        faceChangeHandler,
        mouthChangeHandler,
        eyeOptions: eyeOptions,
        headOptions: headOptions,
        faceOptions: faceOptions,
        mouthOptions: mouthOptions,
      }}
    >
      {props.children}
    </DuckieContext.Provider>
  );
};

export default DuckieContext;
