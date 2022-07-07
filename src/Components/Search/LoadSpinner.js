import React, { useState } from "react";
import GridLoader from "react-spinners/GridLoader";

const LoadSpinner = () => {
  let [color, setColor] = useState("#5eb391");
  const arr24 = [...Array(24).keys()];
  const arr7 = [...Array(7).keys()];
  return (
    <div className="sweet-loading text-center mt-12 mx-48">
      {arr7.map((i) =>
        arr24.map(() => (
          <GridLoader speedMultiplier={0.3} color={color} size={9} />
        ))
      )}
    </div>
  );
};

export default LoadSpinner;
