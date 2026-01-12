import { useState } from "react";
export default function App() {
  const [value, setValue] = useState(0);
  const [initial, setInitial] = useState(0);

  console.log("render");

  function setter() {
    setValue(value + 1);
    setInitial(initial + 1);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={setter}>click</button>
    </div>
  );
}
