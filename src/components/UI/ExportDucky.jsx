import Modal from "./Modal";
import styles from "./canvasstyles.module.css";

const ExportDuckie = (props) => {
  const downloadDuckyHandler = () => {
    const duckyImg = document.getElementById("duckieExport").firstChild;
    duckyImg.toBlob((blob) => {
      const newImg = document.createElement("img");
      const url = URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.target = "_blank";
      anchor.download = "duckypal.png";
      anchor.click();
    });
    newImg.onload = () => {
      URL.revokeObjectURL(url);
    };
  };

  return (
    <Modal hideExportHandler={props.hideExportHandler}>
      <h3 className="text-3xl text-center mt-3">Your Ducky</h3>
      <div className="flex flex-wrap md:flex-nowrap md:flex-row justify-center gap-2 my-3">
        <div className=" rounded-box bg-white p-4 place-content-center">
          <div className="max-h-[100%]" id="duckieExport"></div>
        </div>
        <div className=" flex flex-col justify-center">
          <button
            onClick={downloadDuckyHandler}
            className="bg-orange-300 text-slate-800 text-xl my-2 font-bold p-4 rounded-box w-full hover:bg-orange-200"
          >
            Download Ducky
          </button>
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
