import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progressbar__container">
      <div className="progress__bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
