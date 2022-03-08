import { Outlet } from "react-router";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      Index Page
      <Outlet />
    </div>
  );
}
