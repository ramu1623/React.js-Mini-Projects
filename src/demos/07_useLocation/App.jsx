import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";

function RouteTracker() {
    const location = useLocation();

    useEffect(() => {
        console.log("Route changed:", location.pathname);
    }, [location]);

    return null; // this component renders nothing, only tracks because it is a component.
}

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
      <Link className={location.pathname === "/about" ? "active" : ""} to="/about">About</Link>
      <Link className={location.pathname === "/products" ? "active" : ""} to="/products?category=mobiles">Products</Link>
    </nav>
  );
}

function Products() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);// next to see
  /*

  we can also just track this page alone besides of tracking all pages by the RouteTracker.
  useEffect(() => {                       
    console.log("Route changed:", location.pathname);
  }, [location]);

  */

  return <h2>Category: {query.get("category")}</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteTracker /> {/* Always mounted → Tracks initial + every route change */}
      <Navbar />

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}
