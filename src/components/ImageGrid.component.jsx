import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  return (
    <div className="image__grid">
      {docs &&
        docs.map((doc) => (
          <div className="image__wrap">
            <img src={doc.url} alt="pic" key={doc.id} />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
