import { useState } from "react";
import WholeDrawer from "./components/OptionsDrawer/WholeDrawer";
import WholePreview from "./components/Preview/WholePreview";
import "./App.css";
import ExportDuckie from "./components/UI/ExportDucky";
import html2canvas from "html2canvas";

function App() {
  const [exportShown, setExportShown] = useState(false);

  const hideExportHandler = () => {
    setExportShown(false);
  };

  const downloadDuckieHandler = () => {
    setExportShown(true);
    html2canvas(document.querySelector("#capture"), {
      removeContainer: true,
    }).then((canvas) => {
      document.getElementById("duckieExport").appendChild(canvas);
    });
  };

  return (
    <>
      {exportShown && <ExportDuckie hideExportHandler={hideExportHandler} />}
      <div className="flex flex-row md:block justify-around items-center mb-5 mx-auto">
        <h3 className="md:text-3xl p-0 m-0">Create Your Own Ducky Pal</h3>
        <button
          onClick={downloadDuckieHandler}
          className="bg-slate-600 md:p-2 p-1 rounded-box hover:bg-orange-300 hover:text-slate-800"
        >
          Save!
        </button>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap align-top justify-center gap-6">
          <WholePreview />
          <WholeDrawer />
        </div>
      </div>
    </>
  );
}

export default App;
