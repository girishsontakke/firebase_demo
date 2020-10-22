import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar.component";
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const allowedType = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && allowedType.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("please select either .jpeg or .png file");
    }
  };
  return (
    <div>
      <form>
        <input type="file" onChange={changeHandler} className="file__input" />
      </form>
      {error && <div className="error">{error}</div>}
      {file && <div className="filename">{file.name}</div>}
      {file && <ProgressBar file={file} setFile={setFile} />}
    </div>
  );
};

export default UploadForm;
