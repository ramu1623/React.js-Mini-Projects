import React, { useState } from "react";

// --- Parent: Tabs ---
function Tabs({ children, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  // Pass state to direct children
  return React.Children.map(children, child =>
    React.cloneElement(child, { activeIndex, setActiveIndex })
  );
}

// --- Child: TabList ---
function TabList({ children, activeIndex, setActiveIndex }) {
  // Pass state to each Tab
  return React.Children.map(children, child =>
    React.cloneElement(child, { activeIndex, setActiveIndex })
  );
}

// --- Child: Tab ---
function Tab({ index, activeIndex, setActiveIndex, children }) {
  return (
    <div
      onClick={() => setActiveIndex(index)}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        borderBottom: activeIndex === index ? "2px solid blue" : "2px solid gray"
      }}
    >
      {children}
    </div>
  );
}

// --- Child: TabPanel ---
function TabPanel({ index, activeIndex, children }) {
  return activeIndex === index ? <div style={{ padding: "20px" }}>{children}</div> : null;
}

// --- App ---
export default function App() {
  return (
    <Tabs defaultIndex={0}>
      <TabList>
        <Tab index={0}>Home</Tab>
        <Tab index={1}>Profile</Tab>
        <Tab index={2}>Settings</Tab>
      </TabList>

      <TabPanel index={0}>Welcome to Home!</TabPanel>
      <TabPanel index={1}>This is your Profile.</TabPanel>
      <TabPanel index={2}>Adjust your Settings here.</TabPanel>
    </Tabs>
  );
}
