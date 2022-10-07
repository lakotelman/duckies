import { useContext } from "react";
import DuckieContext from "../../contexts/duckie-context";

const WholePreview = (props) => {
  const ctx = useContext(DuckieContext);

  return (
    <div className="relative">
      <img
        id="base-duckie"
        className=" max-w-xl z-[-1] rounded-xl"
        src="duckie_bits/Duckie.jpg"
      />
      <img
        id="eyes"
        className=" max-w-xl top-0 absolute z-10 rounded-xl"
        src={ctx.eyes}
      />
      <img
        id="head"
        className=" max-w-xl top-0 absolute z-10 rounded-xl"
        src={ctx.head}
      />
    </div>
  );
};

export default WholePreview;
