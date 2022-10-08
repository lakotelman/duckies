import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return (
    <div
      onClick={props.hideExportHandler}
      className="fixed top-0 left-0 w-screen h-screen z-10 bg-[rgba(0,0,0,.75)]"
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className=" p-2 fixed mt-4 left-[17%] w-2/3 bg-slate-600 rounded-2xl shadow-lg z-10">
      <div className="">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop hideExportHandler={props.hideExportHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
