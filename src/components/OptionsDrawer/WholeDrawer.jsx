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
    </div>
  );
};

export default WholeDrawer;
