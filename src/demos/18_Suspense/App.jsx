import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link
} from "react-router-dom";

/* Lazy loaded pages */
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Dashboard = lazy(() => import("./Dashboard"));
const Profile = lazy(() => import("./Profile"));

/* Layout component */
function Layout() {
  return (
    <div style={{ padding: "20px" }}>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <hr />
      <Outlet /> {/* renders child routes */}
    </div>
  );
}

/* Router configuration with children */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // default page
        element: (
          <Suspense fallback={<h2>Loading Home...</h2>}>
            <Home />
          </Suspense>
        )
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<h2>Loading About...</h2>}>
            <About />
          </Suspense>
        )
      },
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<h2>Loading Dashboard...</h2>}>
            <Dashboard />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: (
              <Suspense fallback={<h2>Loading Profile...</h2>}>
                <Profile />
              </Suspense>
            )
          }
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
