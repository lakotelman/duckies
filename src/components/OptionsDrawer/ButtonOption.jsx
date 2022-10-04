import DuckieContext from "../../contexts/duckie-context";
import { useContext } from "react";

const ButtonOption = (props) => {
  const ctx = useContext(DuckieContext);
  return (
    <button onClick={() => props.changeHandler(props.imagesrc)}>
      <img
        className="h-16 rounded-box hover:bg-orange-300"
        src={props.imagesrc}
      />
    </button>
  );
};

export default ButtonOption;
