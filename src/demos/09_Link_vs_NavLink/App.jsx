import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function Home() {
  return <h1>🏠 Home Page</h1>;
}

function About() {
  return <h1>ℹ️ About Page</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <h2>React Router: Link vs NavLink</h2>

        {/* Navigation */}
        <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>

          {/* Link */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* NavLink with active styling 
            isActive → current route matches /about → red & bold (mostly used isActive only)
            isPending → route is loading → orange
            Else → black
          */}
          <NavLink
            to="/"
            style={({ isActive ,isPending}) => ({
              color: isActive ? "red" : isPending ? "green" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Active Home
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive ,isPending}) => ({
              color: isActive ? "red" : isPending ? "green" : "black",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Active About
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
