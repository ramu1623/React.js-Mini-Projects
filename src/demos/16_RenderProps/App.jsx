import React, { useState } from "react";

// Logic component
function MouseTracker({ render }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleMouseMove(e) {
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    }

    return (
        <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
            {render(position)}
            {/* it calls the function and passes the parameter */}
        </div>
    );
}

// UI component
function DisplayMouse({ x, y }) {
    return (
        <h2>
            X = {x}, Y = {y}
        </h2>
    );
}

// App
export default function App() {
  // it receives the argument from the MouseTracker
  return( 
    <MouseTracker render={(pos) => <DisplayMouse {...pos} />} />
  );
}
