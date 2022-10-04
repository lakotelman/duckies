import { useContext } from "react";
import ButtonOption from "./ButtonOption";
import DuckieContext from "../../contexts/duckie-context";


const WholeDrawer = (props) => {
    const ctx = useContext(DuckieContext)
  return (
    <div className="collapse collapse-arrow bg-slate-500 h-min rounded-box w-1/3">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">Eyes</div>
      <div className="collapse-content grid grid-flow-col">
        {ctx.eyeOptions.map((option) => <ButtonOption changeHandler={ctx.eyeChangeHandler} imagesrc={option} key={option}/>
    )}
      </div>
    </div>
  );
};

export default WholeDrawer;
