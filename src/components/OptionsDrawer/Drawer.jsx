import ButtonOption from "./ButtonOption";
const Drawer = (props) => {
  
  return (
    <div className="mb-4 collapse collapse-arrow bg-slate-500 h-min rounded-box ">
      <input type="checkbox"/>
      <div className="collapse-title text-xl font-medium">{props.title}</div>
      <div className="collapse-content grid grid-cols-5">
        {props.optionsList.map((option) => (
          <ButtonOption
            changeHandler={props.changeHandler}
            imagesrc={option}
            key={option}
          />
        ))}
        <button
          onClick={() => props.changeHandler("duckie_bits/None.png")}
          className="h-16 rounded-box hover:bg-orange-300 hover:text-black"
        >
          None
        </button>
      </div>
    </div>
  );
};

export default Drawer;
