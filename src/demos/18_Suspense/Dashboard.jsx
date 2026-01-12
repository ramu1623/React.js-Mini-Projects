import { Link, Outlet } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      <h2>Dashboard Page</h2>
      <Link to="profile">Go to Profile</Link>
      <Outlet />
    </>
  );
}