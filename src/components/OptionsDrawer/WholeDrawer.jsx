import { useContext } from "react";
import ButtonOption from "./ButtonOption";
import Drawer from "./Drawer";
import DuckieContext from "../../contexts/duckie-context";

const WholeDrawer = (props) => {
  const ctx = useContext(DuckieContext);
  return (
    <div>
      <Drawer
        title={"Eyes"}
        optionsList={ctx.eyeOptions}
        changeHandler={ctx.eyeChangeHandler}
      />
      <Drawer
        title={"Head"}
        optionsList={ctx.headOptions}
        changeHandler={ctx.headChangeHandler}
      />
      <Drawer
        title={"Face"}
        optionsList={ctx.faceOptions}
        changeHandler={ctx.faceChangeHandler}
      />
      <Drawer
        title={"Mouth"}
        optionsList={ctx.mouthOptions}
        changeHandler={ctx.mouthChangeHandler}
      />
    </div>
  );
};

export default WholeDrawer;
