import React from "react";

// 1️⃣ Generic (Base) component
function Button({ text, bgColor, onClick }) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: "white",
        padding: "10px 20px",
        margin: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <h2>Specialization using Props</h2>

      {/* 2️⃣ Specialized versions using props */}
      <Button
        text="Primary Button"
        bgColor="blue"
        onClick={() => alert("Primary clicked")}
      />

      <Button
        text="Danger Button"
        bgColor="red"
        onClick={() => alert("Danger clicked")}
      />
    </div>
  );
}
