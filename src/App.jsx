import { useState } from "react";
import WholeDrawer from "./components/OptionsDrawer/WholeDrawer";
import WholePreview from "./components/Preview/WholePreview";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="text-3xl">This is the Duckie App</div>
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
