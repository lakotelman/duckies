import Modal from "./Modal";
import styles from "./canvasstyles.module.css";

const ExportDuckie = (props) => {
  return (
    <Modal hideExportHandler={props.hideExportHandler}>
      <h3 className="text-3xl text-center mt-3">Your Ducky</h3>
      <div className="flex flex-wrap md:flex-nowrap md:flex-row justify-center gap-2 my-3">
        <div className=" rounded-box bg-white p-4 place-content-center">
          <div className="max-h-[100%]" id="duckieExport"></div>
        </div>
        <div className=" flex flex-col justify-center">
          {/* <button className="bg-orange-300 text-slate-800 text-xl my-2 font-bold p-4 rounded-box w-full hover:bg-orange-200">
            Download Image
          </button> */}
          <p>
            Right click the image and choose "Save As" to download your new
            friend.
          </p>
          <button
            onClick={props.hideExportHandler}
            className="bg-orange-300 text-slate-800 text-xl my-2 font-bold p-4 rounded-box w-full hover:bg-orange-200"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default ExportDuckie;
