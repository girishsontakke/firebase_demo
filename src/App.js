import React from "react";
import "./App.css";
import UploadForm from "./components/UploadForm.component";
import ImageGrid from "./components/ImageGrid.component";

function App() {
  return (
    <>
      <div className="App">
        <UploadForm />
      </div>
      <ImageGrid />
    </>
  );
}

export default App;
