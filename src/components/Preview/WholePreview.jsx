import { useContext } from "react";
import DuckieContext from "../../contexts/duckie-context";

const WholePreview = (props) => {
  const ctx = useContext(DuckieContext);


  return (
    <>
    <div id="capture" className="relative">
      <img
        id="base-duckie"
        className=" max-w-[100%] md:max-w-lg z-[-1] rounded-xl"
        src="duckie_bits/Duckie.jpg"
      />
      <img
        id="eyes"
        className=" max-w-[100%] md:max-w-lg top-0 absolute z-8 rounded-xl"
        src={ctx.eyes}
      />
      <img
        id="head"
        className="max-w-[100%] md:max-w-lg top-0 absolute z-8 rounded-xl"
        src={ctx.head}
      />
      <img
        id="face"
        className="max-w-[100%] md:max-w-lg top-0 absolute z-7 rounded-xl"
        src={ctx.face}
      />
      <img
        id="mouth"
        className=" sm:max-w-[100%] md:max-w-lg top-0 absolute z-8 rounded-xl"
        src={ctx.mouth}
      />
    </div></>
  );
};

export default WholePreview;
