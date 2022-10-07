import { useState } from "react";
import WholeDrawer from "./components/OptionsDrawer/WholeDrawer";
import WholePreview from "./components/Preview/WholePreview";
import reactLogo from "./assets/react.svg";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  const downloadDuckieHandler = () => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      document.body.appendChild(canvas);
    });
  };

  return (
    <>
      <div className="mb-5 ">
        <h3 className="text-3xl">Create Your Own Ducky Pal</h3>
        <button
          onClick={downloadDuckieHandler}
          className="bg-slate-600 p-2 rounded-box hover:bg-orange-300 hover:text-slate-800"
        >
          Save My Ducky
        </button>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-row align-top justify-center gap-6">
          <WholePreview />
          <WholeDrawer />
        </div>
      </div>
    </>
  );
}

export default App;
