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
      <div className="mb-5 mx-auto">
        <h3 className="text-3xl">Create Your Own Ducky Pal</h3>
        <button
          onClick={downloadDuckieHandler}
          className="bg-slate-600 p-2 rounded-box hover:bg-orange-300 hover:text-slate-800"
        >
          Save My Ducky
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
