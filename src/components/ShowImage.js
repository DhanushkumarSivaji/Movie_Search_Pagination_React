import React from "react";

const ShowImage = ({ url }) => (
  <div className="product-img">
    <img
      src={url}
      alt="No Image Found"
      className="mb-3"
      style={{ maxHeight: "100%", maxWidth: "100%" }}
    />
  </div>
);

export default ShowImage;
