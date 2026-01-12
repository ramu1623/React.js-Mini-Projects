import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  // Mouse Events
  const handleClick = () => {
    console.log("Button Clicked");
  };

  const handleMouseEnter = () => {
    console.log("Mouse Entered Box");
  };

  const handleMouseLeave = () => {
    console.log("Mouse Left Box");
  };

  // Keyboard Events
  const handleKeyDown = (e) => {
    console.log("Key Down:", e.key);
  };

  const handleKeyUp = (e) => {
    console.log("Key Up:", e.key);
  };

  // Form & Input Events
  const handleChange = (e) => {
    setText(e.target.value);
    console.log("Input Change:", e.target.value);
  };

  const handleFocus = () => {
    console.log("Input Focused");
  };

  const handleBlur = () => {
    console.log("Input Blurred");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    console.log("Form Submitted with value:", text);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>React Events – Complete Example</h2>

      {/* Mouse Events */}
      <button onClick={handleClick}>Click Me</button>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "2px solid black",
          width: "200px",
        }}
      >
        Hover Me
      </div>

      {/* Keyboard + Form Events */}
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Type something"
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
