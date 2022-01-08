import React, { useEffect, useState } from "react";

function MouseTracker() {
  const [coords, setCoords] = useState({ mx: 0, my: 0 });

  const trackCoord = (e: MouseEvent) => {
    setCoords({ mx: e.clientX, my: e.clientY });
  };

  useEffect(() => {
    // add listener to mouse move at first render: see [] as second params
    document.addEventListener("mousemove", trackCoord);
    return () => {
      // clear listener whtn amount
      document.removeEventListener("mousemove", trackCoord);
    };
  }, []);

  return (
    <div data-testid="mouse-tracker">
      <p data-testid="coord-feedback">
        <span>X: </span>
        <span>{coords.mx}</span>
        <span>&nbsp;</span>
        <span>Y: </span>
        <span>{coords.my}</span>
      </p>
    </div>
  );
}

export default MouseTracker;
