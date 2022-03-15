import { Outlet } from "remix";

// redirect back to blog page

export default function BlogEditorPage() {
  return (
    <div>
      markdown index
      <Outlet />
    </div>
  );
}
