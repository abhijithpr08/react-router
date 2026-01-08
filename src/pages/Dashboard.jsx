import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="settings">Settings</Link>
      <Outlet />
    </div>
  );
}
